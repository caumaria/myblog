import dotenv from 'dotenv';
import mysql from 'mysql2';

dotenv.config();

export const dbConfig = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
};

export const con = mysql.createConnection(dbConfig);

con.connect((err) => {
    if (err) return console.error('Error in connecting:', err);
    console.log('Connected to the database');
});