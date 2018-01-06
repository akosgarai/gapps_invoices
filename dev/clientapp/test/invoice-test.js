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
        var generalProvider = {'id': 't_gen', 'label': 'general-provider', 'name':'general provider name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}};
        var testDataService = [
            {
                'response': [],
                'expected': []
            },
            {
                'response': [
                    ['t_id', 't_gen', 't_label', 't_name']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'providerId': 't_gen'}
                ]
            },
            {
                'response': [
                    ['t_id', 't_gen', 't_label', 't_name'],
                    ['1', 't_gen', 'service one', 'service one']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'providerId': 't_gen'},
                    {'id': '1', 'label': 'service one', 'name':'service one', 'providerId': 't_gen'}
                ]
            },
            {
                'response': [
                    ['t_id', 't_gen', 't_label', 't_name'],
                    ['1', 't_gen', 'service one', 'service one'],
                    ['2', 't_gen', 'service two', 'service two']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'providerId': 't_gen'},
                    {'id': '1', 'label': 'service one', 'name':'service one', 'providerId': 't_gen'},
                    {'id': '2', 'label': 'service two', 'name':'service two', 'providerId': 't_gen'}
                ]
            },
            {
                'response': [
                    ['t_id', 't_gen', 't_label', 't_name'],
                    ['1', 't_gen', 'service one', 'service one'],
                    ['2', 't_gen', 'service two', 'service two'],
                    ['3', 't_gen', 'service three', 'service three']
                ],
                'expected': [
                    {'id': 't_id', 'label': 't_label', 'name':'t_name', 'providerId': 't_gen'},
                    {'id': '1', 'label': 'service one', 'name':'service one', 'providerId': 't_gen'},
                    {'id': '2', 'label': 'service two', 'name':'service two', 'providerId': 't_gen'},
                    {'id': '3', 'label': 'service three', 'name':'service three', 'providerId': 't_gen'}
                ]
            }
        ];
        var testDataProvider = [
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
            var testDataApplication = ['name-one', 'name-two', 'name-three'];
            for (var i in testDataApplication) {
                var expected = testDataApplication[i];
                beforeEach(function () {
                    $scope.setAppApplication(expected);
                });
                it('$scope.app should be defined properly', function () {
                    expect($scope.app).toBeDefined();
                    expect($scope.app['application']).toBeDefined();
                    expect($scope.app['provider']).toBeDefined();
                    expect($scope.app['providerOrig']).toBeDefined();
                });
                it('$scope.app values should be set properly', function () {
                    expect($scope.app['application']).toEqual(expected);
                    expect($scope.app['provider']).toEqual(null);
                    expect($scope.app['providerOrig']).toEqual(null);
                });
            }
        });
        describe('$scope.errorHandler', function () {
            it('should be defined', function () {
                expect($scope.errorHandler).toBeDefined();
            });
            it('should do nothing', function () {
                $scope.errorHandler("some text");
                expect($scope.errorHandler).toBeDefined();
            });
        });
        describe('$scope.initProviderElement()', function () {
            for (var i in testDataProvider) {
                var input = testDataProvider[i]['response'];
                var expecteds = testDataProvider[i]['expected'];
                for (var j in input) {
                    it('should provide a previously defined object structure', function () {
                        expect($scope.initProviderElement(input[j])).toEqual(expecteds[j]);
                    });
                }
            }
        });
        describe('$scope.setProviders()', function () {
            for (var i in testDataProvider) {
                var expecteds = testDataProvider[i]['expected'];
                it('should set the $scope.providers variable properly', function () {
                    $scope.setProviders(expecteds);
                    expect($scope.providers).toEqual(expecteds);
                });
            }
        });
        describe('$scope.getInvoiceProvidersSuccessHandler()', function () {
            for (var i in testDataProvider) {
                var expected = testDataProvider[i]['expected'];
                it('should set the $scope.providers variable properly', function () {
                    $scope.getInvoiceProvidersSuccessHandler(testDataProvider[i]['response']);
                    expect($scope.providers).toEqual(expected);
                });
            }
        });
        describe('$scope.setAppProvider()', function () {
            for (var i in testDataProvider) {
                beforeEach(function () {
                    $scope.setProviders(testDataProvider[i]['expected']);
                });
                for (var p in testDataProvider[i]['expected']) {
                    it('should set the $scope.app[\'provider\'] variable', function () {
                        var provider = $scope.providers[p];
                        $scope.setAppProvider(provider);
                        expect($scope.app['provider']).toEqual(provider);
                    });
                    it('should set the $scope.app[\'providerOrig\'] variable', function () {
                        var providerOrig = $scope.app['providerOrig'];
                        $scope.setAppProvider($scope.providers[p]);
                        expect($scope.app['providerOrig']).toEqual(providerOrig);
                    });
                }
            }
        });
        describe('$scope.navigateEditMenu', function () {
            var expected = 'new-provider';
            it('should set the $scope.app variable properly', function () {
                $scope.navigateEditMenu();
                expect($scope.app['application']).toEqual(expected);
                expect($scope.app['provider']).toEqual(null);
                expect($scope.app['providerOrig']).toEqual(null);
            });
            for (var i in testDataProvider) {
                for (var p in testDataProvider[i]['expected']) {
                    it('should set the $scope.app[\'provider\'] variable', function () {
                        $scope.setProviders(testDataProvider[i]['expected']);
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
        describe('$scope.isProviderFormValid()', function () {
            var lTestData = [
                {'data' : ['','','','','','','','',''], 'expected': false},
                {'data' : ['1','','','','','','','',''], 'expected': false},
                {'data' : ['2','','','','','','','',''], 'expected': false},
                {'data' : ['3','','asd','','','','','',''], 'expected': true},
                {'data' : ['','','asd','','','','','',''], 'expected': true},
                {'data' : ['3','','','1','1','1','1','1','1'], 'expected': false}
            ];
            for (var i in lTestData) {
                it('should validate the provider form', function () {
                    $scope.setAppProvider($scope.initProviderElement(lTestData[i]['data']));
                    expect($scope.isProviderFormValid()).toEqual(lTestData[i]['expected']);
                });
            }
        });
        describe('$scope.providerUpdateSuccessHandler', function () {
            var newProvider = {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}};
            var editedProvider = {'id': 't_id', 'label': 't_edit_label', 'name':'t_edit_name', 'details': {'address': 't_edit_address', 'postal-address': 't_edit_postal-address', 'fax': 't_edit_fax', 'web': 't_edit_web', 'cs-email': 't_edit_cs-email', 'phone': 't_edit_phone'}};
            beforeEach(function () {
                $scope.setProviders([]);
                $scope.providerUpdateSuccessHandler(newProvider);
            });
            it('checking the length', function () {
                expect($scope.providers.length).toEqual(1);
            });
            it('elements should be equal', function () {
                expect($scope.providers[0]).toEqual(newProvider);
            });
            it('app.application should be provider-list', function () {
                expect($scope.app['application']).toEqual('provider-list');
            });
            it('handles duplication', function () {
                $scope.providerUpdateSuccessHandler(newProvider);
                expect($scope.providers.length).toEqual(1);
            });
            it('updates old value during edit', function () {
                $scope.providerUpdateSuccessHandler(editedProvider);
                expect($scope.providers.length).toEqual(1);
                expect($scope.providers[0]).toEqual(editedProvider);
            });
        });
        describe('$scope.providerUpdate', function () {
            var newProvider = {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}};
            var editedProvider = {'id': 't_id', 'label': 't_edit_label', 'name':'t_edit_name', 'details': {'address': 't_edit_address', 'postal-address': 't_edit_postal-address', 'fax': 't_edit_fax', 'web': 't_edit_web', 'cs-email': 't_edit_cs-email', 'phone': 't_edit_phone'}};
            beforeEach(function () {
                $scope.setProviders([]);
                $scope.setAppProvider(newProvider);
                $scope.providerUpdate();
            });
            it('checking the length', function () {
                expect($scope.providers.length).toEqual(1);
            });
            it('elements should be equal', function () {
                expect($scope.providers[0]).toEqual(newProvider);
            });
            it('app.application should be provider-list', function () {
                expect($scope.app['application']).toEqual('provider-list');
            });
            it('handles duplication', function () {
                $scope.setAppProvider(newProvider);
                $scope.providerUpdate();
                expect($scope.providers.length).toEqual(1);
            });
            it('updates old value during edit', function () {
                $scope.setAppProvider(editedProvider);
                $scope.providerUpdate();
                expect($scope.providers.length).toEqual(1);
                expect($scope.providers[0]).toEqual(editedProvider);
            });
        });
        describe('$scope.init', function () {
            it('Check stuff after init', function () {
                $scope.init();
                expect($scope.providers).toBeDefined();
            });
        });
        describe('$scope.initServiceElement()', function () {
            for (var i in testDataService) {
                var input = testDataService[i]['response'];
                var expecteds = testDataService[i]['expected'];
                for (var j in input) {
                    it('should provide a previously defined object structure', function () {
                        expect($scope.initServiceElement(input[j])).toEqual(expecteds[j]);
                    });
                }
            }
        });
        describe('$scope.setServices()', function () {
            for (var i in testDataService) {
                var expecteds = testDataService[i]['expected'];
                it('should set the $scope.services variable properly', function () {
                    $scope.setServices(expecteds);
                    expect($scope.services).toEqual(expecteds);
                });
            }
        });
        describe('$scope.getServicesSuccessHandler()', function () {
            for (var i in testDataService) {
                var expected = testDataService[i]['expected'];
                it('should set the $scope.providers variable properly', function () {
                    $scope.getServicesSuccessHandler(testDataService[i]['response']);
                    expect($scope.services).toEqual(expected);
                });
            }
        });
    });

});
