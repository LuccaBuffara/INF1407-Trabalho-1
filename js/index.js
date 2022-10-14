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

//Embaralha as imagens no grid
shuffle_board = (board) => {
    for (var i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);
    }
}

checkEmail = () => {
    email = document.getElementById("emailJogador").value;

    alert("Vamos jogar!");

    init_jogo()
}

init_jogo = () => {
    cleanScreen();
    let board = document.getElementById("board");

    shuffle_board(board);
    board.style = "";
}

select = (x) => {
    alert(x.alt);
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