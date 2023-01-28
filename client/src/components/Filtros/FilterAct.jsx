import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAct, getNameActivities } from "../../Redux/actions";

const FilterAct = () => {
  const activitiesNames = useSelector((state) => state.activitiesNames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNameActivities());
  }, []);

  const onChangeAct = (e) => {
    dispatch(filterAct(e.target.value));
  };

  return (
    <select onChange={onChangeAct}>
      <option value="Actividades">Actividades</option>
      {activitiesNames?.map((e) => (
        <option key={e.name} value={e.name}>
          {e.name}
        </option>
      ))}
    </select>
  );
};

export default FilterAct;

/*
import { useDispatch } from "react-redux";
import { filterContinent } from "../../Redux/actions";

const FilterCont = () => {
  const continents = [
    "Africa",
    "Antarctica",
    "Asia",
    "North America",
    "South America",
    "Europe",
    "Oceania",
  ];
  const dispatch = useDispatch();

  const onChangeCont = (e) => {
    dispatch(filterContinent(e.target.value));
  };

  return (
    <select onChange={onChangeCont}>
      <option value="Continents">Continents</option>
      {continents?.map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>
  );
};

export default FilterCont;
 */
