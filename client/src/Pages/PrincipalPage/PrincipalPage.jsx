import video from "../../fondos/videoBG.mp4";
import { Link } from "react-router-dom";
import styled from "styled-components";
import s from "./Button.module.css";
import o from "./Otros.module.css";

export default function principalPage() {
  return (
    <div>
      <VideoBG autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </VideoBG>
      <h1 className={`${o.textoPP}`}>Bienvenido al PI Countries</h1>
      <Link to="/home">
        <button className={`${s.button}`}>
          <span className={`${s.button_lg}`}>
            <span className={`${s.button_sl}`}></span>
            <span className={`${s.button_text}`}>Start</span>
          </span>
        </button>
      </Link>
    </div>
  );
}

const VideoBG = styled.video`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`;

/* const Contenedor = styled.div``; */
