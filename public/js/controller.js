angular.module('speeq')
	.controller('controllerSpeeq', ['$scope', '$http', 'annyangFactory', function($scope, $http, annyangFac){

		$scope.annyang = annyang
		$scope.search = {
			cuisine : '',
			price : '',
			rating : '',
			name : ''
		}

		$scope.restaurantSubmit = function(){
			$http.post('/api/restaurants', $scope.restaurant)
				.then(function(returnData){
					$scope.restaurantData.push(returnData.data)
					$scope.restaurant = {}
				})
		}

		$scope.restaurantGet = function(){
			$http.get('/api/restaurants')
				.then(function(returnData){
					$scope.restaurantData = returnData.data
				})
		}

		$scope.showSearchObject = function () {
			console.log($scope.search);
		}


	      function searchCuisine (cuisine) {
	        var cuisines = ['hungarian', 'american', 'japanese', 'mexican'];
	        cuisine = cuisine.toLowerCase()
	        cuisine = cuisines.indexOf(cuisine) === -1 ? null : cuisine
	        $scope.search.cuisine = cuisine
	        $scope.$apply()
	        console.log('searchCuisine fired; search :', $scope.search.cuisine)
	      }

	      function findMany (field, value) {
	      	
	      	$scope.search[field] = value
	      	console.log('new search obj :', $scope.search)
	      	$scope.$apply()
	      }

		var commands = {
		  // A named variable is a one word variable, that can fit anywhere in your command.
		  // e.g. saying "calculate October stats" will call calculateStats('October');

		  // By defining a part of the following command as optional, annyang will respond to both:
		  // "say hello to my little friend" as well as "say hello friend"
		  // 'hello': greeting

		  // 'add :num1 (and) (plus) :num2' : add,

		  // 'find :cuisine food' : searchCuisine

		  'find :field :value' : findMany

		};

		$scope.restaurantGet()
		console.log(annyang)
		if (annyang) {
			annyang.addCommands(commands)
			annyang.debug()
			var options = {
			  autoRestart : false
			}
			annyang.start(options);
		}

	}])