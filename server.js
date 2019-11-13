/* ------------------------------------------------------------------------------- */

const express = require('express');
const cors = require('cors');
const port = 3333;

/* ------------------------------------------------------------------------------- */

const server = express();
server.use(express.json());
server.use(cors());

/* ------------------------------------------------------------------------------- */

const sendUserError = (msg, res) => {
    res.status(422);
    res.json({ Error: msg });
    return;
};

/* ------------------------------------------------------------------------------- */

let smurfs = [
    {
        name: 'Brainey',
        age: 200,
        height: '5cm',
        id: 0
    }
];
server.get('/smurfs', (req, res) => {
    res.json(smurfs);
});
let smurfId = smurfs.length;

/* ------------------------------------------------------------------------------- */

server.post('/smurfs', (req, res) => {
    const { name, age, height } = req.body;
    const newSmurf = { name, age, height, id: smurfId };
    if (!name || !age || !height) {
        return sendUserError(
            'Ya gone did smurfed!',
            res
        );
    }
    const findSmurfByName = smurf => {
        return smurf.name === name;
    };
    if (smurfs.find(findSmurfByName)) {
        return sendUserError(
            `Ya gone did smurfed!`,
            res
        );
    }
    smurfs.push(newSmurf);
    smurfId++;
    res.json(smurfs);
});

/* ------------------------------------------------------------------------------- */

server.listen(port, err => {
    if (err) console.log(err);
    console.log(`server is listening on port ${port}`);
});

/* ------------------------------------------------------------------------------- */