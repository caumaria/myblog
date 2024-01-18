//backend api
require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const mySQL = require('mysql2');

app.use(cors());

const con = mySQL.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: "blog"
});

con.connect(function(err) {
    if (err) return console.error('error in connecting:', err);
    return console.log('connected');
});

//

async function getPosts() {
    const [rows] = await con.promise().query("SELECT * FROM posts");
    return rows;
}

async function getPost(id) {
    const [rows] = await con.promise().query("SELECT * FROM posts WHERE id = ?", [id]);
    return rows;
}

async function fetchData() {
    const posts = await getPosts();
    console.log(posts);

    //const singlePost = await getPost(1);
}

fetchData();


app.get("/api/home", (req, res) => {
    res.json({message: "Hello World from the server!"});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})