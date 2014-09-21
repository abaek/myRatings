var myRatings = angular.module('myRatings', ['ngRoute'])
  .config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/product', {
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