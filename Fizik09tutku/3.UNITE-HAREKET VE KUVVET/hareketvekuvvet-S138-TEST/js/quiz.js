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
        question : "1)	Cisimlerin bir başlangıç noktasına göre yerini gösteren .......... vektörüdür. ",
        imgSrc : "img/konum1.png  ",
        choiceA : "ivme",
        choiceB : "konum",
        choiceC : "hız",
		choiceD : "kuvvet",
		correct : "B"
    }, {
        question : "2)	Cisimlerin birim zamanda aldığı yola ortalama .......... denir. ",
        imgSrc : "img/ortalamasurat1b.png  ",
        choiceA : "hız",
        choiceB : "ivme",
        choiceC : "kuvvet",
		choiceD : "sürat",
		correct : "D"
    },	{
        question : "3) Sürat .......... bir büyüklüktür. ",
        imgSrc : "img/asurat13.png  ",
        choiceA : "vektörel",
        choiceB : "kuvvetsel",
        choiceC : "skaler",
		choiceD : "uzunluksal",
		correct : "C"
    }, {
        question : "4)	Eşit zamanlarda eşit yer değiştirmeler yapan hareketli .......... hızla hareket etmektedir ",
        imgSrc : "img/sabithizli3.gif  ",
        choiceA : "düzgün hızlanan",
        choiceB : "sabit",
        choiceC : "düzgün yavaşlayan",
		choiceD : "sabit ivmeli",
		correct : "B"
    }, 
	    {
        question : "5)	Hareketliler .......... değiştirirken de hareketleri ivmelidir. ",
        imgSrc : "img/daireselhareket-Orbital_motion.gif  ",
        choiceA : "durmakta iken",
        choiceB : "sabit konumda dururken",
        choiceC : "yön",
		choiceD : "sabit hızla yükselirken",
		correct : "C"
    }, {
        question : "6)	Yavaşlayan cismin hareketinde ivme ile hız vektörü .......... yönlüdür. ",
        imgSrc : "img/duzgunyavaslayanl3.png  ",
        choiceA : "ters",
        choiceB : "aynı ",
        choiceC : "dik",
		choiceD : "sabit hız",
		correct : "A"
    },	{
        question : "7)	Kuvvet, cisimlerin hareket ve biçiminde değişme meydana getirebilen .......... bir büyüklüktür. ",
        imgSrc : "img/force3.gif  ",
        choiceA : "vektörel",
        choiceB : "skaler",
        choiceC : "hızsal",
		choiceD : "kütlesel",
		correct : "A"
    }, {
        question : "8)	Duran cisimler kuvvet uygulanarak harekete zorlandıklarında .......... sürtünme kuvveti etkisinde kalır. ",
        imgSrc : "img/surtunme.gif  ",
        choiceA : "ivme",
        choiceB : "konum",
        choiceC : "kinetik",
		choiceD : "statik",
		correct : "D"
    },    {
        question : "9)	Fiziksel temas gerektirmeyen kuvvetlere .......... kuvveti denir. ",
        imgSrc : "img/alankuvvetleril3.png  ",
        choiceA : "temas gerektiren",
        choiceB : "alan",
        choiceC : "tepki",
		choiceD : "ivme",
		correct : "B"
    }, {
        question : "10)	Etki ve tepki kuvvetleri .......... cisimler üzerinde bulunduklarından bileşkeleri alınamaz ",
        imgSrc : "img/etkitepki3.png  ",
        choiceA : "aynı",
        choiceB : "konum",
        choiceC : "hız",
		choiceD : "farklı",
		correct : "D"
    }
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 90; // 180 s
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
















