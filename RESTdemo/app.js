const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuid } = require('uuid');
uuid();

//These two are parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

const comments = [
    {
        id: uuid(),
        username: "Todd",
        comment: "LOOOL That is soooo funnyyyyy"
    },
    {
        id: uuid(),
        username: "Mercel",
        comment: "Oh wow what blazing bazongas is this!?!"
    },
    {
        id: uuid(),
        username: "Neppari",
        comment: "Absolutely thrilling~"
    },
    {
        id: uuid(),
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
    res.render("comments/new")
})

app.post("/comments/new", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments");
})


app.get("/comments/:id", (req, res) => {
    const { id } = res.params.id;
    const comment = comments.find(c => c.id === id);
    res.render("/comments/show", { comment })
})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = res.params.id;
    const comment = comments.find(c => c.id === id);
    res.render("/comments/edit", { comment })
})

//Both put and patch have update functionality but "patch" is used when you have certain fields you need to update
//"put" on the other hand updates the whole resource which means that all the fields in the resource are sent
// in the request body, even if they are not modified
app.put("/comments/:id", (req, res) => {
    const { id } = res.params.id;
    const comment = comments.find(c => c.id === id);
})

app.patch("/comments/:id", (req, res) => {    
    const { id } = res.params.id;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect("/comments");
})

app.delete("/comments/:id", (req, res) => {
    const { id } = res.params.id;
    comments = comments.filter(c => c.id !== id);
    res.redirect("/comments")
})