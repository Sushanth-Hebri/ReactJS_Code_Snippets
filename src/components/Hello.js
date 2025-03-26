import React from "react";
const Hello =() =>{
   
//    return (<div classname='dummyclass>
//         <h1> Hello sushanth</h1>
//     </div>
//    )
return React.createElement('div',{id:'hello',className:'dummyclass'},React.createElement('h1',null,'Sushanth'))
}
export default Hello