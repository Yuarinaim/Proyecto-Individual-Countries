import { useState } from "react";
import { searchCountry } from "../Redux/actions";
import { useDispatch } from "react-redux";
/* import { useParams } from 'react-router-dom' */
/* import styled from "styled-components"; */


export default function SearchBar() {
   
   const [state, setState] = useState('')

   const dispatch = useDispatch()
   dispatch(searchCountry())

   function handleChange(e) {
      setState(e.target.value);
   };

   return (
      <div>
         <input 
            type='search'
            onChange={handleChange}
            value={state}
            placeholder="Pais"
         />
         <button onClick={() => searchCountry(state)}>Buscar</button>
      </div>
   );
}

