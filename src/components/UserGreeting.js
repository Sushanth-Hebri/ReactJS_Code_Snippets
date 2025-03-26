import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true,
            user :'sushanth'
        }
    }

    render() {
      return  this.state.isLoggedIn && <div>Welcome {this.state.user}</div>
// return this.state.isLoggedIn ?(
// <div>Welcome sushanth</div>):
// (<div>Welcome guest</div>)



// let message
//         if(this.state.isLoggedIn){
//             message=<div>Welcome vishwas</div>
//         }
//         else{
//             message = <div>Welcome guest</div>
//         }
//         return(
//             <div>{message}</div>
//         )
        
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome sushanth</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Sushanth</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
