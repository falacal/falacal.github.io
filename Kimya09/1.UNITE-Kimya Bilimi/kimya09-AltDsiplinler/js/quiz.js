// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
 
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "01. Maddelerin hangi bileşenlerden oluştuğunu ve bu bileşenlerin miktarlarını inceleyen bir kimya disiplinidir. Bu alanda nicel ve nitel analiz yöntemleri kullanılır",
        imgSrc : "img/analitikkimya01.jpg",
        choiceA : "Biyokimya",
        choiceB : "Anorganik Kimya",
        choiceC : "Analitik Kimya",
        correct : "C"
    },{
        question : "02. Makromoleküllerin (büyük moleküller) kimyası olup polimerlerin sentezi, yapıları, özellikleri, davranışları ve uygulamalarını inceleyen kimya disiplinidir ?",
        imgSrc : "img/polimerkimya01.jpg",
        choiceA : "Polimer Kimyası",
        choiceB : "Biyokimya",
        choiceC : "Anorganik Kimya",
        correct : "A"
    },{
        question : "03. Kimyasal sistemlerin özelliklerini ve davranışlarını, tepkimelerin nasıl meydana geldiğini ve kimyasal olaylar sırasındaki enerji dönüşümlerini inceleyen bir disiplindir?",
        imgSrc : "img/fizikokimya01.jpg",
        choiceA : "Fizikokimya",
        choiceB : "Biyokimya",
        choiceC : "Anorganik Kimya",
        correct : "A"
    },{
        question : "04. Organik olmayan bileşiklerin yapılarını, özelliklerini ve tepkimelerini inceleyen bir kimya disiplinidir. Bu disiplin; asitler, bazlar, tuzlar, vs gibi çeşitli maddelerin karakteristik özellikleri ve kimyasal tepkimeleri üzerine odaklanır.",
        imgSrc : "img/anorganik01.jpg",
        choiceA : "Polimer Kimyası",
        choiceB : "Biyokimya",
        choiceC : "Anorganik Kimya",
        correct : "C"
    },{
        question : "05. Karbon elementini içeren bileşiklerin yapılarını, özelliklerini ve tepkimelerini kapsamlı bir şekilde inceleyen bir kimya disiplinidir. Bu alana karbon kimyası da denir. Meydana gelen bileşiklerin çeşitliliği nedeniyle kimyanın en geniş alanıdır",
        imgSrc : "img/organikkimya01.jpg",
        choiceA : "Polimer Kimyası",
        choiceB : "Biyokimya",
        choiceC : "Organik Kimya",
        correct : "C"
    },{
        question : "06. Canlı anlamına gelen Yunanca bios kelimesinden türemiştir ve canlı kimyası olarak tanımlanır. Bu disiplin, canlı organizmalarda bulunan kimyasal bileşiklerin yapısını, özelliklerini ve organizmanın yaşam süreci boyunca gerçekleşen kimyasal tepkimelerini incelemeye odaklanır ",
        imgSrc : "img/biyokimya01.jpg",
        choiceA : "Polimer Kimyası",
        choiceB : "Biyokimya",
        choiceC : "Anorganik Kimya",
        correct : "B"
    },{
        question : "07. Bir maddenin hangi element ve bileşiklerden meydana geldiğini bulmaya yarayan analiz türüne ........... analiz denir. ",
        imgSrc : "img/su01.jpg",
        choiceA : "çözünme",
        choiceB : "nitel (kalitatif)",
        choiceC : "nicel (kantitatif)",
        correct : "B"
    },{
        question : "08. Bir maddeyi oluşturan element veya bileşenlerden her birinin miktarını belirlemeyi hedefleyen analiz türüne ..........  analiz denir.",
        imgSrc : "img/su02.jpg",
        choiceA : "çözünme",
        choiceB : "nitel (kalitatif)",
        choiceC : "nicel (kantitatif)",
        correct : "C"
    }
	
    
	
	
	
// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 180; // 180 s
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
















