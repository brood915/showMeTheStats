const express = require('express');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 1337;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use("/api", routes);

module.exports = app;