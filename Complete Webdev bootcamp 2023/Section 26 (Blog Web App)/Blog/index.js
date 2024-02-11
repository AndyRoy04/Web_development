import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

app.get("/", (req, res) => {
    // var lastName = names[names.length - 1];
    res.render("index.ejs", { names, messages });
})

app.get("/create", (req, res) => {
    res.render("create.ejs");
})
app.post("/create", (req, res) => {
    names.unshift(req.body['create']);
    messages.unshift(req.body['blogCreate']);
    var pushed = "true";
    res.render("create.ejs", { pushed });
});

app.get("/update", (req, res) => {
    res.render("update.ejs");
})
app.post("/update", (req, res) => {
    var search = req.body["new"];
    var toUpdate = req.body['newUpdate'];
    var blogCreate = req.body['blogCreate'];
    for (var i = 0; i < names.length; i++) {
        if (search === names[i]) {
            names[i] = toUpdate;
            messages[i] = blogCreate;
            var found = "true";
            break;
        } else {
            var found = "false";
        }
    }
    console.log(found, toUpdate, names);
    res.render("update.ejs", { found });
});

app.get("/delete", (req, res) => {
    res.render("delete.ejs");
})
app.post("/delete", (req, res) => {
    var toDelete = req.body['delete'];
    for (var i = 0; i < names.length; i++) {
        if (toDelete === names[i]) {
            names.splice(i, 1);
            messages.splice(i, 1);
            var found = "true";
            break;
        } else {
            var found = "false";
        }
    }
    res.render("delete.ejs", { found });
});


app.listen(port, () => {
    console.log(`App running on port : ${port}`);
});

// const keyValue = []

const names = [
    "Albert Einstein",
    "Maya Angelou",
    "Steve Jobs",
    "Oprah Winfrey",
    "Walt Disney",
    "Mark Twain",
    "Nelson Mandela",
    "Malala Yousafzai",
    "Stephen Hawking",
    "Maya Angelou",
    "Mahatma Gandhi",
    "Martin Luther King Jr.",
    "Vincent Van Gogh",
    "J.K. Rowling",
    "Marie Curie",
    "Leonardo da Vinci",
    "Aristotle",
    "Elon Musk",
    "Jane Austen",
    "John F. Kennedy",
    "Arianna Huffington",
    "Seth Godin",
    "Tim Ferriss",
    "Gary Vaynerchuk",
    "Rand Fishkin",
    "Pat Flynn",
    "Michelle Phan",
    "Joanna Gaines",
    "Perez Hilton",
    "Brian Clark"
    // "Isabella Martinez",
    // "Benjamin Taylor",
    // "Mia Thomas",
    // "Jacob Garcia",
    // "Charlotte Martinez",
    // "Joseph Thompson",
    // "Amelia Davis",
    // "Daniel Rodriguez",
    // "Harper Hernandez",
    // "Alexander Lopez",
    // "Emily Clark",
    // "Matthew Hall",
    // "Abigail Lewis",
    // "Ethan Young",
    // "Elizabeth Walker",
    // "David Adams",
    // "Sofia Wright",
    // "Andrew Diaz",
    // "Madison Campbell",
    // "Josephine Hill",
    // "Samuel White",
    // "Scarlett Lee"
];

const messages = [
    "Imagination is more important than knowledge.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "All our dreams can come true, if we have the courage to pursue them.",
    "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    "Education is the most powerful weapon which you can use to change the world.",
    "We realize the importance of our voices only when we are silenced.",
    "Intelligence is the ability to adapt to change.",
    "We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.",
    "You must be the change you wish to see in the world.",
    "The time is always right to do what is right.",
    "I am seeking, I am striving, I am in it with all my heart.",
    "It is our choices that show what we truly are, far more than our abilities.",
    "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    "Simplicity is the ultimate sophistication.",
    "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    "When something is important enough, you do it even if the odds are not in your favor.",
    "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    "Efforts and courage are not enough without purpose and direction.",
    "Fearlessness is like a muscle. I know from my own life that the more I exercise it, the more natural it becomes to not let my fears run me.",
  "Instead of wondering when your next vacation is, maybe you should set up a life you don't need to escape from.",
  "Focus on being productive instead of busy.",
  "Legacy is greater than currency.",
  "The best way to sell something: don't sell anything. Earn the awareness, respect, and trust of those who might buy.",
  "Your income is directly related to your impact.",
  "Create and cultivate the life you want.",
  "The key to unlocking your potential is found in your daily routine.",
  "Be you, be authentic, and share your voice with the world.",
  "Don't focus on having a great blog. Focus on producing a blog that's great for your readers.",
    // "A blog website is a platform where individuals or organizatiers can browse through different blog posts, read the content, and leave comments.",
    // "Behind the scenes, the blog website has a back-end infrastru.",
    // "Additionally, blog websites often incorporate content manageng that only authorized individuals can publish or modify blog posts.",
    // "Overall, a blog website combines front-end and back-end tech."
]