// First we need to run a couple of command in the terminal. I am using bash.
// first command is "npm init -y" ("npm init" should work just as fine but you might get some additional questions). This command initializes the package.json
// second command is "npm i express" which installs the express package to your node_modules.

const express = require("express");  // Here we need to require express to be able to use it
const app = express();               // Here we actually use the express and store it in the variable called "app". Now "app" includes tons of different methods.


// We have access to two different parameters that are automatically passed in. "req" which represents the request and "res" which represents the incoming response
// they can be named anything you'd lke but for consistency I am using req and res.
app.use((req, res) => {
    console.log("We got a new request!");
    //res.send("Hello, we got your request! This is a response!"); // Here we use the send-method to send our response
    //res.send( { color: "red" } );                                // And here we send a JavaScript object as a response
    //res.send("<h1>This is my webpage</h1>");                     // We can also send a whole html element too.
})

app.get("/", (req, res) => {
    res.send("This is the homepage");
})

app.post("/cats", (req, res) => {
    res.send("this is different from get")
})

app.get("/cats", (req, res) => {
    res.send("MEOW!");
})

app.get("/dogs", (req, res) => {
    res.send("woof");
})

app.get("*", (req, res) => {                    //This is a bit of a special case and it's important to have this after all the other paths.
    res.send("I don't know that path")          //that is because in the case there is no clear path (like "/cows" for example) you can have this as a "error message"
})                                              //Routes are matched in order so if this one was at the top then all the routes would lead to this response.

app.listen(8080, () => {
    console.log("Listening on port 8080")
})