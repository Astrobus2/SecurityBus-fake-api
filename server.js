const express = require('express');
const jsonServer = require('json-server');

const db = require('./db.json');
const routes = require('./routes.json');

const app = express();
app.set('json spaces', 2);

app.use(jsonServer.defaults());
app.use(jsonServer.rewriter(routes));
app.use(jsonServer.router(db));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});

module.exports = app;