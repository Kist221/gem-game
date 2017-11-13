

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

	// create array of gem number values
	for (var i = 0; i < 4; i++) {
		gemValues[i] = Math.floor(Math.random() * (13 - 1) + 1);
	}
  }

  initialize();

 
  // Next we create a for loop to create gems for every numberOption.
  for (var i = 0; i < gemValues.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".gemPic".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("gemPic");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", images[i]);

    // Each imageCrystal will be given a data attribute called data-gemVal.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-gemVal", gemValues[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#gems").append(imageCrystal);
  }



  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".gemPic").on("click", function() {

    
    var gemVal = ($(this).attr("data-gemVal"));
    gemVal = parseInt(gemVal);
    // We then add the gemVal to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += gemVal;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === target) {
      alert("You win!");
    }

    else if (counter >= target) {
      alert("You lose!!");
    }

  });