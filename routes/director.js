var express = require ('express');
var router = express.Router();
var director_dal = require('../dal/director_dal');

router.get('/all',function(req,res, next)
{
    director_dal.getDirector(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('director/director_view_all', {directors: result});
        }


    })


});


router.get('/add',function(req,res){
    res.render('director/director_add');
});

router.get('/insert', function(req,res){
    director_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/director/all');
        }
    });
});


router.get('/edit',function(req,res){
    director_dal.getinfo(req.query.director_id, function(err,result){
        res.render('director/directorUpdate', {director: result[0][0],
            description_result: result[1]});
    }) ;
});

router.get('/update',function(req,res) {
    director_dal.update(req.query, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/director/all')
        }
    });
});

module.exports = router;