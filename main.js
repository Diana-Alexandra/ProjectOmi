function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;

    var correct = 0;


    if (question1 == "mid") {
        correct++;
    }
    if (question2 == "support") {
        correct++;
    }
    if (question3 == "top") {
        correct++;
    }
    if (question4 == "oui") {
        correct++;
    }
    if (question5 == "non") {
        correct++;
    }


    var messages = ["Super!", "C'est juste bien...", "Vous devez vraiment faire mieux!"];
    var pictures = ["img/bravo.gif", "img/okay.gif", "img/mehhh.gif"];
    var range;
    if (correct == 0) {
        range = 2;
    }
    if (correct < 3 && correct > 0) {
        range = 2;

    }
    if (correct > 2 && correct < 5) {
        range = 1;
    }
    if (correct == 5) {
        range = 0;
    }





    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = " Vous avez " + correct + " bonnes réponses ! ";
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("pictures").src = pictures[range];
}