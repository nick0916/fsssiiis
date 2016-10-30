var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {


       res.render('index', {});

  
});

router.get('/:date', function(req, res, next) {
   fs.readdir('./public/img/' + req.params.date, function(err, files) {
       if (err) throw err;
       
      var file = [];
      for(var i in files){
         if (files[i] == ".DS_Store") continue;
         file.push(files[i]);
      }

       res.render('picture', {'files': files, dir: req.params.date });
   });
  
});

module.exports = router;
