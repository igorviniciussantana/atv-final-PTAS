var express = require('express');
var router = express.Router();
var Noticia = require('../models/noticia')

/* GET home page. */
router.get('/', async function(req, res, next) {
  noticias = await Noticia.find();

  res.json(noticias);
});


router.get('/visualizar', async function(req, res, next) {
  noticias = await Noticia.findById(req.query.id);

  res.json(noticias);
});


router.get('/contador', async function(req, res, next) {
  var contador = await Noticia.find().count();
  res.json({ quantidade: contador });

});

module.exports = router;