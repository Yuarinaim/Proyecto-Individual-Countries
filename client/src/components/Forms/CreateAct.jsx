import * as actions from "../../redux/actions";

import React from "react";

import { useDispatch } from "react-redux";


const CreateActivities = () => {

  const [state, setState] = React.useState({
    name: '',
    dificulty: '',
    duration: '',
    season: '',
  })

  const dispatch = useDispatch()
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.createActivity(id))
  }

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} action="" >
        <label>Name: </label>
        <input onChange={handleChange} type="text" name='name' value={state.name}/>
        
        <label>Founder: </label>
        <input onChange={handleChange} type="text" name='founder' value={state.founder}/>

        <label>Base: </label>
        <input onChange={handleChange} type="text" name='base' value={state.base}/>

        <label>WorldChampionships: </label>
        <input onChange={handleChange} type="number" name='worldChampionships' value={state.worldChampionships}/>

        <button type="submit">Create Team</button>
      </form>
    </div>
  );
};

export default CreateTeam;
