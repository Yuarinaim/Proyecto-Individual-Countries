import { useState } from "react";
import { getAllCountry, getNameCountry } from "../../Redux/actions";
import { useDispatch } from "react-redux";

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
    <form onSubmit={handleSubmitName}>
      <input
        type="search"
        onChange={handleChange}
        value={state}
        placeholder="Buscar pais..."
      />
      <button>Buscar</button>
      <button onClick={handleMostrarPaises}>Mostrar todos</button>
    </form>
  );
}
