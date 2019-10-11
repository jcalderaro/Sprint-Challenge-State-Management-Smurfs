/* -----------------------------------------------------------------  */ 
import axios from 'axios';
/* -----------------------------------------------------------------  */ 

// Create Action Names
export const GET_SMURFS = "GET_SMURFS";
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS";
export const POST_SMURF = "POST_SMURF";

// Create Action Creator for a GET Request
export const getSmurfs = () => dispatch =>{
	dispatch({type: GET_SMURFS})
	axios("http://localhost:3333/smurfs")
	.then(res => {
		console.log(res)
		dispatch({type: GET_SMURFS_SUCCESS, payload: res.data})
	})
	.catch(err => console.log(err))
}

// Create Action Creator for a POST Request
export const postSmurf = smurf => dispatch => {
	axios.post("http://localhost:3333/smurfs", smurf)
	.then(res => {
		console.log(res.data)
		dispatch({type: POST_SMURF, payload: res.data})
	})
	.catch(err => {
		console.log("FROM THE CATCH");
		console.log(err)
	})
} 

/* -----------------------------------------------------------------  */ 