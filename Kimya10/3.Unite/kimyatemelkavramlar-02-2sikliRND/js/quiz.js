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

// =====================================================
// 📚 ORİJİNAL SORULAR (SABİT VERİ KAYNAĞI)
// correctAnswer: Doğru cevabın TAM METNİ
// =====================================================
const originalQuestions = [
    {
        question : "1. Bir maddenin başka bir madde içinde kendi özelliğini kaybetmeden çözünmesi olayına ne denir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Kimyasal çözünme",
        choiceB : "Fiziksel çözünme",
        correctAnswer : "Fiziksel çözünme"
    },
    {
        question : "2. Bir maddenin çözücü ile tepkimeye girerek yeni madde türleri oluşturması hangi çözünme türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Kimyasal çözünme",
        choiceB : "Fiziksel çözünme",
        correctAnswer : "Kimyasal çözünme"
    },
    {
        question : "3. İyonik bağlı bileşiklerin katyon ve anyonlarının birbirlerinden uzaklaşarak etraflarının çözücü molekülleri ile sarılmasına ne denir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correctAnswer : "İyonik çözünme"
    },
    {
        question : "4. Kovalent bağlı bileşiklerin moleküllerinin birbirlerinden uzaklaşarak etraflarının çözücü molekülleri ile sarılması hangi çözünme türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correctAnswer : "Moleküler çözünme"
    },
    {
        question : "5. Tuzun suda çözünmesi hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correctAnswer : "İyonik çözünme"
    },
    {
        question : "6. Şekerin suda çözünmesi hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Moleküler çözünme",
        choiceB : "İyonik çözünme",
        correctAnswer : "Moleküler çözünme"
    },
    {
        question : "7. Amonyak gazının suda çözünerek yeni madde türleri oluşturması hangi tür çözünmedir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Fiziksel çözünme",
        choiceB : "Kimyasal çözünme",
        correctAnswer : "Kimyasal çözünme"
    },
    {
        question : "8. Tuzun suda çözünmesi iyonik çözünme olup hangi etkileşim türüdür?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "Hidrojen bağı",
        choiceB : "İyon - dipol etkileşimi",
        correctAnswer : "İyon - dipol etkileşimi"
    },
    {
        question : "9. Şekerin suda çözünmesi moleküler çözünme olup hangi etkileşim türleridir?",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "İyon - dipol etkileşimi",
        choiceB : "Hidrojen bağı ve dipol - dipol etkileşimi",
        correctAnswer : "Hidrojen bağı ve dipol - dipol etkileşimi"
    },
    {
        question : "10. Çözünürlük ve sıcaklık değişimi yandaki grafikte verilen X ve Y maddeleri için 0 °C sıcaklıktan 100 °C sıcaklığa getirilirse X'in çözünürlüğü nasıl değişir?",
        imgSrc : "img/soru10.png",
        choiceA : "X maddesinin çözünürlüğü artar",
        choiceB : "X maddesinin çözünürlüğü azalır",
        correctAnswer : "X maddesinin çözünürlüğü azalır"
    },
    {
        question : "11. Çözünürlük ve sıcaklık değişimi yandaki grafikte verilen X ve Y maddeleri için 0 °C sıcaklıktan 100 °C getirilirse Y'nin çözünürlüğü nasıl değişir?",
        imgSrc : "img/soru10.png",
        choiceA : "Y maddesinin çözünürlüğü artar",
        choiceB : "Y maddesinin çözünürlüğü azalır",
        correctAnswer : "Y maddesinin çözünürlüğü artar"
    },
    {
        question : "12. Çözeltilerde çözünenin türüne değil tanecik sayısına bağlı olarak değişen özelliklere ...... denir.",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "koligatif özellikler",
        choiceB : "türe bağlı özellikler",
        correctAnswer : "koligatif özellikler"
    },
    {
        question : "13. A noktasındaki çözelti ...... dir.",
        imgSrc : "img/soru10-a.png",
        choiceA : "seyreltik çözelti",
        choiceB : "doymuş çözelti",
        correctAnswer : "doymuş çözelti"
    },
    {
        question : "14. C noktasındaki çözelti ...... dir.",
        imgSrc : "img/soru10-a.png",
        choiceA : "doymuş çözelti",
        choiceB : "aşırı doymuş çözelti",
        correctAnswer : "aşırı doymuş çözelti"
    },
    {
        question : "15. B noktasındaki çözelti ...... dir.",
        imgSrc : "img/soru10-a.png",
        choiceA : "doymuş çözelti",
        choiceB : "aşırı doymuş çözelti",
        correctAnswer : "doymuş çözelti"
    },
    {
        question : "16. D noktasındaki çözelti ...... dir.",
        imgSrc : "img/soru10-a.png",
        choiceA : "doymamış çözelti",
        choiceB : "doymuş çözelti",
        correctAnswer : "doymamış çözelti"
    },
    {
        question : "17. Belirli sıcaklık ve basınçta çözebileceğinden daha fazla maddeyi çözmüş olan çözeltiye ...... çözelti denir.",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "doymuş çözelti",
        choiceB : "aşırı doymuş",
        correctAnswer : "aşırı doymuş"
    },
    {
        question : "18. Bir çözeltide çözünmüş tanecik sayısı arttıkça kaynama noktası .....",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "azalır",
        choiceB : "artar",
        correctAnswer : "artar"
    },
    {
        question : "19. Bir çözeltide çözünmüş tanecik sayısı arttıkça donma noktası .....",
        imgSrc : "img/acaba_nedir.png",
        choiceA : "azalır",
        choiceB : "artar",
        correctAnswer : "azalır"
    }
];

