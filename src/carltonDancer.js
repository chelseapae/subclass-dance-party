var CarltonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

CarltonDancer.prototype = Object.create(Dancer.prototype);
CarltonDancer.prototype.constructor = CarltonDancer;
CarltonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
