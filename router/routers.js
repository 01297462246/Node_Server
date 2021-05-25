const express = require('express');

const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

const api_management = require('../api/api_management');
const api_register = require('../api/api_register');
const api_login = require('../api/api_login');

router.use(api_management);
router.use(api_register);
router.use(api_login);

module.exports = router;