var express = require ('express');
var router = express.Router();
var query_dal = require('../dal/query_dal');

router.get('/query1',function(req,res){
    query_dal.getQuery1(req.query.movie_id, function(err,result){

        res.render('query/queries1', {q_result1: result
        });
    }) ;
});

router.get('/query2',function(req,res){
    query_dal.getQuery2(req.query.movie_id, function(err,result){

        res.render('query/queries2', {q_result1: result
        });
    }) ;
});

router.get('/query3',function(req,res){
    query_dal.getQuery3(req.query.movie_id, function(err,result){

        res.render('query/queries3', {q_result1: result
        });
    }) ;
});

router.get('/query4',function(req,res){
    query_dal.getQuery4(req.query.movie_id, function(err,result){

        res.render('query/queries4', {q_result1: result
        });
    }) ;
});

router.get('/query4',function(req,res){
    query_dal.getQuery4(req.query.movie_id, function(err,result){

        res.render('query/queries4', {q_result1: result
        });
    }) ;
});
router.get('/query5',function(req,res){
    query_dal.getQuery5(req.query.movie_id, function(err,result){

        res.render('query/queries5', {q_result1: result
        });
    }) ;
});

router.get('/query6',function(req,res){
    query_dal.getQuery6(req.query.movie_id, function(err,result){

        res.render('query/queries6', {q_result1: result
        });
    }) ;
});

router.get('/query7',function(req,res){
    query_dal.getQuery7(req.query.movie_id, function(err,result){

        res.render('query/queries7', {q_result1: result
        });
    }) ;
});
router.get('/query8',function(req,res){
    query_dal.getQuery8(req.query.movie_id, function(err,result){

        res.render('query/queries8', {q_result1: result
        });
    }) ;
});
router.get('/query9',function(req,res){
    query_dal.getQuery9(req.query.movie_id, function(err,result){

        res.render('query/queries9', {q_result1: result
        });
    }) ;
});
router.get('/query10',function(req,res){
    query_dal.getQuery10(req.query.movie_id, function(err,result){

        res.render('query/queries10', {q_result1: result
        });
    }) ;
});
module.exports = router;