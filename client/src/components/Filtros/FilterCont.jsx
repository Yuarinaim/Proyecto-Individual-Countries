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
