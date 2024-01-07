const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
//console.log(redditData);

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/cats", (req, res) => {
    const cats = [
        "Blue", "Rocket", "Monkey", "Winston", "Stephanie"
    ]
    res.render("cats", { cats })
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render("subreddit", { ...data });    //spread into the object that we pass in. This will allow us to access individual properties in the data.json such as "name" or "description"
    } else {                                     // So in the "subreddit.ejs" instead of using <%= subreddit %>, I can use the property "name" <%= name %> as well as other properties.
        res.render("notfound", { subreddit });
    }
})

app.get("/rand", (req, res) => {
    const num = Math.floor(Math.random() * 10 ) + 1;
    res.render("random", {rand: num}) //What happens here is that we can pass information to the template
})


app.listen(8080, () => {
    console.log("Listening on port 8080");
})