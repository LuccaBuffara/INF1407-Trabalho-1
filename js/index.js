var email = null;

const selected_pieces = []//new Array(2);

const allEqual = (arr) => arr.every( v => v === arr[0] )

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

reset_board = () => {

    let board = document.getElementById("board");
    let flippers = document.getElementsByClassName("flipper");

    for(i=0;i<flippers.length;i++){
            flippers[i].classList.remove('completed')
            flippers[i].classList.remove('flip')
    }

    shuffle_board(board);
}

select = (x) => {

    //Verifica se peça ja foi selecionada
    if(x.classList.contains('flip')){
        return;
    }

    console.log(selected_pieces.length)

    //Apenas 2 podem estar selecionadas a qualquer momento
    if(selected_pieces.length > 1){
        return
    }

    x.classList.toggle("flip");

    try {
        let selected_piece = x.querySelector('.back').firstChild.nextSibling.alt;
        
        if(selected_pieces.length < 1){

            selected_pieces.push(selected_piece);

        }else{

            selected_pieces.push(selected_piece);

            let flippers = document.getElementsByClassName("flipper");

            //Verifica se peças sao iguais
            if (allEqual(selected_pieces)){
                
                //Marca peças como 'completed' para manter elas viradas
                for(i=0;i<flippers.length;i++){
                    if(flippers[i].classList.contains('flip')){
                        flippers[i].classList.toggle('completed')
                    }
                }

                //Verifica se jogo terminou
                let comp = 0;
                for(i=0;i<flippers.length;i++){
                    if(flippers[i].classList.contains('completed')){
                        comp+=1;
                    }
                }

                if(comp == 4){
                    if(confirm("Jogo concluido! Deseja jogar novamente?")){
                        reset_board();  
                    }
                    
                }

                selected_pieces.length = 0;

            }else{
                
                //Espera 2 segundos e reseta board
                setTimeout(function(){ 
                    
                    //Reseta apenas as que nao possuem o valor 'completed'
                    for(i=0;i<flippers.length;i++){
                        if(flippers[i].classList.contains('flip') && !flippers[i].classList.contains('completed')){
                            flippers[i].classList.toggle('flip')
                        }
                    }
                    
                    selected_pieces.length = 0;

                }, 2000);
            }

            //Reseta array de peças selecionadas
            
        }

    } catch (error){
        // console.log(error)
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