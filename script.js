//declarando o id (DOM)
 
const btnMob = document.querySelector('#btnMob');
 
function toggleMenu(){
    const navbar = document.querySelector(".nav");
    navbar.classList.toggle("active");
}
btnMob.addEventListener('click', toggleMenu);

// Para declarar as variaveis podemos usar o const ou let 
const $html = document.querySelector('html')
const $checkBox = document.querySelector('#switch')
 
$checkBox.addEventListener('change', function(){
    $html.classList.toggle('light-theme')
})

/*criando o slideShow */

//declarando o objeto de imagens em um array
let imagens =['img/halloween2.jpg', 'img/halloween3.jpg', 'img/halloween4.jpg'];
//declarando a posição de inicio
let Index =0;
//declarando o tempo que as imagens vão passar em milesegundos
let time =3000;

//criando a função chamanda slideshow

function slideShow(){
    //pegando o id da imagem no html para poder carregar as imagens usando DOM
    document.getElementById('img-halloween2').src =imagens[Index];
    //incremento das imagens e sua posição
    Index++;

    //se a posição da imagem for imagem e a quantidade de imagens no array

    if(Index == imagens.length){
        Index = 0;
    }
    //setTimeout é uma função que executa o tempo, nesse caso vai chamar função e aplicar o time
    setTimeout('slideShow()',time)
}
//executar toda a função
slideShow();

//time
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();

m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}


