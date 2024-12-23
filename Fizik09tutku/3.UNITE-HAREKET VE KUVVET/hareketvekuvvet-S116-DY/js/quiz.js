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
        question : "1) Kinematik, hareketin nedenini değil, nasıl gerçekleştiğini inceler. ",
        imgSrc : "img/araba1.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "2) Hareket, cisimlerin sabit kabul edilen bir noktaya göre konumunu değiştirmesidir. ",
        imgSrc : "img/araba2.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    },	{
        question : "3) Öteleme, nesnelerin bir nokta etrafında dolanma hareketidir. ",
        imgSrc : "img/oteleme2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, {
        question : "4) Katı madde molekülleri bulundukları yerde titreşim hareketi yapar. ",
        imgSrc : "img/katisivi2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, 
	    {
        question : "5) Yol skaler, yer değiştirme vektörel büyüklüktür. ",
        imgSrc : "img/yolyerdegistirme2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "6) Sürat ve hız alınan yola bağlı hesaplanan büyüklüklerdir. ",
        imgSrc : "img/hizsurat3.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    },	{
        question : "7)	Konum-zaman grafiklerinde eğim hızı verir. ",
        imgSrc : "img/konumzaman1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "8) İvmeli harekete düzgün doğrusal hareket denir. ",
        imgSrc : "img/sabithizli1b.png   ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    },    {
        question : "9) İvmesi sabit olan cisimler sabit hızla hareket etmektedir. ",
        imgSrc : "img/hizzamanivme1a.png       ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, {
        question : "10)	Hız-zaman grafiklerindeki eğim ivmeyi verir. ",
        imgSrc : "img/hizzaman1a.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    },	{
        question : "11)	Hız-zaman grafiklerinde grafiğin altında kalan alan yer değiştirmeyi verir. ",
        imgSrc : "img/yerdegistirme1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "12)	İvme ve hız değişim vektörleri daima aynı yönlüdür. ",
        imgSrc : "img/ivmehizdegisimi1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "13) Yuvarlanan cisimler hem öteleme hem dönme hareketi yaparlar. ",
        imgSrc : "img/otelemedonme2.png  ",
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
const questionTime = 180; // 180 s
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
















