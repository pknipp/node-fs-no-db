const express = require('express');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {res.json({message: "Hello world"});}));

module.exports = router;
