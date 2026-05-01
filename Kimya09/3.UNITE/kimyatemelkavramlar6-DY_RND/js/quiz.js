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
        question : "1) Bir maddeyi oluşturan aynı tür moleküllerin birbirine uyguladığı çekim kuvvetine ....... denir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon",
        choiceB : "kohezyon",
        correctAnswer : "kohezyon"
    },
    {
        question : "2) Farklı maddelerin tanecikleri arasındaki çekim kuvvetine ....... kuvvetleri denir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon",
        choiceB : "kohezyon",
        correctAnswer : "adezyon"
    },
    {
        question : "3) Sıvı ile yüzey arasındaki adezyon kuvvetleri kohezyon kuvvetlerinden büyükse sıvı yüzeyde yayılır. Böyle sıvılara .......... sıvılar denir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "ıslatan",
        choiceB : "ıslatmayan",
        correctAnswer : "ıslatan"
    },
    {
        question : "4) Sıvının kohezyon kuvvetleri sıvı ile yüzey arasındaki adezyon kuvvetlerinden büyükse sıvı yüzeyde damlacıklar hâlinde kalır. Böyle sıvılara .......... sıvılar denir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "ıslatan",
        choiceB : "ıslatmayan",
        correctAnswer : "ıslatmayan"
    },
    {
        question : "5) Kılcal tüplerdeki sıvılar için adezyon kuvvetleri yeterince büyükse sıvı sütunu kendiliğinden yükselir. Bu olaya ....... denir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "yüzey gerilimi",
        choiceB : "kapiler etki",
        correctAnswer : "kapiler etki"
    },
    {
        question : "6) Ağzına kadar suyla dolu bir bardağa damlalıkla yavaş yavaş birkaç damla daha su eklendiğinde suyun taşmadan bir kubbe şekli oluşturması su moleküllerinin ........ kuvvetlerinden kaynaklanır.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "kohezyon",
        choiceB : "adezyon",
        correctAnswer : "kohezyon"
    },
    {
        question : "7) Kâğıt havlunun masaya dökülen suyu çekmesi sıvıların ....... özelliğine örnektir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "adezyon",
        choiceB : "kılcallık",
        correctAnswer : "kılcallık"
    },
    {
        question : "8) Suda yüzen ördeğin tüyleri ıslanmaz çünkü suyun ..... kuvveti, su ve tüyler arasındaki ..... kuvvetinden büyüktür.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "kohezyon, adezyon",
        choiceB : "adezyon, kohezyon",
        correctAnswer : "kohezyon, adezyon"
    },
    {
        question : "9) Islanmayan kıyafet tasarlayan bir üretici kullanacağı malzeme ile su arasındaki adezyon kuvvetlerinin su molekülleri arasındaki kohezyon kuvvetlerinden daha ..... olmasına dikkat eder.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "büyük",
        choiceB : "küçük",
        correctAnswer : "küçük"
    },
    {
        question : "10) Cıvanın cam bir yüzeye döküldüğünde yüzeyi ıslatmadığı metal üzerine döküldüğünde yüzeyi ıslattığı söylenebilir çünkü metal yüzey ile cıvanın tanecikleri arasında ...... gözlenir.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "metalik bağ",
        choiceB : "iyonik bağ",
        correctAnswer : "metalik bağ"
    },
    {
        question : "11) Suya tuz eklendiğinde su ve tuz iyonları arasında su molekülleri arasında olandan daha kuvvetli bir moleküller arası çekim oluşur ve suyun yüzey gerilimi ........",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "azalır",
        choiceB : "artar",
        correctAnswer : "artar"
    },
    {
        question : "12) Suya sabun ve deterjan ilavesi sıvının yüzey gerilimini .......",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "azaltır.",
        choiceB : "artırır",
        correctAnswer : "azaltır."
    },
    {
        question : "13) Sabun ve deterjan molekülleri hidrofil (.........) ve hidrofob (.........) kısımlardan oluşur.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "suyu seven, suyu sevmeyen",
        choiceB : "suyu sevmeyen, suyu seven",
        correctAnswer : "suyu seven, suyu sevmeyen"
    },
    {
        question : "14) Hidrojen ve oksijen atomlarının çekirdekleri arasındaki elektrostatik çekim kuvveti, su molekülünün oluşumunu sağlar.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        correctAnswer : "Yanlış"
    },
    {
        question : "15) Hidrojen ve oksijen atomlarının çekirdekleri ile ortaklaşa kullanılan elektronlar kovalent bağlı su molekülünü oluşturur.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        correctAnswer : "Doğru"
    },
    {
        question : "16) Oksijen atomları, hidrojen atomlarından elektron alır ve kovalent bağlı su molekülü oluşturur.",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        correctAnswer : "Yanlış"
    },
    {
        question : "17) Akışkanların (sıvı veya gaz) akmaya, şekil değiştirmeye veya yayılmaya karşı gösterdiği iç dirence ne isim verilir?",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "kılcallık",
        choiceB : "viskozite(akmazlık)",
        correctAnswer : "viskozite(akmazlık)"
    },
    {
        question : "18) Sıvı molekülleri arasındaki kohezyon kuvveti nedeniyle sıvının yüzeyinin esnek bir zar gibi davranarak en küçük alana büzülmesine ne isim verilir?",
        imgSrc : "img/acabanedir.jpg",
        choiceA : "yüzey gerilimi",
        choiceB : "viskozite",
        correctAnswer : "yüzey gerilimi"
    }
];

// =====================================================
// 🎲 SHUFFLE FONKSİYONU - 2 Şığı Randomize Eder
// =====================================================
function shuffleChoices(questionsArray) {
    return questionsArray.map(q => {
        const correct = q.correctAnswer;
        const wrong = (q.choiceA.trim() === correct.trim()) ? q.choiceB : q.choiceA;
        
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