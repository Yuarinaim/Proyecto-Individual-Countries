import { useState } from "react";
import { getAllCountry, getNameCountry } from "../../Redux/actions";
import { useDispatch } from "react-redux";

export default function SearchBar() {
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState(e.target.value);
    console.log(state);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNameCountry(state));
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountry());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        onChange={handleChange}
        value={state}
        placeholder="Buscar pais..."
      />
      <button>Buscar</button>
      <button onClick={handleClick}>Mostrar todos</button>
    </form>
  );
}
