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
        question : "1. Küresel aynalar çukur ve düz olmak üzere iki çeşittir.",
        imgSrc : "img/aynalar1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "2. Küresel aynalarda odak, merkez ve tepe noktalarından geçen doğrultu asal eksen olarak adlandırılır",
        imgSrc : "img/aynalar2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    }
	,	    {
        question : "3. Odak noktası merkezi ve tepeyi birleştiren doğru parçasının orta noktasıdır.",
        imgSrc : "img/merkezodak.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },      {
        question : "4. Çukur aynaya odaktan geçerek gelen ışın asal ekseni keserek yansır.",
        imgSrc : "img/cukuraynaodak.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "5. Tümsek aynada tepe noktasına gelen ışın, asal eksenle eşit açı yaparak yansır.",
        imgSrc : "img/tumsekcukurtepe.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },
	
		
	
	{
        question : "6. Çukur aynada cisim merkezde ise görüntü sonsuzda oluşur. ",
        imgSrc : "img/cukur-aynada-goruntu-cisim-merkezde.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },	    {
        question : "7. Çukur aynada cisim odakla tepe arasında ise görüntü sanaldır.",
        imgSrc : "img/image011.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    } , 
 	    {
        question : "8. Tümsek aynada cisim sonsuzda ise görüntü noktasaldır.",
        imgSrc : "img/tumsekaynacisimsonsuzdaysa.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    } , 
 	    {
        question : "9. Tümsek aynada gerçek cismin boyu görüntünün boyundan daima küçüktür.",
        imgSrc : "img/tumsekaynacisim2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    } 
	, 
 	    {
        question : "10. Arabaların yan aynaları çukur aynaların kullanıldığı yerlere örnektir.",
        imgSrc : "img/yan_ayna_1_kc6lii.png",
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
















