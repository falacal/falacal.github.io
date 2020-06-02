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
        question : "1- Katıların basıncı uygulandığı yüzeyin büyüklüğüne bağlıdır.",
        imgSrc : "img/basinc-formulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "2- Sıvıların bulunduğu kabın tabanına yaptığı basınç, sıvının yoğunluğu ile ters orantılıdır. ",
        imgSrc : "img/basincsivi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "3- Si birim sisteminde basınç birimi Pascal'dır.",
        imgSrc : "img/basinc-formulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "4- Deniz yüzeyinden yükseklere çıkıldıkça açık hava basıncı artar.",
        imgSrc : "img/acik-hava-basinci.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "5- Katılarda basınç kuvveti arttıkça basınç azalır.",
        imgSrc : "img/katibasinci.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "6- Bileşik kaplar Paskal İlkesi'ne göre çalışır.",
        imgSrc : "img/bilesik-kaplar.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },      {
        question : "7- Açık hava basıncını ölçen araçlara manometre denir.",
        imgSrc : "img/barometre.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "8- Açık hava basıncının azalması erime noktasını yükseltir.",
        imgSrc : "img/yukseklerde-basinc-kar-erimesi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "9- Bir borudan akan sıvının hızı artarsa basıncı da artar.",
        imgSrc : "img/bernoulli2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "10- Sıvının yüzeyindeki dış basınç artarsa sıvının kaynaması kolaylaşır.",
        imgSrc : "img/acik-hava-kaynama.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "11- Durgun sıvının cisme uyguladığı kaldırma kuvveti sıvının yoğunluğu ile ters orantılıdır.",
        imgSrc : "img/basincsivi2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "12- Cisim sıvı içinde askıda kalıyorsa cisme etki eden kaldırma kuvveti ile cismin ağırlığı eşittir.",
        imgSrc : "img/bcismiaskida2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },{
        question : "13- Sıvıların cisimlere uyguladığı kaldırma kuvveti kaptaki sıvının miktarı ile orantılıdır.",
        imgSrc : "img/kaldirma-kuvveti2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "14- Balonun havada yükselmesi için balonun toplam yoğunluğunun artırılması gerekir.",
        imgSrc : "img/gasepressure.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    }
	
	
	
	
	
	
	//,     {
     //   question : " ",
     //   imgSrc : "img/",
    //    choiceA : "Doğru",
    //    choiceB : "Yanlış",

	//	correct : "A"
   // }
	
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















