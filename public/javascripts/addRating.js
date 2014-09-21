angular.module('myRatings')
.controller('AddRatingController', ['$http', '$scope', 'DBservice', '$routeParams', '$location',
function($http, $scope, DBservice, $routeParams, $location){

	$scope.productName = $routeParams['name'];
	$scope.category = $routeParams['category'];

	$scope.addReview = function(){
		var newRating = {name: $scope.productName, category: $scope.category, rating: $scope.rating, comments: $scope.comments}
  		DBservice.addRating(newRating).then(function(){
  			$location.path('product/' + $scope.productName + '/' + $scope.category);
  		})
	};


	$scope.rating = 4;
    $scope.ratings = [{
        current: 4,
        max: 5
    }];
	$scope.getSelectedRating = function (rating) {
        $scope.rating = rating;
    }
}])
.directive('starRating', function () {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '=',
            max: '=',
            onRatingSelected: '&'
        },
        link: function (scope, elem, attrs) {

            var updateStars = function () {
                scope.stars = [];
                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({
                        filled: i < scope.ratingValue
                    });
                }
            };

            scope.toggle = function (index) {
                scope.ratingValue = index + 1;
                scope.onRatingSelected({
                    rating: index + 1
                });
            };

            scope.$watch('ratingValue', function (oldVal, newVal) {
                if (newVal) {
                    updateStars();
                }
            });
        }
    }
});