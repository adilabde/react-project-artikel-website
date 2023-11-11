import { useEffect, useState } from "react";
import Article from "../../component/Article";
import Navbar from "../../component/Navbar";
import axios from "axios";
import Footer from "../../component/Footer";

export default function Home() {
  const [articles, setArticles] = useState([{
    id: 1,
    title: "Adel Abdi",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwWgun4_3N4WLOEevJ67Fz1k9TPWau4ACOw&usqp=CAU",
    readingTime: 4,
  }]);
  const url = "http://localhost:8000/articles";
  const database = async function (url) {
    const response = await fetch(url);
    const data = await response.json();
    setArticles(data.data);
  };

  // useEffect(()=>
  //   async function fetchData(){
  //     const response=await fetch(url);
  //     const data=await response.json();
  //     setArticles(data.data)
  //   }    
  // ,[])

  useEffect(()=>{
    axios.get(url).then(res=>setArticles(res.data.data)).catch(err=>console.error(err));
   
    }    
  ,[])
//   database(url);
//   console.log(articles)
  console.log(articles.map(a=>a.id))
  
  return (
    <div className="container">
      <Navbar />
      <div className="home">
        <div className="home__wrapper">
          <h1>new articles</h1>
          <div className="home__articles">
            {
                articles.map(art=><Article key={art.id} art={art}/>)
            }
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
