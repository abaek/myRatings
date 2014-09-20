angular.module('myRatings')
.controller('AddRatingController', ['$http', '$scope', 'DBservice',
function($http, $scope, DBservice){
	console.log('entering MainCtrl');

  $scope.products = [1, 2, 3, 4];

	$scope.addReview = function(){
		var newRating = {title: $scope.title, category: $scope.category, comment: $scope.comments};
  	DBservice.addRating(newRating);
	};
}]);