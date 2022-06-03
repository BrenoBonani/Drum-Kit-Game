// DETECTING BUTTON PRESS


var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    }
}


// DETECTING KEYBOARD PRESS


document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);
});

function makeSound(key) {



    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }


}


// FUNCTION ANIMATION

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey)

        activeButton.classList.add("pressed");

    setTimeout(function () {

        activeButton.classList.remove("pressed");
    }, 100);

}






/* var audio = new Audio("sounds/tom-4.mp3");
           audio.play(); */


/* A primeira coisa para fazer os botões funcionarem, é adicionar um eventList que vai causar com que os botões sejam ativados.
Sendo assim, precisamos criar primeiramente uma função: function handleClick() { alert("I got clicked!"); } 

Essa função vai fazer com que o botão mostre um alerta. Mas para isso, precisamos achar esse botão dentro do documento HTML, usan
do document.querySelector. para adicionar um eventList para que quando apertamos o botão no site, chame a função handleClick().

Logo, precisamos escrever document.querySelector("button").addEventListener()

.addEventListener faz um função ser chamada (ativada) toda vez que um evento especifico acontecer no target que você colocou. E
além disso, tem dois parametros. Primeiro é o tipo (que pode ser click, load, online, message, reset para resetar um botão e etc).

Já o segundo parametro, é uma função javascrypt (JS), que será chamada quando o evento acontecer (neste caso, no click). A função,
é a que escrevemos, function handleClick(). 

Seguindo adiante, fizemos isso em apenas um botão. Sendo assim, precisamos adicionar nos outros 6 botões ainda. Para fazer isso e 
não ficar repetitivo, é bom adicionar um loop (for ou while). Neste caso, usei o for:

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (i = 0, i<numberOfDrumButtons; i++) {
    
}

Primeiro, precisei criar uma variável, para ficar melhor de colocar dentro do loop e selecionar todos os botões com querySelector
All(".drum").length;. Melhor selecionar a classe também, caso eu quisesse adicionar um outro botão no futuro e não conflitar. Além 
disso, precisei colocar i = 0, para depois adicionar dentro da minha função para ficar repetindo o loop dentro dela. 

Depois, usei o i<numberOfDrumButtons para quando colocar um fim no loop, quando i for menor que número de botões (por isso, usar o
.length, para ver quantos elementos tem a classe .drum). E por fim, adicionei i++ (para incrementar um i de cada vez).

É possível adicionar um audio, usando var audio = new Audio("url");. Dentro da url, colocamos o caminho, podendo ser uma pasta 
com sons em mp3. Depois disso, usamos junto audio.play(); para tocar dentro do nosso site. Ficando assim:

var audio = new Audio("url");
audio.play();

Nesse audio.play temos várias funções também, podendo pausar, podendo mutar. Basta pesquisar no MDN. Agora para continuar, preci
samos saber qual botão foi apertado. Para isso, podemos usar "this" e fica muito fácil de entender, basta usar dentro da função 
com console.log(this); e abrir o console no index.html e apertar os botões que vai falar exatamente qual está sendo apertado.

Dessa forma, começo a construir uma função de construção (construction function) e o especial dessa função, é que os nomes preci
sam estar maiúsculo, sempre a primeira letra. Isso difere ela da escrita em camelo, onde a inicial é minuscula e só a seguinte é
maiúscula.

Um exemplo:

function HouseKeeper(name, age, yearsOfExperience, languages) {
    this.name = name;
    this.age = age;
    this.yearsOfExperience = yearsOfExperience;
    this.languages = languages;
    
}

Aqui criei uma função de construção, no qual temos uma housekeeper onde podemos especificar o nome, idade, anos de experiência e 
os idiomas que ela fala. Dessa forma, o que precisamos fazer para adicionar isso dentro, fica mais simples:

var houseKeeper1 = new HouseKeeper("Angela", 27, 7, ["English"]);

Dessa forma, armazenamos com uma nova variável a nova housekeeper e podemos ver os detalhes dela com console.log(houseKeeper1);.

Para continuar com a ligação das teclas com o som, vamos fazer um switch. O switch leva o código para um trilho diferente, dependen
do do valor. Sendo assim, adicionamos o switch dessa forma:

var buttonInnerHTML = this.innerHTML;


       switch (buttonInnerHTML) {
           case "w":
               var audio = new Audio("sounds/crash.mp3");
               audio.play();
               break;
   
           case "a":
               var audio = new Audio("sounds/tom-3.mp3");
               audio.play();
               break;
   
           case "s":
               var audio = new Audio("sounds/tom-1.mp3");
               audio.play();
               break;
   
           case "d":
               var audio = new Audio("sounds/kick-bass.mp3");
               audio.play();
               break;
   
           case "j":
               var audio = new Audio("sounds/tom-2.mp3");
               audio.play();
               break;
   
           case "k":
               var audio = new Audio("sounds/tom-4.mp3");
               audio.play();
               break;
   
           case "l":
               var audio = new Audio("sounds/snare.mp3");
               audio.play();
               break;
   
           default: console.log(buttonInnerHTML);
   
       }


}
}

Dentro da nossa função, criamos outra variável, chamada buttonInnerHTML = this.innerHTML; para puxar exatamente quais botões vamos
apertar no site para sair os sons.  Dentro do switch, temos o case (caso), logo. Caso (case), seja "w", ele vai buscar dentro 
da var buttonInnerHTML e ver que se foi mesmo, então vai puxar a var new Audio e tocar a música que está ali dentro.

Agora, para adicionar as teclas também, precisamos criar ou addEventListener(""), agora chamado de "Keypress" (para teclas que são
apertadas no teclado). Logo a função ficará addEventListener("keypress", function() {});. Dessa forma, podemos adicionar um alert
na função, para checarmos se está funcionando:

addEventListener("Keypress" function() { 
    alert("Key was pressed!");
});

Dessa forma, ao cliar em qualquer tecla, a mensagem vai aparecer. Porém, é preciso ir mais fundo e colocar um evento (event) dentro
da função. Esse event, basicamente permite acessar o evento que acionou o EventListener. Dessa forma, podemos verificar com:

addEventListener("Keypress" function(event) { 
    console.log(event);
});

Dessa forma, quando formos no index.html, toda vez que apertamos uma tecla, vai mostrar no console dentro do chrome dev tools qual
tecla está sendo clickada. Bem como várias outras informações. Depois, que verificarmos, basta criarmos uma nova função para toda
a parte de botões, tanto clickando quanto apertando no teclado.

Essa função pode se chamar, function makeSound(key); (note que adicionamos um parametro, que no caso foi "key"). Depois, podemos
substituir a function do switch, pelo makeSound(key); e substituir dentro do switch () por "key" também. Depois linkamos o make
Sound(); com a variável buttonInnerHTML, ficando assim: makeSound(buttonInnerHTML);. Que é o innerHTML do botão que foi apertado.

Depois apagamos o console.log e adicionamos makeSound(event.key). Que usamos o event junto com .key. Caso uma tecla seja apertada,
a função vai enviar o evento para a propriedade key. Que depois vai enviar para dentro do switch e caso seja "w" ou "a" ou qualquer
outra letra que esteja dentro do nosso código, emitira um som.




*/


