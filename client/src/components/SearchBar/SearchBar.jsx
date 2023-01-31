import { useState } from "react";
import { getAllCountry, getNameCountry } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import s from "./SearchBar.module.css";

export default function SearchBar() {
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmitName = (e) => {
    e.preventDefault();
    dispatch(getNameCountry(state));
  };

  const handleMostrarPaises = (e) => {
    e.preventDefault();
    dispatch(getAllCountry());
  };

  return (
    <form className={`${s.form}`} onSubmit={handleSubmitName}>
      <div className={`${s.group}`}>
        <svg className={`${s.icon}`} aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          onChange={handleChange}
          value={state}
          placeholder="Search"
          type="search"
          className={`${s.input}`}
        />
        <button className={`${s.button}`}>Search</button>
        <button className={`${s.button}`} onClick={handleMostrarPaises}>
          Reset
        </button>
      </div>
      {/* <div class="group">
        <input
          onChange={handleChange}
          value={state}
          required
          type="text"
          className={`${s.input}`}
        />
        <span className={`${s.highlight}`}></span>
        <span className={`${s.bar}`}></span>
        <label>Buscar pais...</label>
      </div> */}
      {/* <input
        type="search"
        onChange={handleChange}
        value={state}
        placeholder="Buscar pais..."
      /> */}
    </form>
  );
}
