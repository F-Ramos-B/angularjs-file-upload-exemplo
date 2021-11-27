(() => {
  "use strict";

  angular.module('app', []);

  angular.module('app').controller('controlador', controlador);

  controlador.$inject = ['exemploService', '$scope'];

  function controlador(exemploService, $scope) {
    const vm = this;
    vm.isImagem = false;
    vm.isEnviado = false;
    vm.pessoa = {
      nome: 'Chico',
      cidade: 'DF',
      imagem: {
        dados: null,
        nomeArquivo: null
      }
    }

    vm.addFile = addFile;
    vm.verificarUpload = verificarUpload;
    vm.enviarPessoa = enviarPessoa;

    function addFile() {
      const arquivoInserido = document.getElementById('arquivo').files[0];
      
      if (!arquivoInserido) {
        return;
      }

      const reader = new FileReader();

      reader.onloadend = function (loadedFile) {
        vm.verificarUpload(loadedFile.target.result, arquivoInserido.name);
      }

      reader.readAsDataURL(arquivoInserido);
    }

    function verificarUpload(base64, nomeArquivo) {
      vm.pessoa.imagem.nomeArquivo = nomeArquivo;
      vm.pessoa.imagem.dados = base64;
      vm.isImagem = vm.pessoa.imagem.dados.includes('data:image');
      vm.isEnviado = true;
      $scope.$apply();
      vm.enviarPessoa();
    }

    function enviarPessoa() {
      exemploService.cadastrar(vm.pessoa);
    }

  }
})();