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
        question : "1.	Kadim bir geçmişe sahip felsefi düşünce bir etkinlik olarak Eski Yunan’da doğmuştur. Fakat felsefe nin doğması ve gelişmesinde Mısır, Mezopotamya, Çin, Hint gibi köklü uygarlıkların etkisi olmuştur.  ",
        imgSrc : "img/evrensellik1.jpg",
        choiceA : "Eleştirel ve sorgulayıcı olma",
        choiceB : "Refleksif olma",
        choiceC : "Evrensel olma",
	    choiceD : "Rasyonel olma",
	    correct : "C"
    }, {
        question : "2.	İlk Yunan filozofu olarak Thales kabul edilmektedir. Thales kendinden önceki mitolojik evren tasavvurlarıyla yetinmemiş, varlığın özünün ne olduğunu bilmek istemiştir.",
        imgSrc : "img/mitevreni-1.jpg",
        choiceA : "Eleştirel ve sorgulayıcı olma",
        choiceB : "Refleksif olma",
        choiceC : "Evrensel olma",
	    choiceD : "Rasyonel olma",
	    correct : "A"
    },	{
        question : "3.	Varlığın özünün ne olduğunu araştıran Milet felsefecileri mitolojik açıklamalar yerine akla uygun sonuçlara ulaşmaya çalışmıştır",
        imgSrc : "img/rasyonel1.jpg",
        choiceA : "Eleştirel ve sorgulayıcı olma",
        choiceB : "Refleksif olma",
        choiceC : "Evrensel olma",
	    choiceD : "Rasyonel olma",
	    correct : "D"
		
    },    {
        question : "4. Anaksimenes (Enaksimenes), Thales ’in sorduğu sorunun yanıtını aramış fakat onun verdiği yanıttan kuşku duymuştur.",
        imgSrc : "img/suphe1.jpg",
        choiceA : "Şüphe duyma,",
        choiceB : "Sistemli olma",
        choiceC : "Birikimli olma",
	    choiceD : "Rasyonel olma",
	    correct : "A"
    } ,    {
        question : "5. Filozofun kendi düşüncesi üzerine düşünmesidir. Düşüncenin kendine yönelmesidir.",
        imgSrc : "img/refleksiv1.jpg",
        choiceA : "Şüphe duyma,",
        choiceB : "Refleksif olma",
        choiceC : "Birikimli olma",
	    choiceD : "Sistemli olma",
	    correct : "B"
    } ,    {
        question : "6. Aristoteles kendinden önceki felsefe geleneğini ve filozofların düşüncelerini ayrıntılı bir biçimde analiz etmiştir. ",
        imgSrc : "img/kumulatif.jpg",
        choiceA : "Şüphe duyma,",
        choiceB : "Refleksif olma",
        choiceC : "Birikimli olma",
	    choiceD : "Sistemli olma",
	    correct : "C"
    } ,    {
        question : "7. Aristoteles mantık biliminin de kurucusudur. Mantık, doğru düşünmenin ve düşünceler arasındaki uyumun bilimidir. ",
        imgSrc : "img/mantik1.jpg",
        choiceA : "Şüphe duyma,",
        choiceB : "Refleksif olma",
        choiceC : "Birikimli olma",
	    choiceD : "Sistemli olma",
	    correct : "D"
    } ,    {
        question : "8. Aynı zamanda felsefi düşünce belirli bir iç düzen ve biçime dayanır.",
        imgSrc : "img/mantik1.jpg",
        choiceA : "Tutarlı olma,",
        choiceB : "Refleksif olma",
        choiceC : "Birikimli olma",
	    choiceD : "Sistemli olma",
	    correct : "A"
    } ,    {
        question : "9. Filozofların sorulara dair açıklamaları zamanla çoğalır fakat bu soruların kesin yanıtı yoktur. ",
        imgSrc : "img/suphe-duymak.png",
        choiceA : "Şüphe duyma,",
        choiceB : "Merak etme",
        choiceC : "Birikimli olma",
	    choiceD : "Sistemli olma",
	    correct : "B"
    } 
// 4 tane	
	
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
















