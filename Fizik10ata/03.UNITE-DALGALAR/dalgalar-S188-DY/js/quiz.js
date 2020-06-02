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
        question : "1- Mikrodalga, boşlukta yayılabilir.",
        imgSrc : "img/emanyetik.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "2- Elektromanyetik dalgalar titreşim doğrultusu bakımından boyuna dalgalardır.",
        imgSrc : "img/emanyetik.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "3- Sarmal bir yayın boyca yoğunluğu kütle/uzunluk değerine eşittir.",
        imgSrc : "img/atmahizi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "4- Doğrusal su dalgalarının suda yayılma doğrultusu dalga tepesine diktir.",
        imgSrc : "img/dogrusalsu.png",
		
		
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "5- Bir periyotluk sürede dalganın aldığı yol, hızına eşittir.",
        imgSrc : "img/dalga_boyu.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "6- Ses dalgaları en iyi gaz ortamlarda yayılır.",
        imgSrc : "img/seskatisivigaz.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "7-Ses dalgaları sadece yansıma olayını gerçekleştirir.",
        imgSrc : "img/sesyansiriletilir300.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "8-Deprem dalgaları mekanik dalgalardır.",
        imgSrc : "img/deprem.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "9-Sesin engelden iletilmesi yankı olarak adlandırılır.",
        imgSrc : "img/echo.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "10-Su dalgaları suyun dibinde de yayılır.",
        imgSrc : "img/gullloop.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "11-Frekansı sabit dalgaların yayılma hızı artarsa dalga boyu da artar.",
        imgSrc : "img/hizdalgaboyu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "12-Baş yukarı olan atma sabit uçtan baş yukarı yansır.",
        imgSrc : "img/hard.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    } ,   {
        question : "13-Titreşim yönü hareket doğrultusuna dik olan dalgalara enine dalga denir.",
        imgSrc : "img/fix.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "14-Su dalgaları derin ortamdan sığ ortama geçerken dalgaların hızı artar.",
        imgSrc : "img/derindensigasudalgasi.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "15-Tramplenden atlama rezonans olayına örnektir.",
        imgSrc : "img/tramplen.gif",
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
















