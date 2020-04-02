var express = require('express');
var router = express.Router();

router.get('/viewCustomer', (req,res)=>{
    res.send("Hello customer");
})

module.exports = router;