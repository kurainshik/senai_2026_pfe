const corpo = document.querySelector('body');
const titulo = document.querySelector('.titulo')
const container = document.querySelector('#container')

corpo.style.backgroundColor = '#cf2fff';
corpo.style.color = 'white';
titulo.textContent = 'adicionando elementos via JS';
container.style.width = '94%';
container.style.margin = '0 auto';
container.style.backgroundColor = '#85ff43';

let anuncio = '<h2>cur  so dev com ia - novidade!!!</h2> '
container.innerHTML += anuncio;