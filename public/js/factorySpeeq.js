angular.module('speeq')
	.factory('factorySpeeq', ['$http', function($http){

		$scope.restaurantSubmit = function(){
			console.log($scope.restaurant)
			$http.post('/api/restaurants', $scope.restaurant)
				.then(function(returnData){
					$scope.restaurantInfo = returnData.data
					$scope.restaurant = {}
				})
		}

		$scope.restaurantGet = function(){
			$http.get('/api/restaurants')
				.then(function(returnData){
					$scope.restaurantData = returnData.data
					console.log($scope.restaurantData)
				})
		}

		return {

			
		}

	}])
