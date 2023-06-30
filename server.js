const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  const shows = require("./movie.json");
  res.render("index", { shows });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
