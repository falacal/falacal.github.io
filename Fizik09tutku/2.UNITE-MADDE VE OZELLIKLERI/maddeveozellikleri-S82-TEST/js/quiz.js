// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1)	Aynı madde moleküllerinin birbirlerine uyguladıkları kuvvetlere ........... denir. ",
        imgSrc : "img/kohezyon1.png  ",
        choiceA : "adezyon",
        choiceB : "coulomb kanunu",
        choiceC : "kılcallık",
		choiceD : "kohezyon",
		correct : "D"
    }, {
        question : "2)	Farklı madde moleküllerinin birbirlerine uyguladıkları kuvvetlere ........... denir. ",
        imgSrc : "img/capilary.gif  ",
        choiceA : "kılcallık",
        choiceB : "adezyon",
        choiceC : "yüzey gerilimi",
		choiceD : "kohezyon",
		correct : "B"
    },	{
        question : "3)	Adezyon ve kohezyon çekim kuvvetleri ile  ........... kuvvetlerden dolayı oluşur. ",
        imgSrc : "img/kohezyon2.png  ",
        choiceA : "elektriksel",
        choiceB : "kılcallık",
        choiceC : "yüzey gerilimi",
		choiceD : "manyetik",
		correct : "A"
    }, {
        question : "4)	Sıvının özkütlesi arttıkça yüzey gerilimi ........... ",
        imgSrc : "img/kohezyon3.png  ",
        choiceA : "azalır",
        choiceB : "sabit kalır",
        choiceC : "artar",
		choiceD : "sıfır olur",
		correct : "C"
    }, 
	    {
        question : "5)	Suyun ağaç köklerinden dallara yükselmesi  ........... olayıdır. ",
        imgSrc : "img/agackoksu2.gif  ",
        choiceA : "kohezyon",
        choiceB : "artezyen",
        choiceC : "kütle çekim kuvveti",
		choiceD : "kılcallık",
		correct : "D"
    }
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 90; // 90 s
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
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
    
	
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
        counter.innerHTML = (90-count)+" saniye"    ;
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
















