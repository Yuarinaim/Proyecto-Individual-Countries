import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAZ, orderPobla } from "../../Redux/actions";

const Sort = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const handleSortAZ = (e) => {
    e.preventDefault();
    setState(e.target.value);
    dispatch(orderAZ(state));
  };

  const handleSortPoblation = (e) => {
    e.preventDefault();
    setState(e.target.value);
    dispatch(orderPobla(state));
  };

  return (
    <div>
      <div>
        <button value={"ascendente"} onClick={handleSortAZ}>
          Orden A-Z
        </button>
        <button value={"descendente"} onClick={handleSortAZ}>
          Orden Z-A
        </button>
      </div>
      <div>
        <button value={"ascendente"} onClick={handleSortPoblation}>
          Orden Poblation men - may
        </button>
        <button value={"descendente"} onClick={handleSortPoblation}>
          Orden Poblation may - men
        </button>
      </div>
    </div>
  );
};

export default Sort;
