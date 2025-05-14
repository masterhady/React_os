import { useEffect, useState } from "react";
import MyTitle from "../../Components/MyTitle";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyCard from "../../Components/MyCard";
import { axiosInstance } from "../../Network/axiosInstance";
import { useSelector } from "react-redux";
import MySpinner from "../../Components/MySpinner";

function CompanyDetails(){

    const id = useParams().id
    console.log(id)

    const myLoader = useSelector((state) => state.myLoaderRed.isLoading)

    const [company, setCompany] = useState({})


    useEffect(() => {
        axiosInstance.get("data/"+id).
        then((data) => setCompany(data.data))
        .catch((error) => console.log(error))
    },[])


    return (
        <div>
            <MyTitle head="Company Details" />
            {
                myLoader ? <MySpinner /> :  <MyCard img={company.logo} title={company.name} desc={company.details} num={company.size} add={company.address} />
            }

           
          
        </div>
    );
}

export default CompanyDetails;