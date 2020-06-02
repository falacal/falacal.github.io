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
        question : "1)	Fizik bilimi madde boyutu ne olursa olsun tüm ...............   yapılarını, hareketlerini inceler. ",
        imgSrc : "img/  ",
        choiceA : "sistem",
        choiceB : "katı",
        choiceC : "sıvı",
		choiceD : "gaz",
		correct : "A"
    }, {
        question : "2)	Evrenin oluşumunu açıklamaya çalışan teorilerden  biri de ...............   teorisidir. ",
        imgSrc : "img/  ",
        choiceA : "mekanik enerjinin korunumu",
        choiceB : "kütlenin korunumu",
        choiceC : "büyük patlama (big bang)",
		choiceD : "açısal momentumun korunumu",
		correct : "C"
    },	{
        question : "3)	Fizik bilimi, yıldızların sıcaklığını ve yapısını yıldızlardan gelen ...............   rengine bağlı olarak tespit eder. ",
        imgSrc : "img/  ",
        choiceA : "meteorların",
        choiceB : "ışık",
        choiceC : "gaz",
		choiceD : "madde",
		correct : "B"
    }, {
        question : "4)	Fizik ve astronomi alanlarında çalışan bilim insanları evrendeki ...............   haritalarının oluşturulmasını sağlamışlardır. ",
        imgSrc : "img/  ",
        choiceA : "ay",
        choiceB : "mars",
        choiceC : "kıta",
		choiceD : "yıldız ",
		correct : "D"
    }, 
	    {
        question : "5)	Yansıma, kırılma gibi ışık olaylarını inceleyen fizik alt dalına ...............   denir. ",
        imgSrc : "img/  ",
        choiceA : "termodinamik",
        choiceB : "optik",
        choiceC : "mekanik",
		choiceD : "katı hal fiziği",
		correct : "B"
    }, {
        question : "6)	Katıhâl fiziği ...............   yapılı maddelerin karakteristiğini belirlemek için çalışmalar yapar. ",
        imgSrc : "img/  ",
        choiceA : "sıvı",
        choiceB : "kristal",
        choiceC : "gaz",
		choiceD : "plazma",
		correct : "B"
    },	{
        question : "7)	...............   teknolojisi atom fiziğindeki çalışmalarla ortaya çıkmıştır. ",
        imgSrc : "img/  ",
        choiceA : "Lazer",
        choiceB : "Termodinamik",
        choiceC : "Uçak",
		choiceD : "Tren, metro",
		correct : "A"
    }, {
        question : "8)	...............   çekirdek tepkimelerini inceleyen fizik alt dalıdır. ",
        imgSrc : "img/  ",
        choiceA : "Atom fiziği ",
        choiceB : "Katı hal fiziği",
        choiceC : "Mekanik",
		choiceD : "Nükleer fizik",
		correct : "D"
    },    {
        question : "9)	Vektörel nicelikleri toplarken yalnızca şiddet değil ...............   de işleme dâhil edilir. ",
        imgSrc : "img/  ",
        choiceA : "sayısal değerler",
        choiceB : "açısal olmayan değerler",
        choiceC : "yön",
		choiceD : "numerik dğerler",
		correct : "C"
    }, {
        question : "10)	Vektörel nicelikler toplandığında toplam vektör toplananlardan daha ...............   değerde olabilir. ",
        imgSrc : "img/  ",
        choiceA : "sistem",
        choiceB : "endüstriyel",
        choiceC : "küçük",
		choiceD : "soyut",
		correct : "C"
    },	{
        question : "11)	TÜBİTAK, akademik çalışmaları ...............    alana aktaran bir kurumdur. ",
        imgSrc : "img/  ",
        choiceA : "endüstriyel",
        choiceB : "teorik",
        choiceC : "havasal",
		choiceD : "evsel",
		correct : "A"
    }, {
        question : "12)	Türkiye Atom Enerjisi Kurumu (TAEK) ...............   maddeleri, cihazları bulunduran, ithal ve ihraç eden kurumlara lisans verir. ",
        imgSrc : "img/  ",
        choiceA : "katı",
        choiceB : "sıvı",
        choiceC : "gaz",
		choiceD : "radyoaktif",
		correct : "D"
    },    {
        question : "13)	Askeri Elektronik Sanayi (ASELSAN) çalışmalarını; fizik, bilgisayar, elektrik-elektronik, makine ve endüstri mühendislikleri ile ...............   ve uzay alanlarında yürütmektedir. ",
        imgSrc : "img/  ",
        choiceA : "yer altı",
        choiceB : "mars",
        choiceC : "kimyager",
		choiceD : "havacılık",
		correct : "D"
    }, {
        question : "14)	Avrupa Nükleer Araştırma Merkezi (CERN) dünyanın en büyük ...............  laboratuvarıdır. ",
        imgSrc : "img/  ",
        choiceA : "kimya",
        choiceB : "parçacık fiziği",
        choiceC : "gıda",
		choiceD : "uluslararası uzay istasyonu",
		correct : "B"
    },	{
        question : "15)	CERN’deki ...............  araştırması kütlesi olmayan atomlara kütle kazandıran mekanizmanın varlığının tespitidir. ",
        imgSrc : "img/  ",
        choiceA : "foton",
        choiceB : "takyon",
        choiceC : "nötron",
		choiceD : "higgs bozonu",
		correct : "D"
    }
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















