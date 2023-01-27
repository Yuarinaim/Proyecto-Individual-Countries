import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterAct, getNameActivities } from "../../Redux/actions";

const Filters = () => {
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

export default Filters;
