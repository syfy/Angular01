'use strict';

/**
	* @ngdoc directive
	* @name stockDog2App.directive:stkStockRow
	* @description
	* # stkStockRow
*/
angular.module('stockDog2App')
.directive('stkStockRow', function ($timeout, QuoteService) { // dependendencies
    return {
		
		
		
		/*
		stkStockRow = attribute of a DOM element instead of as a DOM element

		
		*/
		// [1] Use as element attribute and require stkStockTable controller
		restrict: 'A',
		require: '^stkStockTable', 
		/*
			 ^ instructs this directive to search for controllers on its parent scopes
		*/
		scope: {
			stock: '=',
			isLast: '='
		},
		// [2] The required controller will be made available at the end
		link: function ($scope, $element, $attrs, stockTableCtrl) {
			// [3] Create tooltip for stock-row
			$element.tooltip({
				placement: 'left',
				title: $scope.stock.company.name
			});
			// [4] Add this row to the TableCtrl
			stockTableCtrl.addRow($scope);
			// [5] Register this stock with the QuoteService
			QuoteService.register($scope.stock);
			// [6] Deregister company with the QuoteService on $destroy
			$scope.$on('$destroy', function () {
				stockTableCtrl.removeRow($scope);
				QuoteService.deregister($scope.stock);
			});
			// [7] If this is the last 'stock-row', fetch quotes immediately
			if ($scope.isLast) {
				$timeout(QuoteService.fetch);
			}
			// [8] Watch for changes in shares and recalculate fields
			$scope.$watch('stock.shares', function () {
				$scope.stock.marketValue = $scope.stock.shares *
				$scope.stock.lastPrice;
				$scope.stock.dayChange = $scope.stock.shares *
				parseFloat($scope.stock.change);
				$scope.stock.save();
			});	  
			
		
	}
};
});
