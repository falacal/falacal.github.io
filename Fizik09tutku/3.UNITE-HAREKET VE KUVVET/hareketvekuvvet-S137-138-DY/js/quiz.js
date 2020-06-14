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
        question : "1)	Yer değiştirme ve alınan yol eşit büyüklükte olabilir. ",
        imgSrc : "img/yerdegistirmeveyol1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "2)	Düzgün doğrusal harekette ivme vektörü, hız vektörü ile aynı yönlüdür. ",
        imgSrc : "img/duzgundogrusal1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    },	{
        question : "3)	Konum-zaman grafiklerinde eğim hareketlinin hızını verir. ",
        imgSrc : "img/konum-zaman1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "4)	İvme-zaman grafiklerinde grafiğin altında kalan alanlar hareketlinin hızını verir. ",
        imgSrc : "img/ivme-zaman1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, 
	    {
        question : "5)	Hızlanan harekette hız ve ivme zıt yönlü vektörlerdir.",
        imgSrc : "img/ivme-zamanarti1b.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, {
        question : "6) Cisim harekete başladığında kinetik sürtünme katsayısı, statik sürtünme katsayısından küçük değer alır. ",
        imgSrc : "img/kineticstatic1e.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    },	{
        question : "7)	Kuvvet şiddetini ölçen araçlara dinamometre denir. ",
        imgSrc : "img/dinamometre2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "8)	Sabit net kuvvet etkisindeki cisimler sabit hızla hareket eder. ",
        imgSrc : "img/kineticstatic2e.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    },    {
        question : "9)	Dengelenmiş kuvvetler etkisindeki cisimler durmakta veya sabit hızla hareket etmektedir. ",
        imgSrc : "img/sabithizli3.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "10)	Etki ve tepki kuvvetlerinin doğrultu ve yönleri aynıdır. ",
        imgSrc : "img/etkitepki4.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }
	
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















