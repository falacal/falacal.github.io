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
        question : "1- Pozitif ve negatif olmak üzere iki çeşit elektrik yükünün bulunduğunu ........... bulmuştur.",
        imgSrc : "img/benjamin.png",
        choiceA : "Louis de Broglie",
        choiceB : "Niels Bohr",
        choiceC : "Benjamin Franklin" ,
	    choiceD : "Max Planck",
	    correct : "C"
    }, {
        question : "2- Elektron sayısı proton sayısına eşit bir atoma ........... atom denir. ",
        imgSrc : "img/atom2.gif",
        choiceA : "izotop",
        choiceB : "izoton",
        choiceC : "+ yüklü" ,
	    choiceD : "nötr",
	    correct : "D"
    },	{
        question : "3-	Elektron ve ........... eşit yük miktarına sahiptir.",
        imgSrc : "img/atomproton.png",
        choiceA : "proton",
        choiceB : "nötron",
        choiceC : "foton" ,
	    choiceD : "izotop",
	    correct : "A"
		
    },{
        question : "4-	Elektron kaybetmiş veya fazladan elektronu bulunan atomlardan oluşmuş cisme ........... cisim denir.",
        imgSrc : "img/atom3.gif",
        choiceA : "yüksüz",
        choiceB : "izotop",
        choiceC : "yüklü" ,
	    choiceD : "izoton",
	    correct : "C"
    },   {
        question : "5-	Elektron fazlalığı bulunan atomlardan oluşan cisme ........... yüklü cisim denir.",
        imgSrc : "img/pozitifnegatifyuklu.png",
        choiceA : "pozitif",
        choiceB : "sıfır",
        choiceC : "izotop" ,
	    choiceD : "negatif",
	    correct : "D"
    }, {
        question : "6- 	Yüklenmeler yalnızca ........... alışverişi  ile oluşur.",
        imgSrc : "img/elektrongider.gif",
        choiceA : "proton",
        choiceB : "elektron",
        choiceC : "nötron" ,
	    choiceD : "foton",
	    correct : "B"
    },   {
        question : "7-	Cisimler yüklü olmadan da ........... cisim özelliği taşıyabilir.",
        imgSrc : "img/pozitifnegatifyuklu.png",
        choiceA : "basınç",
        choiceB : "elektriklenmiş",
        choiceC : "ivme" ,
	    choiceD : "atom",
	    correct : "B"
    }, {
        question : "8-	Limonlu su ........... sıvılar arasında yer alır.",
        imgSrc : "img/volta3.gif",
        choiceA : "iletken",
        choiceB : "yalıtkan",
        choiceC : "yarı iletken" ,
	    choiceD : "katı",
	    correct : "A"
    },   {
        question : "9- Elektriksel iletken cisimlerde yükler iletken cismin ........... bulunur.",
        imgSrc : "img/yukleryuzeydebulunur.png",
        choiceA : "içinde",
        choiceB : "dış yüzeyinde",
        choiceC : "iç yüzeyinde" ,
	    choiceD : "ortasında",
	    correct : "B"
    },   {
        question : "10-	Bir noktanın ........... şiddeti o noktada birim yüke etkiyen elektriksel kuvvet şiddetidir.",
        imgSrc : "img/elektrikselalan.png",
        choiceA : "elektriksel alan",
        choiceB : "manyetik alan",
        choiceC : "mıknatıs" ,
	    choiceD : "basınç",
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
    

	if (scorePerCent < 60 ) {
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
















