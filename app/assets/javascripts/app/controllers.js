angular.module('admin.controllers', [])
.controller('CreateQuestionController',
	function($scope, ParseService) {

		$scope.question = {}
		$scope.questionWordings = [];
		$scope.answerOptions = [];

		// Question type array
		$scope.questionTypes = [
			{ id : 0, title : 'Multiple Choice - 0'},
			{ id : 1, title : 'Yes / No - 1'}
		];
		$scope.selectedQuestionType = $scope.questionTypes[0];

		$scope.submitQuestion = function()
		{
			$scope.question.questionType = $scope.selectedQuestionType.id;
			$scope.question.questionWordings = $scope.questionWordings;
			var answerDictionary = [];

			if ($scope.question.questionType == 0)
			{
				for (i = 0; i < $scope.answerOptions.length; i++)
				{
					var answer = $scope.answerOptions[i];

					answerDictionary.push({
						answer: answer,
						numChosen: 0
					});
				}
			}
			else
			{
				answerDictionary.push({
					answer: "Yes",
					numChosen: 0
				});
				answerDictionary.push({
					answer: "No",
					numChosen: 0
				});
			}

			$scope.question.answerDictionary = JSON.stringify(answerDictionary);

			ParseService.createQuestion($scope.question).then(function(response) {
				console.log(response);
			});

			// $route.reload();
		};
	})
.controller('HomeController',
	function($scope) {

	});