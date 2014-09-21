angular.module('myRatings')
.controller('AddRatingController', ['$http', '$scope', 'DBservice', '$routeParams', '$location',
function($http, $scope, DBservice, $routeParams, $location){

	$scope.productName = $routeParams['name'];
	$scope.category = $routeParams['category'];

	$scope.addReview = function(){
		var newRating = {name: $scope.productName, category: $scope.category, rating: $scope.rating, comments: $scope.comments}
  		DBservice.addRating(newRating);
  		$location.path('product/' + $scope.productName + '/' + $scope.category);
	};



	var movies = ["Million Dollar Arm", "22 Jump Street", "If I Stay", "Hurricane Season", "The hangover 3", "Rush", "American Hustle", "When the game stands tall", "Gran Torino", "Invictus", "We're The Millers", "Captain Philips", "The Ides of March", "Ponyo", "Frozen", "Tangeled", "Brave", "The Illusionist", "Monster's University", "Linsanity", "The Hangover", "The Secret Life of Walter Mitty", "Silver Linings Playbook", "The Wolf of Wall Street", "The Departed", "The Lego Movie", "Princess Mononoke", "The Adjustment Bureau", "The Wind Rises", "Spirited Away", "Castle in the Sky", "12 Years a Slave", "Her", "Captain America 2", "42", "Insidious", "Neighbours", "500 Days of Summer", "Edge of Tomorrow", "The Blind Side", "The Way Way Back", "The Intouchables", "The Hangover Part II", "The World's End", "The Fault in our Stars", "Omar", "An Education", "The Notebook", "How to train your dragon 2", "Snowpiercer", "Moneyball", "High School Musical 3", "Dawn of the Planet of the Apes", "Catch me if you can", "Boyhood", "Good Will Hunting", "Chef", "The Grand Budapest Hotel"];
	var books = ["The Hunger Games (The Hunger Games, #1)","Harry Potter and the Order of the Phoenix (Harry Potter, #5)","Twilight (Twilight, #1)","To Kill a Mockingbird","Pride and Prejudice","Gone with the Wind","The Chronicles of Narnia (Chronicles of Narnia, #1-7)","The Giving Tree","Animal Farm","The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)","Wuthering Heights","Memoirs of a Geisha","The Da Vinci Code (Robert Langdon, #2)","The Book Thief","Alice's Adventures in Wonderland & Through the Looking-Glass","Romeo and Juliet","The Time Traveler's Wife","Les Misérables","Lord of the Flies","J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings","Ender's Game (The Ender Quintet, #1)","Crime and Punishment","The Picture of Dorian Gray"];
	var games = ["Flash Point: Fire Rescue","Coup Reformation","SnowDonia","Puerto Rico","Set!","Boursicocotte","Pit","Modern Art","Hanabi","Saboteur","Nuts!","Hive","Love Letter","Coup","Resistance","7 Wonders","Bonanza","Ra","King of Tokyo","Ticket to Ride","Settlers of Catan","Carcassonne","Dominion","Sparticus","Mutants Meeples","Santiago","Blokus","Monopoly","PvZ Risk","Clue","Pandemic","Chess","Mr. Jack","Lost Cities","Alhambra","Cash n Guns","Battle Line","Modern Art Auction","Ghost Blitz","Goblins","Adastra","Munchkin","Jenga","Agricola","Bang the Dice Game"];
	var restaurants = ["Capitano Burgers and Gelatos","Bahmi Boyz","Burrito Boyz","Pizza Nova","Okinomi House","Slab burger","Kyoto Sushi","Kuni Sushi","Ethiopian House","New Generation Sushi","Arisu kbbq","Burrito Banditos","Noodle Bowl","Mother's Dumplings","Queen Mother Cafe","Ding Dong Bakery","Sushi Garden","168 Tea Shop","Chatime Bubble Tea","Freshii","Smokes Poutine","Caffe di Portici","Ginger","Popeyes","Fernandos Hideaway","Bapbo","Taste of China","Bistro 243","Falafel House","Wandas","Coach House","Castle","The Rex","Roll Play Cafe","Duckee","Latinada","Not Just Noodles","Top Sushi","Reposado","Como En Casa","Aroma Espresso Bar","Mr. Sub","Byzantium","Museum Tavern","Nandos","M'Zaar ","Gardiner Museum","Momofoku Noodle House","Sushi Club","The Blake House","Ali Baba","Mom's Korean Food","Kinton Ramen 2","M2M Tea House","Sansotei Ramen","Swiss Chalet","Pizzaiolo","Hodo Kwaja","Buk Chang Dong Soon Tofu","Bru Cafe","Sakura Sushi","New Yorker Deli","Aji Sai Sushi","Crepe it Up","Seven Lives Tacos Y Marisol","Summer’s Sweet Memories","Guu","Manpuku","Tasty Chinese Food","LC Tea House","Milestones","Wow Sushi","Over Easy"];
	//$scope.categories = ['Movies', 'Books', 'Restaurants', 'Games'];
  	

	$scope.populateMongoDB = function(){
		for(var i = 0; i < restaurants.length; i++){
			var newRating1 = {name: restaurants[i], category: 'Restaurants', rating: 1, comments: 'Food was cold. Service was soo slow, and the waiter was mean!'}
  			DBservice.addRating(newRating1);
  			var newRating2 = {name: restaurants[i], category: 'Restaurants', rating: 2, comments: 'Seemed like they didnt put much effort into their food'}
  			DBservice.addRating(newRating2);
  			var newRating3 = {name: restaurants[i], category: 'Restaurants', rating: 4, comments: 'Loved the food! Would defintely go again.'}
  			DBservice.addRating(newRating3);
		}
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