angular.module('miniRouting')
  .controller('productsCtrl', function($scope, $stateParams, productService) {
    if($stateParams.id === 'shoes') {
      $scope.products = productService.shoeData;
    }

    if($stateParams.id === 'socks') {
      $scope.products = productService.sockData;
    }

  });
