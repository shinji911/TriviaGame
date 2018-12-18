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

   //store divs to variables here
   let questionDiv = $("#question");
   let answerDivs = $(".answers");
   let ansA = $("#ansA");
   let ansB = $("#ansB");
   let ansC = $("#ansC");
   let ansD = $("#ansD");
   let timer = $("#timer");

   //objects for questions and the respective answers here
   let quest1 = {
      question : "question1",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let quest2 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let quest3 = {
      question : "question3",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let quest4 = {
      question : "question4",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let quest5 = {
      question : "question5",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let quest6 = {
      question : "question6",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   //function to randomize an array
   function randArray(array) {
      let arrayLength = array.length;
      let resultArray = [];
      for (let i = 0; i < arrayLength; i++) {
         let randInd = Math.floor(Math.random() * array.length);
         resultArray.push(array[randInd]);
         array.splice(randInd,1);
      };
      return resultArray;
   };

   //function to reset game
   function resetGame() {
      questPool = [quest1, quest2, quest3, quest4, quest5, quest6];
      randQuestPool = randArray(questPool);
   };



   //end ready js
});