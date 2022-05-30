let express = require('express');
let router = express.Router();
let User = require('../models/User');


router.get("/new", (req, res) => {
    res.render('usersForm');
})

router.post("/", (req, res, next) => {
    console.log(req.body);
    //save to database
    User.create(req.body, (err, user) => {
        if(err) return res.redirect('/users/new');
        res.redirect('/');
    })


})

module.exports = router;