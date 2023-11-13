import { useParams } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../component/Spinner";

export default function ArticlePage(props) {
  const [article, setArticle] = useState({});
  const params = useParams();
  const url = "http://localhost:8000/articles";
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setArticle(res.data.data.filter((art) => art.id == params.id)[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  const art = {
    id: 1,
    title: "Reacttttttttttttttttttt",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik2LL2GC8-CpamK0XQfB9ecrwMHjcggyYhg&usqp=CAU",
    readingTime: 4,
    author: "Adil Abde",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi nemo numquam corporis repudiandae exercitationem optio aliquid ab earum voluptatibus repellendus quibusdam beatae, possimus perspiciatis deleniti perferendis voluptates inventore maiores.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi nemo numquam corporis repudiandae exercitationem optio aliquid ab earum voluptatibus repellendus quibusdam beatae, possimus perspiciatis deleniti perferendis voluptates inventore maiores.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eligendi nemo numquam corporis repudiandae exercitationem optio aliquid ab earum voluptatibus repellendus quibusdam beatae, possimus perspiciatis deleniti perferendis voluptates inventore maiores.",
    data: "12.06.2023",
  };
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="articlePage__container">
          <h1 className="articlePage__title">{article.title}</h1>
          <div className="articlePage">
            <div className="articlePage__box">
              <p className="articlePage__data">{article.data}</p>
              <p className="articlePage__author"> {article.author}</p>
              <p className="articlePage__readTime">
                Time to read: {article.readingTime} min
              </p>
            </div>
            <img
              src={article.imgUrl}
              alt="articlePage_photo"
              className="articlePage__photo"
            />
            <p className="articlePage__context">{article.content}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
