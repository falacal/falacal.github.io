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
        question : "1)	Sıcaklık, maddeyi oluşturan taneciklerin ortalama ........... enerjisiyle orantılı bir büyüklüktür. ",
        imgSrc : "img/sicaklik1.gif",
        choiceA : "kimyasal",
        choiceB : "mekanik",
        choiceC : "kinetik" ,
	    choiceD : "potansiyel",
	    correct : "C"
    }, {
        question : "2)	Sıcaklık farkından dolayı aktarılan enerji türüne ........... denir. ",
        imgSrc : "img/sicaklikisi2.png",
        choiceA : "kimyasal enerji",
        choiceB : "potansiyel enerji",
        choiceC : "iç enerji" ,
	    choiceD : "ısı",
	    correct : "D"
    },	{
        question : "3)	Suyun donma noktasını 32 olarak kabul eden termometre ........... termometresidir. ",
        imgSrc : "img/termometreler2.png",
        choiceA : "Fahrenheit",
        choiceB : "Kelvin",
        choiceC : "Celcius" ,
	    choiceD : "Romer",
	    correct : "A"
		
    },{
        question : "4)	Çok yüksek sıcaklık değerlerini ölçmek için ........... termometreler kullanılmaz.",
        imgSrc : "img/termometreler3.png",
        choiceA : "metal",
        choiceB : "sıvılı",
        choiceC : "erime" ,
	    choiceD : "donma",
	    correct : "B"
    },   {
        question : "5) SI birim sistemine göre ısı birimi ........... ",
        imgSrc : "img/isiformulu2.png",
        choiceA : "°C",
        choiceB : "erg",
        choiceC : "cal" ,
	    choiceD : "joule",
	    correct : "D"
    },   {
        question : "6) Birim kütlenin sıcaklığını 1 ºC değiştiren ısıya ........... denir. ",
        imgSrc : "img/ozisikullanimi.png",
        choiceA : "öz ısı",
        choiceB : "ısı sığası",
        choiceC : "erime ısısı" ,
	    choiceD : "buharlaşma ısısı",
	    correct : "A"
    }, {
          question : "7) Katı hâlden sıvı hâle geçme olayına ........... denir. ",
        imgSrc : "img/erime3.gif",
        choiceA : "donma",
        choiceB : "buharlaşma",
        choiceC : "erime" ,
	    choiceD : "genleşme",
	    correct : "C"
    },   {
          question : "8) Suyun öz kütlesi +4 °C’ta en ........... ",
        imgSrc : "img/suozkutlesicaklik.png",
        choiceA : "az dır.",
        choiceB : "küçük hacimdedir.",
        choiceC : "sabit hacimdedir." ,
	    choiceD : "büyük",
	    correct : "D"
    },   {
          question : "9) Kömür sobası odayı etkin olarak ........... yoluyla ısıtır. ",
        imgSrc : "img/sobakonveksiyon.png",
        choiceA : "iletim",
        choiceB : "ışıma",
        choiceC : "yanma" ,
	    choiceD : "konveksiyon",
	    correct : "D"
    },   {
          question : "10) Pencerelerin çift camlı olması ........... sağlar.  ",
        imgSrc : "img/ciftcam2.png",
        choiceA : "sıcaklık yalıtımı",
        choiceB : "madde yalıtımı",
        choiceC : "ısı yalıtımı" ,
	    choiceD : "öz kütle yalıtımı",
	    correct : "C"
    },   {
          question : "11)	Bardağa dökülen sıcak çayın bardağı çatlatmasının nedeni  ........... ",
        imgSrc : "img/bardakkiriliyor.png",
        choiceA : "buharlaşma",
        choiceB : "yoğunlaşma",
        choiceC : "genleşme" ,
	    choiceD : "kaynama",
	    correct : "C"
    },   {
          question : "12)	Atmosferde bulunan su buharı, karbon dioksit, metan ve Ozon ........... olarak bilinmektedir. ",
        imgSrc : "img/sragazlari4.png",
        choiceA : "zararsız gazlar",
        choiceB : "doğal sera gazları",
        choiceC : "patlayıcı gazlar" ,
	    choiceD : "atmosferi temizleyen gazlar",
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
const questionTime = 150; // 150 saniye her biri soru için
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
















