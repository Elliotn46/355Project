var express = require ('express');
var router = express.Router();
var movie_dal = require('../dal/movie_dal');

router.get('/all',function(req,res, next)
{
    movie_dal.getMovie(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('movie/movie_view_all', {movies: result});
        }


    })


});


router.get('/add',function(req,res){
    movie_dal.getRating(function(err,result){
        if (err){
            res.send(err);
        }
        else{
            res.render('movie/movie_add', {movie_rating_result: result});
        }
    });
});

router.get('/insert', function(req,res){
    movie_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/movie/all');
        }
    });
});


router.get('/edit',function(req,res){
    movie_dal.getinfo(req.query.movie_id, function(err,result){

        res.render('movie/MovieUpdate', {movie_result: result[0][0],
            movie_rating_result: result[1]});
    }) ;
});

router.get('/update',function(req,res) {
    movie_dal.update(req.query, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/movie/all')
        }
    });
});

router.get('/delete', function(req, res) {
    movie_dal.delete(req.query.movie_id, function(err, result){
        if(err) {
            res.render('movie/movie_view_all', {movie: result, was_successful: false});
        }
        else {
            // res.redirect(302, '/movie/all');
            //res.redirect(302, '/movie/all', { was_successful: true})
            movie_dal.getMovie(function (err, result) {
                res.render('movie/movie_view_all', {movies: result, was_successful: true});
            });
        }
    });
});
module.exports = router;