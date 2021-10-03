score = 0;

function updateScore()
{
score = score + 1;    
 document.getElementById("score").innerHtml = "Score: " +score;   
}

function saveScore()
{
localStorage.setltem("score",score);     }



function nextPage(){
window.location="activity_2.html";
}

function check()
{
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
if(answer == word)
{
if(answer_turn == "player1")
{
player1_score = player1_score +1;
document.getElementById("player1_score").innerHTML = player1_score;
}
else{
if(answer_turn == "player2")
{
player2_score = player2_score +1;
document.getElementById("player2_score").innerHTML = player2_score;
}
if(question_turn == "player1")
}
if(question_turn == "player2")
document.getElementById(player_question).innerHTML = "Question Turn - " + player 2_name ;
{
else
{
if(question_turn == "player1")
document.getElementById(player_question).innerHTML = "Question Turn - " + player 1_name ;
}
{
    
if(answer_turn == "player1")
}
{
answer_turn = "player2"
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
}
{
else
}
{
answer_turn = "player1"
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
}
document.getElementById("output").innerHTML = "";
}

}