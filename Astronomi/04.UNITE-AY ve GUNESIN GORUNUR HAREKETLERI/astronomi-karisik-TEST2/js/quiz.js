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
// create our questions - Astronomi (GERÇEK RANDOM DAĞILIM)
let questions = [
    {
        question : "1. Güneş'in yerdeki bir gözlemci tarafından görünen bir yıllık hareketine ne denir?",
        imgSrc : "img/gunes_yillik.png",
        choiceA : "Güneş'in Günlük Görünür Hareketi",
        choiceB : "Güneş'in Yıllık Görünür Hareketi",
        correct : "B"
    },
    {
        question : "2. Gözlemcinin yaz aylarında gök kürede gördüğü takımyıldızlara ne ad verilir?",
        imgSrc : "img/yaz_yildizlari.png",
        choiceA : "Yaz Takımyıldızları",
        choiceB : "Yaz Üçgeni",
        correct : "A"
    },
    {
        question : "3. Kış aylarında gördüğü takımyıldızlara ne ad verilir?",
        imgSrc : "img/kis_yildizlari.png",
        choiceA : "Kış Takımyıldızları",
        choiceB : "Kış Üçgeni",
        correct : "A"
    },
    {
        question : "4. Burç takımyıldızlarının oluşturduğu ve Güneş'in hareket ettiği varsayılan diske ne ad verilir?",
        imgSrc : "img/zodyak.png",
        choiceA : "Samanyolu Düzlemi",
        choiceB : "Zodyak",
        correct : "B"
    },
    {
        question : "5. Yerdeki gözlemciye göre Güneş'in gök ekvatoruna paralel yaptığı günlük harekete ne denir?",
        imgSrc : "img/gunes_gunluk.png",
        choiceA : "Güneş'in Günlük Görünür Hareketi",
        choiceB : "Güneş'in Yıllık Görünür Hareketi",
        correct : "A"
    },
    {
        question : "6. Ay, Dünya etrafındaki dolanımını ~27,3 günde tamamlar. Bu süreye ne denir?",
        imgSrc : "img/yildiz_ayi.png",
        choiceA : "Kavuşum Ayı (Sinodik Ay)",
        choiceB : "Yıldız Ayı (Sideral Ay)",
        correct : "B"
    },
    {
        question : "7. Ay'ın birim zamanda taradığı açıya ne denir?",
        imgSrc : "img/acisal_hiz.png",
        choiceA : "Ay'ın Çizgisel Hızı",
        choiceB : "Ay'ın Açısal Hızı",
        correct : "B"
    },
    {
        question : "8. Ay'ın yörüngesinin ekliptiği güneyden kuzeye kestiği noktaya ne denir?",
        imgSrc : "img/cikis_dugumu.png",
        choiceA : "Çıkış Düğümü (Kuzey Düğümü)",
        choiceB : "İniş Düğümü (Güney Düğümü)",
        correct : "A"
    },
    {
        question : "9. Ay'ın yörüngesinin ekliptiği kuzeyden güneye kestiği noktaya ne denir?",
        imgSrc : "img/inis_dugumu.png",
        choiceA : "İniş Düğümü (Güney Düğümü)",
        choiceB : "Çıkış Düğümü (Kuzey Düğümü)",
        correct : "B"
    },
    {
        question : "10. Çıkış ve iniş düğümlerini birleştiren doğruya ne ad verilir?",
        imgSrc : "img/dugumler_cizgisi.png",
        choiceA : "Düğümler Çizgisi",
        choiceB : "Ekliptik Çizgisi",
        correct : "A"
    },
    {
        question : "11. Ay'ın Dünya etrafında dolanırken kendi ekseni etrafında da aynı sürede dönmesine ne denir?",
        imgSrc : "img/gelgit_kilidi.png",
        choiceA : "Gelgit Kilidi (Senkron Rotasyon)",
        choiceB : "Yörünge Rezonansı",
        correct : "A"
    },
    {
        question : "12. Ay'ın Dünya'dan görünen şekillerine ne denir?",
        imgSrc : "img/ay_evreleri.png",
        choiceA : "Ay'ın Açısal Konumları",
        choiceB : "Ay'ın Evreleri (Fazları)",
        correct : "B"
    },
    {
        question : "13. Ardışık iki Yeni Ay arasında geçen ~29,5 günlük süreye ne denir?",
        imgSrc : "img/kavusum_ayi.png",
        choiceA : "Kavuşum Ayı (Sinodik Ay)",
        choiceB : "Yıldız Ayı (Sideral Ay)",
        correct : "A"
    },
    {
        question : "14. Dünya, Güneş ile Ay'ın arasına girdiğinde Ay'ın gölgede kalması olayına ne denir?",
        imgSrc : "img/ay_tutulmasi.png",
        choiceA : "Güneş Tutulması",
        choiceB : "Ay Tutulması",
        correct : "B"
    },
    {
        question : "15. Ay'ın Güneş'i tamamen örttüğü tutulmaya ne denir?",
        imgSrc : "img/tam_gunes_tutulmasi.png",
        choiceA : "Parçalı Güneş Tutulması",
        choiceB : "Tam Güneş Tutulması",
        correct : "B"
    },
    {
        question : "16. Ay'ın Güneş'i tamamen örtemediği, Güneş'in halka şeklinde görüldüğü tutulmaya ne denir?",
        imgSrc : "img/halkali_gunes.png",
        choiceA : "Halkalı Güneş Tutulması",
        choiceB : "Tam Güneş Tutulması",
        correct : "A"
    },
    {
        question : "17. Ay'ın Güneş'i kısmen örttüğü tutulmaya ne denir?",
        imgSrc : "img/parcali_gunes.png",
        choiceA : "Halkalı Güneş Tutulması",
        choiceB : "Parçalı Güneş Tutulması",
        correct : "B"
    },
    {
        question : "18. Güneş'in günlük görünür hareketi sırasında gündüz izlediği yörüngeye ne ad verilir?",
        imgSrc : "img/gunduz_yayi.png",
        choiceA : "Gündüz Yayları",
        choiceB : "Gece Yayları",
        correct : "A"
    },
    {
        question : "19. Güneş'in yıl boyunca gök kürede izlediği büyük çembere ne ad verilir?",
        imgSrc : "img/ekliptik.png",
        choiceA : "Gök Ekvatoru",
        choiceB : "Ekliptik",
        correct : "B"
    },
    {
        question : "20. Güneş'in günlük görünür hareketi sırasında gece izlediği yörüngeye ne ad verilir?",
        imgSrc : "img/gece_yayi.png",
        choiceA : "Gece Yayları",
        choiceB : "Gündüz Yayları",
        correct : "A"
    }
];
	
	
	


// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 90; // 90 s
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
    

    if (scorePerCent < 85) {
        var audio = new Audio('img/basaramadim-.mp3');
        audio.play();
    }
    if (scorePerCent > 85) {
        var audio = new Audio('img/rasputin.mp3');
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
        counter.innerHTML = (90-count)+" saniye"    ;
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
