// =====================================================
// 🎲 SHUFFLE FONKSİYONU - 2 Şığı Randomize Eder
// =====================================================
function shuffleChoices(questionsArray) {
    return questionsArray.map(q => {
        const correct = q.correctAnswer;
        const wrong = (q.choiceA === correct) ? q.choiceB : q.choiceA;
        
        // %50 ihtimalle şıkları yer değiştir
        const shuffled = Math.random() < 0.5 
            ? { choiceA: correct, choiceB: wrong, correct: "A" }
            : { choiceA: wrong, choiceB: correct, correct: "B" };
        
        return {
            question: q.question,
            imgSrc: q.imgSrc,
            choiceA: shuffled.choiceA,
            choiceB: shuffled.choiceB,
            correct: shuffled.correct
        };
    });
}

// =====================================================
// 🔄 GLOBAL DEĞİŞKENLER
// =====================================================
let questions = [];
let lastQuestion = 0;
let runningQuestion = 0;
let count = 0;
const questionTime = 180;  // 180 saniye
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// =====================================================
// 🎨 SORU GÖSTERME
// =====================================================
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src='"+ q.imgSrc +"'>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

// =====================================================
// 🚀 QUIZ BAŞLATMA (HER SEFERİNDE SHUFFLE!)
// =====================================================
start.addEventListener("click", startQuiz);

function startQuiz(){
    // 🔥 ŞIKLARI YENİDEN KARIŞTIR
    questions = shuffleChoices(originalQuestions);
    
    // Değişkenleri sıfırla
    lastQuestion = questions.length - 1;
    runningQuestion = 0;
    count = 0;
    score = 0;
    progress.innerHTML = "";
    
    // Arayüzü güncelle
    start.style.display = "none";
    quiz.style.display = "block";
    scoreDiv.style.display = "none";
    
    renderQuestion();
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter, 1000);
}

// =====================================================
// 📊 PROGRESS ÇUBUĞU
// =====================================================
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id='"+ qIndex +"'></div>";
    }
}

// =====================================================
// ✅ CEVAP KONTROL
// =====================================================
function checkAnswer(answer){
    if(answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    } else {
        answerIsWrong();
    }
    
    count = 0;
    
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval(TIMER);
        scoreRender();
    }
}

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// =====================================================
// 🏆 SKOR GÖSTERME
// =====================================================
function scoreRender(){
    scoreDiv.style.display = "block";
    
    const scorePerCent = Math.round(100 * score / questions.length);
    
    if (scorePerCent < 90) {
        var audio = new Audio('img/basaramadim-.mp3');
        audio.play();
    }
    if (scorePerCent >= 90) {
        var audio = new Audio('img/rasputin.mp3');
        audio.play();
    }

    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              (scorePerCent >= 10) ? "img/1.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src='"+ img +"'>";
    scoreDiv.innerHTML += "<p>%"+ scorePerCent + "</br></br>" + 
                         "<button class='button' onClick='window.location.href=window.location.href'>" + 
                         "Tekrarla" + "</button></p>";
}

// =====================================================
// ⏱️ ZAMAN SAYACI
// =====================================================
function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = (questionTime - count) + " saniye";
        timeGauge.style.width = count * gaugeUnit + "px";
        count++;
    } else {
        count = 0;
        answerIsWrong();
        
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        } else {
            clearInterval(TIMER);
            scoreRender();
        }
    }
}