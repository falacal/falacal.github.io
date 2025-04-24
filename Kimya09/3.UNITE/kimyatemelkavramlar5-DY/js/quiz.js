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
        question : '1) <font color="red"><b>Sodyum Klorür, Kalsiyum Oksit, Potasyum İyodür </b></font color="red"> gibi maddeler ne tür katılardandır?',
        imgSrc : "img/iyonikler.png",
        choiceA : "Metalik katılar ",
        choiceB : "İyonik katılar",
		correct : "B" 
    }, {
        question : '2)<font color="red"><b>Elmas, Kuvars, Grafit</b></font color="red"> gibi maddeler ne tür katılardandır? ',
        imgSrc : "img/bazibilesikler.png",
        choiceA : "Kovalent katılar ",
        choiceB : "Moleküler katılar ",
		correct : "A" 
    },	{
        question : '3) <font color="red"><b>Sodyum, Magnezyum, Alüminyum</b></font color="red">	gibi maddeler ne tür katılardandır?  ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Metalik katılar ",
        choiceB : "Moleküler katılar   ",
		correct : "A" 
    }, {
        question : '4) <font color="red"><b>Buz, Kuru Buz</b></font color="red"> gibi maddeler ne tür katılardandır? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Kovalent katılar ",
        choiceB : "Moleküler katılar  ",
		correct : "B" 
    }, 
	    {
        question : '5)	<font color="red"><b>Düzensiz yapıya sahip olup belirli bir erime noktası olmayan cam gibi maddelere   </b></font color="red">  ...... denir.',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Kristal katılar ",
        choiceB : "Amorf katılar ",
		correct : "B" 
    }, {
        question : '6) <font color="red"><b>Düzenli yapıya sahiptir ve iyonik, kovalent, metalik ve moleküler olmak üzere dört gruba ayrılabilen katılara </b></font color="red">  ...... denir. ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Kristal katılar ",
        choiceB : "Amorf katılar ",
		correct : "A" 
    },	{
        question : '7) <font color="red"><b>Katıların erime noktaları, tanecikleri bir arada tutan kuvvetlerin gücüne bağlıdır.	</b></font color="red"> ...... bağlar, en zayıf olup düşük erime noktalarına sahiptir (örneğin kuru buz -78,5°C). ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Moleküler bağlar",
        choiceB : "Kovalent bağlar",
		correct : "A" 
    }, {
        question : '8) Bir sıvının ısı alarak gaz veya buhar hâline geçmesine .......... denir.  ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "yoğunlaşma",
        choiceB : "buharlaşma ",
		correct : "B" 
    },    {
        question : '9)  Birim zamanda sıvı hâlden gaz hâline geçen veya diğer moleküllerden ayrılan moleküllerin sayısı ........... tanımlanır. ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "buharlaşma hızı olarak",
        choiceB : "yoğunlaşma hızı olarak",
		correct : "A" 
    }, {
        question : "10)	Sıvısıyla denge hâlinde bulunan buharın basıncına o sıvının ......... denir.  ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "denge yoğunlaşma hızıı  ",
        choiceB : "denge buhar basıncı",
		correct : "B" 
    }, {
        question : "11)	Karbon monoksit	bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "CO ",
        choiceB : "CO<sub>2</sub> ",
		correct : "A" 
    }, {
        question : "12)	 Hidrojen klorür 	bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "HCl<sub>2</sub> ",
        choiceB : "HCl",
		correct : "B" 
    }, {
        question : "13)	Bor triflorür 	bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "B<sub>3</sub>F ",
        choiceB : "BF<sub>3</sub> ",
		correct : "B" 
    }, {
        question : "14)	 Diazot pentaoksit bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "N<sub>2</sub>O<sub>3</sub> ",
        choiceB : "N<sub>2</sub>O<sub>5</sub> ",
		correct : "B" 
    }, {
        question : "15)	Fosfor triklorür 	bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "PCl<sub>3</sub> ",
        choiceB : "PCl<sub>2</sub> ",
		correct : "A" 
    }, {
        question : "16) Oksijen diflorür bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ", 
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "OF<sub>2</sub>  ",
        choiceB : "O<sub>2</sub>F ",
		correct : "A" 
    } 






// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















