const posts = require('./arrposts.js');

//creo una funzione index che restituisce un oggetto json con la lista dei post e il conteggio, partendo dall'array posts
function index(req, res) {
    res.json({
      data: posts,
      count: posts.length
    })
}

module.exports= {index}