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
        question : "1) İş, .......... bir büyüklüktür. ",
        imgSrc : "img/isformulu3.png ",
        choiceA : "temel",
        choiceB : "skaler",
        choiceC : "tensörel",
		choiceD : "vektörel ",
		correct : "B"
    }, {
        question : "2) Enerji olmadan .......... yapılamaz. ",
        imgSrc : "img/isformulu2.png ",
        choiceA : "iş",
        choiceB : "vektörel",
        choiceC : "temel",
		choiceD : "türetilmiş",
		correct : "A"
    },	{
        question : "3)	Bir cisme uygulanan kuvvetin yapacağı iş, cismin .......... enerjisindeki değişmeye neden olur. ",
        imgSrc : "img/isformulu4.png ",
        choiceA : "yoğunlaşma",
        choiceB : "buharlaşma",
        choiceC : "mekanik",
		choiceD : "güç",
		correct : "C"
    }, {
        question : "4)	İşin ne kadar çabuk yapılabildiğini .......... kavramıyla anlayabiliriz. ",
        imgSrc : "img/igucformulu4.png ",
        choiceA : "kuvvet",
        choiceB : "potansiyel",
        choiceC : "kinetik",
		choiceD : "güç",
		correct : "D"
    },  {
        question : "5) .......... karşı yapılan iş W = mgh ile bulunur. ",
        imgSrc : "img/potansiyelenerji2.png ",
        choiceA : "Esnekliğe",
        choiceB : "İvmeye",
        choiceC : "Momentuma",
		choiceD : "Yerçekimine",
		correct : "D"
    },	{
        question : "6) Hızlanan bir otomobilin .......... enerjisi artar. ",
        imgSrc : "img/araba1.gif ",
        choiceA : "potansiyel",
        choiceB : "kinetik",
        choiceC : "esneklik",
		choiceD : "ısı",
		correct : "B"
    }, {
        question : "7)	Yapısında karbon bulunan doğal gaz, kömür ve petrol gibi çevreye zararlı salınımları olan enerji kaynakları .......... enerji kaynaklarıdır.",
        imgSrc : "img/yenilenemez1.png ",
        choiceA : "yenilenebilir",
        choiceB : "kinetik",
        choiceC : "yenilenemez",
		choiceD : "nükleer",
		correct : "C"
    }, {
        question : "8)	Bir makineden alınan gücün, makineye verilen güce oranı .......... verir. ",
        imgSrc : "img/igucformulu5.png ",
        choiceA : "verimi",
        choiceB : "gücü",
        choiceC : "kinetik enerjiyi",
		choiceD : "potansiyel enerjiyi",
		correct : "A"
    },	{
        question : "9)	Enerji kaynakları .......... ve yenilenemez olmak üzere ikiye ayrılır. ",
        imgSrc : "img/enerjikaynaklari5.png ",
        choiceA : "türetilmiş",
        choiceB : "yenilenebilir",
        choiceC : "temel",
		choiceD : "yenilemez",
		correct : "B"
    }, {
        question : "10)	İlk enerjiyi verdikten sonra sürekli çalışan makinelere .......... makineleri denir. ",
        imgSrc : "img/devridaim1.gif ",
        choiceA : "zaman yolculuğu",
        choiceB : "elektrik",
        choiceC : "devir-daim",
		choiceD : "mekanik",
		correct : "C"
    }
	
// 10 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 180; // 90 s
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
        counter.innerHTML = (180-count)+" saniye"    ;
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
















