var correctAnswers = 0


var number = 30

function start() {
    
     
    if (document.getElementById('george-bush').checked) {
        
        correctAnswers++

      }
    if (document.getElementById('500000').checked) {
        
        correctAnswers++
      }
    if (document.getElementById('6').checked) {
       
        correctAnswers++
      }
    
}


function timer() {
clearInterval(intervalId);
      var intervalId = setInterval(decrement, 1000);
    }

    
    function decrement() {

      
      number--;

      
      $("#time-remaining").html("<h2>" + 'Time remaining: ' + number + ' Seconds' + "</h2>");


      
      if (number === 0) {

        
        stop();

      
        

        
      }}




function stop(){
    
    $("#done-button").click(stop());
        var wrongAnswers = 3 - correctAnswers

        $("#all").html('<p>' + correctAnswers + '</p>' + '<p>'+ wrongAnswers + '</p>' );
        $("#question").html('<p> </p>' )
}

    ;
timer();

start();

stop();

timer();

decrement();
