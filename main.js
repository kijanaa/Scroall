const modal = document.querySelector('.modal-container');
console.log(modal);


const btn = document.querySelector('.btn-success');
console.log(btn);

const code = document.querySelector('.code');
console.log(code);

const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', function() {
    console.log('defilement detecté');
});

let hauteur = document.documentElement.scrollTop;
console.log(hauteur, 'nombre de pixels detecté');

if (hauteur > 400) {
    console.log('affichage de la modale !');
    modal.style.display = 'flex';
};


btn.addEventListener('click', function() {
    console.log('bouton cliquéé');
});
code.style.display = 'blockk';

btn.style.display = 'none';

icone.addEventListener('click', function() {
    console.log('icone cliqué');
    modal.style.display = 'none';
})

window.removeEventListener('scroll', displayModal);


