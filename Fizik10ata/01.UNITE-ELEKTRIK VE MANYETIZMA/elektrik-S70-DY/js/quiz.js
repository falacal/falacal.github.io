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
        question : "1- Elektronun yükü, temel yük olarak tanımlanır.",
        imgSrc : "img/atomyavas.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "2- Katılarda yük dengesi elektron alışverişi ile bozulur. ",
        imgSrc : "img/superelecrostatic.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "3- Birim zamanda geçen yük miktarına akım şiddeti denir.",
        imgSrc : "img/elektronlaryolda.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },     {
        question : "4- Bir iletkenin uzunluğu arttıkça direnci de artar. ",
        imgSrc : "img/direnc.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },  
	{
        question : "5- Elektroliz kabı içerisinde '+' ve '-' iyonların hareketi ile elektrik akımı oluşur. ",
        imgSrc : "img/elektroliz.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "6- Bir pilde elektrik akımının yönü, pilin '-' kutbundan '+' kutbuna doğrudur.",
        imgSrc : "img/pil.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },     {
        question : "7- Bir iletkenin direnci boyuna, kesitine ve cinsine bağlıdır.",
        imgSrc : "img/direnc.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "8- Potansiyel farkın akım şiddetine bağlı değişim grafiğinde eğim, iletkenin direncini verir.",
        imgSrc : "img/potansiyelfark.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "9- Seri bağlı devrelerde ampul sayısı arttıkça parlaklık artar.",
        imgSrc : "img/seribagli.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "10- Birim zamanda harcanan enerjinin artması, elektrikli aracın gücünün büyük olması anlamına gelir.",
        imgSrc : "img/devrede-isi-enerji.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "11- Manyetik alan çizgileri, mıknatısın dışında Güney Kutbu'ndan Kuzey Kutbu'na doğrudur.",
        imgSrc : "img/bar_magnet.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },   {
        question : "12- Bir elektrik devresinde seri ve aynı yönde akım veren üreteç sayısı arttıkça üreteçlerin ömrü azalır. ", 
        imgSrc : "img/seri_orig.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },   {
        question : "13- Şekildeki tüpün kesitinden 2 saniyede gösterilen yönlerde  –7 C ve +5 C’luk elektrik yükü geçiyor. Buna göre tüpteki akım şiddeti hangi yönde kaç amperdir?", 
        imgSrc : "img/camtupiyon.png",
        choiceA : "- yönde 1 Amperlik akım geçer.",
        choiceB : "+ yönde 6 Amperlik akım geçer.",

		correct : "B"
    },   {
        question : "14-  Aynı maddeden yapılmış X ve Y tellerinin uzunlukları ve kesit alanları şekilde verilmiştir. X direnci 60 ohm ise Y direnci kaç ohm dur?", 
        imgSrc : "img/XYDirenci.png",
        choiceA : "Boy azaldığından 60/2=30 ohm ve Kesit alanı 3 kat arttığı için 30/3=10 ohm",
        choiceB : "Boyu yarıya indiğinden ve Kesit alanı 3 kat arttığı için  2+3=15 ve 60/15=4 ohm",

		correct : "A"
    }
	
	
	
	//,     {
     //   question : " ",
     //   imgSrc : "img/",
    //    choiceA : "Doğru",
    //    choiceB : "Yanlış",

	//	correct : "A"
   // }
	
	
	
	
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
















