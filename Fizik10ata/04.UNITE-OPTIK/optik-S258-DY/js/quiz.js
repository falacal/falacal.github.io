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
        question : "1.	Merceklerin her iki yüzeyi de küresel olmak zorundadır.",
        imgSrc : "img/lens1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "2.	Mercekler, ışığı kırma özelliği olan saydam ortamlarla oluşturulabilir.",
        imgSrc : "img/ince1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "3.	Merceklerde merkez noktalarını birleştiren doğrultu, asal eksen olarak adlandırılır.",
        imgSrc : "img/ince2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "4.	Merceğin odak uzaklığı, yapıldığı maddeye bağlı değildir.",
        imgSrc : "img/lens3.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "5.	ince kenarlı merceklerde asal eksene paralel gelen ışın, odaktan geçecek şekilde kırılır.",
        imgSrc : "img/ince3.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "6.	ince kenarlı merceklerde optik merkeze gelen ışın doğrultusunu değiştirmeden yoluna devam eder.",
        imgSrc : "img/ince4.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "7.	Kalın kenarlı merceğe uzantısı 2F'ten geçecek şekilde gelen ışın, yine uzantısı 2F'den geçecek şekilde kırılır.",
        imgSrc : "img/kalin1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "8.	Kalın kenarlı merceğe uzantısı odaktan geçecek şekilde gelen ışın, asal eksene paralel olacak şekilde kırılır.",
        imgSrc : "img/kalin2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "9.	ince kenarlı mercekte odaktan gelen ışınlar diğer odaktan geçecek şekilde kırılır.",
        imgSrc : "img/ince5.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "1O. Kalın kenarlı mercekte odaktan gelen ışınlar kırılınca asal eksene paralel gider.",
        imgSrc : "img/kalin3.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    }
	
	
	
// 10 Doğru/Yanlış Sorusu select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
	document.getElementById(runningQuestion).innerHTML = "D";
}

// answer is Wrong
function answerIsWrong(){
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
	document.getElementById(runningQuestion).innerHTML = "Y";
}

 // score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    	if (scorePerCent < 71 ) {
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
















