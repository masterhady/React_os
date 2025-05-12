import { useEffect, useState } from "react"
import { useHistory, useLocation, useRouteMatch,useParams } from "react-router-dom";
// import {  } from "react-router-dom/cjs/react-router-dom.min";
// import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
// import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


function AppFunctionComponent(props){

    // console.log(props)
     
    // const history  = props.history;
    // const history = useHistory();
    // console.log(history)
    

    // const location  = props.location;
    // const location = useLocation();
    // console.log(location)


    // const match  = props.match;
    // const match = useRouteMatch();
    // console.log(match.params.id)

    // const params = useParams();
    // console.log(params)

    const [name, setName] = useState("ahmed");
    const [position, setPosition] = useState("Developer") 
    const [info, setInfo] = useState({
        name: "aya",
        age: 30,
        city: "cairo",
        isAdmin: false
    })

    const changeInfo = () => {
        setInfo({
            ...info,
            name: "Mohammed"
        })
        // setName("Mohammed")
        // setPosition("Manager")
    }

    // compoent did mount -->  first loading 

    useEffect(() => {
        console.log("compoent did mount")
    },[])

    // compoent did update --> every time the component re-rendered

    useEffect(() => {
        console.log("hello did update")
    }, [name])

    useEffect(() => {
        console.log("hello did update")
    }, [info])


    // compoent will unmount --> when the component is removed from the DOM

    useEffect(() => {
        return () => {
            console.log("compoent will unmount")
        }
    },[])


    return(
        <>
            <h1> Hello Function Component </h1>
            <h1> User Info: user 1</h1>
            <h1> Name: {name} </h1>
            <h1> Position: {position} </h1>
            <h1> User Info: user 2</h1>
            <h1> Name: {info.name} </h1>
            <h1> Age: {info.age} </h1>
            <h1> City: {info.city} </h1>

            {info.isAdmin ? <button className="btn btn-primary" onClick={() => changeInfo()}> Change Info </button> : ""}

            {/* {info.isAdmin && <button className="btn btn-primary" onClick={() => changeInfo()}> Change Info </button>} */}

        
        </>
    )


}

export default AppFunctionComponent