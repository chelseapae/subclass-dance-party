// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //this.dancer = {};
  // this.top = top;
  // this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition.call(this, top, left);

  //return dancer;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // edit line 16 to ensure this is binded

  //console.log(this.step, this.timeBetweenSteps, 'here');
  //console.log(this.step.bind())
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
//dancer.step();

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  console.log('position from Dancer', top, left);

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//dancer.setPosition(top, left);