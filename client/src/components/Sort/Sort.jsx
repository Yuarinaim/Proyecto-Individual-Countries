import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAZ, orderPobla } from "../../Redux/actions";
import s from "./Sort.module.css";

const Sort = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleSortAZ = (e) => {
    setState(e.target.value);
    dispatch(orderAZ(e.target.value));
  };

  const handleSortPoblation = (e) => {
    setState(e.target.value);
    dispatch(orderPobla(e.target.value));
  };

  return (
    <>
      <div className={`${s.orden_Alph}`}>
        <button
          className={`${s.button}`}
          value={"ascendente"}
          onClick={handleSortAZ}
        >
          Orden A-Z
        </button>
        <button
          className={`${s.button}`}
          value={"descendente"}
          onClick={handleSortAZ}
        >
          Orden Z-A
        </button>
      </div>
      <div className={`${s.orden_Alph}`}>
        <button
          className={`${s.button}`}
          value={"ascendente"}
          onClick={handleSortPoblation}
        >
          Poblation men - may
        </button>
        <button
          className={`${s.button}`}
          value={"descendente"}
          onClick={handleSortPoblation}
        >
          Poblation may - men
        </button>
      </div>
    </>
  );
};

export default Sort;
