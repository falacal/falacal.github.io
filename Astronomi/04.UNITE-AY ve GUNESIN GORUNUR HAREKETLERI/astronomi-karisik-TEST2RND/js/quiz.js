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
// 📚 SORU VERİSİ - correctAnswer: Doğru cevabın METNİ
// =====================================================
const originalQuestions = [
    {
        question : "1. Güneş'in yerdeki bir gözlemci tarafından görünen bir yıllık hareketine ne denir?",
        imgSrc : "img/gunes_yillik.png",
        choiceA : "Güneş'in Günlük Görünür Hareketi",
        choiceB : "Güneş'in Yıllık Görünür Hareketi",
        correctAnswer : "Güneş'in Yıllık Görünür Hareketi"
    },
    {
        question : "2. Gözlemcinin yaz aylarında gök kürede gördüğü takımyıldızlara ne ad verilir?",
        imgSrc : "img/yaz_yildizlari.png",
        choiceA : "Yaz Takımyıldızları",
        choiceB : "Yaz Üçgeni",
        correctAnswer : "Yaz Takımyıldızları"
    },
    {
        question : "3. Kış aylarında gördüğü takımyıldızlara ne ad verilir?",
        imgSrc : "img/kis_yildizlari.png",
        choiceA : "Kış Takımyıldızları",
        choiceB : "Kış Üçgeni",
        correctAnswer : "Kış Takımyıldızları"
    },
    {
        question : "4. Burç takımyıldızlarının oluşturduğu ve Güneş'in hareket ettiği varsayılan diske ne ad verilir?",
        imgSrc : "img/zodyak.png",
        choiceA : "Samanyolu Düzlemi",
        choiceB : "Zodyak",
        correctAnswer : "Zodyak"
    },
    {
        question : "5. Yerdeki gözlemciye göre Güneş'in gök ekvatoruna paralel yaptığı günlük harekete ne denir?",
        imgSrc : "img/gunes_gunluk.png",
        choiceA : "Güneş'in Günlük Görünür Hareketi",
        choiceB : "Güneş'in Yıllık Görünür Hareketi",
        correctAnswer : "Güneş'in Günlük Görünür Hareketi"
    },
    {
        question : "6. Ay, Dünya etrafındaki dolanımını ~27,3 günde tamamlar. Bu süreye ne denir?",
        imgSrc : "img/yildiz_ayi.png",
        choiceA : "Kavuşum Ayı (Sinodik Ay)",
        choiceB : "Yıldız Ayı (Sideral Ay)",
        correctAnswer : "Yıldız Ayı (Sideral Ay)"
    },
    {
        question : "7. Ay'ın birim zamanda taradığı açıya ne denir?",
        imgSrc : "img/acisal_hiz.png",
        choiceA : "Ay'ın Çizgisel Hızı",
        choiceB : "Ay'ın Açısal Hızı",
        correctAnswer : "Ay'ın Açısal Hızı"
    },
    {
        question : "8. Ay'ın yörüngesinin ekliptiği güneyden kuzeye kestiği noktaya ne denir?",
        imgSrc : "img/cikis_dugumu.png",
        choiceA : "Çıkış Düğümü (Kuzey Düğümü)",
        choiceB : "İniş Düğümü (Güney Düğümü)",
        correctAnswer : "Çıkış Düğümü (Kuzey Düğümü)"
    },
    {
        question : "9. Ay'ın yörüngesinin ekliptiği kuzeyden güneye kestiği noktaya ne denir?",
        imgSrc : "img/inis_dugumu.png",
        choiceA : "İniş Düğümü (Güney Düğümü)",
        choiceB : "Çıkış Düğümü (Kuzey Düğümü)",
        correctAnswer : "İniş Düğümü (Güney Düğümü)"
    },
    {
        question : "10. Çıkış ve iniş düğümlerini birleştiren doğruya ne ad verilir?",
        imgSrc : "img/dugumler_cizgisi.png",
        choiceA : "Düğümler Çizgisi",
        choiceB : "Ekliptik Çizgisi",
        correctAnswer : "Düğümler Çizgisi"
    },
    {
        question : "11. Ay'ın Dünya etrafında dolanırken kendi ekseni etrafında da aynı sürede dönmesine ne denir?",
        imgSrc : "img/gelgit_kilidi.png",
        choiceA : "Gelgit Kilidi (Senkron Rotasyon)",
        choiceB : "Yörünge Rezonansı",
        correctAnswer : "Gelgit Kilidi (Senkron Rotasyon)"
    },
    {
        question : "12. Ay'ın Dünya'dan görünen şekillerine ne denir?",
        imgSrc : "img/ay_evreleri.png",
        choiceA : "Ay'ın Açısal Konumları",
        choiceB : "Ay'ın Evreleri (Fazları)",
        correctAnswer : "Ay'ın Evreleri (Fazları)"
    },
    {
        question : "13. Ardışık iki Yeni Ay arasında geçen ~29,5 günlük süreye ne denir?",
        imgSrc : "img/kavusum_ayi.png",
        choiceA : "Kavuşum Ayı (Sinodik Ay)",
        choiceB : "Yıldız Ayı (Sideral Ay)",
        correctAnswer : "Kavuşum Ayı (Sinodik Ay)"
    },
    {
        question : "14. Dünya, Güneş ile Ay'ın arasına girdiğinde Ay'ın gölgede kalması olayına ne denir?",
        imgSrc : "img/ay_tutulmasi.png",
        choiceA : "Güneş Tutulması",
        choiceB : "Ay Tutulması",
        correctAnswer : "Ay Tutulması"
    },
    {
        question : "15. Ay'ın Güneş'i tamamen örttüğü tutulmaya ne denir?",
        imgSrc : "img/tam_gunes_tutulmasi.png",
        choiceA : "Parçalı Güneş Tutulması",
        choiceB : "Tam Güneş Tutulması",
        correctAnswer : "Tam Güneş Tutulması"
    },
    {
        question : "16. Ay'ın Güneş'i tamamen örtemediği, Güneş'in halka şeklinde görüldüğü tutulmaya ne denir?",
        imgSrc : "img/halkali_gunes.png",
        choiceA : "Halkalı Güneş Tutulması",
        choiceB : "Tam Güneş Tutulması",
        correctAnswer : "Halkalı Güneş Tutulması"
    },
    {
        question : "17. Ay'ın Güneş'i kısmen örttüğü tutulmaya ne denir?",
        imgSrc : "img/parcali_gunes.png",
        choiceA : "Halkalı Güneş Tutulması",
        choiceB : "Parçalı Güneş Tutulması",
        correctAnswer : "Parçalı Güneş Tutulması"
    },
    {
        question : "18. Güneş'in günlük görünür hareketi sırasında gündüz izlediği yörüngeye ne ad verilir?",
        imgSrc : "img/gunduz_yayi.png",
        choiceA : "Gündüz Yayları",
        choiceB : "Gece Yayları",
        correctAnswer : "Gündüz Yayları"
    },
    {
        question : "19. Güneş'in yıl boyunca gök kürede izlediği büyük çembere ne ad verilir?",
        imgSrc : "img/ekliptik.png",
        choiceA : "Gök Ekvatoru",
        choiceB : "Ekliptik",
        correctAnswer : "Ekliptik"
    },
    {
        question : "20. Güneş'in günlük görünür hareketi sırasında gece izlediği yörüngeye ne ad verilir?",
        imgSrc : "img/gece_yayi.png",
        choiceA : "Gece Yayları",
        choiceB : "Gündüz Yayları",
        correctAnswer : "Gece Yayları"
    }
];

