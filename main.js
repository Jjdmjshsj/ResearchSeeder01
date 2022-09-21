function init(){
let lupa = document.querySelector('.lupa');
let sms = document.querySelector('.sms');
let perfil = document.querySelector('.perfil');
lupa.addEventListener('click',actionEnter);
sms.addEventListener('click',actionEntersms);
perfil.addEventListener('click',actionEnterPerfil);
}

function actionEnter(){
let pesquisa = document.querySelector('.pesquisa');
let close = document.querySelector('.close');
let perfil = document.querySelector('.perfil');
let menu2 = document.querySelector('.menu2');
let caixa = document.querySelector('.caixa');
let titulo = document.querySelector('.titulo');
let lupa = document.querySelector('.lupa');
let menu3 = document.querySelector('.menu3');
let setaEsquerda = document.querySelector('.esquerda');
setaEsquerda.addEventListener('click',actionClose);
close.addEventListener('click',reset);
pesquisa.style.display = 'flex';
close.style.display = 'flex';
perfil.style.display = 'none';
menu2.style.display = 'flex';
caixa.style.display = 'flex';
lupa.style.display = 'none';
titulo.style.display = 'none';
setaEsquerda.style.display = 'flex';
menu3.style.display = 'none';
}

function reset(){
let pesquisa = document.querySelector('.pesquisa');
    pesquisa.value ='';
}

function actionClose(){
let pesquisa = document.querySelector('.pesquisa');
let close = document.querySelector('.close');
let perfil = document.querySelector('.perfil');
let menu2 = document.querySelector('.menu2');
let caixa = document.querySelector('.caixa');
let titulo = document.querySelector('.titulo');
let lupa = document.querySelector('.lupa');
let menu3 = document.querySelector('.menu3');
let setaEsquerda = document.querySelector('.esquerda');
pesquisa.style.display = 'none';
close.style.display = 'none';
perfil.style.display = 'flex';
menu2.style.display = 'none';
caixa.style.display = 'none';
lupa.style.display = 'flex';
lupa.style.animationName ='lupa';
titulo.style.display = 'inline';
setaEsquerda.style.display = 'none';
menu3.style.display = 'flex';
menu3.style.animationName ='menu3'
}

function actionEntersms(){

let menu4 = document.querySelector('.menu4');
let sms = document.querySelector('.sms');
let visibility = document.querySelector('.visibility');
visibility.addEventListener('click',actionClosesms);
menu4.style.display = 'inline';
sms.style.display = 'none';
visibility.style.display = 'flex';
  
}
function actionClosesms(){
let menu4 = document.querySelector('.menu4');
let sms = document.querySelector('.sms');
let visibility = document.querySelector('.visibility');
menu4.style.display = 'none';
sms.style.display = 'flex';
visibility.style.display = 'none';
  
}

function actionEnterPerfil(){
  
let cloud = document.querySelector('.cloud');
let loading = document.querySelector('.loading');
cloud.style.display = 'none';
loading.style.display = 'flex';
}

window.addEventListener('load',init);

