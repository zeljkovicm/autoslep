
anime.timeline({loop: true})
    .add({
        targets: '.moving-letters .words',
        scale: [14,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
    targets: '.moving-letters',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 3000
})

/* Gallery */

// Ovde cuvamo indeks slike koja se trenutno prikazuje
var current = 0;

/* Funkcija prikazuje prethodnu ili sledecu sliku u zavisnosti od indeksa koji joj se preosledjuje
  -1 za prethodnu sliku, 1 za sledecu sliku
*/
function nextPhoto(n) {
    showPhoto(current += n);
}

// Funkcija vraca
function setPhoto(n) {
    //Dodeljuje tekucem inekdu indeks slike za koju je funkcija pozvana
    current = n;
    // Prikazujemo sliku
    showPhoto(n);
}

function showPhoto(n) {

    var photos = document.getElementsByClassName("photo");  // Vraca niz slika klase "slika-u-galeriji"
    var thumbnails = document.getElementsByClassName("thumbnail"); // Vraca niz malih slika u thumbnail-u
    var title = document.getElementById("title");

    // Ako je indeks slike koja treba da se prikaze veci od duzine niza, prikazujemo prvu sliku u nizu
    if (n > photos.length-1) {
        current = 0;
    }

    // Ukoliko je indeks slike koja treba da se prikaze manji od 1, prikazujemo poslednju sliku u nizu
    if (n < 0) {
        current = photos.length-1;
    }

    //Prolazimo kroz niz slika i sve slike sakrivamo da se ne vide
    for (var i = 0; i < photos.length; i++) {
        photos[i].style.display = "none";
    }

    //Prolazimo kroz niz slicica u thumbnail-u i brisemo im active iz imena klase
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    //Postavljamo tekucu sliku da je vidljiva i aktivna u thumbnail-u
    photos[current].style.display = "block";
    thumbnails[current].className += " active";
    title.innerHTML = thumbnails[current].alt;
}

//Validacija forme
(function () {
    'use strict'
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {

        // sklanjamo poruku o uspesnosti
        var div = document.getElementById("form-message-success");

        if( div.style.display == "inline" ){
            div.style.display = ""; 
        }

        if (!form.checkValidity()) {  // proverava da li forma ima ispunjene validacije i postavlja one koje su validne na valid, a one koje nisu na invalid
            event.preventDefault()
            event.stopPropagation()

            document.getElementById("contact").scrollIntoView();
        }

          form.classList.add('was-validated')
        }, false);
      
})()



