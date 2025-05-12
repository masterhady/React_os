import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function UserForm(props){

    // console.log(props)
    const history = useHistory();



    const [name, setName] = useState("ahmed");
    const [position, setPosition] = useState("developer");

    const [errName, setErrName] = useState("");
    const [errPosition, setErrPosition] = useState("");


    const handleForm = (e) => {
        // console.log(e.target.value)
        if(e.target.name == "name"){
            setName(e.target.value)
            // setErrName(
            //   e.target.value.length === 0 ? "Name is Required" : 
            //   e.target.value.length < 3 && "Invalid Name"   
            // )
        }else{
            setPosition(e.target.value)
            setErrPosition(
              e.target.value.length === 0 ? "Position is Required" : 
              e.target.value.length < 3 && "Invalid Position"   
            )
        }

    }

    const handleSubmit = (e) => {
        // props.history.push("/")
        if(errName || errPosition){
            e.preventDefault()
        }else{
            history.push("/class") // path name
        }

    }

    return(
        <>
            <h1> User Form </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" className={`form-control ${errName? "is-invalid" : "is-valid"}`}
                value={name} 
                name="name"
                onChange={(e) => handleForm(e)}
                 />
                 <p className="text-danger"> {errName} </p>
            </div>
            <div className="mb-3">
                <label className="form-label">Position</label>
                <input type="text" className="form-control"  name="position"
                onChange={(e) => handleForm(e)}
                value={position} />
                <p className="text-danger"> {errPosition} </p>
            </div>
        <button disabled={errName || errPosition && "disabled" } type="submit" className="btn btn-primary">Submit</button>
        </form>
        
        </>
    )
}

export default UserForm;