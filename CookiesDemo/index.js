const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret")); // we can put in a "secret string" in the cookieParser. In production it should be like an actual secret. Like an environment variable for example.


app.get("/greet", (req, res) => {
    const { name = daniel } = req.cookies;
    res.send(`HEY THERE ${name}`);
})

app.get("/setname", (req, res) => {
    res.cookie("name", "stevie chicks");
    res.cookie("animal", "harlequin shrimp");
    res.send("OK SENT YOU A COOKIE");
})

app.get("/getsignedcookie", (req,res) => {
    res.cookie("fruit", "grape", { signed: true });
    res.send("OK SIGNED YOUR COOKIE");
})

app.get("/verifyfruit", (req,res) => {
    console.log(req.signedCookies);
    res.send(req.signedCookies);
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})