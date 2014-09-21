var myRatings = angular.module('myRatings', ['ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/product/:name?/:category?', {
          templateUrl: '/views/product.html',
          controller: 'ProductController'
        })
        .when('/addRating/:name/:category', {
          templateUrl: '/views/addRating.html',
          controller: 'AddRatingController'
        })
        .otherwise({
          redirectTo: '/product'
        });
    }]);