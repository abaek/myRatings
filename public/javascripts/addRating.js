angular.module('myRatings')
.controller('AddRatingController', ['$http', '$scope', 'DBservice', '$routeParams',
function($http, $scope, DBservice, $routeParams){
	$scope.productName = $routeParams['name'];
	$scope.category = $routeParams['category'];

	console.log('entering MainCtrl');

	$scope.addReview = function(){
		var newRating = {name: $scope.productName, category: $scope.category, rating: $scope.rating, comments: $scope.comments}
  		DBservice.addRating(newRating);
	};
}]);