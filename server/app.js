// const express = require('express');
// const cors = require('cors');
// const session = require('express-session');
// const path = require('path');
// const router = require('./routes');

// const app = express();

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'static')));
// app.use(cors());

// app.use("/users", router);

// app.listen(3001, () => {
//     console.log("Server has started on port 3001");
// });


const express = require('express');
const cors = require('cors');
const router = require('./routes');

const https = require("https");
const fs = require('fs');

const app = express();
app.use(cors());
app.use("/users", router);

const privateKey = fs.readFileSync("key.pem", "utf8");
const certificate = fs.readFileSync("cert.pem", "utf8");
const credentials = { key: privateKey, cert: certificate };

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(3001, () => {
    console.log("Server has started on port 3001");
});

httpsServer.on('error', (error) => {
    console.error('Error starting server:', error);
});





