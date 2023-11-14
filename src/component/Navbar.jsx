import { Link } from "react-router-dom";

export default function Navbar({ title, name = "" }) {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <p className="navbar__title">{title || "Adil"}</p>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to={"/"} className="navbar__item-link">Artikels list</Link>
          </li>
          <li className="navbar__item">
            <Link to={"/create_article"} className="navbar__item-link">
            Create new artikle
            </Link></li>
          <li className="navbar__item">
            <Link to={"/about"} className="navbar__item-link">About us</Link>
          </li>
          <li className="navbar__item">{name}</li>
        </ul>
      </div>
    </div>
  );
}
