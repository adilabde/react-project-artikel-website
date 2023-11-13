import { useEffect, useState } from "react";
import Article from "../../component/Article";
import Navbar from "../../component/Navbar";
import axios from "axios";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../component/Spinner";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "Adel Abdi",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwWgun4_3N4WLOEevJ67Fz1k9TPWau4ACOw&usqp=CAU",
      readingTime: 4,
    },
  ]);
  const url = "http://localhost:8000/articles";
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setArticles(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div className="home">
          <h1>new articles</h1>
        <div className="home__wrapper">
          {
            isLoading ?(<Spinner />):
            (<div className="home__articles">
            {articles.map((art) => (
              <Link
              className="home__link"
              to={`/article/${art.id}`}
              key={art.id}
              >
                <Article art={art} />
              </Link>
            ))}
          </div>)
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}
