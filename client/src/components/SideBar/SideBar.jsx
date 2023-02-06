import Sort from "../Sort/Sort";
import FilterCont from "../Filtros/FilterCont";
import FilterAct from "../Filtros/FilterAct";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={`${s.contenedor}`}>
      <h2 className={`${s.h2_filt}`}>Filter by:</h2>
      <div className={`${s.filter_cont}`}>
        <FilterCont />
      </div>
      <div className={`${s.filter_act}`}>
        <FilterAct />
      </div>
      <h2 className={`${s.h2_ord}`}>Order by:</h2>
      <div className={`${s.sort}`}>
        <Sort />
      </div>
    </div>
  );
};

export default SideBar;
