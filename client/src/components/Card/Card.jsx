import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Card(props) {
  return (
    <div>
      <Imagen src={props.image} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.continent}</h3>
      <Link to={`/countries/${props.id}`}>
        <p>Detalle</p>
      </Link>
    </div>
  );
}

const Imagen = styled.img`
  width: 250px;
  height: 150px;
`;
/* const Carta = styled.img`
    background-color: red;
    width: 300px;
    height: 400px;
` */
