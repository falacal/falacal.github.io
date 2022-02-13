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
        question : "1- Bir sıvının yüzeyinde oluşturulan basınç değişikliği sıvının tüm kısımlarına ve içinde bulunduğu kabın çeperlerine aynen aktarılır.",
        imgSrc : "img/basinc-formulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "2- Hidrolik sistem, bir cisme kuvvet uygulamak için kullanılan kapalı bir sıvı sistemidir. ",
        imgSrc : "img/basincsivi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "3- Katıların üzerinde bulunduğu düzleme uyguladığı basınç kuvveti, cismin düzlemde duruş biçimine bağlıdır.",
        imgSrc : "img/basinc-formulu.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "4- Bernoulli İlkesi, hareket eden bir sıvının toplam enerjisinin her zaman sabit kaldığını belirtir.",
        imgSrc : "img/bernoulli2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "5- Kaldırma kuvveti, bir akışkanın bir cisim üzerinde oluşturduğu yukarı yönlü net kuvvettir.",
        imgSrc : "img/kaldirma-kuvveti2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },    {
        question : "6- Sıvılar kuvveti değiştirmeden iletirler.",
        imgSrc : "img/bilesik-kaplar.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },      {
        question : "7- Çekim alanının olmadığı bir yerde manometre ile gaz basıncı ölçümü yapılabilir.",
        imgSrc : "img/barometre.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },        {
        question : "8- Deniz seviyesinden yukarılara çıkıldıkça açık hava basıncı artar.",
        imgSrc : "img/yukseklerde-basinc-kar-erimesi.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "9- Akışkanlar basıncın büyük olduğu yerden küçük olduğu yere doğru hareket eder.",
        imgSrc : "img/bernoulli2.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "10- Fırtınalı havalarda su dalgalarının her zamankinden yüksek olması Bernoulli İlkesi ile açıklanır.",
        imgSrc : "img/acik-hava-kaynama.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "11- Bir yarış arabasının tasarımında, araba yüksek hızlara ulaştığında yolla olan temasının kesilmemesi için Bernoulli İlkesi’nden yararlanılır.",
        imgSrc : "img/carbernouilli2.png", 
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
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
















