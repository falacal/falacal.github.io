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
        question : "1- Varlığın var olduğunu kesin olarak kabul eden görüşe realizm adı verilir.",
        imgSrc : "img/onerme1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "2- Özne ve nesne ilişkisinden doğan ürüne bilgi denir.",
        imgSrc : "img/delil1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "3-  Sokrates’e göre bilginin kaynağı deneyimlerdir. ",
        imgSrc : "img/tumdengelim2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "4- Doğru bilgi, objesine uygun olan bilgidir",
        imgSrc : "img/dogrubilgi2.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "5- Bilginin nesnesine uygunluk durumuna doğruluk denir.",
        imgSrc : "img/bilimadami.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "6- Bilim ve felsefenin amaçları ile kullandıkları yöntemler aynıdır.",
        imgSrc : "img/dusunme.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },      {
        question : "7- Ahlakça yapmakla yükümlü olduğumuz şeyler ödev kavramıyla dile getirilir.",
        imgSrc : "img/onerme.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "8- Bilgi felsefesi bilimin yapısını ve yöntemini araştırır.",
        imgSrc : "img/kiyas.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "9- Din felsefesi ile teoloji, konuları açısından etkileşim hâlindedir.",
        imgSrc : "img/arkhe-nedir.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "10- “Egemenliğin kaynağı nedir?” sorusu din felsefesinin temel sorusudur.",
        imgSrc : "img/kavramlar2.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "11- Platon’a göre güzellik, ahenk ve uyumdur.",
        imgSrc : "img/critcal-thinking.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "12- Bir kavramı kişinin ortak anlamından farklı kullanması kavram yanılgısıdır.",
        imgSrc : "img/misunderstanding-concept.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
	
	  }, {
        question : "13- Dili doğru kullanmak sadece bilimler için önemlidir.",
        imgSrc : "img/critcal-thinking.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
	
	  }, {
        question : "14- “Nasıl görüyoruz?” sorusu felsefi bir sorudur.",
        imgSrc : "img/goz.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
	
	  }, {
        question : "15-  Felsefi metinler bir düşünceyi temellendirme amacı taşır.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",

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
















