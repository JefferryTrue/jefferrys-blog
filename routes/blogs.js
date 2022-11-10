var express = require('express');

var router = express.Router();

var BLOGTable = require('../utils/data_base/func/Blog.js')

router.get('/test',function(req,res,next){
    res.send("success");
})

router.post('/insertBlog',(req,res) => {
    var Blog = [];
    Blog.push(req.body.Title);
    Blog.push(req.body.Author);
    Blog.push(req.body.Context);
    Blog.push(req.body.PubTime);
    Blog.push(req.body.Type);
    BLOGTable.Insert_blog(Blog,(err1,res1) => {
        if(err1){
            console.log('[INSERT ERROR] - ', err1.message);
            res.send(err1)
        }
        else{
            console.log('[Blog Add Successfully!]')
            res.sendStatus(200);
        }
    });
})

router.post('/deleteBlog',(req,res) => {
    BLOGTable.Delete_blog(req.body.BlogId,(err1,res1)=>{
        if(err1){
            console.log('[DELETE ERROR] - ',err1.message);
            res.send(err1);
        }
        else{
            console.log('Blog Deleted Successfully!');
            res.sendStatus(200);
        }
    });
})

router.post('/updateBlog',(req,res) => {
    var Blog = [];
    Blog.push(req.body.Title);
    Blog.push(req.body.Author);
    Blog.push(req.body.Context);
    Blog.push(req.body.PubTime);
    Blog.push(req.body.Type);
    Blog.push(req.body.BlogId);
    BLOGTable.Update_blog(Blog,(err1,res1) => {
        if(err1){
            console.log('[UPDATE ERROR] - ',err1.message);
            res.send(err1);
        }
        else{
            console.log('Blog UPDATED Successfully!');
            res.sendStatus(200);
        }
    })
})

module.exports = router