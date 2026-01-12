const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const user = req.query.user;    
    const query = `SELECT * FROM users WHERE username = '${user}'`;
     res.send("Query executed: " + query);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
