const express = require("express");
const router = express.Router();
const poster = require('../Schema/postSchema');

router.post('/newPost', async(req, res) => {
    console.log("Request body: ", req.body);
    try{
        const data = new poster(req.body);
        const result = await data.save();
        if(result){
            res.json({
                message: "success",
                id: result._id,
            });
        }
        else{
            res.json({
                message: "Failure",
            });
        }
    }
    catch(err){
        console.log("error occured in the api", err);
        res.status(500).json({
            message: "Failure",
            error: err.message,
        });
    }
})

module.exports = router;