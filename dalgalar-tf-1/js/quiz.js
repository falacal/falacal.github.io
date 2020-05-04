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
        question : "Basit sarkacın denge konumu etrafında yaptığı gidip gelme hareketi, titreşim örneğidir.",
        imgSrc : "img/ucsarkac.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "Bir dalga kaynağının ürettiği dalgaların hızı zamanla artıyorsa elde edilen dalgalar daima periyodiktir.",
        imgSrc : "img/sudalgasitanecik.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    }
	,	    {
        question : "Bir dalga kaynağının periyodunun ve frekansının çarpımı 1’e eşittir.",
        imgSrc : "img/tfequaltoone.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },      {
        question : "Ses dalgaları elektromanyetik dalgadır.",
        imgSrc : "img/sesdalga.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "Dalgalar titreşim ve ilerleme doğrultusuna göre üçe ayrılır.",
        imgSrc : "img/boyunaenine.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },
	
		
	
	{
        question : "Aynı yay üzerinde zıt yönlerde ilerleyen baş yukarı ve baş aşağı iki atma, her zaman birbirini söndürür. ",
        imgSrc : "img/atmalar.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },	    {
        question : "Sarmal yaylarda hareket eden atmaların hızı, uygulanan kuvvete ve yayın cinsine bağlıdır.",
        imgSrc : "img/atmahizi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    } , 
 	    {
        question : "Kalın yaydan ince yaya gönderilen baş yukarı atmanın bir bölümü baş yukarı olarak yansır.",
        imgSrc : "img/kalindaninceyeatma.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
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
















