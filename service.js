(() => {

  angular.module('app').service('exemploService', exemploService);

  exemploService.$inject = ['$http'];

  function exemploService($http) {
    const vm = this;
    vm.url = '';

    vm.cadastrar = (pessoa, fnSucesso, fnErro) => {
      console.log(pessoa);
      /* return $http.post(`${vm.url}/`, pessoa).then(fnSucesso, fnErro); */
    }
  }

})();