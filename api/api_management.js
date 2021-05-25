const express = require('express');
const { Code_InfomationRes, Code_ServerError, Code_SuccessRes } = require('../common/status_code/status_code');
const router = express.Router();

var AccountModel = require('../model/account');

router.get('/api/v1/management/account', (req, res) => {
    AccountModel.find({})
        .then(data => {
            if (data)
                res.status(Code_SuccessRes).json(data);
            else
                res.status(Code_InfomationRes).json("Db blank or req error")
        })
        .catch(err => res.status(Code_ServerError).json("Server Failed: " + err))
});

router.post('/api/v1/management/account', (req, res) => {
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
        .catch(err => res.status(Code_ServerError).json("Failed: " + err));
});

router.delete('/api/v1/management/account/:id', (req, res, next) => {
    var id = req.params.id;
    AccountModel.findByIdAndDelete(id)
        .then((data) => {
            if (data)
                res.status(Code_SuccessRes).json("Remove item successed.");
            else
                res.status(Code_InfomationRes).json("Remove failed.");
        })
        .catch((err) => res.status(Code_ServerError).json("Server failed: " + err));
});

router.put('/api/v1/management/account/:id', (req, res, next) => {
    var id = req.params.id;
    var newPassword = req.body.newPassword;

    AccountModel.findByIdAndUpdate(id, { password: newPassword })
        .then((data) => {
            if (data && newPassword)
                res.status(Code_SuccessRes).json("Change password successed.");
            else
                res.status(Code_InfomationRes).json("Change password failed.");
        })
        .catch(err => res.status(Code_ServerError).json("Server failed: " + err));
});
module.exports = router