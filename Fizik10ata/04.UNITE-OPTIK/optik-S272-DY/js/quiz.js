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
        question : "1. El feneri ve mum doğal ışık kaynaklarıdır.",
        imgSrc : "img/isikkaynak1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    }, {
        question : "2. Newton, ışığın dalgalar halinde yayıldığını ileri sürmüştür.",
        imgSrc : "img/newton.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    },	{
        question : "3. Buzlu cam ve yağlı kağıt yarı saydam maddelere örnektir.",
        imgSrc : "img/transparent.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
		
    },  {
        question : "4. Küresel ışık kaynakları ile saydam olmayan cisimlerin yarı gölgesi oluşturulabilir.",
        imgSrc : "img/golge_planet.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
    }, {
        question : "5. ışığın geldiği ortama geri dönmesi kırılma olarak adlandırılır.",
        imgSrc : "img/yansimakirilma.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    },   {
        question : "6. Düz aynada görüş alanı aynanın büyüklüğüne de bağlıdır.",
        imgSrc : "img/gorusalani.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
    }, {
        question : "7. Tümsek aynada asal eksene paralel gelen ışın, odaktan geçecek şekilde yansır.",
        imgSrc : "img/tumsek.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    },   {
        question : "8. Herhangi bir saydam ortamın başka bir saydam ortama göre kırıcılık indisi, bağıl kırıcılık indisi olarak tanımlanır.",
        imgSrc : "img/bagilkirilma.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
    }, {
        question : "9. Az kırıcı ortamdan çok kırıcı ortama bir α açısı ile ışın gönderiliyor. ışığın gelme açısı olan α açısı arttırılırsa kırılma açısı da azalır.",
        imgSrc : "img/kirilma2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    },   {
        question : "1O. ışığın engele çarparak geri dönmesine yansıma denir.",
        imgSrc : "img/yansima.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
    }, {
        question : "11. Kırmızı, yeşil ve mavi, boyada ana renklerdir",
        imgSrc : "img/boyarenkleri.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    },   {
        question : "12. Kesiti eşkenar üçgen olan camdan yapılmış ışık prizmaları tam yansımalı prizma olarak adlandırılır.",
        imgSrc : "img/prizma2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "B"
    }, {
        question : "13. ışığı toplayan mercekler yakınsak, dağıtanlar ise ıraksak mercek olarak adlandırılır.",
        imgSrc : "img/iraksak1-300.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
	    correct : "A"
    },   {
        question : "14. ince kenarlı merceğe paralel gönderilen kırmızı ve yeşil ışınlardan yeşil ışın için odak uzaklığı daha küçük olur.",
        imgSrc : "img/incelens2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
   
		correct : "A"
    }
	
	
	
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
    

	if (scorePerCent < 70 ) {
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
















