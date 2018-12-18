//ready js
$(document).ready(function () {

   //declare all variables here
   let right = 0;
   let wrong = 0;
   let unanswered = 0;
   let timeleft = 0;
   let questionPool = [];
   let currQues = {};

   //store divs to variables here
   let questionDiv = $("#question");
   let answerDivs = $(".answers");
   let ansA = $("#ansA");
   let ansB = $("#ansB");
   let ansC = $("#ansC");
   let ansD = $("#ansD");
   let timer = $("#timer");

   //objects for questions and the respective answers here
   let ques1 = {
      question : "question1",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let ques2 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let ques3 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let ques4 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let ques5 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };

   let ques6 = {
      question : "question2",
      cAns : "correct",
      wAns1 : "inc1",
      wAns2 : "inc2",
      wAns3 : "inc3",
   };



   //end ready js
});