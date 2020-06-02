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
        question : "1. Isı enerjisinin bir tanecikten diğerine çarpmalar sonucunda aktarılmasına ısının iletim yolu ile yayılması denir.",
        imgSrc : "img/isiiletimikatilar.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }, {
        question : "2. Katı bir maddede tanecikler arası uzaklık arttıkça maddenin ısı iletim kalitesi düşer. ",
        imgSrc : "img/isiiletimikatilar2.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },	{
        question : "3.  Akışkanlardaki taneciklerin yer değiştirmesi sonucunda kendilerinin giderek ısıyı aktarmasına konveksiyon ile yayılma denir. ",
        imgSrc : "img/konveksiyon1.gif ",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
		
    },{
        question : "4. Kalorifer peteğinin odayı ısıtması ısının yalnızca konveksiyon ile yayılması sonucu gerçekleşmektedir. ",
        imgSrc : "img/kalorifer.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    },   {
        question : "5. Isının yayılması için maddesel ortama gereksinim yoktur. ",
        imgSrc : "img/gunesisima1.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }, {
        question : "6.  Termosların iç ve dış yüzeylerinin parlak olması konveksiyon akımlarını önlemek içindir.",
        imgSrc : "img/termosdevarkabi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    },   {
        question : "7. Isı iletim hızı arttıkça ısı kaybı azalır. ",
        imgSrc : "img/isiiletimiformulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }, {
        question : "8. Ortamlar arasındaki temas yüzeyinin artması ısı iletim hızını azaltır.",
        imgSrc : "img/isiiletimiformulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "B"
    },   {
        question : "9. Atmosferdeki bazı gazların yüksek dalga boylu ışınları emerek tutması sonucunda atmosferin ısınmasına sera etkisi denir.",
        imgSrc : "img/seraetkisi.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    },   {
        question : "10. Sera gazlarının atmosferde artması küresel ısınmaya neden olur. ",
        imgSrc : "img/seragazlari2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

	    correct : "A"
    }
	//, {
    //    question : " ",
    //    imgSrc : "img/ ",
    //    choiceA : "Kırılma indisine",
    //    choiceB : "Sınır açısına",
    //    choiceC : "Işık hızına" ,
	//	choiceD : "Saydamlığına",
	//	correct : "A"
   
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 150; // 150 s
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
    

	if (scorePerCent < 90 ) {
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
        counter.innerHTML = (150-count)+" saniye"    ;
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
















