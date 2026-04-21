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
        question : "1. Bir maddenin başka bir madde içinde kendi özelliğini kaybetmeden çözünmesi olayına ne denir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Kimyasal çözünme",
        choiceB : "Fiziksel çözünme",
        correct : "B"
    },
    {
        question : "2. Bir maddenin çözücü ile tepkimeye girerek yeni madde türleri oluşturması hangi çözünme türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Kimyasal çözünme",
        choiceB : "Fiziksel çözünme",
        correct : "A"
    },
    {
        question : "3. İyonik bağlı bileşiklerin katyon ve anyonlarının birbirlerinden uzaklaşarak etraflarının çözücü molekülleri ile sarılmasına ne denir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correct : "B"
    },
    {
        question : "4. Kovalent bağlı bileşiklerin moleküllerinin birbirlerinden uzaklaşarak etraflarının çözücü molekülleri ile sarılması hangi çözünme türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correct : "A"
    },
    {
        question : "5. Tuzun suda çözünmesi hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correct : "B"
    },
    {
        question : "6. Şekerin suda çözünmesi hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correct : "A"
    },
    {
        question : "7. Amonyak gazının suda çözünerek yeni madde türleri oluşturması hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Fiziksel çözünme",
        choiceB : "Kimyasal çözünme",
        correct : "B"
    },
    {
        question : "8. Tuzun suda çözünmesi iyonik çözünme olup hangi etkileşim türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Hidrojen bağı",
        choiceB : "İyon - dipol etkileşimi",
        correct : "B"
    },
    {
        question : "9. Şekerin suda çözünmesi moleküler çözünme olup hangi etkileşim türleridir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "İyon - dipol etkileşimi",
        choiceB : "Hidrojen bağı ve dipol - dipol etkileşimi",
        correct : "B"
    },
{
    question : "10. Çözünürlük ve sıcaklık değişimi yandaki grafikte verilen X ve Y maddeleri için 0 °C sıcaklıktan 100 °C sıcaklığa getirilirse X'in çözünürlüğü nasıl değişir?",
    imgSrc : "img/soru10.png",
    choiceA : "X maddesinin çözünürlüğü artar",
    choiceB : "X maddesinin çözünürlüğü azalır",
    correct : "B"
},
    {
        question : "11. Çözünürlük ve sıcaklık değişimi yandaki grafikte verilen X ve Y maddeleri için 0 °C sıcaklıktan 100 °C getirilirse Y'nin çözünürlüğü nasıl değişir?",
        imgSrc : "img/soru10.png",
        choiceA : "Y maddesinin çözünürlüğü artar",
        choiceB : "Y maddesinin çözünürlüğü azalır",
        correct : "A"
    },
    {
        question : "12. Çözeltilerde çözünenin türüne değil tanecik sayısına bağlı olarak değişen özelliklere ...... denir. ",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "koligatif özellikler   ",
        choiceB : "türe bağlı özellikler ",
        correct : "A"
    },
    {
        question : "13. A noktasındaki çözelti  ...... dir.",
        imgSrc : "img/soru10-a.png ",
        choiceA : "seyreltik çözelti ",
        choiceB : "doymuş çözelti",
        correct : "B"
    },
    {
        question : "14. C noktasındaki çözelti  ...... dir.",
        imgSrc : "img/soru10-a.png ",
        choiceA : "doymuş çözelti ",
        choiceB : "aşırı doymuş çözelti",
        correct : "B"
    },
    {
        question : "15. B noktasındaki çözelti  ...... dir.",
        imgSrc : "img/soru10-a.png ",
        choiceA : "doymuş çözelti ",
        choiceB : "aşırı doymuş çözelti",
        correct : "A"
    },
    {
        question : "16. D noktasındaki çözelti  ...... dir.",
        imgSrc : "img/soru10-a.png ",
        choiceA : "doymamış çözelti ",
        choiceB : "doymuş çözelti",
        correct : "A"
    },
    {
        question : "16. Belirli sıcaklık ve basınçta çözebileceğinden daha fazla maddeyi çözmüş olan çözeltiye ...... çözelti denir. ",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "doymuş çözelti ",
        choiceB : "aşırı doymuş",
        correct : "B"
    },
    {
        question : "17. Bir çözeltide çözünmüş tanecik sayısı arttıkça kaynama noktası .....",
        imgSrc : "img/acaba_nedir.png ",
        choiceA : "azalır ",
        choiceB : "artar ",
        correct : "B"
    },
    {
        question : "18. Bir çözeltide çözünmüş tanecik sayısı arttıkça donma noktası .....",
        imgSrc : "img/acaba_nedir.png ",
        choiceA : "azalır ",
        choiceB : "artar ",
        correct : "A"
    }






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
















