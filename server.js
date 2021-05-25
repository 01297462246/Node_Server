const express = require('express');
const path = require('path');
var routers = require('./router/routers');
var app = express();
const port = 3000;
//Call api.
app.use(routers);
//Call front end.
app.use("/public", express.static(path.join(__dirname, '/front_end/public')));
app.get("/", (req, res) => {
    var filePath = path.join(__dirname, '/front_end/index.html');
    res.sendFile(filePath);
});

app.listen(port, () => {
    console.log(`server start on port ${port}`);
});
