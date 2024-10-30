//Creo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
const posts = [
    {
        titolo: "Introduzione a JavaScript",
        contenuto: "JavaScript è un linguaggio di programmazione utilizzato per rendere le pagine web interattive.",
        immagine: "../public/img/javascript-a-cosa-serve.webp",
        tags: ["JavaScript", "Programmazione", "Web Development"]
    },
    {
        titolo: "Le Basi di HTML",
        contenuto: "HTML è il linguaggio usato per strutturare il contenuto delle pagine web.",
        immagine: "../public/img/Che-cose-HTML-Le-basi-di-Hypertext-Markup-Language.webp",
        tags: ["HTML", "Web Development", "Struttura"]
    },
    {
        titolo: "CSS per lo Stile",
        contenuto: "CSS è utilizzato per aggiungere stile e layout ai documenti HTML.",
        immagine: "../public/img/Cos-e-il-css-768x403.webp",
        tags: ["CSS", "Design", "Stile"]
    },
    {
        titolo: "Sviluppo Frontend vs Backend",
        contenuto: "Scopri la differenza tra lo sviluppo frontend e backend e come collaborano.",
        immagine: "../public/img/Caratteristiche-e-Differenza-tra-front-end-e-back-end-per-un-CMS.jpg",
        tags: ["Frontend", "Backend", "Web Development"]
    },
    {
        titolo: "Introduzione a React",
        contenuto: "React è una libreria JavaScript popolare per la creazione di interfacce utente.",
        immagine: "../public/img/immagine_react.jpg",
        tags: ["React", "JavaScript", "Frontend"]
    },
    {
        titolo: "Costruire API con Node.js",
        contenuto: "Node.js permette di costruire API veloci e scalabili per applicazioni web.",
        immagine: "../public/img/node_express_img.jpg",
        tags: ["Node.js", "Backend", "API"]
    }
];

//creo una funzione index che restituisce un oggetto json con la lista dei post e il conteggio, partendo dall'array posts
function index(req, res) {
    res.json({
      data: posts,
      count: posts.length
    })
}

module.exports= {index}