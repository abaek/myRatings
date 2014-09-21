angular.module('myRatings')
.factory('DBservice', ['$http', function($http){
  var factory = {
    ratings: []
  };

  //add rating
  factory.addRating = function(rating){
  	return $http.post('/ratings', rating).success(function(data){
  		console.log('added to db');
  	});
  }

  //get all ratings for a product name
  factory.getRatings = function(productName){
    return $http.get('/ratings/' + productName).then(function(res){
      angular.copy(res.data, factory.ratings);
    })
  }
  
  return factory;
}]);