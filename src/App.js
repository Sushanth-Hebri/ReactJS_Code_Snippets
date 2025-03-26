import React, {useEffect, useState} from "react"; //importing React and Hooks
import Card from "./components/Card"; //importing card component

const App = ()=>{
  const [data, setData]= useState([]); //State to store fetched API  data (initially an empty array)
//useEffect runs when the component mounts
  useEffect(()=>{
//now fetching a API data mock data
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json()) //converting the response to json
  .then((json) => setData(json.slice(0,10))) //storing only 6 posts in state
  .catch((error) => console.log("error fetching data:",error));
  },[]) //The empty dependency array ensures the effect runs only once after the first render

  return(
    <div className="app">
      <h1>API data in Card component</h1>
      <div className="card-container">
        {data.map((item) =>(
          <Card 
            key={item.id}
            title={item.title}
            description={item.body}
            image={`https://picsum.photos/150?random=${item.id}`}
          />
        ))}
      </div>
    </div>
  )
}
export default App;