/* =============================
Aprendendo mais sobre obejtos
=============================== 

Com as variáveis (var), é possível criar uma var com várias propriedades dentro, como: 

var bellboy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: true,
    languages: ["France", "English"]
}

Logo, quando quisermos acessar o nome do bellboy1, basta fazermos isso:

alert("Hello, my name is " + bellboy1.name);

Note que eu coloquei "belboy1.nome", especificando que eu quero o nome dentro da variável bellboy1. Logo, criei um objeto dentro
da var.


*/


/*
==========================================
Higher order function e callback function
=========================================

Quando falamos de higher order function (funções de ordem superior), estamos referindo a função que pode assumir ou aceitar outras
funções como entradas (input). Exemplo:

document.addEventListener("keypress", respondToKey(event));

function respondToKey(event) {
    console.log("Key pressed.");
}

No exemplo, addEventListener é uma função de ordem superior, pois leva a função respondToKey como uma entrada (input). E a função,
"respondToKey", que é passada como uma entrada? Pois bem, ela é chamada de callback, que nos permite esperar que a função anterior
termine. Exemplo, esperar que um click event e então a função de retorno (callback), é chamada de volta e executada.

Por tanto, na função a cima, quando o botão detecta o click, ele callback a função "respondToKey". Quando isso acontece, podemos 
fazer que ele nos envie informações que só ele saberá quando o evento acontecer (quando o botão for clicado).




*/





/* ===============
MATH CALCULATOR 
=================

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2; 
}

function subtract(num1, num2) {
    return num1 - num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

calculator(2,5, subtract);

*/