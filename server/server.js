//backend api
const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const db = require("./config/db");

app.use(cors());



app.get("/api/home", async (req, res) => {
   //db.query("INSERT INTO posts (title, post_text) VALUES ('test', 'asdasdaw')");
    //res.json({message: "Hello World from the server!", games: ['Lol', 'Dota', 'CSGO']});
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})