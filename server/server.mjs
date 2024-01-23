//backend api
import dotenv from 'dotenv';
import express from 'express';
import mysql from 'mysql2';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.json());

app.use(cors());
dotenv.config();

const con = mysql.createConnection({
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

export async function getPosts() {
    const [rows] = await con.promise().query("SELECT * FROM posts");
    return rows;
}
export async function getPost(id) {
    const [rows] = await con.promise().query("SELECT * FROM posts WHERE id = ?", [id]);
    return rows[0];
}
export async function createPost(id, title, post_text, date) {
    const [result] = await con.promise().query("INSERT INTO posts (id, title, post_text, date) VALUES (?,?,?,?)", [id, title, post_text, date]);
    const idRes = result.insertId;
    return getPost(idRes);
}

//-------------------------------------------

app.get("/posts", async (req, res) => {
    const posts = await getPosts();
    res.send(posts);
})

app.get("/posts/:id", async (req, res) => {
    const id = req.params.id
    const post = await getPost(id);
    res.send(post);
})

app.post("/posts", async (req, res) => {
    const { id, title, post_text, date } = req.body;
    const post = await createPost(id, title, post_text, date);
    res.status(201).send(post);
})

app.get("/api/home", (req, res) => {
    res.json({message: "Hello World from the server!"});
})

app.use((err, req, res, next) => {
    res.status(500).send({'Something broke': err.message});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

/*

(async () => {
    const result = await createPost("3", "Receita de Suco Verde", "text test", "2024-01-18");
    console.log(result);
})(); 
export async function fetchData() {
    const posts = await getPosts();
    console.log(posts);
}

fetchData();

*/