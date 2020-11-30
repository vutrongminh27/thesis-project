const express = require('express');
const db = require('../database/pro.db')
const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        console.log('fhajkfhaj');
        let results = await db.all();
        res.send(results);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }

});
module.exports = router;