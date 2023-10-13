const profissoes = ["Professor de informática", "Desenvolvedor de Software"]; // Texto a ser digitado.
const el = document.querySelector("#digitar"); //Escolhendo elemento no HTML para digitar.

function digitarTexto(texto, indiceCaractere, indicePalavra) { //Função recursiva percorrer caracter a caracter.
  if (indicePalavra < profissoes.length) {                     //Verificando se o indice da palavra ainda é menor que o array que possui as mesmas.
    if (indiceCaractere < texto.length) {                     // Verificando se o indice do caractere da palavra é maior que a palavra em si.
      el.innerHTML += texto.charAt(indiceCaractere);          // Digitando o caractere da palavra atraves do indice.
      indiceCaractere++;                                      // Avançando para o próximo caractere da palavra.;
      setTimeout(() => {                                      // Adicionando uma pausa para a digitação mais lenta e o texto não aparecer de imediato como se nada fosse digitado.
        digitarTexto(texto, indiceCaractere, indicePalavra);  // Chamando novamente a função porém, com um indice do caractere a mais.
      }, 100);                                              // Atraso de 100 milissegundos (1 segundo = 1000 milissegundos)
    } else { 
      // Avançando para a próxima palavra.
      setTimeout(() => {
        indiceCaractere = 0;                                 // Renovando indice do caractere para contar a próxima palavra.
        indicePalavra++;
        if(indicePalavra < profissoes.length){
          el.innerHTML = "";
          digitarTexto(profissoes[indicePalavra], indiceCaractere, indicePalavra);// Avançando para a próxima palavra.
        }
        else{
          el.innerHTML = "";
          digitarTexto(profissoes[0], 0, 0);
        }
      }, 500);
    }
  }
}

digitarTexto(profissoes[0], 0, 0); // Iniciar a digitação com a primeira palavra