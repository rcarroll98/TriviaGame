$("begin-button").click(run)

$("button").click(run)

















function game() {
    $("time-remaining").text("");
    $("question").text("");
    $("answers").text("");
    $("start-button").html()
}

var number = 30



function run() {
    clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #time-remaining tag.
      $("#time-remaining").html("<h2>" + 'Time remaining: ' + number + ' Seconds' + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");

        $("answers").text("Out of time");



    //if () user selects an answer for the current question

        if ()
      }
    }




function stop() {
    clearInterval(intervalId);
}

questionArray = { 
    
}

image



function nextQuestion(questionArray) {
    for (i = 0; i<questionArray.length; i++){
        var gameInfo = $("<div class = 'item'>")
        var timeRemaining = $("#time-remaining").html("<h2>" + 'Time remaining: ' + number + ' Seconds' + "</h2>");
        var question = questionArray[i].question;
        var buttons = questionArray[i].buttons;
        var image = questionArray[i].image;



        
        
        $("#body").prepend(gameInfo);
    }

}

function startGame() {
    $("#body").html("<div class='start button'>Start</div>");
    $("#body").click(run(

run();

startGame();