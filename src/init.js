$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make

    // make a dancer with a random position
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    //console.log($('body').width() * Math.random());
    $('body').append(dancer.$node);
  });
});

$('.changePositionButton').on('click', function(event) {
  var changePositionFunctionName = $(this).data('change-position-function-name');

  var changePositionFunction = window[changePositionFunctionName];
  // console.log('test', window);
  // console.log(Array.isArray(document.getElementsByClassName('dancer')));
  var dancerPosition = document.getElementsByClassName('dancer');
  for (var i = 0; i < dancerPosition.length; i++) {
    // this.$node.css('position', '0px');
    console.log(dancerPosition.item(i));
    dancerPosition.item(i).style.top = '355px';
  }
  var positions = new changePositionFunction(
    $('body').height(),
    $('body').width() * Math.random(),
    Math.random() * 1000
  );
  $('body').append(positions.$node);

});
