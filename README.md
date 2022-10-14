<p align="center">
  <a href="https://t1progweb.vercel.app">
    <img src="images/screenshot.png">
  </a>
</p>

&nbsp;

# T1 INF1407 Prog. Web - Lucca Buffara de Almeida

Para esse primeiro trabalho foi desenvolvido um jogo da memória que pode ser jogado com 3,4 ou 5 peças diferentes. 

## Como jogar 

Ao entrar no link que contem o jogo o usuario deve inserir um email no formato priplanus: Ex.: \user[gmail]. O usuario tambem pode aumentar o numero de peças do jogo. Apos terminar o jogo o usuario pode recomecar o jogo novamente com o mesmo numero de peças. Para iniciar o jogo com um numero diferente de peças o usuario deve recarregar a pagina.

Se o usuario errar o par em uma rodada o jogo ira esperar 2 segundos para virar as peças de cabeça para baixa novamente. Isso para dar tempo que o jogador consiga lembrar a posição das peças. Quando o usuario acerta um par as peças se mantem viradas para cima.

## Pontos interessantes do funcionamento do jogo

Inicialmente o jogo verifica se o email fornecido esta no formato Priplanus utilizando um regex que pode ser encontrado em js/index.js. 

```js
let email_regex = /^\\([a-zA-z])+\[(?:(?:\w+\|\w+)+|(?:\w+)+)+\]$/g
```

Ao iniciar o jogo o div de id='board' em index.html é populado com as peças do jogo. Cada peca é representada por um componente que poder ser encontrado como um comentario em js/index.js na função add piece. Este componente contem a imagem do cardback e da imagem forntal da peça. 

```html
    <div class="flip-container">
    <div class="flipper"  onclick="select(this)">
        <div class="front">
          <img src="images/card_back.png" width="200" height="250"  onclick="select(this)">
        </div>
        <div class="back">
          <img src="images/mona_lisa.jpg" 
          width="200" height="250">
        </div>
    </div>
  </div> 
```

A função principal que contem a maioria da logica do jogo é a select() que pode ser encontrada js/index.js. Essa funcao é executada sempre que uma peça é selecionada.

O jogo contem imagens na pasta images/ que sao utilizadas para as peças e um card back. Ao selecionar uma peça para ser revelada ocorre uma animação que vira a peça para cima. A mesma animacao ocorre quando a carta é virada para baixo.
  
