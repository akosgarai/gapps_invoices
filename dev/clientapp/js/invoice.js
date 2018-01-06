angular.module('invoices', [])
.controller('appController', ['$scope', function ($scope){
    $scope.providers = [];

    $scope.app = {
        'menu-items': ['provider-list', 'new-provider'],
        'provider' : null,
        'providerOrig' : null,
        'application': ''
    };
    $scope.setAppApplication = function (name) {
        $scope.app['provider'] = null;
        $scope.app['providerOrig'] = null;
        $scope.app['application'] = name;
    };
    $scope.setAppProvider = function (provider) {
        $scope.app['providerOrig'] = $scope.app['provider'];
        $scope.app['provider'] = provider;
    };

    $scope.setProviders = function (providers) {
        $scope.providers = providers;
    };
    $scope.initServiceElement = function (row) {
        return {
            'id' : row[0],
            'providerId': row[1],
            'label': row[2],
            'name': row[3]
        };
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
    $scope.navigateEditMenu = function (provider) {
        $scope.setAppApplication('new-provider');
        if (typeof provider !== 'undefined') {
            $scope.setAppProvider(provider);
        }
    };
    $scope.isProviderFormValid = function () {
        var isValid = true;
        if ($scope.app.provider['name'] === '') {
            isValid = false;
        }
        return isValid;
    };

    $scope.providerUpdate = function () {
        if (typeof providers_dev != 'undefined') {
            $scope.providerUpdateSuccessHandler($scope.app['provider']);
            return;
        }
        google.script.run
        .withSuccessHandler($scope.providerUpdateSuccessHandler)
        .withFailureHandler($scope.errorHandler)
        .providerHandler($scope.app['provider'], $scope.app['providerOrig']);
    };

    $scope.providerUpdateSuccessHandler = function (response) {
        var id = response['id'];
        var edit = false;
        for (var i in $scope.providers) {
            if ($scope.providers[i]['id'] === id) {
                $scope.providers[i] = response;
                edit = true;
                break;
            }
        }
        if (!edit) {
            $scope.providers.push(response);
        }
        $scope.setAppApplication('provider-list');
    };

    $scope.init = function () {
        if (typeof providers_dev != 'undefined') {
            $scope.setProviders(providers_dev);
            return;
        }
        google.script.run
        .withSuccessHandler($scope.getInvoiceProvidersSuccessHandler)
        .withFailureHandler($scope.errorHandler)
        .getInvoiceProviders();
    };
}]);
