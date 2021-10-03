const express = require('express')
const router = new express.Router()
const {fetchData} = require('../service/recordService');
let {recordValidation} = require("../middlewares/requestValidations");

/**
 * @description fetch records data
 * @param {Request} req
 * @param {Response} res
 */
router.post(
    '/records',
    recordValidation,
    fetchData
)

module.exports = router;
