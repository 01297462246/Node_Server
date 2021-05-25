const express = require('express');

var router = express.Router();
var AccountModel = require('../model/account');

router.post("/api/v1/login", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) res.status(200).json("Login success.");
            else res.status(300).json("Login failed.")
        })
        .catch(err => { res.status(404).json("Failed: " + err) });
});

module.exports = router;