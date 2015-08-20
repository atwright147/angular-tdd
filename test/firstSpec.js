(function() {
	'use strict';

	describe('javascript', function() {
		it('should know 2 + 2 is 4', function() {
			expect(2 + 2).toEqual(4);
		});
	});

	describe('Directive', function () {
		var el, form, $compile, $rootScope, $scope;

		beforeEach(module('app'));

		beforeEach(inject(function ($injector) {
			el = angular.element('<form name="form"><input type="text" check-name ng-model="username" name="username"></form>');
			
			// get $compile and $rootScope
			$compile   = $injector.get('$compile');
			$rootScope = $injector.get('$rootScope');

			// create a new scope
			$scope = $rootScope.$new();

			// compile the created element with the create scope
			$compile(el)($scope);

			// Run all the watches on the current scope
			$scope.$digest();

			form = $scope.form;
		}));

		it('should add class "myValidator" to element', function () {
			expect(el.find('input').hasClass('myValidator')).toBeTruthy();
		});

		it('should mark "Andy" as valid', function () {
			// https://pushkarkinikar.wordpress.com/2015/07/08/jasmine-unit-test-for-directive/
			form.username.$setViewValue('Andy', 'input');
			$scope.$digest();
			expect($scope.form.username.$viewValue).toEqual('Andy');
			expect($scope.form.$valid).toBe(true);
		});

		it('should mark "Tim" as invalid', function () {
			form.username.$setViewValue('Tim', 'input');
			$scope.$digest();
			expect($scope.form.username.$viewValue).toEqual('Tim');
			expect(form.$valid).toBe(false);
		});
	});
})();