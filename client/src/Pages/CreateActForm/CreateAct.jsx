import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateActivities = () => {
  const [activity, setActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    idCountry: [],
  });

  const allCountry = useSelector((state) => state.allCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    // prettier-ignore
    axios.post("http://localhost:3001/activities", activity)
      .then(() => { alert("Actividad creada"); })
      .catch(() => { alert("Hubo un error en los datos administrados"); });
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "idCountry") {
      setActivity({ ...activity, [property]: [...activity.idCountry, value] });
    } else {
      setActivity({ ...activity, [property]: value });
    }
    console.log(activity);
  };

  /* const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  }; */

  /* const setCountries = (e) => {
    const objAct = { [e.target.value]: true };
    const convertArr = Object.keys(objAct);
    setActivity(...activity, country: convertArr);
  }; */

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label>Name: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='name' value={activity.name}/>

        <label>duration: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='duration' value={activity.duration}/>

        <label>dificulty: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='dificulty' value={activity.dificulty}/>

        <label>season: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='season' value={activity.season}/>

        {/* prettier-ignore */}
        <select onChange={handleChange} name="idCountry" value={activity.idCountry}>
          <option>Paises</option>
          {allCountry?.map((e, i) => (
            <option key={i} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>
        {/* <label>Pais/es: </label>
        {/* prettier-ignore }
        <input onChange={handleChange} type="text" name='paises' value={activity.paises}/> */}

        <button type="submit">Create Activity</button>
      </form>
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default CreateActivities;
