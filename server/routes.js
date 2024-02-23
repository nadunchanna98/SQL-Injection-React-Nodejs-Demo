const express = require('express');
const router = express.Router();

// router.get("/", ( req, res ) => {
//     res.send("Hello Network Security Lab 3, 2019/E/094, Here use http protocol");
// });

router.get("/", ( req, res ) => {
    res.send("Hello Network Security Lab 3, 2019/E/094, Here use https with SSL protocol");
});

module.exports = router;