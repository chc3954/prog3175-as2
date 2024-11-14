const express = require("express");
const db = require("./data/database");
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json());

app.get("/api/languages", (req, res) => {
  db.all(`SELECT DISTINCT language FROM greetings`, (err, rows) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(rows.map((row) => row.language));
    }
  });
});

app.listen(HTTP_PORT, () => console.log(`Server listening on: ${HTTP_PORT}`));
