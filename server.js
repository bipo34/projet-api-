const express = require('express');
const app = express();

app.use(express.json({type: "application/json"}));
app.use(express.urlencoded({extended: false, type: "application/x-www-form-urlencoded"}));
app.use('/activities', require('./activities/index'));
app.use('/hosting', require('./hosting/index'));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Le server écoute sur le port " + Port));

app.all('*', (req, res) => {
    res.end();
});