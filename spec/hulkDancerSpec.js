describe('hulkDancer', function() {

  var hulkDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    hulkDancer = new HulkDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(hulkDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(hulkDancer.$node, 'toggle');
    hulkDancer.step();
    expect(hulkDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(hulkDancer, 'step');
      expect(hulkDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(hulkDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(hulkDancer.step.callCount).to.be.equal(2);
    });
  });
});
