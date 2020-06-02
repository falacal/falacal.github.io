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
        question : "1. Bir maddenin hâl değiştirmesi için kesinlikle ısı alması gerekir.",
        imgSrc : "img/sublimlesmefelan.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    }, {
        question : "2. Işıma yoluyla ısı aktarımı için maddesel bir ortama ihtiyaç yoktur.",
        imgSrc : "img/gunesdenisima1.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },	{
        question : "3. 30 °C’taki su ile 70 °C’taki suyu karıştırdığımızda karışımın sıcaklığı 69 °C olabilir.",
        imgSrc : "img/dengesicakligi2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
		
    },{
        question : "4. Tahta, metale göre ısı iletimini daha uzun sürede tamamlar. ",
        imgSrc : "img/isiletimi3.png ",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },   {
        question : "5.  Yemek karıştırırken tahta kaşık kullanılmasının sebebi ısı iletiminin engellenmesidir. ",
        imgSrc : "img/isiletimi3.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }, {
        question : "6. Metal çiftleri, metallerin farklı genleşmelerinden yararlanılarak yapılır.",
        imgSrc : "img/metalcifti4.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },   {
        question : "7. Gazların genleşme katsayıları birbirine eşittir.",
        imgSrc : "img/hacimcegenlesme1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }, {
        question : "8. Hissedilen sıcaklık ile gerçek sıcaklık her zaman birbirine eşittir.",
        imgSrc : "img/hissedilensicaklik1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    },   {
        question : "9. Genleşme katsayısı katı, sıvı ve gazlar için ayırt edici özelliktir.",
        imgSrc : "img/genlesmeformulleri.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    },   {
        question : "10. Yangın alarm düzeneğinde metal çifti bulunur.",
        imgSrc : "img/yanginalarmi1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },   {
        question : "11. Sera gazlarının atmosferde artması küresel ısınmaya neden olur.",
        imgSrc : "img/seragazlari2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }
	//, {
    //    question : " ",
    //    imgSrc : "img/ ",
    //    choiceA : "Kırılma indisine",
    //    choiceB : "Sınır açısına",
    //    choiceC : "Işık hızına" ,
	//	choiceD : "Saydamlığına",
	//	correct : "A"
   
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 150; // 150 s
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
        counter.innerHTML = (150-count)+" saniye"    ;
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
















