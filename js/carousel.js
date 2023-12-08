/*
Consegna:
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra. 
*/

// VARIABILI PREIMPOSTATE
const images = [ 
    {   
        image: "img/01.webp", 
        title: "Marvel\'s Spiderman Miles Morale", 
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.", 
    }, { 
        image: "img/02.webp", 
        title: "Ratchet & Clank: Rift Apart", 
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.", 
    }, { 
        image: "img/03.webp", 
        title: "Fortnite", 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, { 
        image: "img/04.webp", 
        title: "Stray", 
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city", 
    }, { 
        image: "img/05.webp", 
        title: "Marvel's Avengers", 
        text: "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.", 
    }];

// ELEMENTI DOM
const imgContainer = document.querySelector(".img-container");
let activeImg = 0;

// FUNZIONI
const showItem = (i) => {
    // Calcola l'indice corretto con il ciclo infinito
    activeImg = (i + images.length) % images.length;

    // Rimuovi tutti gli elementi figlio dal container
    imgContainer.innerHTML = "";

    // Crea l'elemento immagine e aggiungilo al container solo se l'array images contiene l'elemento
    if (images[activeImg]) {
        const imgElement = document.createElement("div");
        imgElement.classList.add("item", "active");
        imgElement.innerHTML = `<img src="${images[activeImg].image}" alt="img">`;
        imgContainer.append(imgElement);

        // Crea elementi per il titolo e il testo
        const titleElement = document.createElement("div");
        titleElement.classList.add("title");
        titleElement.innerHTML = images[activeImg].title;

        const textElement = document.createElement("div");
        textElement.classList.add("text");
        textElement.innerHTML = images[activeImg].text;

        // Aggiungi titolo e testo sopra l'immagine nel container
        imgContainer.append(titleElement);
        imgContainer.append(textElement);
    }
};

const updateSlider = () => {
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    prevBtn.addEventListener("click", () => showItem(activeImg - 1));
    nextBtn.addEventListener("click", () => showItem(activeImg + 1));
};

// Inizializza il carosello mostrando la prima immagine
showItem(activeImg);

// Aggiorna il carosello
updateSlider();





/*
// dichiarare arrey immagini carosello
const items = document.getElementsByClassName("item");
console.log(items);

// dichiaro il nome degli idem dentro al array
let activeImg = 0;

// dichiaro i pulsanti di navigazione
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// creo evento al click per pulsante next

next.addEventListener("click", function(){

    if (activeImg < items.length -1) {
        // se click pulsante next togli la classe active dall'item
        items[activeImg].classList.remove("active");
        // incrementiamo l'indice di selezione dell'item
        activeImg++;
        console.log(activeImg);
        // assegno la classe item all'elemento corrispondente all'indice
        items[activeImg].classList.add("active");
        // se gli item array sono finiti nascondere pulsante next
        if (activeImg === items.length -1) {
            next.classList.add("hidden");
        }

        if (activeImg > 0) {
            prev.classList.remove("hidden");
        };
    }
});

// ripeto il processo al contrario per pulsante prev

prev.addEventListener("click", function(){

    if (activeImg <= items.length -1) {
        // se click pulsante next togli la classe active dall'item
        items[activeImg].classList.remove("active");
        // incrementiamo l'indice di selezione dell'item
        activeImg--;
        console.log(activeImg);
        // assegno la classe item all'elemento corrispondente all'indice
        items[activeImg].classList.add("active");
        // se gli item array sono finiti nascondere pulsante next
        if (activeImg === 0) {
            prev.classList.add("hidden");
        }

        if (activeImg < items.length -1) {
            next.classList.remove("hidden");
        };
    }
});
*/


