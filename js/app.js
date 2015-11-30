$(document).ready(function() {
	// alert('test');
	console.log("start");

	for (i = 1; i <= 100; i++) {
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