import express from 'express';

const app = express();
const port = 3000;

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.get("/create", (req, res) => {
    res.render("create.ejs");
})

app.get("/update", (req, res) => {
    res.render("update.ejs");
})

app.get("/delete", (req, res) => {
    res.render("delete.ejs");
})


app.listen(port, ()=>{
    console.log(`App running on port : ${port}`);
});