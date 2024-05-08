function transiction(id_element){
  var cpt = document.getElementById(id_element);
      // Altere o ícone para o ícone de confirmação
      cpt.classList.remove("bi-copy");
      cpt.classList.add("bi-check-circle-fill");
      setTimeout(function() {
        cpt.classList.remove("bi-check-circle-fill");
        cpt.classList.add("bi-copy");
    }, 1000);
}

function copiarConteudo(conteudo, id_element) {
    navigator.clipboard.writeText(conteudo)
    .then(function() {
      console.log('Texto copiado com sucesso: ' + conteudo);  
      transiction(id_element);
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };