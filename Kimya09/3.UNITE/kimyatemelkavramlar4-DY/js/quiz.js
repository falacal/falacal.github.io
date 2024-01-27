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
        question : '1) Suda çözündüğünde iyonlaşabilen <font color="red"><b>HF, HCl, HBr, HI ve H<sub>2</sub>S </b></font color="red"> gibi bileşikler iyonik bileşikmiş gibi adlandırılır. ',
        imgSrc : "img/iyonikler.png",
        choiceA : "Yanlış ",
        choiceB : "Doğru",
		correct : "B" 
    }, {
        question : '2) <font color="red"><b>CO<sub>2</sub> </b></font color="red">	bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png",
        choiceA : "Karbon monoksit ",
        choiceB : "Karbon dioksit ",
		correct : "B" 
    },	{
        question : '3) <font color="red"><b>CCl<sub>4</sub> </b></font color="red">	 bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Karbon tetraklorür ",
        choiceB : "Karbon triklorür  ",
		correct : "A" 
    }, {
        question : '4) <font color="red"><b>H<sub>2</sub>S	</b></font color="red">	bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir?  ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Dihidrojen monosülfür ",
        choiceB : "Hidrojen sülfür  ",
		correct : "B" 
    }, 
	    {
        question : '5)	<font color="red"><b>HF	</b></font color="red"> bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Monohidrojen monoflorür ",
        choiceB : "Hidrojen florür ",
		correct : "B" 
    }, {
        question : '6) <font color="red"><b>N<sub>2</sub>O<sub>3</sub> </b></font color="red"> bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir?',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Diazot trioksit ",
        choiceB : "Azot trioksit ",
		correct : "A" 
    },	{
        question : '7) <font color="red"><b>NH<sub>3</sub>(amonyak)	</b></font color="red"> bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Trihidrojen mononitrür ",
        choiceB : "Trihidrojen nitrür  ",
		correct : "A" 
    }, {
        question : '8) <font color="red"><b>NO	</b></font color="red"> bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Monoazot monoksit ",
        choiceB : "Azot monoksit ",
		correct : "B" 
    },    {
        question : '9) <font color="red"><b>N<sub>2</sub>O	</b></font color="red">	 bileşiğinin okunuşu aşağıdaki hangi şıkta doğru olarak verilmiştir? ',
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "Diazot oksit ",
        choiceB : "Diazot monoksit ",
		correct : "B" 
    }, {
        question : "10)	Diklor monoksit	bileşiğinin doğru formülü aşağıdakilerden hangisinde doğru olarak yazılmıştır? ",
        imgSrc : "img/bazibilesikler.png ",
        choiceA : "ClO  ",
        choiceB : "Cl<sub>2</sub>O ",
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
















