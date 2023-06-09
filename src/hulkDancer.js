var HulkDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.$node = $('<span class="dancer hulk"></span>');
  this.setPosition.call(this, top, left, timeBetweenSteps);
};

HulkDancer.prototype = Object.create(Dancer.prototype);
HulkDancer.prototype.constructor = HulkDancer;
HulkDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
