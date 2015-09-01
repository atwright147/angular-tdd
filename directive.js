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
			ngModel.$parsers.push(function(viewValue) {
				viewValue = viewValue || '';

				if (viewValue.length >= 2 && _.indexOf(validValues, viewValue) != -1) {
					ngModel.$setValidity('inputWhitelist', true);
				} else {
					ngModel.$setValidity('inputWhitelist', false);
				}

				return viewValue;
			});
		}
	};
});