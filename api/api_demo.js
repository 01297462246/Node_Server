const express = require('express');
var routers = express.Router();

//Lấy dữ liệu từ database;
router.get('/', (req, res) => {
    res.json("router1");
});

//Thêm mới dữ liệu vào db;
router.post('/', (req, res) => {
    res.json("router1");
});

//Update dữ liệu trong db
router.put('/', (req, res) => {
    res.json("router1");
});

//Xóa dữ liệu trong db
router.delete('/', (req, res) => {
    res.json("router1");
});

module.exports = routers;