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
        question : "1. Madde katı, sıvı, gaz ve ............ hâlinde bulunur.",
        imgSrc : "img/katisivigaz.gif",
        choiceA : "kati",
        choiceB : "plazma",
        choiceC : "sivi" ,
	    choiceD : "gaz",
	    correct : "B"
    }, {
        question : "2. Katının belirli bir basınçta sıvıya dönüştüğü sıcaklığa ............ noktası denir.",
        imgSrc : "img/erime1.gif",
        choiceA : "yoğunlaşma",
        choiceB : "buharlaşma",
        choiceC : "donma" ,
	    choiceD : "erime",
	    correct : "D"
    },	{
        question : "3. Saf bir maddenin aynı ortamda erime noktası ............ noktasına eşittir. ",
        imgSrc : "img/erimevedonmaisisi.png",
        choiceA : "yoğunlaşma",
        choiceB : " buharlaşma",
        choiceC : "donma" ,
	    choiceD : "süblimleşme",
	    correct : "C"
		
    },{
        question : "4. Erime sıcaklığındaki bir katının birim kütlesini sıvı hâle geçirmek için verilmesi gereken enerjiye ............ denir.  ",
        imgSrc : "img/erime3.gif",
        choiceA : "yoğunlaşma ısısı",
        choiceB : "erime ısısı" ,
        choiceC : "kaynama" ,
	    choiceD : "süblimleşme",
	    correct : "B"
    },   {
        question : "5. Sıvı yüzeyinden ............ her sıcaklıkta gerçekleşebilir. ",
        imgSrc : "img/buharlasma2.gif",
        choiceA : "buharlaşma",
        choiceB : "kaynama",
        choiceC : "erime" ,
	    choiceD : "donma",
	    correct : "A"
    }, {
        question : "6. Hâl değişimleri gerçekleşirken ............ sabit kalır.   ",
        imgSrc : "img/haldegisimi1.png",
        choiceA : "özkütle",
        choiceB : "hacim",
        choiceC : "yoğunlaşma" ,
	    choiceD : "sıcaklık",
	    correct : "D"
    },   {
        question : "7. Açık hava basıncı azaldıkça suyun ............ sıcaklığı düşer.  ",
        imgSrc : "img/acik-hava-kaynama.png",
        choiceA : "kaynama",
        choiceB : "hissedilen ",
        choiceC : "buharlaşma" ,
	    choiceD : "erime",
	    correct : "A"
    }, {
        question : "8. Katının erimeden buharlaşmasına ............ denir.   ",
        imgSrc : "img/sublimlesme1.gif",
        choiceA : "kaynama",
        choiceB : "donma" ,
        choiceC : "süblimleşme" ,
	    choiceD : "sıvılaşma",
	    correct : "C"
    },   {
        question : "9. Bir maddenin temas ettiği maddelerle, ortam sıcaklığı ile eşit sıcaklığa geçişine ............ denir.  ",
        imgSrc : "img/termaldenge1.png",
        choiceA : "basınç dengesi",
        choiceB : "ışıma",
        choiceC : "genleşme" ,
	    choiceD : "ısıl denge",
	    correct : "D"
    },   {
        question : "10. Isı alışverişi yapan, ............ eşit iki maddenin sıcaklık değişimleri de eşit olur.  ",
        imgSrc : "img/termaldenge1.png",
        choiceA : "buharlaşma ısısı",
        choiceB : "ısı sığası" ,
        choiceC : "erime ısısı" ,
	    choiceD : "yoğunlaşma ısısı",
	    correct : "B"
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
const questionTime = 150; // 150 s
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
        counter.innerHTML = (150-count)+" saniye"    ;
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
















