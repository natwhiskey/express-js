const express = require("express");
const router = express.Router();

router.get('/:id',(req, res)=>{
    res.send(`GET API 1`);
})

router.get('/',(req,res)=>{
    res.send('GET API');
});

router.post('/',(req, res)=>{
    res.send('POST API');
});

router.put('/:id',(req, res)=>{
    res.send('PUT API');
});

router.delete('/:id',(req, res)=>{
    res.send("DELETE API");
});
module.exports = router;