var BlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // Dancer.call(this);
  // this.$node;
  // //this.step.call(this);
  // var oldStep = this.step;
  //console.log(top, left, timeBetweenSteps);
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.$node.css('border', '10px solid pink');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //step();
  //call dancer prototype with this
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
  //step.call(this);
};

//return blinkyDancer;