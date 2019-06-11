//vars for correct answers
var ans = [document.getElementById('cor1'), document.getElementById('cor2'), 
document.getElementById('cor3'), document.getElementById('cor4'), document.getElementById('cor5')];
var score = 0;
function timeRemaining(timeRemaining) {
    time = 30;
    setInterval(function () {
        time--
        $("#timeRemain").text('Time Remaining: ' + time)
    }, 1000);
}

function check() {
    var results = [i];
    console.log(document.getElementById('cor1').checked)
    console.log(ans[0].checked)
    score = 0;
    for (var i = 0; i < ans.length; i ++){
        if (ans[i].checked){
            results[i] = 'You got question ' + parseInt(i+1) + ' correct!';
            score++;
        }else{
            results[i] = 'You got question ' + parseInt(i+1) + ' wrong';
        } 
    };

    return results;
}
// timer for game
var timeGame = setTimeout(function () {
    // display which answers are incorrect and correct

}, 30000);

$('#submit').on('click', function (event) {

    event.preventDefault();
    var result = check();
    var finalScore = Math.floor(100 * parseInt(score)/parseInt(ans.length));
    $('#results').html('<p> You scored a ' + finalScore + '%');
   
    
    // loops through results and prints them  
   for (i=0; i<result.length; i++){
    $('#results').append('<p>' + result[i] + '</p>');
   }
});

$("#timeRemain").text('Time Remaining: 30');
timeRemaining();