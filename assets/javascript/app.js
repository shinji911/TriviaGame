//ready js
$(document).ready(function () {

   //declare all variables here
   let right = 0;
   let wrong = 0;
   let unanswered = 0;
   let timeleft = 0;
   let questPool = [];
   let randQuestPool = [];
   let currQuest = {};
   let gameStart = false;
   let questNum = 0;
   let clickedAns = {};
   let randAnsPool = [];
   let timerId = 0;
   let timerRun = false;

   //store divs to variables here
   let questionDiv = $(".question");
   let answerDivs = $(".answers");
   let ansA = $("#ansA");
   let ansB = $("#ansB");
   let ansC = $("#ansC");
   let ansD = $("#ansD");
   let timer = $("#timer");
   let mainScreen = $("#mainScreen");
   let ansScreen = $("#ansScreen");
   let gameoverScreen = $("#gameoverScreen");
   let corrAns = $("#corrAns");
   let yourAns = $("#yourAns");
   let rightNo = $("#rightNo");
   let wrongNo = $("#wrongNo");
   let timeoutNo = $("#timeoutNo");


   //objects for questions and the respective answers here
   let quest1 = {
      question: "question1",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   let quest2 = {
      question: "question2",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   let quest3 = {
      question: "question3",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   let quest4 = {
      question: "question4",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   let quest5 = {
      question: "question5",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   let quest6 = {
      question: "question6",
      cAns: "correct",
      wAns1: "inc1",
      wAns2: "inc2",
      wAns3: "inc3",
   };

   //function to randomize an array
   function randArray(array) {
      let arrayLength = array.length;
      let resultArray = [];
      for (let i = 0; i < arrayLength; i++) {
         let randInd = Math.floor(Math.random() * array.length);
         resultArray.push(array[randInd]);
         array.splice(randInd, 1);
      };
      return resultArray;
   };

   //function to reset game
   function resetGame() {
      questPool = [quest1, quest2, quest3, quest4, quest5, quest6];
      randQuestPool = randArray(questPool);
      questNum = 0;
      right = 0;
      wrong = 0;
      unanswered = 0;
      mainScreen.removeClass("hide");
      ansScreen.addClass("hide");
      gameoverScreen.addClass("hide");
      $("button").removeClass("hide");
   };

   //function to show game over page
   function gameover() {
      mainScreen.addClass("hide");
      ansScreen.addClass("hide");
      gameoverScreen.removeClass("hide");
      rightNo.text(right);
      wrongNo.text(wrong);
      timeoutNo.text(unanswered);
      questionDiv.text("Click Here to Restart!");
   }

   //function to show answer page
   function showAnswer() {
      clearInterval(timerId);
      timerRun = false;
      mainScreen.addClass("hide");
      ansScreen.removeClass("hide");
      corrAns.text(currQuest.cAns);
      yourAns.text(clickedAns);
      questNum = questNum + 1;
      if (questNum === 6) {
         gameStart = false;
         gameover()
      }
      else {
         setTimeout(function () {
            mainScreen.removeClass("hide");
            ansScreen.addClass("hide");
            currQuest = randQuestPool[questNum];
            showRandQuest(currQuest)
            startTimer();
         }, 3000)
      };
   };

   //function to start timer countdown from 10
   function startTimer() {
      if (timerRun === false) {
         timerRun = true;
         timer.text("10 Seconds");
         timeleft = 10
         timerId = setInterval(function () {
            timeleft = timeleft - 1;
            timer.text(timeleft + " Seconds");
            if (timeleft === 0) {
               unanswered = unanswered + 1;
               clickedAns = "Timed Out"
               showAnswer();
            }
         }, 1000);
      }
   };

   //game start/restart onclick
   questionDiv.on("click", function () {
      if (gameStart === false) {
         resetGame();
         gameStart = true;
         currQuest = randQuestPool[questNum];
         showRandQuest(currQuest);
         startTimer();
      }
   });

   //function that display question and the answer choices in random slots
   function showRandQuest(quest) {
      questionDiv.text(quest.question);
      randAnsPool = randArray([ansA, ansB, ansC, ansD]);
      randAnsPool[0].text(quest.cAns);
      randAnsPool[1].text(quest.wAns1);
      randAnsPool[2].text(quest.wAns2);
      randAnsPool[3].text(quest.wAns3);
   };


   //answer choice onclick
   answerDivs.on("click", function () {
      clickedAns = $(this).text();
      console.log(clickedAns);
      if (gameStart === true) {
         if (clickedAns === currQuest.cAns) {
            right = right + 1;
         } else {
            wrong = wrong + 1;
         }
         showAnswer();
      }
   });

   //end ready js
});