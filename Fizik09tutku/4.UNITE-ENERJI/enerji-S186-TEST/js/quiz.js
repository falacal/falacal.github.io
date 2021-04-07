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
        question : "1) Nükleer enerji  ............. enerji kaynaklarındandır. ",
        imgSrc : "img/yenilenemez1.png  ",
        choiceA : "kimyasal",
        choiceB : "yenilenebilir ",
        choiceC : "yenilenemeyen",
		choiceD : "mekanik",
		correct : "C"
    }, {
        question : "2) Fosil yakıtların temelinde  ............. enerjisi vardır. ",
        imgSrc : "img/yenilenemez2.png ",
        choiceA : "biyokütle",
        choiceB : "güneş",
        choiceC : "ay",
		choiceD : "kimyasal",
		correct : "B"
    },	{
        question : "3) Hidrolik enerji ............. oluşturmaz. ",
        imgSrc : "img/hidroelektrik2.png ",
        choiceA : "mekanik enerji",
        choiceB : "potansiyel enerji",
        choiceC : "kinetik enerji",
		choiceD : "kirlilik",
		correct : "D"
    }, {
        question : "4) Jeotermal enerji  ............. enerjisidir. ",
        imgSrc : "img/jeotermal2.png ",
        choiceA : "rüzgar ",
        choiceB : "ısı",
        choiceC : "güneş",
	choiceD : "biyokütle",
	    correct : "B"
    },  {
        question : "5)	Güneş enerjisi birim yüzeye düşen Güneş ışınları süreklilik göstermediğinden ............. gerektirir.",
        imgSrc : "img/gunes2.gif ",
        choiceA : "depolama",
        choiceB : "kullanılmamayı",
        choiceC : "verimsizlik",
		choiceD : "pahalılık",
		correct : "A"
    },	{
        question : "6)	Fosil kaynaklar, su ve biyokütleden elde edilen ............. enerjisi enerji taşıyıcısıdır. ",
        imgSrc : "img/yenilenemez1.png ",
        choiceA : "radyasyon",
        choiceB : "kinetik",
        choiceC : "mekanik",
		choiceD : "hidrojen",
		correct : "D"
    }, {
        question : "7)	Rüzgâr türbinlerinin kurulacağı tarlalar için  ............. çıkartılır. ",
        imgSrc : "img/ruzgar-turbin.gif ",
        choiceA : "rüzgar atlası",
        choiceB : "siyasi atlası",
        choiceC : "coğrafi atlası",
		choiceD : "demografik yapı",
		correct : "A"
    }, {
        question : "8) Rüzgâr  enerjisi için  ............. maliyeti gerekmez. ",
        imgSrc : "img/ruzgarjenatoru2.gif ",
        choiceA : "verim",
        choiceB : "yakıt",
        choiceC : "arazi",
		choiceD : "güneş enerjisi",
		correct : "B"
    },	{
        question : "9) Biyokütle enerjisi için .............  odun özü gibi yüksek enerji içerikli maddeler depolanır. ",
        imgSrc : "img/biyokutlea1.png ",
        choiceA : "potansiyel",
        choiceB : "mekanik",
        choiceC : "rüzgar",
		choiceD : "selüloz",
		correct : "D"
    }, {
        question : "10) Enerji tasarrufu en ucuz yeni bir  .............  kaynağı olur. ",
        imgSrc : "img/bosaharcama.gif ",
        choiceA : " enerji",
        choiceB : "kuvvet",
        choiceC : "hız",
		choiceD : "ivme",
		correct : "A"
    }
	
	
	
// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 90; // 180 s
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
















