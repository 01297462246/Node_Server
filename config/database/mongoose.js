const mongoose = require('mongoose');

const port = 27017;
const localhost = `localhost:${port}`;
const name_db = 'demo_mongoDB';
mongoose.connect(`mongodb://${localhost}/${name_db}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

module.exports = mongoose;