const express = require('express');
const cors = requre('cors');


const app = express();
app.use(express.json());
app.use(cors());


module.exports = { app };