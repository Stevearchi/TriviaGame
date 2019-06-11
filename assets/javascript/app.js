//vars for correct answers
var ans = [document.getElementById('cor1'), document.getElementById('cor2'), 
document.getElementById('cor3'), document.getElementById('cor4'), document.getElementById('cor5')];
var totalCorrect = 0;
var totalIncorrect = 0;
var timedOut = false;
function timeRemaining(timeRemaining) {
    time = 30;
    setInterval(function () {
        time--
        $("#timeRemain").text('Time Remaining: ' + time)
    }, 1000);
}

function check() {
    totalCorrect = 0;
    totalIncorrect = 0;
    for (var i = 0; i < ans.length; i ++){
        if (ans[i].checked){
            totalCorrect++;
        }else{
            totalIncorrect++;
        } 
    };
}
// timer for game
var timeGame = setTimeout(function () {
    // display which answers are incorrect and correct
    timedOut = true;
    checkandDisplay(); 
}, 30000);

function displayResults(){
    var finalScore = Math.floor(100 * parseInt(totalCorrect)/parseInt(ans.length));
    $('#main').append('<p> You scored a ' + finalScore + '%');
    $('#main').append('<p>You answered ' + totalCorrect + ' questions correctly</p>');
    $('#main').append('<p>You answered ' + totalIncorrect + ' questions incorrectly</p>');
}
function checkandDisplay(){
    // clear display
    $('#main').empty();
    if (timedOut){
        $('#main').append("<h2>Time is up!</h2>")
    }
    check();
    displayResults();
}
$('#submit').on('click', function (event) {
    event.preventDefault();
    checkandDisplay(); 
});

$("#timeRemain").text('Time Remaining: 30');
timeRemaining();