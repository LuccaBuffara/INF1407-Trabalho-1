var email = null;

createEmailInput = () => {
    document.getElementById("mainDiv").innerHTML += "<h3>Bem vindo ao jogo da memoria!</h3>";
    document.getElementById("mainDiv").innerHTML += "<label for='emailJogador'>Insira seu email:</label>";
    document.getElementById("mainDiv").innerHTML += "<input type='text' id='emailJogador'><br><br>";
    document.getElementById("mainDiv").innerHTML += "<input type='button' value='Jogar!' onclick=checkEmail()>";
}

cleanScreen = () => {
    document.getElementById("mainDiv").innerHTML = '';
}

checkEmail = () => {
    email = document.getElementById("emailJogador").value;
    alert("Vamos jogar!");
    cleanScreen();
}

class Piece {
    //imgSrc - imagem da peca
    //pos - posicao no grid da peca
    //itemClass - identificador pra saber a qual item a peca representa
    constructor(imgSrc, pos, itemClass){
        this.imgSrc = imgSrc;
        this.pos = pos;
        this.itemClass = itemClass;
    }
}

//Jogo inicio pede email e verifica se pode jogar

//Inicializa as 6 pecas indicando suas posicoes imagens e

main = () => {
    if(email === null){
        createEmailInput();
    }else{

    }
}

main()