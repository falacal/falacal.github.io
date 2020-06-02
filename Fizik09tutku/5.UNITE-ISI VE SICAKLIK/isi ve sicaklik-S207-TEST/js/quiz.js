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
        question : "1- Maddenin her hâlinde ........ hareketlidir.",
        imgSrc : "img/katisivigaz.gif",
        choiceA : "yükler",
        choiceB : "öz ısı",
        choiceC : "kinetik" ,
	    choiceD : "tanecikler",
	    correct : "D"
    }, {
        question : "2- Hareket hâlindeki madde taneciklerinin kinetik ve potansiyel enerjileri toplamına ........ enerji denir.",
        imgSrc : "img/katisivigaz.gif",
        choiceA : "iç enerji",
        choiceB : "nükleer enerji",
        choiceC : "mekanik enerji" ,
	    choiceD : "potansiyel enerji",
	    correct : "A"
    },	{
        question : "3- ........ maddeyi oluşturan taneciklerin ortalama kinetik enerji ölçüsüdür.",
        imgSrc : "img/isiiletimisicaklik.gif",
        choiceA : "Potansiyel enerji",
        choiceB : "İç enerji",
        choiceC : "Isı" ,
	    choiceD : "Sıcaklık",
	    correct : "D"
		
    },{
        question : "4- Isı maddenin iç enerjisindeki ........ dir.",
        imgSrc : "img/isiiletimisicaklik2.gif",
        choiceA : "kinetik",
        choiceB : "potansiyel",
        choiceC : "değişim" ,
	    choiceD : "sıcaklık",
	    correct : "C"
    },   {
        question : "5-	–80 °C‘lik bir sıcaklık, sıvısı ........ olan bir termometre ile ölçülemez.",
        imgSrc : "img/gaztermometer1.png",
        choiceA : "civa",
        choiceB : "iç enerji",
        choiceC : "mekanik enerji" ,
	    choiceD : "atom",
	    correct : "A"
    }, {
        question : "6-	Civalı termometrelerin ölçemediği yüksek sıcaklıklar ........ termometreler ile ölçülür.",
        imgSrc : "img/metaltermometer_.png",
        choiceA : "alkol",
        choiceB : "gaz",
        choiceC : "metal" ,
	    choiceD : "su buharı",
	    correct : "C"
    },   {
        question : "7- Maddenin birim kütlesinin sıcaklığını 1 °C  artırmak için gerekli ısı miktarına ........ denir.",
        imgSrc : "img/isiiletimisicaklik3.gif",
        choiceA : "sıcaklık",
        choiceB : "öz ısı",
        choiceC : "ısı" ,
	    choiceD : "kinetik enerji",
	    correct : "B"
    }, {
        question : "8- Yemek pişirme kaplarında kapların tutulacak sap kısımları öz ısısı ........ maddelerden yapılır.",
        imgSrc : "img/isiiletimisicaklik4.gif",
        choiceA : "düşük",
        choiceB : "yüksek",
        choiceC : "alçak" ,
	    choiceD : "minumum olan",
	    correct : "B"
    },   {
        question : "9-	Isıtma amaçlı kullanılan yağlı radyatörlerde öz ısısı ........ sıvı kullanılır.",
        imgSrc : "img/kalorifer-petek.png",
        choiceA : "düşük",
        choiceB : "yüksek",
        choiceC : "alçak" ,
	    choiceD : "minumum olan",
	    correct : "A"
    },   {
        question : "10-	Isı sığası maddenin ........ değerine bağlıdır.",
        imgSrc : "img/ozisi.png",
        choiceA : "yer çekimi",
        choiceB : "kütle",
        choiceC : "uzunluk" ,
	    choiceD : "yükseklik",
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
















