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
        question : "1) Işık şiddeti birimi ..........  ",
        imgSrc : "img/  ",
        choiceA : "Lux",
        choiceB : "Candela",
        choiceC : "Lumen",
		choiceD : "Weber ",
		correct : "B"
    }, {
        question : "2) Vektörel bir büyüklük  .......... ",
        imgSrc : "img/  ",
        choiceA : "kütle",
        choiceB : "yol",
        choiceC : "hız",
		choiceD : "sürat",
		correct : "C"
    },	{
        question : "3) Sıcaklık ölçer  .......... ",
        imgSrc : "img/  ",
        choiceA : "kalorimetre",
        choiceB : "altimetre",
        choiceC : "dinamometre",
		choiceD : "termometre ",
		correct : "D"
    }, {
        question : "4) Fiziğin uygulama alanlarından biri .......... ",
        imgSrc : "img/  ",
        choiceA : "nükleer santraller",
        choiceB : "termometreler",
        choiceC : "kütle",
		choiceD : "hız",
		correct : "A"
    }, 
	    {
        question : "5) Bir sayı, birim, yön ve doğrultu ile ifade edilen büyüklük  ..........",
        imgSrc : "img/  ",
        choiceA : "skaler",
        choiceB : "vektörel",
        choiceC : "mutlak değer",
		choiceD : "terazi",
		correct : "B"
    }, {
        question : "6) Fizikçilerin uğraş alanlarından biri ..........",
        imgSrc : "img/  ",
        choiceA : "asitler",
        choiceB : "bazlar",
        choiceC : "elektronik",
		choiceD : "hücre",
		correct : "C"
    },	{
        question : "7) Temel büyüklüklerden biri ..........",
        imgSrc : "img/  ",
        choiceA : "kütle",
        choiceB : "ivme",
        choiceC : "hız",
		choiceD : "kuvvet",
		correct : "A"
    }, {
        question : "8) I.	Evrenin oluşumu <br>  &nbsp;&nbsp  II.	Dünya’nın hareketleri<br> &nbsp;&nbsp III.	Atomun yapısı<br> &nbsp;&nbsp IV.	Canlıların hücre yapıları<br>Yukarıda verilenlerden hangileri fizik biliminin çalışma alanlarındandır? ",
        imgSrc : "img/  ",
        choiceA : "Yalnız I ",
        choiceB : "I ve II ",
        choiceC : "I ve III ",
		choiceD : "I, II ve III ",
		correct : "D"
    },    {
        question : "9)	Aşağıda bazı araçlar verilmiştir. <br>  &nbsp;&nbsp I.	Kronometre <br>  &nbsp;&nbsp II.	Eşit kollu terazi <br>  &nbsp;&nbsp III.	Ampermetre <br>  &nbsp;&nbsp IV.	Mezura <br>  Yukarıda verilen ölçü araçlarından hangileri temel büyüklükleri ölçer? ",
        imgSrc : "img/  ",
        choiceA : "I  ve IV",
        choiceB : "I, II ve III  ",
        choiceC : "I, II, III ve IV ",
		choiceD : "I, II  ve IV ",
		correct : "C"
    }, {
        question : "10) Aşağıda sembolleri ile verilen birimlerden hangisi SI birim sistemine uygun değildir? ",
        imgSrc : "img/  ",
        choiceA : "Santigrat (ºC) ",
        choiceB : "Kilogram (kg) ",
        choiceC : "Metre (m)",
		choiceD : "Candela (cd)",
		correct : "A"
    },	{
        question : "11) Vektörel büyüklükler için <br> &nbsp;&nbsp I.	Temel büyüklüklerdir. <br>  &nbsp;&nbsp  II.	Toplam vektör her zaman toplananlardan büyük değer alır. <br> &nbsp;&nbsp III.	Eşit olduklarında doğrultu ve yönleri kesinlikle aynıdır.  <br>  yukarıdaki yargılardan hangisi ya da hangileri doğrudur? ",
        imgSrc : "img/  ",
        choiceA : "Yalnız I ",
        choiceB : "Yalnız III ",
        choiceC : "I ve II ",
		choiceD : "I ve III ",
		correct : "B"
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
















