/**
* Module
*
* Description
*/
angular.module('namez', []);

angular.module('namez').directive('checkName', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function(scope, elm, attrs, ngModel) {
			elm.addClass('myValidator');
			var validValues = ['Andy', 'Ian', 'Dan'];

			// adjust what goes into the MODEL
			ngModel.$formatters.push(function(modelValue) {
				var value = modelValue || '';
				return value;
			});

			// adjust what goes into the MODEL
			ngModel.$parsers.push(function(viewValue) {
				var value = viewValue || '';
				return value;
			});

			ngModel.$validators.whitelist = function(modelValue, viewValue) {
				var value = viewValue || modelValue;
				if (value) {
					return value.length >= 2 && _.indexOf(validValues, value) != -1;
				}
			};

		}
	};
});