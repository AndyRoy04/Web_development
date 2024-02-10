import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  var message = "Enter your name Below 👇🏿"
  res.render("index.ejs", { name: message});
});

app.post("/submit", (req, res) => {
  var name = req.body['fName'] + req.body['lName'];
  var nameLength = `Hey ${req.body['lName']}, Your names  has ${name.length} characters`;
  res.render('index.ejs', {name: nameLength})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
