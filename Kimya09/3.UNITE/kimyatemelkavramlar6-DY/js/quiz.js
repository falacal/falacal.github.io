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
        question :  "1)  Bir maddeyi oluşturan aynı tür moleküllerin birbirine uyguladığı çekim kuvvetine ....... denir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon ",
        choiceB : "kohezyon",
		correct : "B" 
    }, {
        question :  "2) farklı maddelerin tanecikleri arasındaki çekim kuvvetine ....... kuvvetleri denir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon ",
        choiceB : "kohezyon",
		correct : "A" 
    },	{
        question : "3) 	Sıvı ile yüzey arasındaki adezyon kuvvetleri kohezyon kuvvetlerinden büyükse sıvı yüzeyde yayılır. Böyle sıvılara  .......... sıvılar denir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "ıslatan",
        choiceB : "ıslatmayan  ",
		correct : "A" 
    }, {
        question :  "4) Sıvının kohezyon kuvvetleri sıvı ile yüzey arasındaki adezyon kuvvetlerinden büyükse sıvı yüzeyde damlacıklar hâlinde kalır. Böyle sıvılara  .......... sıvılar denir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "ıslatan",
        choiceB : "ıslatmayan  ",
		correct : "B" 
    }, 
	    {
        question : "5) Kılcal tüplerdeki sıvılar için adezyon kuvvetleri yeterince büyükse sıvı sütunu kendiliğinden yükselir. Bu olaya ....... denir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "yüzey gerilimi",
        choiceB : "kapiler etki",
		correct : "B" 
    }, {
        question : "6) Ağzına kadar suyla dolu bir bardağa damlalıkla yavaş yavaş birkaç damla daha su eklendiğinde suyun taşmadan bir kubbe şekli oluşturması su moleküllerinin ........ kuvvetlerinden kaynaklanır. ",
        imgSrc : "img/acabanedir.jpg", 
        choiceA : "kohezyon",
        choiceB : "adezyon ",
		correct : "A" 
    },	{
        question : "7)Kâğıt havlunun masaya dökülen suyu çekmesi sıvıların ....... özelliğine örnektir. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon",
        choiceB : "kılcallık",
		correct : "B" 
    }, {
        question : "8) Suda yüzen ördeğin tüyleri ıslanmaz çünkü suyun ..... kuvveti, su ve tüyler arasındaki ..... kuvvetinden büyüktür. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "kohezyon,  adezyon ",
        choiceB : "adezyon, kohezyon ",
		correct : "A" 
    },    {
        question : "9) 	Islanmayan kıyafet tasarlayan bir üretici kullanacağı malzeme ile su arasındaki adezyon kuvvetlerinin su molekülleri arasındaki kohezyon kuvvetlerinden daha ..... olmasına dikkat eder. ",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "büyük",
        choiceB : "küçük",
		correct : "B" 
    }, {
        question : "10)	Cıvanın cam bir yüzeye döküldüğünde yüzeyi ıslatmadığı metal üzerine döküldüğünde yüzeyi ıslattığı söylenebilir çünkü metal yüzey ile cıvanın tanecikleri arasında ......  gözlenir. ",
       imgSrc : "img/acabanedir.jpg",
        choiceA : "metalik bağ",
        choiceB : "iyonik bağ",
		correct : "A" 
    }, {
        question : "11)	Suya tuz eklendiğinde su ve tuz iyonları arasında su molekülleri arasında olandan daha kuvvetli bir moleküller arası çekim oluşur ve suyun yüzey gerilimi ........ ",
       imgSrc : "img/acabanedir.jpg",
        choiceA : "azalır ",
        choiceB : "artar ",
		correct : "B" 
    }, {
        question : "12)	Suya sabun ve deterjan ilavesi  sıvının yüzey gerilimini .......",
       imgSrc : "img/acabanedir.jpg",
        choiceA : "azaltır.",
        choiceB : "artırır",
		correct : "A" 
    }, {
        question : "13)	 Sabun ve deterjan molekülleri hidrofil (.........) ve hidrofob (.........) kısımlardan oluşur.",
       imgSrc : "img/acabanedir.jpg",
        choiceA : "suyu seven,  suyu sevmeyen ",
        choiceB : "suyu sevmeyen, suyu seven",
		correct : "A" 
    }, {
        question : "14)Hidrojen ve oksijen atomlarının çekirdekleri arasındaki elektrostatik çekim kuvveti, su molekülünün oluşumunu sağlar.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru ",
        choiceB : "Yanlış",
		correct : "B" 
    }, {
        question : "15)	 Hidrojen ve oksijen atomlarının çekirdekleri ile ortaklaşa kullanılan elektronlar kovalent bağlı su molekülünü oluşturur.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru ",
        choiceB : "Yanlış",
		correct : "A" 
    }, {
        question : "16) Oksijen atomları, hidrojen atomlarından elektron alır ve kovalent bağlı su molekülü oluşturur.", 
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru ",
        choiceB : "Yanlış",
		correct : "B" 
    } 






// 16 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















