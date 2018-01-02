describe('Invoice controller Unit Tests', function () {
    beforeEach(module('invoices'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));
    describe('appController - sample test name', function () {
        it('it describes the sample test', function () {
            var $scope = {};
            var controller = $controller('appController', { '$scope' : $scope});
            var expected = [{
            }];
            $scope.expected = expected;
            expect($scope.expected).toEqual(expected); 
        }); 
    });
    describe('appController', function () {
        var $scope,appController;
        beforeEach(function () {
            $scope = {};
            appController = $controller('appController', { '$scope' : $scope});
        });
        // Verify our controller exists
        it('should be defined', function() {
            expect(appController).toBeDefined();
        });
        var testData = [
            {
                'response': [],
                'expected': []
            },
            {
                'response': [
                    ['t_id', 't_label', 't_name', 't_address', 't_postal-address', 't_fax', 't_web', 't_cs-email', 't_phone']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}}
                ]
            },
            {
                'response': [
                    ['t_id', 't_label', 't_name', 't_address', 't_postal-address', 't_fax', 't_web', 't_cs-email', 't_phone'],
                    ['1', 'provider2 label', 'provider2 name', 'provider2 addr street 2', 'provider2 addr street 2 pb:3', '', 'www.google.com', 'support@provider2.com', '+3616767665']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}},
                    {'id': '1', 'label': 'provider2 label', 'name':'provider2 name', 'details': {'address': 'provider2 addr street 2', 'postal-address': 'provider2 addr street 2 pb:3', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider2.com', 'phone': '+3616767665'}}
                ]
            },
            {
                'response': [
                    ['t_id', 't_label', 't_name', 't_address', 't_postal-address', 't_fax', 't_web', 't_cs-email', 't_phone'],
                    ['1', 'provider2 label', 'provider2 name', 'provider2 addr street 2', 'provider2 addr street 2 pb:3', '', 'www.google.com', 'support@provider2.com', '+3616767665'],
                    ['2', 'provider3 label', 'provider3 name', 'provider3 addr street 3', 'provider3 addr street 3 pb:4', '', 'www.google.com', 'support@provider3.com', '+3616767665']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}},
                    {'id': '1', 'label': 'provider2 label', 'name':'provider2 name', 'details': {'address': 'provider2 addr street 2', 'postal-address': 'provider2 addr street 2 pb:3', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider2.com', 'phone': '+3616767665'}},
                    {'id': '2', 'label': 'provider3 label', 'name':'provider3 name', 'details': {'address': 'provider3 addr street 3', 'postal-address': 'provider3 addr street 3 pb:4', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider3.com', 'phone': '+3616767665'}}
                ]
            },
            {
                'response': [
                    ['t_id', 't_label', 't_name', 't_address', 't_postal-address', 't_fax', 't_web', 't_cs-email', 't_phone'],
                    ['1', 'provider2 label', 'provider2 name', 'provider2 addr street 2', 'provider2 addr street 2 pb:3', '', 'www.google.com', 'support@provider2.com', '+3616767665'],
                    ['2', 'provider3 label', 'provider3 name', 'provider3 addr street 3', 'provider3 addr street 3 pb:4', '', 'www.google.com', 'support@provider3.com', '+3616767665'],
                    ['3', 'provider3 label', 'provider3 name', 'provider3 addr street 3', 'provider3 addr street 3 pb:4', '', 'www.google.com', 'support@provider3.com', '']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}},
                    {'id': '1', 'label': 'provider2 label', 'name':'provider2 name', 'details': {'address': 'provider2 addr street 2', 'postal-address': 'provider2 addr street 2 pb:3', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider2.com', 'phone': '+3616767665'}},
                    {'id': '2', 'label': 'provider3 label', 'name':'provider3 name', 'details': {'address': 'provider3 addr street 3', 'postal-address': 'provider3 addr street 3 pb:4', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider3.com', 'phone': '+3616767665'}},
                    {'id': '3', 'label': 'provider3 label', 'name':'provider3 name', 'details': {'address': 'provider3 addr street 3', 'postal-address': 'provider3 addr street 3 pb:4', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider3.com', 'phone': ''}}
                ]
            }
        ];

        describe('$scope.setAppApplication', function () {
            var testData = ['name-one', 'name-two', 'name-three'];
            for (var i in testData) {
                it('should set the $scope.app[\'application\'] variable', function () {
                    var expected = testData[i];
                    $scope.setAppApplication(expected);
                    expect($scope.app['application']).toEqual(expected);
                    expect($scope.app['provider']).toEqual(null);
                });
            }
        });
        describe('$scope.initProviderElement()', function () {
            for (var i in testData) {
                var input = testData[i]['response'];
                var expecteds = testData[i]['expected'];
                for (var j in input) {
                    it('should provide a previously defined object structure', function () {
                        expect($scope.initProviderElement(input[j])).toEqual(expecteds[j]);
                    });
                }
            }
        });
        describe('$scope.setProviders()', function () {
            for (var i in testData) {
                var expecteds = testData[i]['expected'];
                it('should set the $scope.providers variable properly', function () {
                    $scope.setProviders(expecteds);
                    expect($scope.providers).toEqual(expecteds);
                });
            }
        });
        describe('$scope.getInvoiceProvidersSuccessHandler()', function () {
            for (var i in testData) {
                it('should set the $scope.providers variable properly', function () {
                    var expected = testData[i]['expected'];
                    $scope.getInvoiceProvidersSuccessHandler(testData[i]['response']);
                    expect($scope.providers).toEqual(expected);
                });
            }
        });
        describe('$scope.setAppProvider()', function () {
            for (var i in testData) {
                for (var p in testData[i]['expected']) {
                    it('should set the $scope.app[\'provider\'] variable', function () {
                        $scope.providers = testData[i]['expected'];
                        var provider = $scope.providers[p];
                        var providerOrig = $scope.app.provider;
                        $scope.setAppProvider(provider);
                        expect($scope.app['provider']).toEqual(provider);
                        expect($scope.app['providerOrig']).toEqual(providerOrig);
                    });
                }
            }
        });
        describe('$scope.navigateEditMenu', function () {
            var expected = 'new-provider';
            it('should set the $scope.app[\'application\'] variable', function () {
                $scope.navigateEditMenu();
                expect($scope.app['application']).toEqual(expected);
                expect($scope.app['provider']).toEqual(null);
            });
            for (var i in testData) {
                for (var p in testData[i]['expected']) {
                    it('should set the $scope.app[\'provider\'] variable', function () {
                        $scope.providers = testData[i]['expected'];
                        var provider = $scope.providers[p];
                        var providerOrig = $scope.app.provider;
                        $scope.navigateEditMenu(provider);
                        expect($scope.app['application']).toEqual(expected);
                        expect($scope.app['provider']).toEqual(provider);
                        expect($scope.app['providerOrig']).toEqual(providerOrig);
                    });
                }
            }
        });
    });

});
