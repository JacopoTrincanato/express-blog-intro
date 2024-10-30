/*Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.



Testare nel browser.*/

//richiamo express nel file app.js
const express = require('express');
const app = express();

const host = 'http://127.0.0.1'
const port = 3005

//accedo al server 
app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`)
})

//Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static('public'))

//Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res)=> {

  res.send('<h1>Benvenuto nel mio blog</h1>');
});

//La rotta relativa ai post dovrà chiamare la funzione index() dal controller dedicato ( controllers/posts.js )
const posts = require('./Controllers/posts.js')

app.get('/posts', posts.index)