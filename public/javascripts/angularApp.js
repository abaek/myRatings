angular.module('flapperNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('profile', {
      url: '/profile',
      templateUrl: '/views/profile.html',
      controller: 'MainCtrl'
    });
    $stateProvider
    .state('addRating', {
      url: '/addRating',
      templateUrl: '/views/addRating.html',
      controller: 'AddRatingController'
    });

  $urlRouterProvider.otherwise('profile');
}])
.controller('MainCtrl', ['$http', '$scope', 'users',
function($http, $scope, users){
	console.log('entering MainCtrl');

	$scope.addReview = function(){
		var user = {name: $scope.name};
    	users.addUser(user);
	};
}])
.factory('users', ['$http', function($http){
  var o = {
    posts: []
  };

  o.addUser = function(user){
  	return $http.post('/users', user).success(function(data){
    		console.log('added to db');
    	});
  }

  return o;
}])
.controller('AddRatingController', ['$http', '$scope', 'ratings',
function($http, $scope, ratings){
	console.log('entering MainCtrl');

	$scope.addReview = function(){
		var newRating = {title: $scope.title, category: $scope.category, comment: $scope.comments};
    	ratings.addRating(newRating);
	};
}])
.factory('ratings', ['$http', function($http){
  var o = {
    posts: []
  };

  o.addRating = function(rating){
  	return $http.post('/ratings', rating).success(function(data){
    		console.log('added to db');
    	});
  }

  return o;
}]);