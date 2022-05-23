let express = require("express");
let router = express.Router();


router.get("/", (req, res) => {
    let sports = ["cricket", "football", "volleyball"]
    res.render('index', {sports: sports})
})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router;