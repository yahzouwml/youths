'use strict';

describe('service', function() {

    // load modules
    beforeEach(module('global'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $service) {
        $httpBackend = _$httpBackend_;

        scope = $rootScope.$new();
        service = $service('AuthService', {
            $scope: scope
        });
    }));

    // Test service availability
    it('check the existence of Phone factory', inject(function() {
        service.register(55 + Math.floor((Math.random() * 10) + 1) + "@qq.com", 'testuser' + Math.floor((Math.random() * 10) + 1), '123456')
            .then(function(response) {
                expect(!!response.id).toBe(true)
            })
    }));
});
