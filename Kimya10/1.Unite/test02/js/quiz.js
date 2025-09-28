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
        question : "01. Kimyasal bir tepkimede maddelerin bazı özelliklerindeki değişim verilmiştir. <br>  C₃H₈(g) + 5O₂(g) ➔ 3CO₂(g) + 4H₂O(g) reaksiyonunda gözleminiz nedir?",
        imgSrc : "img/hasanrizapasa.jpg",
        choices: [
            {text: "basınç artışı", correct: true},
            {text: "sıcaklık artışı", correct: false},
            {text: "renk değişimi", correct: false}
        ]
    },
    {
        question : "02. Kimyasal bir tepkimede maddelerin bazı özelliklerindeki değişim verilmiştir. <br> CuSO₄(suda) + 2NaCN(suda) ➔ Cu(CN)₂(k) + Na₂SO₄(suda) reaksiyonunda gözleminiz nedir?",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "çözünme-çökelme", correct: true},
            {text: "gaz çıkışı", correct: false},
            {text: "pH değişimi", correct: false}
        ]
    },
    {
        question : "03. H₂(g) + 1/2 O₂(g) ➔ H₂O(g) tepkimesinde gaz mol sayısı azaldığı için hangisi gözlemlenir?",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "basınç azalması", correct: true},
            {text: "hacim artışı", correct: false},
            {text: "sıcaklık artışı", correct: false}
        ]
    },
    {
        question : "04. Kimyasal bir tepkimede maddelerin bazı özelliklerindeki değişim verilmiştir. <br> Mg + 2HNO₃ ➜ Mg(NO₃)₂ + H₂(g) reaksiyonunda gözleminiz nedir?",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "renk değişimi", correct: false},
            {text: "koku değişimi", correct: false},
            {text: "pH değişimi", correct: true}
        ]
    },
    {
        question : "05. Kimyasal bir tepkimede maddelerin bazı özelliklerindeki değişim verilmiştir. <br> C₄H₆(g) + Br₂(s) ➔ C₄H₆Br₂(g) reaksiyonunda gözleminiz nedir?<br><small>Renksiz + Kahverengi ➔ Renksiz</small>",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "sıcaklık değişimi", correct: false},
            {text: "renk değişimi", correct: true},
            {text: "basınç değişimi", correct: false}
        ]
    },
    {
        question : "06. Ag⁺(suda) + Cl⁻(suda) ➜ AgCl(k) tepkimesinde iyonlar çöktüğü için hangisi gözlemlenir?",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "iletkenliğin azalması", correct: true},
            {text: "yoğunluğun artması", correct: false},
            {text: "buharlaşma", correct: false}
        ]
    },
    {
        question : "07. Kimyasal tepkimelerde farklı iyonlar içeren çözeltiler karıştırıldığında bir katı oluşuyorsa bu tepkimelere ....... tepkimeleri denir.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "çökelme", correct: true},
            {text: "oksitlenme", correct: false},
            {text: "redüksiyon", correct: false}
        ]
    },
    {
        question : "08. Elektron alışverişi ile gerçekleşen kimyasal tepkimelerde elektron alan madde ....... elektron veren madde ....... maddedir.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "indirgenen - yükseltgenen", correct: true},
            {text: "yükseltgenen - indirgenen", correct: false},
            {text: "asit - baz", correct: false}
        ]
    },
    {
        question : "09. Asit ve baz tepkimesi sonucu tuz ve su oluşmasına ....... tepkimesi denir.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "nötralleşme", correct: true},
            {text: "oksitlenme", correct: false},
            {text: "hidroliz", correct: false}
        ]
    },
    {
        question : "10. Kimyasal bir tepkime gerçekleşirken dışarıdan enerji alıyorsa bu tepkimelere ....... tepkimeler denir ve enerji alamadığında tepkime devam etmez.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "endotermik", correct: true},
            {text: "ekzotermik", correct: false},
            {text: "eksotermik", correct: false}
        ]
    },
    {
        question : "11. Maddeyi oluşturan bağlar kırılıp, yeni bağlar oluşurken maddenin hem ....... özelliği hem de kimyasal özelliği değişir.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "fiziksel", correct: true},
            {text: "kimyasal", correct: false},
            {text: "manyetik", correct: false}
        ]
    },
    {
        question : "12. Çökelme tepkimelerinde katıyı oluşturan maddenin denklemine ....... denklemi denir.",
        imgSrc : "img/insanenerji1.gif",
        choices: [
            {text: "net iyon", correct: true},
            {text: "moleküler", correct: false},
            {text: "atomik", correct: false}
        ]
    }
];

// Seçenekleri karıştır ve doğru cevabı rastgele konumlandır
questions.forEach(q => {
    // Seçenekleri karıştır
    q.choices.sort(() => Math.random() - 0.5);
    
    // Doğru cevabın yeni pozisyonunu bul
    const correctIndex = q.choices.findIndex(choice => choice.correct);
    
    // Yeni seçenekleri A, B, C olarak ata
    q.choiceA = q.choices[0].text;
    q.choiceB = q.choices[1].text;
    q.choiceC = q.choices[2].text;
    
    // Doğru cevabın harfini belirle (A=0, B=1, C=2)
    q.correct = String.fromCharCode(65 + correctIndex); // 65 = 'A'
});

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
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
	document.getElementById(runningQuestion).innerHTML = "D";
}

// answer is Wrong
function answerIsWrong(){
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
	document.getElementById(runningQuestion).innerHTML = "Y";
}


// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
 
     	if (scorePerCent < 85 ) {
		   var audio = new Audio('img/basaramadim-.mp3');
		   audio.play();
	     }
		 
		 if (scorePerCent > 85 ) {
		   var audio = new Audio('img/Rasputin.mp3');
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