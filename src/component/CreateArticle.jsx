import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
  });





  const handleChangeArticle = (e) => {
    setArticle({...article, [e.target.name]:e.target.value})

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
  console.log(article.date,article.title);
  return (
    <div>
      <Navbar />
      <div className="create_article">
        <h1 className="create_article-title">Create Article</h1>
        <InputData handleChangeArticle={handleChangeArticle} name={"title"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"date"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"author"} />
        <InputData handleChangeArticle={handleChangeArticle} name={"time to read"} />
      </div>

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
        type={name==='date'?'date':'text'}
        className="input__content-input"
      />
    </div>
  );
}
