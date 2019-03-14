const express = require("express");
const router = express.Router();
const {
    check
} = require("express-validator/check");


const searchController = require("../controller/searchController");

router.get('/testing', (req, res) => {
    res.send('micro-service working');
});

router.post("/search", searchController.search);

module.exports = router;