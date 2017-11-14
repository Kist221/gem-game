

  var target;
  var counter = 0;
  var winCount = 0;
  var loseCount = 0;
  var gemValues = [];
  var images = ["assets/images/gemAqua.png", "assets/images/gemCrim.png", "assets/images/gemPurp.png", "assets/images/gemYell.png"];


// Set all variables
  var initialize = function()
  {
  	// random number between target limits
  	target = Math.floor(Math.random() * (121 - 19) + 19);
	
  	// prints target to page
  	$("#target").text(target);

    // reset counter
    counter = 0;
  };

  var gems = function()
  {
    // create array of gem number values
    for (var i = 0; i < 4; i++) {
      gemValues[i] = Math.floor(Math.random() * (13 - 1) + 1);
    }

    // create gems with data attr.
    for (var i = 0; i < gemValues.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // assign class ".gemPic".
    imageCrystal.addClass("gemPic");

    // src link to the image
    imageCrystal.attr("src", images[i]);

    // given a data attribute equal to array values
    imageCrystal.attr("data-gemVal", gemValues[i]);

    // add to the page.
    $("#gems").append(imageCrystal); 
    }
  };

  var erase = function()
  {
    // clear images for replacement values
    $("#gems, #score").empty();
  }

  var track = function()
  {
    // click event for crystals on page
    // $(".gemPic").on("click", function() {
    // USED THIS INSTEAD, TIES CLICK EVENT TO CONTAINER THAT DOESN'T CHANGE
    $("#gems").on("click", ".gemPic", function() {

    // store value of gem clicked on
    var gemVal = ($(this).attr("data-gemVal"));
    
    // converts to integer
    gemVal = parseInt(gemVal);
    
    // add value to counter
    counter += gemVal;

    // keep track of remainder
    $("#remainder").text(target - counter);

    // update score count
    $("#score").text(counter);
    
    // win lose functions
    if (counter === target) {
      alert("You win!");
      $("#wins").text(++winCount);
      newGame();
    }

    else if (counter >= target) {
      alert("You lose!!");
      $("#lost").text(++loseCount);
      newGame();
    }

    });
  }

  var newGame = function()
  {
  erase();
  initialize();
  gems();
  }


  newGame();
  track();

