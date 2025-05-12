import { useEffect, useState } from "react";
import MyTitle from "../../Components/MyTitle"
import axios from "axios";
import MyCard from "../../Components/MyCard";

function CompaniesList(){

    const [list, setList] = useState([])

    // call API 
    useEffect(( ) => {
        // call API 
        // use axios 
        axios.get("https://retoolapi.dev/s6eFfm/data")
            .then((data) => setList(data.data))
            .catch((error) => console.log(error))
            
        
    }, [])
    
    

    return (
        <div>
            <MyTitle head="Companies List" />
            {
                list.map(company => {
                    return <MyCard img={company.logo} title={company.name} desc={company.details} page={`company/${company.id}`}/>
                //   return  <li> {company.name} </li>
                })
            }


        </div>
    );
}

export default CompaniesList;