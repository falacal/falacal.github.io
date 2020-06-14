// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");

 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1- Katı maddenin bulunduğu yüzeye temas eden yüzey alanı küçülürse basınç da küçülür.",
        imgSrc : "img/basinc1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "2- Aynı maddeden yapılmış silindirik cisimlerin basınçları, yükseklikleri ile doğru orantılıdır.",
        imgSrc : "img/basinc2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "3- Katı kristallere basınç uygulandığında kristaller elektrik akımı üretir.",
        imgSrc : "img/piezoelektrik.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "4-  Sıvıların basıncı, bulundukları kabın şekline bağlıdır.",
        imgSrc : "img/sivibasinci.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },  
	{
        question : "5- Sıvılarda basınç kuvveti yüksekliğe ve yüzey alanına bağlıdır.",
        imgSrc : "img/sivi-basinc-kuvveti.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "6-  Açık hava basıncı insan vücudu dışındaki bütün nesnelere etki eder.",
        imgSrc : "img/atmosferbasinci.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "7- Birim yüzeye  dik etki eden kuvvet basınç olarak tanımlanır.",
        imgSrc : "img/basinc3.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "8-  Katı maddelerin basıncı  ..........  ile ters orantılıdır ",
        imgSrc : "img/basinc4.png",
        choiceA : "yüksekliği",
        choiceB : "yüzey alanı",

		correct : "B"
    },    {
        question : "9- Emme basma tulumbalar, hidrolik sistemler  ..........  basıncı  iletme  özelliğinden yararlanılarak  geliştirilmiştir.",
        imgSrc : "img/su_tulumbasi.gif",
        choiceA : "sıvıların",
        choiceB : "açık hava",

		correct : "A"
    },    {
        question : "10-  Kapalı    kaplardaki   gazların    basıncı hacmine, sıcaklığına   ve  tanecik sayısına bağlı olarak değişir.",
        imgSrc : "img/idealgas.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    }
	
	
	
	//,     {
     //   question : " ",
     //   imgSrc : "img/",
    //    choiceA : "Doğru",
    //    choiceB : "Yanlış",

	//	correct : "A"
   // }
	
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 120; // 120 s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;

    
	
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render



// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
 	if (scorePerCent < 90 ) {
		var audio = new Audio('img/basaramadim-.mp3');
		 audio.play();
         }

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
			  (scorePerCent >= 10) ? "img/1.png" :
			   
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>%"+ scorePerCent + "</br>" +    "</br>" + "<button class='button' onClick='window.location.href=window.location.href' >"  + "Tekrarla" + "</button>"  +                 "</p>";
	
	 
}




function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = (120-count)+" saniye"    ;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}















