/* ------------------------------------------------------------------------------- */

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions";

/* ------------------------------------------------------------------------------- */

import Smurfs from "./Smurfs";

/* ------------------------------------------------------------------------------- */

const SmurfData = props => {
    useEffect(() => {
        props.fetchSmurfs();
        // eslint-disable-next-line
    }, {});

    if (props.isFetching) {
        return <h2>Loading Smurfs Village.</h2>
    }

    return (
        <div>
            {props.error && <p>{props.error}</p>}
            {props.smurfData.map(smurf => (
                <Smurfs
                    key={smurf.id}
                    smurf={smurf}
                />
            ))}
        </div>
    );
};

/* ------------------------------------------------------------------------------- */

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    { fetchSmurfs }
)(SmurfData);

/* ------------------------------------------------------------------------------- */