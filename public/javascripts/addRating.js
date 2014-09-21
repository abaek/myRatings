angular.module('myRatings')
.controller('AddRatingController', ['$http', '$scope', 'DBservice', '$routeParams',
function($http, $scope, DBservice, $routeParams){
	$scope.productName = $routeParams['name'];
	$scope.category = $routeParams['category'];

	console.log('entering MainCtrl');

	$scope.addReview = function(){
		var newRating = {name: $scope.productName, category: }
		var newRating = {title: $scope.title, category: $scope.category, comment: $scope.comments};
  		DBservice.addRating(newRating);
	};
}]);