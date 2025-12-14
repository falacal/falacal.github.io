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
// Kimya Soruları (2 Şık) – Quiz Motoru ile %100 Uyumlu
let questions = [
    {
        question: "Öz bakım ürünü olan maddelerden biri aşağıdakilerden hangisidir?",
        imgSrc: "",
        choiceA: "Sabun",
        choiceB: "Deterjan",
        correct: "A"
    },
    {
        question: "Genel temizlikte kullanılan maddelerden biri aşağıdakilerden hangisidir?",
        imgSrc: "",
        choiceA: "Şampuan",
        choiceB: "Çamaşır Suyu",
        correct: "B"
    },
    {
        question: "Pasın kimyasal olarak temizlenmesinde kullanılabilecek ürünlerden biri hangisidir?",
        imgSrc: "",
        choiceA: "Sirke",
        choiceB: "Diş Macunu",
        correct: "A"
    },
    {
        question: "Atom orbitallerinin enerjileri enerji seviyesi arttıkça nasıl değişir?",
        imgSrc: "",
        choiceA: "Azalır",
        choiceB: "Artar",
        correct: "B"
    },
    {
        question: "Aynı enerji seviyesindeki atom orbitallerinin enerjileri neye bağlıdır?",
        imgSrc: "",
        choiceA: "Çekirdeğe olan uzaklığa",
        choiceB: "Elektron sayısına",
        correct: "A"
    },
    {
        question: "3. enerji seviyesindeki 3s, 3p ve 3d orbitallerinden hangisinin enerjisi en yüksektir?",
        imgSrc: "",
        choiceA: "3s",
        choiceB: "3d",
        correct: "B"
    },
    {
        question: "Elektron sayısı 6s orbitaline kadar olan bir atomun elektron dizilimi hangisidir?",
        imgSrc: "",
        choiceA: "1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s",
        choiceB: "1s 2s 2p 3s 3p 4s 4p 5s 5p 6s",
        correct: "A"
    },
    {
        question: "<sub>3</sub>Li elementi periyodik tabloda hangi periyotta yer alır?",
        imgSrc: "",
        choiceA: "1. Periyot",
        choiceB: "2. Periyot",
        correct: "B"
    },
    {
        question: "<sub>17</sub>Cl elementi periyodik tabloda hangi grupta yer alır?",
        imgSrc: "",
        choiceA: "6A grubu",
        choiceB: "7A grubu",
        correct: "B"
    },
    {
        question: "<sub>23</sub>V elementi periyodik tabloda hangi grupta yer alır?",
        imgSrc: "",
        choiceA: "4B grubu",
        choiceB: "5B grubu",
        correct: "B"
    },
    {
        question: "<sub>16</sub>S<sup>2−</sup> iyonunun elektron sayısı nedir?",
        imgSrc: "",
        choiceA: "16",
        choiceB: "18",
        correct: "B"
    },
    {
        question: "<sub>10</sub>Ne atomunun elektron dizilimi hangisidir?",
        imgSrc: "",
        choiceA: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup>",
        choiceB: "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>5</sup>",
        correct: "A"
    },
    {
        question: "Periyotlar boyunca (soldan sağa doğru) atom yarıçapı nasıl değişir?",
        imgSrc: "",
        choiceA: "Artar",
        choiceB: "Azalır",
        correct: "B"
    },
    {
        question: "Gruplar boyunca (yukarıdan aşağıya doğru) atom yarıçapı nasıl değişir?",
        imgSrc: "",
        choiceA: "Azalır",
        choiceB: "Artar",
        correct: "B"
    },
    {
        question: "Periyotlar boyunca iyonlaşma enerjisi nasıl değişir?",
        imgSrc: "",
        choiceA: "Azalır",
        choiceB: "Artar",
        correct: "B"
    },
    {
        question: "Gruplar boyunca iyonlaşma enerjisi nasıl değişir?",
        imgSrc: "",
        choiceA: "Artar",
        choiceB: "Azalır",
        correct: "B"
    },
    {
        question: "Metalik bağ, metallerin hangi özelliğinden kaynaklanır?",
        imgSrc: "",
        choiceA: "Yüksek iyonlaşma enerjisi",
        choiceB: "Düşük iyonlaşma enerjisi",
        correct: "B"
    },
    {
        question: "Metalik bağda atomlar bir arada nasıl tutulur?",
        imgSrc: "",
        choiceA: "Kovalent bağlarla",
        choiceB: "Elektrostatik etkileşimle",
        correct: "B"
    },
    {
        question: "İyonik bağ, bileşen atomlar arasındaki hangi farktan kaynaklanır?",
        imgSrc: "",
        choiceA: "Elektron ilgisi farkı",
        choiceB: "İyonlaşma enerjisi ve elektronegativite farkı",
        correct: "B"
    },
    {
        question: "İyonik bağda zıt yüklü iyonlar arasındaki etkileşim türü nedir?",
        imgSrc: "",
        choiceA: "Kovalent bağ",
        choiceB: "Elektrostatik etkileşim",
        correct: "B"
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
















