import React, { useEffect, useState } from "react"; //importing React and Hooks
import Card from "../components/Card"; //importing card component
import { useInView } from "react-intersection-observer";
import Skeletoncard from "../components/SkeletonCard";

const SkeletonPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] =useState(true);
  const [page, setPage] =useState(1);

  const {ref, inView} = useInView();
  
  const fetchData = async() =>{
    setLoading(true);
    try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=6`
      );
      const json = await response.json();
      //add random image for each post
      const updatedData = json.map((item)=>({
        ...item,
        image:`https://picsum.photos/300/200?random=${item.id}`, 
      }));
      setData((prevData) =>[...prevData, ...updatedData]);
    }
    catch (error) {
      console.log("Error fetching data:", error);
    }
    setLoading(false);
  };
  useEffect(()=>{
    fetchData();
  },[page]);

  useEffect(()=>{
    if(inView){
      setPage((prevPage)=>prevPage +1);
    }
  },[inView]);

  return (
    <div className="app">
      <h1>Infinite Scroll with skeleton loading</h1>
      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.body}
            image={item.image}
          />
        ))}
        {loading &&(
          <>
            <Skeletoncard/>
            <Skeletoncard/>
            <Skeletoncard/>
            <Skeletoncard/>
            <Skeletoncard/>
          </>
        )}
        <div ref={ref} style={{height:"20px"}}></div>
      </div>
    </div>
  );
};
export default SkeletonPage;
