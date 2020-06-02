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
        question : "1)	Kuvvetle hareket arasındaki ilişkiyi inceleyen mekaniğin bölümüne ........... denir. ",
        imgSrc : "img/  ",
        choiceA : "kinematik",
        choiceB : "statik",
        choiceC : "dinamik",
		choiceD : "termodinamik",
		correct : "C"
    }, {
        question : "2)	Isıtma-soğutma sistemlerinde fiziğin alt dalı ........... ilkeleri etkin olarak kullanılır. ",
        imgSrc : "img/  ",
        choiceA : "termodinamik",
        choiceB : "mekanik",
        choiceC : "manyetizma",
		choiceD : "nükleer fizik",
		correct : "A"
    },	{
        question : "3)	Elektrik motoru elektrik enerjisini ........... enerjiye dönüştüren elektromanyetik bir araçtır. ",
        imgSrc : "img/  ",
        choiceA : "kimyasal",
        choiceB : "mekanik",
        choiceC : "potansiyel",
		choiceD : "ışık",
		correct : "B"
    }, {
        question : "4)	Fiber optik cam içerisinde ........... sinyalleri ile bilgileri uzun mesafelere taşıyan araçlardır. ",
        imgSrc : "img/  ",
        choiceA : "ışık",
        choiceB : "radyo",
        choiceC : "wifi",
		choiceD : "kızıltesi",
		correct : "A"
    }, 
	    {
        question : "5)	Kristal yapılı maddeleri inceleyen fiziğin alt dalına ........... denir.",
        imgSrc : "img/  ",
        choiceA : "katıhal fiziği",
        choiceB : "mekanik",
        choiceC : "termodinamik",
		choiceD : " astronomi",
		correct : "A"
    }, {
        question : "6)	Atom fiziği atomu elektronlar ve bir ........... içeren sistem olarak ele alır. ",
        imgSrc : "img/  ",
        choiceA : "foton",
        choiceB : "quark",
        choiceC : "nötron",
		choiceD : "çekirdek",
		correct : "D"
    },	{
        question : "7)	Nükleer enerji santrallerinde enerji üretilirken ........... yakıt kullanılmaz. ",
        imgSrc : "img/  ",
        choiceA : "fosil",
        choiceB : "uranyum",
        choiceC : "toryum",
		choiceD : "atom",
		correct : "A"
    }, {
        question : "8)	Plazma fiziğinin günlük hayatta karşımıza çıkardığı ürünler arasında ........... ve neon lambalar bulunur. ",
        imgSrc : "img/  ",
        choiceA : "atom lambaları",
        choiceB : "floresan",
        choiceC : "led lambalar",
		choiceD : "laser lambalar",
		correct : "B"
    },    {
        question : "9)	Bütün bilimlerin oluşup gelişimine neden olan ........... ile fizik bilim insanları da ilgilenmiştir. ",
        imgSrc : "img/  ",
        choiceA : "felsefe",
        choiceB : "matematik",
        choiceC : "fizik",
		choiceD : "kimya",
		correct : "A"
    }, {
        question : "10)	Telli çalgılarda ........... fiziksel prensiplere dayalı yapılan bir işlemdir. ",
        imgSrc : "img/  ",
        choiceA : "davul",
        choiceB : "tef",
        choiceC : "akort",
		choiceD : " flüt",
		correct : "C"
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
















