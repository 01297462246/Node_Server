const mongoose = require('../config/database/mongoose.js');

const Schema = mongoose.Schema;

const collection = 'account';
const Account = Schema({
    username: String,
    password: String
}, {
    collection: collection,
});

const AccountModel = mongoose.model(collection, Account);

module.exports = AccountModel;