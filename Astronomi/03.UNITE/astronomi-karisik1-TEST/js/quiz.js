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
        question : "1. Bir yıldızın doğum hızını arttıran etken nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Çekirdekteki füzyon reaksiyonlarının şiddeti",
        choiceB : "Şok dalgaları ve çevresel basınç",
        correct : "B"
    },
    {
        question : "2. Yıldız doğum bölgelerinde neden yoğun karışım vardır?",
        imgSrc : "img/idea.png",
        choiceA : "Aynı sıcaklıktaki gazların birikmesi",
        choiceB : "Farklı sıcaklık ve basınçlar gazın çökmesini tetikler",
        correct : "B"
    },
    {
        question : "3. Kütlesi Güneş’e yakın bir yıldız neden Süpernova patlaması yapmaz?",
        imgSrc : "img/idea.png",
        choiceA : "Hidrojen yakıtı çok önce tükenir",
        choiceB : "Çekirdek kütlesi kritik eşiğe (Chandrasekhar Limiti) ulaşmaz",
        correct : "B"
    },
    {
        question : "4. Kırmızı dev aşaması sırasında dış katmanlar neden genişler?",
        imgSrc : "img/idea.png",
        choiceA : "Çekirdeğin soğuyarak gazları genletmesi",
        choiceB : "Çekirdek büzülür, ısınır ve çekirdek çevresindeki katmanda hidrojen füzyonu başlar",
        correct : "B"
    },
    {
        question : "5. Büyük kütleli yıldızlar neden Süpernova patlaması yapar?",
        imgSrc : "img/idea.png",
        choiceA : "Dış kabuklardaki helyumun ani olarak yanması",
        choiceB : "Çekirdek kütlesi kritik seviyeye ulaşır ve demir çekirdek çöker",
        correct : "B"
    },
    {
        question : "6. Süpernova patlaması sonrası oluşan bir kalıntı aşağıdakilerden hangisi DEĞİLDİR?",
        imgSrc : "img/idea.png",
        choiceA : "Nötron yıldızı",
        choiceB : "Gezegen",
        correct : "B"
    },
    {
        question : "7. Büyük kütleli yıldızlarda ömrün kısa olmasının nedeni nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Yakıtı (hidrojeni) çok daha hızlı tüketmeleri",
        choiceB : "Çevrelerinden yeterli miktarda gaz toplayamamaları",
        correct : "A"
    },
    {
        question : "8. Kırmızı dev aşamasında yıldızın yarıçapı neden artar?",
        imgSrc : "img/idea.png",
        choiceA : "Çekirdek dışındaki kabukta hidrojen yanmasının başlamasıyla oluşan yüksek ışıma basıncı",
        choiceB : "Yıldızın manyetik alanının zayıflayarak yerçekiminin azalması",
        correct : "A"
    },
    {
        question : "9. Çok büyük kütleli yıldızların sonu genellikle ne olur?",
        imgSrc : "img/idea.png",
        choiceA : "Beyaz cüce",
        choiceB : "Kara delik",
        correct : "B"
    },
    {
        question : "10. Güneş kütlesindeki bir yıldızın son evresi genellikle nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Nötron yıldızı",
        choiceB : "Beyaz cüce",
        correct : "B"
    },
    {
        question : "11. Protostar evresinde enerji kaynağı nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Kütleçekimsel büzülme",
        choiceB : "Helyum füzyonu",
        correct : "A"
    },
    {
        question : "12. Büyük kütleli yıldızlarda karbon füzyonundan sonra hangi süreç gelir?",
        imgSrc : "img/idea.png",
        choiceA : "Demir füzyonu",
        choiceB : "Neon ve Oksijen füzyonu",
        correct : "B"
    },
    {
        question : "13. Bir yıldızın tayfındaki (ışığındaki) kara cisim ışıması özelliği, onun hangi fiziksel parametresini doğrudan belirler?",
        imgSrc : "img/idea.png",
        choiceA : "Yıldızın kütlesi",
        choiceB : "Yüzey sıcaklığı",
        correct : "B"
    },
    {
        question : "14. Kırmızı dev evresinde çekirdekte hangi element yanar?",
        imgSrc : "img/idea.png",
        choiceA : "Helyum",
        choiceB : "Karbon",
        correct : "A"
    },
    {
        question : "15. Bir yıldızın ömrünü belirleyen temel faktör nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Çevresindeki gaz yoğunluğu",
        choiceB : "Kütlesi",
        correct : "B"
    },
    {
        question : "16. Helyum füzyonunda hangi element oluşur?",
        imgSrc : "img/idea.png",
        choiceA : "Oksijen",
        choiceB : "Karbon",
        correct : "B"
    },
    {
        question : "17. Moleküler bulutun parçalanarak yıldız oluşturmaya başlaması hangi kritere bağlıdır?",
        imgSrc : "img/idea.png",
        choiceA : "Jeans Kütlesinin aşılması",
        choiceB : "Manyetik alanın tamamen kaybolması",
        correct : "A"
    },
    {
        question : "18. Bir yıldızın tayfındaki kayma (Doppler etkisi) hangi özelliği belirlemede kullanılır?",
        imgSrc : "img/idea.png",
        choiceA : "Yıldızın yüzey sıcaklığı",
        choiceB : "Uzaklaşma/Yakınlaşma hızı (Radyal hız)",
        correct : "B"
    },
    {
        question : "19. Beyaz cücenin dengede kalmasını sağlayan kuvvet nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Elektron degenere (yozlaşmış) basıncı",
        choiceB : "Çekirdekteki helyum füzyonunun yarattığı basınç",
        correct : "A"
    },
    {
        question : "20. Bir moleküler bulutun parçalanma sürecinde Jeans Kütlesi azalırsa bunun temel nedeni nedir?",
        imgSrc : "img/idea.png",
        choiceA : "Sıcaklığın muazzam şekilde düşmesi",
        choiceB : "Yoğunluğun artması",
        correct : "B"
    },
    {
        question : "21. Bir yıldızın ana kol ömrü yaklaşık olarak hangi nicelikle ters orantılıdır?",
        imgSrc : "img/idea.png",
        choiceA : "Kütle (veya Parlaklık)",
        choiceB : "Yarıçap",
        correct : "A"
    },
    {
        question : "22. Elektron dejenerasyon basıncı hangi fiziksel ilkeye bağlıdır?",
        imgSrc : "img/idea.png",
        choiceA : "Coulomb Yasası",
        choiceB : "Pauli Dışlama İlkesi",
        correct : "B"
    },
    {
        question : "23. Kara cisim ışıması yasalarına göre bir yıldızın yüzey sıcaklığı 2 katına çıkarılırsa, birim yüzeyden yayılan toplam enerji nasıl değişir?",
        imgSrc : "img/idea.png",
        choiceA : "4 kat artar",
        choiceB : "16 kat artar",
        correct : "B"
    },
    {
        question : "24. Eddington Limitine ulaşan bir yıldızda hangi durum gerçekleşir?",
        imgSrc : "img/idea.png",
        choiceA : "Çekirdekte demir oluşumu durur",
        choiceB : "Işıma basıncı yer çekimine denk olacak kadar artar (yıldız kararsızlaşır)",
        correct : "B"
    },
    {
        question : "25. Bir yıldızın çekirdeğinde demir (Fe) oluşmaya başladığında enerji üretimi neden durur?",
        imgSrc : "img/idea.png",
        choiceA : "Demirin füzyonu enerji açığa çıkarmaz, aksine enerji tüketir (endotermik reaksiyon)",
        choiceB : "Demir elementi ışınımı tamamen bloke eder",
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
    

	if (scorePerCent < 80 ) {
		var audio = new Audio('img/basaramadim-.mp3');
		 audio.play();

	}
	if (scorePerCent > 80 ) {
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
















