import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../Redux/actions";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state?.countryDetail);

  useEffect(() => dispatch(getCountryDetail(id)), []);

  return (
    <div>
      <h1>Detalle de {countryDetail.name}</h1>
      <img src={countryDetail.image} alt="" />
      {/* prettier-ignore */}
      <h2>Name: {countryDetail.name}, {countryDetail.id}</h2>
      <h2>Continent: {countryDetail.continent}</h2>
      <h2>Capital: {countryDetail.capital}</h2>
      <h2>Subregion: {countryDetail.subregion}</h2>
      <h2>Area: {countryDetail.area}</h2>
      <h2>Poblation: {countryDetail.poblation}</h2>
      <h1>Actividades de {countryDetail.name}</h1>
      {countryDetail.activities?.map((act) => (
        <div>
          <h2>Name: {act.name}</h2>
          <h2>Dificulty: {act.dificulty}</h2>
          <h2>Duration: {act.duration}</h2>
          <h2>Season: {act.season}</h2>
        </div>
      ))}
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
}