// =====================================================
// 🎲 SHUFFLE FONKSİYONU - Şıkları Randomize Eder
// =====================================================
function shuffleChoices(questionsArray) {
    return questionsArray.map(q => {
        const correct = q.correctAnswer;
        const wrong = (q.choiceA === correct) ? q.choiceB : q.choiceA;
        
        // Şıkları rastgele sırala (%50 ihtimalle yer değiştirir)
        const shuffled = Math.random() < 0.5 
            ? { choiceA: correct, choiceB: wrong, correct: "A" }
            : { choiceA: wrong, choiceB: correct, correct: "B" };
        
        // Yeni soru objesi döndür
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
let questions = [];           // Shuffle edilmiş sorular buraya gelecek
let lastQuestion = 0;
let runningQuestion = 0;
let count = 0;
const questionTime = 90;      // 90 saniye
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// =====================================================
// 🎨 SORU GÖSTERME FONKSİYONU
// =====================================================
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src='"+ q.imgSrc +"'>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
}

// =====================================================
// 🚀 QUIZ BAŞLATMA
// =====================================================
start.addEventListener("click", startQuiz);

function startQuiz(){
    // 🔥 HER BAŞLANGIÇTA ŞIKLARI YENİDEN KARIŞTIR!
    questions = shuffleChoices(originalQuestions);
    
    // Değişkenleri sıfırla
    lastQuestion = questions.length - 1;
    runningQuestion = 0;
    count = 0;
    score = 0;
    progress.innerHTML = "";  // Progress çubuğunu temizle
    
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
    
    if (scorePerCent < 85) {
        var audio = new Audio('img/basaramadim-.mp3');
        audio.play();
    }
    if (scorePerCent > 85) {
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