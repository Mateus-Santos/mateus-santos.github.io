function copiarTelefone() {
    navigator.clipboard.writeText(5575987028960)
    .then(function() {
      console.log('Texto copiado com sucesso: ' + 5575987028960);
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };

function copiarEmail1() {
    navigator.clipboard.writeText("mateus11_santos@hotmail.com")
    .then(function() {
      console.log('Texto copiado com sucesso: ' + "mateus11_santos@hotmail.com");
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };

function copiarEmail2() {
    navigator.clipboard.writeText("mateusantosms11@gmail.com")
    .then(function() {
      console.log('Texto copiado com sucesso: ' + "mateusantosms11@gmail.com");
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };

function copiarGithub() {
    navigator.clipboard.writeText("https://github.com/Mateus-Santos/Mateus-Developer")
    .then(function() {
      console.log('Texto copiado com sucesso: ' + "https://github.com/Mateus-Santos/Mateus-Developer");
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };

function copiarPortfolio() {
    navigator.clipboard.writeText("https://mateus-santos.github.io/Mateus-Developer/")
    .then(function() {
      console.log('Texto copiado com sucesso: ' + "https://mateus-santos.github.io/Mateus-Developer/");
    })
    .catch(function(err) {
      console.error('Erro ao copiar texto: ', err);
    });
  };