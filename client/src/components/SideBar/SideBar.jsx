import Sort from "../Sort/Sort";
import FilterCont from "../Filtros/FilterCont";
import FilterAct from "../Filtros/FilterAct";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={`${s.contenedor}`}>
      <div className={`${s.filter_cont}`}>
        <FilterCont />
      </div>
      <div className={`${s.filter_act}`}>
        <FilterAct />
      </div>
      <div className={`${s.sort}`}>
        <Sort />
      </div>
    </div>
  );
};

export default SideBar;
