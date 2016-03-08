var guessNumber;

$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    random();

        $('.button').click(function() {
    console.log(guessNumber);
      var n = $('#userGuess').val();
      if(!isNumberWithinLimits(n))
        console.log('Enter a number between 1 and 100');

      if(n == guessNumber)
        console.log('You Guessed it right');

      //$('#userGuess').empty();
      

   });



});

function random(){
      var minNumber = 1; // le minimum
        var maxNumber = 100; // le maximum
        guessNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
}



function isNumberWithinLimits(n) {
      if(!isNaN(parseInt(n)) && isFinite(n)) 
      {
        if (n >=1 && n <=100)
          return true;
      } 
      return false;
    };





