import React from "react";
import MyButton from "../../Components/MyButton";
import MyTitle from "../../Components/MyTitle";
import "./AppClassComponent.css";
import { Alert, Button, Popover } from "react-bootstrap";

class AppClassComponent extends React.Component{

    // var hello = "ahemd";
    constructor(){
        console.log("I am Contructor")
        super()
        this.state = {
            name: "ahmed",
            age: 25,
            city: "cairo",
            position: "Developer",
            address: {
                street: "Street 1",
                state: "Cairo",
                country: "Egypt"
            }
        }
    }

    ChangeInfo = () => {
        // this.state.name = "Aya"
        this.setState({
            name: "Aya",
            age: 30,
        })
    }

    componentDidMount(){
        //call API
        console.log("I am Component Did Mount")
    }

    componentDidUpdate(){
        // color chamge
        console.log("I am Component Did Update")
    }

    componentWillUnmount(){
        console.log("I am Component Will Unmount")
    }
    

        render(){
            console.log("I am Render")
            return(
                <> 
                    <MyTitle head="Login Page"/>
                    <MyTitle head="Register PAge"/>

                    <MyButton name="login" btnColor='primary'/>
                    <MyButton name = "Register" btnColor="warning" />
                    <Alert variant="danger"> Hello React </Alert>
                    <p className="alert alert-danger"> hello alert </p>
                    <h1 className="cls"> Hello I am Class Component </h1>
                    <h2> Name: {this.state.name} </h2> 
                    <h2> Age: {this.state.age} </h2> 
                    <h2> city: {this.state.city} </h2> 
                    <h2> position: {this.state.position} </h2>
                    <h2> Address: {this.state.address.street} </h2>
                    <button onClick={() => this.ChangeInfo()}> Change Info </button>
                </>

            )
        }
}

export default AppClassComponent;