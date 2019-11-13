/* ------------------------------------------------------------------------------- */

import axios from 'axios';

/* ------------------------------------------------------------------------------- */

export const START_AXIOS = 'START_AXIOS';
export const AXIOS_SUCCESS = 'AXIOS_SUCCESS';
export const AXIOS_FAILURE = 'AXIOS_FAILURE';
export const POST_SMURF = 'POST_SMURF';

/* ------------------------------------------------------------------------------- */

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: START_AXIOS });
    axios
        .get(
            "http://localhost:3333/smurfs"
)
    .then(response => dispatch({ type: AXIOS_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: AXIOS_FAILURE, payload: error.response}));
};

/* ------------------------------------------------------------------------------- */

export const postSmurf = (smurf) => dispatch => {
    dispatch({ type: POST_SMURF });
    axios
        .post(
            "http://localhost:3333/smurfs", smurf
        )
    .then(response => dispatch(console.log("Post Res", response),{ type: POST_SMURF, payload: response.data}))
    .catch(error => console.error(error));
};

/* ------------------------------------------------------------------------------- */