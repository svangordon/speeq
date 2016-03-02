angular.module('speeq')
	.controller('controllerSpeeq', ['$scope', '$http', function($scope, $http){

		$scope.restaurantSubmit = function(){
			$http.post('/api/restaurant', $scope.restaurant)
				.then(function(returnData){
					$scope.restaurantInfo = returnData.data
					$scope.restaurant = {}
				})
		}

	}])