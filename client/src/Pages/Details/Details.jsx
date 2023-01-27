import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCountryDetail } from "../../Redux/actions";

export default function Details() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const country = useSelector((state) => state?.countryDetail);

  useEffect(() => dispatch(getCountryDetail(id)), []);

  return (
    <div>
      <h1>Detalle de {country.name}</h1>
      <img src={country.image} alt="" />
      {/* prettier-ignore */}
      <h2>Name: {country.name}, {country.id}</h2>
      <h2>Continent: {country.continent}</h2>
      <h2>Capital: {country.capital}</h2>
      <h2>Subregion: {country.subregion}</h2>
      <h2>Area: {country.area}</h2>
      <h2>Poblation: {country.poblation}</h2>
      <h1>Actividades de {country.name}</h1>
      <h2>{country.activities}</h2>
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
}
