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
  // var dancerPosition = document.getElementsByClassName('dancer');
  // var tooClose = false;
  // for (var i = 0; i < dancerPosition.length; i++) {
  //   // this.$node.css('position', '0px');
  //   // if close
  //   var dancing = dancerPosition.item(i).style.top;
  //   dancing = dancing.slice(0, -2);
  //   dancing = Number(dancing);
  //   if (dancing - top <= 3) {
  //     tooClose = true;
  //     // console.log(top, typeof top)
  //     // var styleSettings = {
  //     //   top: top,
  //     //   left: left
  //     // };
  //     // this.$node.css('border', '10px solid white');
  //   }
  //   //   console.log(dancerPosition.item(i).style.top, 'this')

  ///////////////////////////////
  var dancerPosition = document.getElementsByClassName('dancer');
  var tooClose = false;
  for (var i = 0; i < dancerPosition.length; i++) {
    this.$node.css('position', '0px');
    var dancingTop = dancerPosition.item(i).style.top;
    var dancingLeft = dancerPosition.item(i).style.left;
    dancingTop = dancingTop.slice(0, -2);
    dancingLeft = dancingLeft.slice(0, -2);
    dancingTop = Number(dancingTop);
    dancingLeft = Number(dancingLeft);
    var asquare = Math.abs(dancingTop - top);
    var bsquare = Math.abs(dancingLeft - left);
    var distanceBetween = Math.sqrt((asquare * asquare) + (bsquare * bsquare));
    console.log(asquare, bsquare, distanceBetween);
    if (distanceBetween < 125) {
      tooClose = true;
    }
  }
  if (tooClose) {
    this.$node.css('border', '10px solid white');
    console.log(window, dancerPosition);
  }
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
  //this.$node.css('border', '10px solid blue');
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//dancer.setPosition(top, left);