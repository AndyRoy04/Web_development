import express from 'express';

const app = express();
const port = 3000;
let daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

app.get("/", (req, res) => {
    const date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    var time = `${hour}:${minutes}:${seconds}` + ` PM`;
    let tD = "it's a school day";
    if (daysOfWeek[day] == "Saturday" || daysOfWeek[day] == "Sunday") {
        tD = "it's the weekend";
    }
    if (hour < 12) {
        time = `${hour}:${minutes}:${seconds}` + ` AM`;
    } else if (hour === 12) {
        time = `${hour}:${minutes}:${seconds}` + ` NOON`;
    }
    res.render("index.ejs", {
        weekDay: daysOfWeek[day],
        toDo: tD,
        time: time,
    })
})

app.listen(port, () => {
    console.log(`App listening on ${port}`);
});