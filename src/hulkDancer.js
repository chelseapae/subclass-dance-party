var HulkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
};

HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;
HulkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
