import axios from 'axios';

export const ADD_SMURF_FAILURE    = 'ADD_SMURF_FAILURE';
export const ADD_SMURF_START      = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS    = 'ADD_SMURF_SUCCESS';

export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
export const DELETE_SMURF_START   = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';

export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';
export const FETCH_SMURFS_START   = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';


export const addSmurf = (age, height, name) => dispatch => {
  dispatch({ type: ADD_SMURF_START});
  axios
    .post(
      'http://localhost:3333/smurfs',
      {age: age, height: height, name: name}
    )
    .then(res =>
      dispatch({
        type: ADD_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => dispatch({type: ADD_SMURF_FAILURE, payload: err}));
};

export const deleteSmurf = smurfId => dispatch => {
  dispatch({type: DELETE_SMURF_START});
  axios
    .delete(`http://localhost:3333/smurfs/${smurfId}`)
    .then(res => 
      dispatch({
        type: DELETE_SMURF_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }));
};

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START});
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({
      type: FETCH_SMURFS_SUCCESS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: FETCH_SMURFS_FAILURE,
      payload: err
    }));
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
