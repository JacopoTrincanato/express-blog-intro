/*Esercizio
Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità.
Testare nel browser.*/

//richiamo express nel file app.js
const express = require('express');
const app = express();

//creo il server
const host = 'http://127.0.0.1'
const port = 3000

//accedo al server 
app.listen(port, () => {
  console.log(`Example app listening on ${host}:${port}`)
})

//Configuro gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static('public'))

//Creo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res)=> {
    const markup = `
    <h1>Benvenuto nel mio blog</h1>
    <img src="/img/javascript-a-cosa-serve.webp" alt="Javascript">
    <img src="/img/Che-cose-HTML-Le-basi-di-Hypertext-Markup-Language.webp" alt="HTML">
    <img src="/img/Cos-e-il-css-768x403.webp" alt="CSS">
    <img src="/img/Caratteristiche-e-Differenza-tra-front-end-e-back-end-per-un-CMS.jpg" alt="FrontendsVSBackend">
    <img src="/img/immagine_react.jpg" alt="React">
    <img src="/img/node_express_img.jpg" alt="Node_express">
    `

  res.send(markup);
});

//chiamo la funzione index() dal controller dedicato ( controllers/posts.js )
const posts = require('./Controllers/posts.js')

app.get('/posts', posts.index)