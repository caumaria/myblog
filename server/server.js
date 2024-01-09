//backend api
const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(cors());


app.get("/api/home", (req, res) => {
    res.json({message: "Hello World from the server!", games: ['Lol', 'Dota', 'CSGO']});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})