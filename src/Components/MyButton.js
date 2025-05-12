
import React from "react";

class MyButton extends React.Component {

    constructor(props){
        super();
        console.log(props)
    }

    render(){
        return(
            <button className={`btn btn-${this.props.btnColor}`}>
               {this.props.name}
            </button>
        )
    }


}


export default MyButton