(function() {
	'use strict'

	describe('javascript', function() {
		it('should know 2 + 2 is 4', function() {
			expect(2 + 2).toEqual(4);
		});
	});

	describe('Directive', function () {
		var el, $compile, $rootScope, $scope;

		beforeEach(module('app'));

		beforeEach(inject(function ($injector) {
			el = angular.element('<input type="text" check-name ng-model="username" name="username">');
			
			// get $compile and $rootScope
			$compile   = $injector.get('$compile');
			$rootScope = $injector.get('$rootScope');

			// create a new scope
			$scope = $rootScope.$new();

			// compile the created element with the create scope
			$compile(el)($scope);

			// Run all the watches on the current scope
			$scope.$digest();
		}));

		it('should add something awesome to my element', function () {
			expect(el.contains('something awesome')).toBeTruthy();
		});
	});
})();