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
      question: "What is the highest mountain when measured from the center of Earth?",
      cAns: "Mt. Chimborazo",
      wAns1: "Mt. Fuji",
      wAns2: "Mt. Everest",
      wAns3: "Mt. Yourmom",
   };

   let quest2 = {
      question: "In what country were the Winter Olympics first held?",
      cAns: "France",
      wAns1: "Germany",
      wAns2: "Nigeria",
      wAns3: "Georgia",
   };

   let quest3 = {
      question: "Alexander the great was taught by which Greek philosopher?",
      cAns: "Aristotle",
      wAns1: "Plato",
      wAns2: "Dr. Phil",
      wAns3: "Socrates",
   };

   let quest4 = {
      question: "Who is the one that Rick Rolls?",
      cAns: "Rick Astley",
      wAns1: "Ricky Martin",
      wAns2: "Rick Sanchez",
      wAns3: 'Dwane "The Rick" Johnson',
   };

   let quest5 = {
      question: "Which is the only Disney Princess that has a child?",
      cAns: "Ariel",
      wAns1: "Mulan",
      wAns2: "Snow White",
      wAns3: "Nemo",
   };

   let quest6 = {
      question: "The leaning tower of Pisa is located in which city?",
      cAns: "Pisa",
      wAns1: "Rome",
      wAns2: "Hazardville",
      wAns3: "Knockemstiff",
   };

   let quest7 = {
      question: "Which city served as the capital of the United States from 1785 until 1790?",
      cAns: "New York, New York",
      wAns1: "Bosstown, Wisconsin",
      wAns2: "Hazardville, Conneticut",
      wAns3: "Knockemstiff, Ohio",
   };

   let quest8 = {
      question: "A league is equivalent to how many nautical miles at sea?",
      cAns: "Three",
      wAns1: "Five",
      wAns2: "Ten",
      wAns3: "Fifty Gazillion",
   };

   let quest9 = {
      question: "The name of the popular online battle royale game PUBG, is short for what?",
      cAns: "PlayerUnknown’s Battlegrounds",
      wAns1: "Pent Up Battle Guys",
      wAns2: "Player's Unlimited Battlegrounds",
      wAns3: "PlayerUnknown's Bugged Game",
   };

   let quest10 = {
      question: "Jim Davis was the cartoonist behind which widely syndicated comic strip?",
      cAns: "Garfield",
      wAns1: "Snoopy",
      wAns2: "Cynide & Happiness",
      wAns3: "Seinfeld",
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
      questPool = [quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10];
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
      if (questNum === 10) {
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