const express = require('express')
const router = express.Router()
const Author = require('../models/authors')
// All Author Route
router.get('/', function(req, res){
    res.render('authors/index')
})
//New Author Route
router.get('/new', function(req, res){
    res.render('authors/new', {author: new Author()})
})
//Create Author Route
router.post('/', function(req, res){
    res.send('Create');
})

module.exports = router