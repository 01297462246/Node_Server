const express = require('express');
const { Code_ServerError, Code_SuccessRes } = require('../common/status_code/status_code');

var router = express.Router();

var AccountModel = require('../model/account');

router.get("/api/v1/register", (req, res) => res.status(200).json("ok"));

router.post("/api/v1/register", (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    AccountModel.
        findOne({
            username: username,
            password: password,
        })
        .then(data => {
            if (data)
                res.status(Code_SuccessRes).json("Failed. Account exist " + data);
            else {
                return AccountModel.create({
                    username: username,
                    password: password,
                })
            }
        })
        // .then(data => {
        //     res.status(Code_SuccessRes).json("Successful. Data: " + data);
        // })
        .catch(err => res.status(Code_ServerError).json("Failed: " + err));
});

module.exports = router;
