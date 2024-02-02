import express from 'express';
import { createRequire } from 'module';
import { con } from './connection.js';

const require = createRequire(import.meta.url);
const cors = require('cors');

const app = express();
const PORT = 3001;
app.use(express.json());

app.use(cors());

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

app.use((err, req, res, next) => {
    res.status(500).send({'Something broke': err.message});
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

/*

(async () => {
    const result = await createPost("1", "Titulo 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et, quos aliquid earum, dolorum quisquam vel assumenda nostrum maxime perferendis veniam ad fugit! Totam natus quos incidunt quas nisi distinctio.", "2024-02-02");
    console.log(result);
})();

*/