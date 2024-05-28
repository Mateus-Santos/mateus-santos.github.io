document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.cmenu');

  menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('is-active');
      menuBtn.classList.toggle('open');
      menu.classList.toggle('is-active');
  });
});

const profissoes = ["Professor de informática", "Desenvolvedor de Web", "Desenvolvedor de Software"]; // Texto a ser digitado.
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
        el.innerHTML = "";
        if(indicePalavra < profissoes.length){
          digitarTexto(profissoes[indicePalavra], indiceCaractere, indicePalavra);// Avançando para a próxima palavra.
        }
        else{
          digitarTexto(profissoes[0], 0, 0);
        }
      }, 500);
    }
  }
}

digitarTexto(profissoes[0], 0, 0); // Iniciar a digitação com a primeira palavra

document.addEventListener('DOMContentLoaded', function() {
  const certificado_button = document.querySelector('.ocultar-exibir');
  const certificado_img_occult = document.querySelector('.certificado-img-occult');

  certificado_button.addEventListener('click', function() {
    certificado_img_occult.classList.toggle('certificado-img-exibir');
  });
});