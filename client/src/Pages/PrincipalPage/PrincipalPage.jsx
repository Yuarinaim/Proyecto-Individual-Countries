import video from "../../fondos/Global.mp4";
import { Link } from "react-router-dom";
import s from "./Button.module.css";
import o from "./Otros.module.css";

export default function principalPage() {
  return (
    <div>
      <video className={`${o.video}`} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className={`${o.difuminado_video}`}></div>
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
