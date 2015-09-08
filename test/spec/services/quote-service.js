'use strict';

describe('Service: QuoteService', function () {

  // load the service's module
  beforeEach(module('stockDog2App'));

  // instantiate service
  var QuoteService;
  beforeEach(inject(function (_QuoteService_) {
    QuoteService = _QuoteService_;
  }));

  it('should do something', function () {
    expect(!!QuoteService).toBe(true);
  });

});
