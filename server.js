const express = require("express");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.listen(HTTP_PORT, () => console.log(`Server listening on: ${HTTP_PORT}`));
