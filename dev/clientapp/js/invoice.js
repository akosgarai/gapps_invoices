angular.module('invoices', [])
.controller('appController', ['$scope', function ($scope){
    $scope.providers = [];

    $scope.app = {
        'menu-items': ['provider-list'],
        'application': ''
    };
    $scope.setAppApplication = function (name) {
        $scope.app['application'] = name;
    };

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
    $scope.getInvoiceProvidersSuccessHandler = function (response) {
        var providers = [];
        for (var i in response) {
            var e = $scope.initProviderElement(response[i]);
            providers.push(e);
        }
        $scope.setProviders(providers);
    };
    $scope.errorHandler = function (response) {
        console.log(response);
    };

    $scope.init = function () {
        google.script.run
        .withSuccessHandler($scope.getInvoiceProvidersSuccessHandler)
        .withFailureHandler($scope.errorHandler)
        .getInvoiceProviders();
    };
}])
.controller('invoicesController', ['$scope', function ($scope) {

}]);
