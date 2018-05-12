var express = require ('express');
var router = express.Router();
var actor_dal = require('../dal/actor_dal');

router.get('/all',function(req,res, next)
{
    actor_dal.getActor(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('actor/actor_view_all', {actors: result});
        }


    })


});


router.get('/add',function(req,res){
    res.render('actor/actor_add');
});

router.get('/insert', function(req,res){
    actor_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/actor/all');
        }
    });
});


router.get('/edit',function(req,res){
    actor_dal.getinfo(req.query.actor_id, function(err,result){
        res.render('actor/actorUpdate', {actor: result[0][0]});
    });
});

router.get('/update',function(req,res) {
    actor_dal.update(req.query, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/actor/all')
        }
    });
});

router.get('/delete', function(req, res) {
    actor_dal.delete(req.query.actor_id, function(err, result){
        if(err) {
            res.render('actor/actor_view_all', {actor: result, was_successful: false});
        }
        else {
            // res.redirect(302, '/actor/all');
            //res.redirect(302, '/actor/all', { was_successful: true})
            actor_dal.getActor(function (err, result) {
                res.render('actor/actor_view_all', {actors: result, was_successful: true});
            });
        }
    });
});

module.exports = router;