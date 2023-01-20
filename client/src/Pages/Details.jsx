import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {getCountryDetail} from '../Redux/actions'

export default function Detail(){
    const {id} = useParams()
    
    const dispatch = useDispatch()
    const country = useSelector(state=> state?.countryDetail)

    useEffect(()=> dispatch(getCountryDetail(id)), [])


    return(
        <div>
            <h2>{country.name}</h2>
            <h2>{country.capital}</h2>
            <h2>{country.continent}</h2>
            <img src={country.image} alt="" />
            <Link to='/home'>
              <button>Volver</button>
            </Link>
        </div>
    )
};