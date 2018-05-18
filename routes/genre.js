var express = require ('express');
var router = express.Router();
var genre_dal = require('../dal/genre_dal');

router.get('/all',function(req,res, next)
{
    genre_dal.getGenre(function (err,result) {
        if(err) {

            console.log(err);
            res.send(err);

        }else {
            console.log(result);
            res.render('genre/genre_view_all', {genres: result});
        }


    })


});


router.get('/add',function(req,res){
    res.render('genre/genre_add');
});

router.get('/insert', function(req,res){
    genre_dal.insert(req.query, function(err,result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.redirect(302, '/genre/all');
        }
    });
});


router.get('/edit',function(req,res){
    genre_dal.getinfo(req.query.genre_id, function(err,result){
        res.render('genre/GenreUpdate', {genre: result[0][0]});
    }) ;
});

router.get('/update',function(req,res) {
    genre_dal.update(req.query, function (err, result) {
        if (err) {
            res.send(err);
        }
        else {
            res.redirect(302, '/genre/all')
        }
    });
});

router.get('/delete', function(req, res) {
    genre_dal.delete(req.query.genre_id, function(err, result){
        if(err) {
            res.render('genre/genre_view_all', {genre: result, was_successful: false});
        }
        else {
            // res.redirect(302, '/genre/all');
            //res.redirect(302, '/genre/all', { was_successful: true})
            genre_dal.getGenre(function (err, result) {
                res.render('genre/genre_view_all', {genres: result, was_successful: true});
            });
        }
    });
});

module.exports = router;