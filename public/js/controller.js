angular.module('speeq')
	.controller('controllerSpeeq', ['$scope', '$http', function($scope, $http){

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
		$scope.restaurantGet()
	}])