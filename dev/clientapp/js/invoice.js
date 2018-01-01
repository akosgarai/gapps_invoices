angular.module('invoices', [])
.controller('invoicesController', ['$scope', function ($scope) {

    $scope.providers = [];

    $scope.setProviders = function (providers) {
        $scope.providers = providers;
    };
    $scope.initProviderElement = function (row) {
        return {
            'id' : row[0],
            'label': row[1],
            'name': row[2],
            'details' : {
                'address' : row[3],
                'postal-address' : row[4],
                'fax' : row[5],
                'web' : row[6],
                'cs-email' : row[7],
                'phone' : row[8]
            }
        };
    };
}]);
