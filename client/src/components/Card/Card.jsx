import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={`${s.card}`}>
      <div className={`${s.card_details}`}>
        <div className={`${s.card_img}`}>
          <img src={props.image} alt="" />
        </div>
        <p className={`${s.text_title}`}>{props.name}</p>
        <p className={`${s.text_body}`}>{props.continent}</p>
      </div>
      <Link to={`/countries/${props.id}`}>
        <button className={`${s.card_button}`}>More info</button>
      </Link>
    </div>
  );
}

{
  /* <div className={`${s.card}`}>
  <div className={`${s.card_img}`}>
    <img src={props.image} alt="" />
  </div>
  <h2>{props.name}</h2>
  <h3>{props.continent}</h3>
  <Link to={`/countries/${props.id}`}>
    <p>Detalle</p>
  </Link>
</div> */
}
