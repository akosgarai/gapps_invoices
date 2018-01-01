describe('Invoice controller Unit Tests', function () {
    beforeEach(module('invoices'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('TEST001 - sample test name', function () {
        it('it describes the sample test', function () {
            var $scope = {};
            var controller = $controller('invoicesController', { '$scope' : $scope});
            var expected = [{
            }];
            $scope.expected = expected;
            expect($scope.expected).toEqual(expected); 
        }); 
    });
    describe('TEST002 - $scope.initProviderElement()', function () {
        var testData = [
            ['t_id', 't_label', 't_name', 't_address', 't_postal-address', 't_fax', 't_web', 't_cs-email', 't_phone', {'id': 't_id', 'label': 't_label', 'name':'t_name', 'details': {'address': 't_address', 'postal-address': 't_postal-address', 'fax': 't_fax', 'web': 't_web', 'cs-email': 't_cs-email', 'phone': 't_phone'}}],
            ['1', 'provider2 label', 'provider2 name', 'provider2 addr street 2', 'provider2 addr street 2 pb:3', '', 'www.google.com', 'support@provider2.com', '+3616767665', {'id': '1', 'label': 'provider2 label', 'name':'provider2 name', 'details': {'address': 'provider2 addr street 2', 'postal-address': 'provider2 addr street 2 pb:3', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider2.com', 'phone': '+3616767665'}}],
            ['2', 'provider3 label', 'provider3 name', 'provider3 addr street 3', 'provider3 addr street 3 pb:4', '', 'www.google.com', 'support@provider3.com', '+3616767665', {'id': '2', 'label': 'provider3 label', 'name':'provider3 name', 'details': {'address': 'provider3 addr street 3', 'postal-address': 'provider3 addr street 3 pb:4', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider3.com', 'phone': '+3616767665'}}],
            ['3', 'provider3 label', 'provider3 name', 'provider3 addr street 3', 'provider3 addr street 3 pb:4', '', 'www.google.com', 'support@provider3.com', '', {'id': '3', 'label': 'provider3 label', 'name':'provider3 name', 'details': {'address': 'provider3 addr street 3', 'postal-address': 'provider3 addr street 3 pb:4', 'fax': '', 'web': 'www.google.com', 'cs-email': 'support@provider3.com', 'phone': ''}}]
        ];
        for (var i in testData) {
            it('it is for checking init provider element with various inputs', function () {
                var $scope = {};
                var controller = $controller('invoicesController', { '$scope' : $scope});
                var expected = testData[i][9];
                expect($scope.initProviderElement(testData[i])).toEqual(expected);
            });
        }
    });
    describe('TEST003 - $scope.setProviders()', function () {
        var testData = [
            []
        ];
        for (var i in testData) {
            it('it sets an empty provider list', function () {
                var $scope = {};
                var controller = $controller('invoicesController', { '$scope' : $scope});
                var expected = testData[i];
                $scope.setProviders(testData[i]);
                expect($scope.providers).toEqual(expected);
            });
        }
    });
});
