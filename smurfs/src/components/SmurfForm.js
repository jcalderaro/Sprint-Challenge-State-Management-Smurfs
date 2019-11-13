/* ------------------------------------------------------------------------------- */

import React, { useState } from "react";
import { connect } from "react-redux";

/* ------------------------------------------------------------------------------- */

import { postSmurf } from "../actions";

/* ------------------------------------------------------------------------------- */

function SmurfForm({ postSmurf }) {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [height, setHeight] = useState("");
    const [id, setId] = useState(0);

    const handleName = event => {
        setName(event.target.value);
    };
    const handleAge = event => {
        setAge(event.target.value);
    };
    const handleHeight = event => {
        setHeight(event.target.value);
    };
    const handleId = event => {
        setId(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        const smurf = {
            name: name,
            age: age,
            height: height,
            id: id
        };
        postSmurf(smurf)
    };

/* ------------------------------------------------------------------------------- */

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Smurf Name"
                    onChange={handleName}
                    value={name}
                />
                <input
                    age="age"
                    placeholder="Smurf Age"
                    onChange={handleAge}
                    value={age}
                />
                <input
                    height="height"
                    placeholder="Smurf Height"
                    onChange={handleHeight}
                    value={height}
                />
                <input
                    id="id"
                    placeholder="Smurf ID"
                    onChange={handleId}
                    value={id}
                />
                <button>Add New Smurf!</button>
            </form>
        </div>
    );
}

/* ------------------------------------------------------------------------------- */

export default connect(
    null,
    { postSmurf }
)(SmurfForm);

/* ------------------------------------------------------------------------------- */