import express from "express";
const app = express();
const port = 3000;

// Make sure your server is running with nodemon.

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/andy", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/andy", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/andy", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
