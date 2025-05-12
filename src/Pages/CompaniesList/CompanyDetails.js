import { useEffect, useState } from "react";
import MyTitle from "../../Components/MyTitle";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyCard from "../../Components/MyCard";

function CompanyDetails(){

    const id = useParams().id
    console.log(id)

    const [company, setCompany] = useState({})


    useEffect(() => {
        axios.get("https://retoolapi.dev/s6eFfm/data/"+id).
        then((data) => setCompany(data.data))
        .catch((error) => console.log(error))
    },[])


    return (
        <div>
           <MyTitle head="Company Details" />
           <MyCard img={company.logo} title={company.name} desc={company.details} num={company.size} add={company.address} />
        </div>
    );
}

export default CompanyDetails;