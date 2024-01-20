const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require("./AppErr");

// For every single thing you have in app.use, it will be called with every single request.
app.use(morgan("tiny"));  // way to tell express that "use this middleware: morgan"
app.use((req, res, next) => {
    console.log(req.method.toUpperCase());
    next();
});

app.use("/dogs", (req, res, next) => {   // you can specify certain paths where the specific middleware runs
    console.log("DOGGGGSSSS");
    res.send("WOOF WOOF");
})

/*
app.use((req, res, next) => {
    console.log("THIS IS MY FIRST MIDDLEWARE!!");
    next();               // next() makes it so that it will run the next middleware after the first one. If there is no "next()" here then this is the end of the line.
});
app.use((req, res, next) => {
    console.log("THIS IS MY SECOND MIDDLEWARE!!");
    next();
});
*/

app.get("/", (req, res) => {
    
});

app.get("/dogs", (req, res) => {
   console.log("WOOFAS!");
   next(); 
});

const verifyPassword = (req, res, next) => {        // This is NOT how you do authentication!!!!
    const { password } = req.query;                 // This is only for the purposes of learning
    if (password === "chickennugget") {             
        next();
    }
    throw new AppError("password required", 401);
}

app.use((req, res) => {
    res.status(404).send("NOT FOUND");      // since the middleware is located at the bottom of the file it will run if nothing was run before it!
})

// Here are some error handling examples:
app.get("/error", (req, res) => {
    chicken.fly();                      //here we are sending a request to /error and try to call something that doesn't exist in the code. We are going to get a reference error
});

app.get("/admin", (req, res) => {
    throw new AppError("You are not an Admin", 403);
});

// When writing your own error handlers you can give 4 arguments instead of three or two (err, req, res, next)
/*app.use((err, req, res, next) => {
    console.log("**************************************************");
    console.log("***********************ERROR**********************");
    console.log("**************************************************");
    console.log(err);
    next(err); //by passing the "err" to next(), you can pass the error to the next error handling middleware instead of just to the next middleware
})
*/

app.use((err, req, res, next) => {
    const { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log("App is running on port 3000");
})