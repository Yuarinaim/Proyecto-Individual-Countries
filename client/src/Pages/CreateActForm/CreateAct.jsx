import { useState } from "react";
import { createActivity } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const CreateActivities = () => {
  const [activity, setActivity] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity());
  };

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label>Name: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='name' value={activity.name}/>

        <label>duration: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='duration' value={activity.duration}/>

        <label>dificulty: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='dificulty' value={activity.dificulty}/>

        <label>season: </label>
        {/* prettier-ignore */}
        <input onChange={handleChange} type="text" name='season' value={activity.season}/>

        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
};

export default CreateActivities;
