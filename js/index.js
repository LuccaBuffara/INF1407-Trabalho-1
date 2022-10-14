var images = [
    'mona_lisa.jpg',
    'monet.jpg',
    'picasso.jpeg',
    'rembrandt.jpg',
    'van_gogh.jpg'
]

var email = null;
var num_pieces = 0;

//Regex Priplanus
let email_regex = /^\\([a-zA-z])+\[(?:(?:\w+\|\w+)+|(?:\w+)+)+\]$/g

//Array para armazenar peças selecionadas
const selected_pieces = []

//Verifica se todos elementos em um array sao iguais
//Utilizado para indicar que o jogo terminou
const allEqual = (arr) => arr.every( v => v === arr[0] )

hideMenu = () => {
    document.getElementById("mainDiv").style = 'display: none;';
}

//Embaralha as imagens no grid
shuffle_board = (board) => {
    for (var i = board.children.length; i >= 0; i--) {
        board.appendChild(board.children[Math.random() * i | 0]);
    }
}

//Verifica se email esta no formato Priplanus
checkEmail = () => {
    email = document.getElementById("emailJogador").value;

    if(email.match(email_regex)){
        // alert("Vamos jogar!");
        // init_jogo()
        return 1;
    }
    return 0;
}

//Adciona o seguinte html do componente da imagem
addPiece = (board, imgSrc) => {
//     <div class="flip-container">
//     <div class="flipper"  onclick="select(this)">
//         <div class="front">
//           <img src="images/card_back.png" width="200" height="250"  onclick="select(this)">
//         </div>
//         <div class="back">
//           <img src="images/mona_lisa.jpg" 
//           width="200" height="250">
//         </div>
//     </div>
//   </div> 

    board.innerHTML += '\n\n<div class="flip-container">\n<div class="flipper" onclick="select(this)">\n<div class="front">\n<img src="images/card_back.png" width="200" height="250">\n</div>\n<div class="back">\n<img src="images/' +imgSrc+'" width="200" height="250">\n</div>\n</div>\n</div>\n\n'
}


init_board = () => {
    let board = document.getElementById("board");

    for(i=0; i<num_pieces;i++){
        addPiece(board, images[i]);
        addPiece(board, images[i]);
    }

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

//Ativada sempre que uma peça é selecionada
//Funcao principal do jogo
select = (x) => {

    //Verifica se peça ja foi selecionada
    if(x.classList.contains('flip')){
        return;
    }

    //Apenas 2 peças podem estar selecionadas
    if(selected_pieces.length > 1){
        return
    }

    //Atributo de classe flip faz a imagem 'flipar'
    x.classList.toggle("flip");

    try {
        //Seleciona a imagem que de fato foi selecionada
        //Para comparacao se as imagens sao iguais escolhi utilizar o atributo src das imagens
        //Ex: Peças da Mona Lisa tem src: images/mona_lisa.jpg
        let selected_piece = x.querySelector('.back').firstChild.nextSibling.src;
        
        if(selected_pieces.length < 1){

            selected_pieces.push(selected_piece);

        }else{

            selected_pieces.push(selected_piece);

            let flippers = document.getElementsByClassName("flipper");

            //Verifica se peças sao iguais - se true usuario acertou o par
            if (allEqual(selected_pieces)){
                
                //Marca peças como 'completed' para manter elas viradas
                for(i=0;i<flippers.length;i++){
                    if(flippers[i].classList.contains('flip')){
                        flippers[i].classList.add('completed')
                    }
                }

                //Verifica se jogo terminou
                let comp = 0;
                for(i=0;i<flippers.length;i++){
                    if(flippers[i].classList.contains('completed')){
                        comp+=1;
                    }
                }

                //Termino do jogo
                if(comp == num_pieces*2){
                    if(confirm("Jogo concluido! Deseja jogar novamente?")){
                        reset_board();  
                    }
                }
                selected_pieces.length = 0;

            }else{

                //Espera 2 segundos e resetar board para que usuario possa memorizar a posicao da peça

                setTimeout(function(){ 
                    //Reseta apenas as que nao possuem o valor 'completed'
                    for(i=0;i<flippers.length;i++){
                        if(flippers[i].classList.contains('flip') && !flippers[i].classList.contains('completed')){
                            flippers[i].classList.toggle('flip')
                        }
                    }
                    
                    //Reseta array de peças selecionadas
                    selected_pieces.length = 0;

                }, 2000);
            }            
        }

    } catch (error){
        //Debug
        // console.log(error)
    }
}

initGame = () => {

    num_pieces = document.getElementById("cards").value;

    if(checkEmail()){
        alert("Vamos jogar!");
        hideMenu();
        init_board();
    }else{  
        alert("Email invalido! Seu email deve estar no formato Priplanus: '\\usuario[domínio|domínio|...|domínio]'")
    }
}