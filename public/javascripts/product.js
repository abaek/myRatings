angular.module('myRatings')
.controller('ProductController', ['$http', '$scope', 'DBservice', '$location',
function($http, $scope, DBservice, $location){
	console.log('entering MainCtrl');

  

  var movies = ["Million Dollar Arm", "22 Jump Street", "If I Stay", "Hurricane Season", "The hangover 3", "Rush", "American Hustle", "When the game stands tall", "Gran Torino", "Invictus", "We're The Millers", "Captain Philips", "The Ides of March", "Ponyo", "Frozen", "Tangeled", "Brave", "The Illusionist", "Monster's University", "Linsanity", "The Hangover", "The Secret Life of Walter Mitty", "Silver Linings Playbook", "The Wolf of Wall Street", "The Departed", "The Lego Movie", "Princess Mononoke", "The Adjustment Bureau", "The Wind Rises", "Spirited Away", "Castle in the Sky", "12 Years a Slave", "Her", "Captain America 2", "42", "Insidious", "Neighbours", "500 Days of Summer", "Edge of Tomorrow", "The Blind Side", "The Way Way Back", "The Intouchables", "The Hangover Part II", "The World's End", "The Fault in our Stars", "Omar", "An Education", "The Notebook", "How to train your dragon 2", "Snowpiercer", "Moneyball", "High School Musical 3", "Dawn of the Planet of the Apes", "Catch me if you can", "Boyhood", "Good Will Hunting", "Chef", "The Grand Budapest Hotel"];

  $scope.products = movies;

  $scope.categories = ['Movies', 'Books', 'Restaurants', 'Games'];

  $scope.goToProduct = function(name){
  	$location.path('addRating/' + name);
  }

	$scope.addReview = function(){
		var newRating = {title: $scope.title, category: $scope.category, comment: $scope.comments};
  	DBservice.addRating(newRating);
	};
}]);