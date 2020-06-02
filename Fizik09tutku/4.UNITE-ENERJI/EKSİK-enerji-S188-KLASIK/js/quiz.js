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
        question : "30 N ağırlığındaki bir taş, yerden 15 m yükseklikteki K noktasından yatay olarak fırlatıldığında şekildeki yörüngeyi izleyerek L noktasına düşmektedir. Taş, yere düşünceye kadar yer çekimi kuvvetinin yaptığı iş kaç J’dür?", 
        imgSrc : "img/bir.png",
        choiceA : " G=30 N, h=15 m, W=(G/h)=(30/15)= 2J",
        choiceB : " G=30 N, h=15 m, W=Gh=30.15=450 J",

		correct : "B"
    }, {
        question : "Şekildeki yatay düzlemde hareketli cisim K noktasından 3v, L noktasından v hızıyla geçip M noktasında durmaktadır.<br>Buna göre KL arasında ısıya dönüşen enerjinin LM arasında ısıya dönüşen enerjiye oranını bulunuz.",
        imgSrc : "img/iki.png ",
        choiceA : "<img src='img/ikincisoru.png'>" ,
        choiceB : "<img src='img/ikincisoru.png'>" ,

		correct : "A"
    }, 	{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
		correct : ""
    },{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },	  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    } , 	{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
		correct : ""
    },{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },	  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  	{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
		correct : ""
    },{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },	 {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  	{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
		correct : ""
    },{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },	 {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  	{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",
        choiceC : "",
		choiceD : "",
		correct : ""
    },{
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    },	  {
        question : "",
        imgSrc : "img/ ",
        choiceA : "",
        choiceB : "",

		correct : ""
    }





	
	// 	{
    //    question : "",
    //    imgSrc : "img/",
    //    choiceA : "S",
     //   choiceB : "",  
    //    choiceC : "", 
	//	choiceD : "",
	//	correct : ""
    //}
	
	
	
	
	
//  25 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
	document.getElementById(runningQuestion).innerHTML = "D";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
	document.getElementById(runningQuestion).innerHTML = "Y";
}

// score render
function scoreRender(){
	
	 
	
	
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
			
	
	if (scorePerCent < 60 ) {
		var audio = new Audio('img/basaramadim-.mp3');
		 audio.play();
	} 
	
        
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
			  (scorePerCent >= 10) ? "img/1.png" :
	
	

	  
			    
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>%"+ scorePerCent + "</br>" +    "</br>" + "<button class='button' onClick='window.location.href=window.location.href' >"  + "Tekrarla" + "</button>"  +                 "</p>";
	 
	 
	//  "<button onClick="window.location.href=window.location.href">"  + "Tekrarla" + "</button>" 
	 
	 
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














