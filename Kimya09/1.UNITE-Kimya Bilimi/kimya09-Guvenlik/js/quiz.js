// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
 
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "01. Aşağıdaki işaretlerden hangisi tahriş edici, deriye ve göze zarar veren kimyasal maddeleri belirtir?",
        imgSrc : "img/analitikkimya01.jpg",
        choiceA : "<img src='img/isaret02.png'>" ,
        choiceB : "<img src='img/isaret01.png'>" ,
		choiceC : "<img src='img/isaret03.png'>" ,
        correct : "B"
    },{
        question : "02. Aşağıdaki işaretlerden hangisi canlı dokuyu tahrip eden ya da demiri aşındıranDır?",
        imgSrc : "img/polimerkimya01.jpg",
        choiceA : "<img src='img/isaret02.png'>" ,
        choiceB : "<img src='img/isaret05.png'>" ,
		choiceC : "<img src='img/isaret06.png'>" ,
        correct : "C"
    },{
        question : "03. Aşağıdaki işaretlerden hangisi Havasız ortamda bile alev alabilen veya yanabilen kimyasal maddeleri ifade eder?",
        imgSrc : "img/fizikokimya01.jpg",
        choiceA : "<img src='img/isaret03.png'>" ,
        choiceB : "<img src='img/isaret05.png'>" ,
		choiceC : "<img src='img/isaret06.png'>" ,
        correct : "A"
    },{
        question : "04. Aşağıdaki işaretlerden hangisi İnsan sağlığına kısa veya uzun dönemli hasarlar veren kimyasal maddeleri ifade eder?",
        imgSrc : "img/anorganik01.jpg",
        choiceA : "<img src='img/isaret02.png'>" ,
        choiceB : "<img src='img/isaret05.png'>" ,
		choiceC : "<img src='img/isaret06.png'>" ,
        correct : "B"
    },{
        question : "05. Aşağıdaki işaretlerden hangisi Yanıcı ve parlayıcı kimyasal maddeleri belirtir?",
        imgSrc : "img/organikkimya01.jpg",
        choiceA : "<img src='img/isaret02.png'>" ,
        choiceB : "<img src='img/isaret03.png'>" ,
		choiceC : "<img src='img/isaret06.png'>" ,
        correct : "A"
    },{
        question : "06. Aşağıdaki işaretlerden hangisi ağız, deri ve solunum yolu ile zehirlenmelere yol açar. Vücut ile temas ettirilmemelidir, işaretidir?",
        imgSrc : "img/organikkimya01.jpg",
        choiceA : "<img src='img/isaret08.png'>" ,
        choiceB : "<img src='img/isaret03.png'>" ,
		choiceC : "<img src='img/isaret07.png'>" ,
        correct : "C"
    },{
        question : "7. Aşağıdaki işaretlerden hangisi çevresine radyasyon yayar ve canlı dokularda kalıcı hasarlara neden olabilir işaretidir?",
        imgSrc : "img/organikkimya01.jpg",
        choiceA : "<img src='img/isaret08.png'>" ,
        choiceB : "<img src='img/isaret03.png'>" ,
		choiceC : "<img src='img/isaret07.png'>" ,
        correct : "A"
    },{
        question : "8. Aşağıdaki işaretlerden hangisi basınç altında gaz içerir, çıkan gaz soğuk olabilir ve ısıtıldığında patlayabilir, deriye ve göze temas ettirilmemelid işaretidir?",
        imgSrc : "img/organikkimya01.jpg",
        choiceA : "<img src='img/isaret07.png'>" ,
        choiceB : "<img src='img/isaret08.png'>" ,
		choiceC : "<img src='img/isaret09.png'>" ,
        correct : "C"
    }
	
	
	
    
	
	
	
// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
    choiceC.innerHTML = q.choiceC;
 
    
	
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
















