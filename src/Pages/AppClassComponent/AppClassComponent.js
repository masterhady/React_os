import React from "react";
import MyButton from "../../Components/MyButton";
import MyTitle from "../../Components/MyTitle";
import "./AppClassComponent.css";
import { Alert, Button, Popover } from "react-bootstrap";
import { connect } from "react-redux";
import { changeLanguage } from "../../Redux/Actions/LangAction";
import { changeTheme } from "../../Redux/Actions/ThemeAction";

class AppClassComponent extends React.Component{

    // var hello = "ahemd";
    constructor(props){
        console.log(props)
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
                    <button onClick={() => this.props.changeTheme(this.props.newTheme == "light" ? "Dark" : "light")}> Change Theme  </button> 

                    <button onClick={() => this.props.changeLanguage(this.props.newLang == "AR" ? "EN" : "AR")}> Change Lang From Class </button> 
                    <h1> My Lang is: {this.props.newLang} </h1>
                    <h1> My Theme is: {this.props.newTheme} </h1>

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

// export default AppClassComponent;

const mapStateToProps = (state) => {
    return {
        newLang : state.myLangRed.lang,
        newTheme: state.myThemeRed.theme
    }
}

export default connect(mapStateToProps, {
    // Action 
    changeLanguage,
    changeTheme
})(AppClassComponent)