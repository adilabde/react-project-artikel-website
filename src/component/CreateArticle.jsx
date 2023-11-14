import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

export default function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    author: "",
    readingTime: "",
    content: "",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRik2LL2GC8-CpamK0XQfB9ecrwMHjcggyYhg&usqp=CAU",
  });

  const handleChangeArticle = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/articles", {
        id: new Date().getTime(),
        title: article.title,
        date: article.date,
        author: article.author,
        readingTime: article.readingTime,
        content: article.content,
        imgUrl: article.imgUrl,
      })
      .catch((err) => console.error(err.message));

    // switch (e.target.name) {
    //   case "title":
    //     setArticle({...article, title: e.target.value });
    //     break;
    //   case "date":
    //     setArticle({...article, date: e.target.value });
    //     break;

    //   default:
    //     // console.log(e.target.value);
    //     break;
    // }
  };
  // console.log(article);
  return (
    <div>
      <Navbar />
      <div className="create_article">
        <h1 className="create_article-title">Create Article</h1>
        <InputData handleChangeArticle={handleChangeArticle} name={"title"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"date"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"author"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"imgUrl"} />
        <InputData
          handleChangeArticle={handleChangeArticle}
          name={"time to read"}
        />
      </div>
      <ArticleText handleChangeArticle={handleChangeArticle} name={"content"} />
      <button onClick={handleSubmit} className="btn__submit">Submit</button>

      <Footer />
    </div>
  );
}

function InputData({ name, handleChangeArticle }) {
  return (
    <div className="input__content">
      <label className="input__content-label">
        {`${name.slice(0, 1).toUpperCase() + name.slice(1)}`} :{" "}
      </label>
      <input
        name={name}
        onChange={handleChangeArticle}
        type={name === "date" ? "date" : "text"}
        className="input__content-input"
      />
    </div>
  );
}

function ArticleText({ handleChangeArticle, name }) {
  return (
    <div className="article__content">
      <label htmlFor="" className="article__content-label">
        Article context
      </label>
      <textarea
        onChange={handleChangeArticle}
        name={name}
        placeholder="Enter the context of the article..."
        className="article__content-context"
      ></textarea>
    </div>
  );
}
