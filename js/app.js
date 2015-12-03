$(document).ready(function() {
	// alert('test');
	console.log("start");

	// user number's pick
	var userVariable = prompt("Pick a number between 1 - 100?");

	for (i = 1; i <= userVariable; i++) {
	  // console.log(i);
	  if (i % 3 == 0 && i % 5 == 0) {
	    console.log("fizzbuzz");
	    $('.list').append('<li>fizzbuzz</li>');
	  } else if (i % 3 == 0) {
	    console.log("fizz");
	    $('.list').append('<li>fizz</li>');
	  } else if (i % 5 == 0) {
	    console.log("buzz");
	    $('.list').append('<li>buzz</li>');
	  } else {
	    console.log(i);
	    $('.list').append('<li>' + i + '</li>');
	  }
	}

});