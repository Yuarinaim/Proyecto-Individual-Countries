import { useState } from "react";
import { useDispatch } from "react-redux";
import { orderAZ } from "../../Redux/actions";

const Sort = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSortAZ = (e) => {
    e.preventDefault();
    setName(e.target.value);
    dispatch(orderAZ(name));
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
      <div></div>
    </div>
  );
};

export default Sort;
