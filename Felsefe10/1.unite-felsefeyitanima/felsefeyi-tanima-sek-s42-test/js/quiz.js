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
        question : "1.	Felsefe düşünme üzerine düşünmedir. Onun bu yönüne ........... olması denir. ",
        imgSrc : "img/refleksif.png",
        choiceA : "refleksif",
        choiceB : "mitolojik",
        choiceC : "yığılımlı",
	    choiceD : "rasyonel",
	    correct : "A"
    }, {
        question : "2. İlk defa felsefe kavramını kullanan filozof ........... ",
        imgSrc : "img/pisagor.png",
        choiceA : "Thales",
        choiceB : "Aristoteles",
        choiceC : "Pythagoras",
	    choiceD : "Platon",
	    correct : "C"
    },	{
        question : "3.	Felsefede verilen yanıtlar akla dayanır. Bu anlamda felsefe ........... bir etkinliktir.",
        imgSrc : "img/rasyonellik.png",
        choiceA : "refleksif",
        choiceB : "mitolojik",
        choiceC : "yığılımlı",
	    choiceD : "rasyonel",
	    correct : "D"
		
    },    {
        question : "4. Her filozof kendinden önceki düşüncelere yeni bilgiler katar. Çünkü felsefe ........... ilerler.",
        imgSrc : "img/yigilimli.png",
        choiceA : "tutarlı",
        choiceB : "rasyonel",
        choiceC : "yığılımlı",
	    choiceD : "eleştirel",
	    correct : "C"
    } ,    {
        question : "5. Felsefe öncesi düşünme evreni doğaüstü güçlerle açıklayan ........... evren görüşüne dayanır",
        imgSrc : "img/mitoloji.png",
        choiceA : "hikmet",
        choiceB : "mitolojik",
        choiceC : "yığılımlı",
	    choiceD : "rasyonel",
	    correct : "B"
    } ,    {
        question : "6. Felsefe insanı sabit fikirlerden koruyan ........... bir düşünme biçimidir",
        imgSrc : "img/elestiri.png",
        choiceA : "tutarlı",
        choiceB : "refleksif",
        choiceC : "yığılımlı",
	    choiceD : "eleştirel",
	    correct : "D"
    } ,    {
        question : "7. Varlığın özünü kavramaya yönelik, eşyanın esrarını çözmeyi amaçlayan öz bilgiye ........... denir.",
        imgSrc : "img/hikmet.png",
        choiceA : "hikmet",
        choiceB : "mitolojik",
        choiceC : "yığılımlı",
	    choiceD : "rasyonel",
	    correct : "A"
    } ,    {
        question : "8. Felsefe tek bir ulus veya medeniyetin malı değildir. Bütün insanlığın katkıları ile oluşmuş ........... bir bilgidir",
        imgSrc : "img/kuresel.png",
        choiceA : "rasyonel",
        choiceB : "evrensel",
        choiceC : "yığılımlı",
	    choiceD : "mitolojik",
	    correct : "B"
    } ,    {
        question : "9. İlk felsefeci kabul edilen ........... göre ilk neden (arkhe) sudur.",
        imgSrc : "img/tales.png",
        choiceA : "Thales",
        choiceB : "Aristoteles",
        choiceC : "Pythagoras",
	    choiceD : "Platon",
	    correct : "A"
    } ,    {
        question : "10. Felsefe bilgisi çelişkiden uzak ........... bir bilgidir.",
        imgSrc : "img/tutarli.png",
        choiceA : "tutarlı",
        choiceB : "refleksif",
        choiceC : "yığılımlı",
	    choiceD : "eleştirel",
	    correct : "A"
    } ,    {
        question : "11. ........... kelimesi, sadece zihinde var olan, hayal edilebilen ve düşünülebilen olgu demektir.",
        imgSrc : "img/idea.png",
        choiceA : "Olgusal",
        choiceB : "Arkhe",
        choiceC : "İdea",
	    choiceD : "Diyalektik",
	    correct : "C"
    } 
// 11 tane	
	
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
    

	if (scorePerCent < 80 ) {
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
















