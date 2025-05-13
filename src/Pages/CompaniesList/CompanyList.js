import { useEffect, useState } from "react";
import MyTitle from "../../Components/MyTitle"
import axios from "axios";
import MyCard from "../../Components/MyCard";
import { useDispatch, useSelector } from "react-redux";
import MySpinner from "../../Components/MySpinner";
import { setLoader } from "../../Redux/Actions/LoderAction";

function CompaniesList(){

    const [list, setList] = useState([])

    const myLoader = useSelector((state) => state.myLoaderRed.isLoading) // true

    const dispatch = useDispatch();

    // call API 
    useEffect(( ) => {
        dispatch(setLoader(true))
        axios.get("https://retoolapi.dev/s6eFfm/data")
            .then((data) => {
                setList(data.data) 
                dispatch(setLoader(false))
            }
            )
            .catch((error) => console.log(error))
            
        
    }, [])
    
    

    return (
        <div>
            <MyTitle head="Companies List" />

            {myLoader ? <MySpinner /> :  list.map(company => {
                    return <MyCard img={company.logo} title={company.name} desc={company.details} page={`company/${company.id}`}/>
                //   return  <li> {company.name} </li>
                })}


          

        </div>
    );
}

export default CompaniesList;