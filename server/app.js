const express = require('express');
const cors = require('cors');
const session = require('express-session');
const mysql = require('mysql');
const path = require('path');

const app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "injection",
});

const router = express.Router();

router.post("/getdetails", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username);
    console.log(password);

    db.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`, [username, password], (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal server error" });
            console.error(err);
        } else {
            if (result.length > 0) {
                res.status(200).send(result);
            } else {
                res.status(401).send({ message: "Wrong username/password combination!" });
            }
        }
    });
});

app.use("/users", router);

app.listen(3001, () => {
    console.log("Server has started on port 3001");
});


