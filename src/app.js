const express = require("express");
const app = express();
const router = express.Router();


app.use(express.json());

app.use(router);

app.use(
    router.get('/', (req, res) => {
        return res.status(200).json("Hello World!")
    })
);

module.exports = app;
