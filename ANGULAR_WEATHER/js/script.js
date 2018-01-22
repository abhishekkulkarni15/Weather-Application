var myApp = angular
.module("myModule",[])
.controller("myController", function($scope, $http){
	$scope.location = "";
	$scope.displayWeather = false;
	var getWeather = function(){
		$scope.weatherURL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+$scope.location+"%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
		$http({
			method:"GET",
			url: $scope.weatherURL
		}).then(function successW(response){
			$scope.result = response.data;
			$scope.displayWeather = true;
		},function failureW(response){
			$scope.result = response.statusText;
		});
	}
	$scope.getWeather = getWeather;
});