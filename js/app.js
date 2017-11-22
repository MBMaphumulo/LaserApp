var app = angular.module('LaserApp',[]);

app.controller('LoginController',function($scope){

		$scope.title = "Login";
		$scope.btnName = "Login";

		$('#regFormm').hide();
		$('#loginFormm').show();
	
	$scope.showLoginForm = function(){
		$scope.title = "Login";
		$scope.btnName = "Login";
		$('#regFormm').hide();
		$('#loginFormm').show(500);
	};

	
	$scope.showRegForm = function(){
		$scope.title = "Registration";
		$scope.btnName = "Register";
		$('#regFormm').show(500);
		$('#loginFormm').hide();
	};

	$scope.btnLogin = function(obj){

			alert("Username : "+obj.username + "\nPassword  : "+obj.password);

	};

	$scope.btnReg = function(objReg){
		alert("Firstname : "+objReg.firstname +"\nLastname : "+objReg.lastname+ "\nUsername : "+objReg.username+"\nPassword  : "+objReg.password);
	}
});