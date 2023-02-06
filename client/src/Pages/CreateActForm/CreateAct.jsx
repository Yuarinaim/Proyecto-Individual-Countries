import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import s from "./CreateAct.module.css";
import { useEffect } from "react";
import { getAllCountry } from "../../Redux/actions";

const CreateActivities = () => {
  const [activity, setActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    idCountry: [],
    nameCountry: "",
  });

  const dificulty = ["1", "2", "3", "4", "5"];
  const season = ["Winter", "Autumn", "Summer", "Spring"];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCountry());
  }, []);

  const allCountry = useSelector((state) => state.allCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activity);
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

  return (
    <div className={`${s.contenedor}`}>
      <form className={`${s.form}`} onSubmit={handleSubmit} action="">
        <h1 className={`${s.h1}`}>Create activity</h1>
        <div className={`${s.name_duration}`}>
          <div>
            <label className={`${s.label}`}>Name:</label>
            {/* prettier-ignore */}
            <input className={`${s.input}`} onChange={handleChange} type="text" autoComplete="off" name='name' value={activity.name} />
          </div>

          <div>
            <label className={`${s.label}`}>Duration:</label>
            {/* prettier-ignore */}
            <input className={`${s.input}`} onChange={handleChange} type="text" autoComplete="off" name='duration' value={activity.duration} />
          </div>
        </div>

        <div className={`${s.dificulty_season}`}>
          {/* prettier-ignore */}
          <select className={`${s.select}`} onChange={handleChange} name='dificulty' value={activity.dificulty}>
            <option>Dificulty:</option>
            {dificulty.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
          {/* prettier-ignore */}
          <select className={`${s.select}`} onChange={handleChange} name='season' value={activity.season}>
            <option>Season:</option>
            {season.map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        {/* prettier-ignore */}
        <select className={`${s.paises}`} onChange={handleChange} name="idCountry" value={activity.idCountry} >
          <option hidden>Paises</option>
          {allCountry?.map((e, i) => (
            <option key={i} value={e.id}>
              {e.name}
            </option>
          ))}
        </select>

        <div>
          <p className={`${s.label}`}>{activity.idCountry + ","}</p>
        </div>

        <button className={`${s.button}`} type="submit">
          Create Activity
        </button>
      </form>
      <Link to="/home">
        <button className={`${s.button}`}>Volver</button>
      </Link>
    </div>
  );
};

export default CreateActivities;
