const express = require("express");
const app = express();
const path = require("path")

//These two are parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

const comments = [
    {
        username: "Todd",
        comment: "LOOOL That is soooo funnyyyyy"
    },
    {
        username: "Mercel",
        comment: "Oh wow what blazing bazongas is this!?!"
    },
    {
        username: "Neppari",
        comment: "Absolutely thrilling~"
    },
    {
        username: "smolman",
        comment: "too small."
    }
]


app.get("/tacos", (req, res) => {
    res.send("GET /tacos response")
})

app.post("/tacos", (req, res) => {
    const { meat, qty } = req.body;
    res.send(`OK, here are your ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})

// Get all comments
app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

app.get("/comments/new", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect("/comments");
})

app.post("/comments", (req, res) => {
    res.send("POST new comment")
})

app.get("/comments/:id", (req, res) => {
    res.send("GET one comment")
})


//Both put and patch have update functionality but "patch" is used when you have certain fields you need to update
//"put" on the other hand updates the whole resource which means that all the fields in the resource are sent
// in the request body, even if they are not modified
app.put("/comments/:id", (req, res) => {
    res.send("UPDATE specific comment")
})

app.patch("/comments/:id", (req, res) => {    
    res.send("UPDATE specific comment")
})

app.delete("/comments/:id", (req, res) => {
    res.send("DELETE specific comment")
})