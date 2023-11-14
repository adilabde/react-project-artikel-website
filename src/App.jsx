import CreateArticle from "./component/CreateArticle";
import "./css/style.css";
import ArticlePage from "./pages/ArticlePage";
import NotFound from "./pages/NotFound";
import About from "./pages/aboutUs/About";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/article/:id" element={<ArticlePage/>}/>
        <Route path="/create_article" element={<CreateArticle/>}/>

      </Routes>
    </div>
  );
}

export default App;