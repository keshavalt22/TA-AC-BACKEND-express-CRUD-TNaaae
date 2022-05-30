let express = require('express');
const User = require('../models/user');
let router = express.Router();


router.get("/new", (req, res) => {
    res.render('users');
})

router.post("/", (req, res, next) => {
    console.log(req.body);
    //save to database
    User.create(req.body, (err, createdUser) => {
        if(err) return next(err);
        res.redirect('/users/new');
    })


})

module.exports = router;