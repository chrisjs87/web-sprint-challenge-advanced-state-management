import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const GIVE_ERROR = "GIVE_ERROR";

// http://localhost:3333/smurfs

export function fetchStart() {
	return {type: FETCH_START}
}

export function fetchSuccess(smurfs) {
	return {type: FETCH_SUCCESS, payload:smurfs}
}

export function fetchFail() {
	return {type: FETCH_FAIL}
}

export function addSmurf() {
	return {type: ADD_SMURF, payload: null}
}

export function giveError(err) {
	return {type: GIVE_ERROR, payload: err}
}

export function fetchSmurfs() {
	return (dispatch) => {
		dispatch(fetchStart());

		axios.get('http://localhost:3333/smurfs')
		.then(resp => {
			dispatch(fetchSuccess(resp.data))
		})
		.catch(err => {
			dispatch(fetchFail());
			dispatch(giveError(err));
		})
	}
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retrieve smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.