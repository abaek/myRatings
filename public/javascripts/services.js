angular.module('myRatings')
.factory('DBservice', ['$http', function($http){
  var factory = {};

  factory.addRating = function(rating){
	return $http.post('/ratings', rating).success(function(data){
		console.log('added to db');
	});
  }

  factory.addUser = function(user){
  	return $http.post('/users', user).success(function(data){
    		console.log('added to db');
    	});
  }

  return factory;
}]);