import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
})

app.get("/about", (req, res) =>{
    res.send("<h1>ABOUT ME</h1><p>My Name is <strong>Anderson Roy</strong></p><p>A passionate software developer and designer</p>");
});

app.get("/contact", (req, res) =>{
    res.send('<h1>CONTACT ME</h1><p>+237670780100</p><p>Open for work</p><label>Message me : </label><input type = "message" placeholder = "Enter a message"></input><br><button>Submit</button>');
});

app.listen(port, () => {
    console.log(`Server listening to port ${port}`);
})