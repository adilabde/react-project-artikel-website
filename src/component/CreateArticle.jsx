import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CreateArticle() {
  const [articleTitle, setArticleTitle] = useState("");

  const handleChangeArticle = (e) => {
    setArticleTitle(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <div className="create_article">
        <h1 className="create_article-title">Create Article</h1>
        <InputData handleChangeArticle={handleChangeArticle} name={"Title"} />
      </div>

      <Footer />
    </div>
  );
}

function InputData(props) {
  return (
    <div className="input__content">
      <label className="input__content-label">{props.name} : </label>
      <input
        onChange={props.handleChangeArticle}
        type="text"
        className="input__content-input"
      />
    </div>
  );
}
