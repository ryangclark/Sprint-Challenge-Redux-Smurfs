import {
  ADD_SMURF_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  FETCH_SMURFS_FAILURE,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS
} from '../actions';

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
*/
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: null
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: null,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        error: null,
        smurfsList: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    default:
      return state;
  };
};