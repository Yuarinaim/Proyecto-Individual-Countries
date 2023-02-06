import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../Redux/actions";
import s from "./Details.module.css";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state?.countryDetail);

  useEffect(() => dispatch(getCountryDetail(id)), []);

  return (
    <div className={`${s.contenedor}`}>
      <h1 className={`${s.h1}`}>Details of {countryDetail.name}</h1>
      <div className={`${s.detalle}`}>
        <div className={`${s.info}`}>
          <div className={`${s.image}`}>
            <img src={countryDetail.image} alt="" />
          </div>
          <div className={`${s.data}`}>
            {/* prettier-ignore */}
            <h2>Name: {countryDetail.name}, {countryDetail.id}</h2>
            <h2>Continent: {countryDetail.continent}</h2>
            <h2>Capital: {countryDetail.capital}</h2>
            <h2>Subregion: {countryDetail.subregion}</h2>
            <h2>Area: {countryDetail.area} km²</h2>
            <h2>Poblation: {countryDetail.poblation}</h2>
          </div>
          <div className={`${s.contenedor_act}`}>
            <h1>Activities of {countryDetail.name}</h1>
            {countryDetail.activities?.map((act) => (
              <div className={`${s.activities}`}>
                <h2>Name: {act.name}</h2>
                <h2>Dificulty: {act.dificulty}</h2>
                <h2>Duration: {act.duration}</h2>
                <h2>Season: {act.season}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className={`${s.button}`}>Back</button>
      </Link>
    </div>
  );
}
