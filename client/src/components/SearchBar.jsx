import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../redux/actions";

import styled from "styled-components";


export default function SearchBar(props) {
    
   const dispatch = useDispatch()

   function handleChange(e) {
      setState(e.target.value);
   };

   return (
      <Barra>
         <input 
            type='search'
            onChange={handleChange}
            value={state}
         />
         <button onClick={() => onSearch(state)}>buscar</button>
      </Barra>
   );
}

