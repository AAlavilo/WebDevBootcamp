const express = require("express");
const router = express.Router();

//This is only for practice purposes to see how middleware works.
router.use((req, res, next) => {
    if(req.query.isAdmin){
        next();
    }
    res.send("SORRY NOT AN ADMIN!");
});

router.get("/topsecret", (req, res) => {
    res.send("THIS IS TOP SECRET");
});

router.get("/deleteeverything", (req, res) => {
    res.send("OK DELETED IT ALL");
});

module.exports = router;