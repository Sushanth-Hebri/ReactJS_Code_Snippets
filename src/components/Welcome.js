import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const {name, charecter} =this.props
        return <h1>Welcome {name} and {charecter} </h1>
    }
}

export default Welcome