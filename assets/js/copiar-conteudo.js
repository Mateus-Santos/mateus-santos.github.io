function copiarEmail() {
    navigator.clipboard.writeText(5575987028960)
    .then(function() {
      console.log('Texto copiado com sucesso: ' + 5575987028960);
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };