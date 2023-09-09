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
        question : "1)	Maddenin yapısını, özelliklerini, birbiri ile etkileşimini ve bu etkileşimler sonucu uğradığı değişimleri inceleyen bilim dalına kimya denir. ",
        imgSrc : "img/fizik1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A" 
    }, {
        question : "2)	Kırmızı renkli cıva sülfür e ( HgS  ) zincifre denir. ",
        imgSrc : "img/fizik2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    },	{
        question : "3) Civa sülfür bileşiği HgS olarak yazılır. ",
        imgSrc : "img/kinematik2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "4)	Alşimist simyacı demektir.. ",
        imgSrc : "img/yuklerceker2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, 
	    {
        question : "5)	Zincifre(HgS),    maddesi, 580°C’a kadar ısıtıldığında cıva ve kükürt elementlerine ayrışır. ",
        imgSrc : "img/atomfizik3.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "6)	Plazma fiziği tıp alanında kanser tedavisindeki cihazlarda kullanılır. ",
        imgSrc : "img/plazma-nedir-iyon-elektron.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    },	{
        question : "7)	Archimedes, fizik biliminin yanı sıra felsefe ile de ilgilenen bilim insanlarından biridir. ",
        imgSrc : "img/arsimed3.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "8)	Kimya biliminin başlangıcı, MÖ 3000’li yıllara kadar dayanır. Bu tarih, metallerin eritilerek alaşımların elde edildiği Tunç Çağı olarak tanımlanır. ",
        imgSrc : "img/temelbuyuklukler.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    },    {
        question : "9)	Bir uğraşın bilim olabilmesi için teorik temellere dayanması ve sistematik bilgi birikimi sağlaması gerekmemektedir. ",
        imgSrc : "img/kronometre1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, {
        question : "10)	Simya (alşimi), kimyanın bilim olmadan önceki sürecini kapsamaktadır. ",
        imgSrc : "img/vektor1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "11)	Değersiz metalleri altına çevirmek, içildiğinde ölümsüzlük sağlayacak olan iksiri bulmak, felsefe taşını aramak gibi uğraşlara simya, simya ile uğraşanlara da kimyacı denir.  ",
        imgSrc : "img/",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "B"
    }, {
        question : "12)	Simyacıları araştırmaya yönlendiren olaylardan biri, zincifre olarak bilinen HgS bileşiğinin ısıtılması ile saf cıva elde edilmesidir.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "13)	Simyacılar kristalizasyon, damıtma, özütleme, mayalama, çözme gibi laboratuvar tekniklerini geliştirmişlerdir.   ",
        imgSrc : "img/vektor1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "14)	Simyacıların yaptığı pek çok çalışma ve kullandığı yöntem, günümüzde kimya alanında da kullanılmaktadır.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "15)	Çalışmaları deneme yanılmaya dayanır.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya",
		correct : "B"
    }, {
        question : "16)	Çalışmaları bilimsel araştırmaya, gözlem ve deneye dayanır.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya",
		correct : "A"
    }, {
        question : "17)	Çalışmaları teorik temellere dayanmaz.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "B"
    }, {
        question : "18)	Çalışmaları teorik temellere dayanır.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "A"
    }, {
        question : "19)	 Çalışmalarında sistematik bilgi birikimi yoktur.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "B"
    }, {
        question : "20)	Çalışmalarında sistematik bilgi birikimi vardır.  ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "A"
    }, {
        question : "21)	 Bilim dalı değildir. ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "B"
    }, {
        question : "22)	 Bilim dalıdır. ",
        imgSrc : "img/vektor1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "A"
    } 
	
	
	
	
	








// 22 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 180; // 90 s
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
















