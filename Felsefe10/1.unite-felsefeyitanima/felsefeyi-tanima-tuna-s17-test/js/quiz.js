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
        question : "1.	Bilgeliği sevme, bilgeliği aramaya .......... denir. ",
        imgSrc : "img/felsefe2.png",
        choiceA : "Bilgi",
        choiceB : "Philosophia",
        choiceC : "Hikmet",
	    choiceD : "Öz bilinç",
	    correct : "B"
    }, {
        question : "2.	İnsan yaşamının anlamı ve değeri ile ilgili derin bilgi, bilgelik tanımı ................. ",
        imgSrc : "img/hikmet2.png",
        choiceA : "Bilinç",
        choiceB : "Philosophia",
        choiceC : "Hikmet",
	    choiceD : "Bilgi",
	    correct : "C"
    },	{
        question : "3.	Zihin ve zihin dışı nesnelerin etkileşimi sonucu ortaya çıkan ürüne ........... denir. ",
        imgSrc : "img/bilgi.png",
        choiceA : "Bilinç",
        choiceB : "Philosophia",
        choiceC : "Hikmet",
	    choiceD : "Bilgi",
	    correct : "D"
		
    },    {
        question : "4. İnsanın kendisi ve çevresinin farkında olmasına .......... denir.",
        imgSrc : "img/bilinc.png",
        choiceA : "Bilinç",
        choiceB : "Philosophia",
        choiceC : "Hikmet",
	    choiceD : "Bilgi",
	    correct : "A"
    }, {
        question : "5.	İnsanın bilinci üzerinde düşünmesi ve düşüncelerinde nelerin etkili olduğunu sorgulamasına  .............. denir.",
        imgSrc : "img/ozbilinc.png",
        choiceA : "Bilinç",
        choiceB : "Philosophia",
        choiceC : "Hikmet",
	    choiceD : "Öz bilinç",
	    correct : "D"
    } 
	
// 5 tane	
	
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
    

	if (scorePerCent < 80 ) {
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
















