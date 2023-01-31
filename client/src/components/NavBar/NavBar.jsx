import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import s from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={`${s.nav}`}>
      <div>
        <Link className={`${s.link}`} to="/createactivity">
          Create Activity
        </Link>
      </div>
      <div>
        <SearchBar />
      </div>
    </nav>
  );
}
