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
// Yeni sorular listesi (İlk 25 Soru)
let questions = [
    {
        question : "1. Güneş sisteminde Güneş ile Dünya arasında hangi gezegenler bulunur?",
        imgSrc : "img/gunes_sistemi.png",
        choiceA : "Mars ve Jüpiter",
        choiceB : "Merkür ve Venüs",
        correct : "B"
    },
    {
        question : "2. Dünya’daki biyolojik yaşam için gerekli elementler (karbon, demir vb.) hangi olay sonucunda oluşmuştur?",
        imgSrc : "img/supernova.png",
        choiceA : "Süpernova patlamaları",
        choiceB : "Büyük Patlama (Big Bang)",
        correct : "A"
    },
    {
        question : "3. Görünür ışık spektrumunda dalga boyu en büyük olan renk hangisidir?",
        imgSrc : "img/isik_spektrumu.png",
        choiceA : "Mor",
        choiceB : "Kırmızı",
        correct : "B"
    },
    {
        question : "4. Nicolaus Copernicus’in astronomiye en önemli katkısı nedir?",
        imgSrc : "img/copernicus.png",
        choiceA : "Güneş merkezli evren modeli",
        choiceB : "Dünya merkezli evren modeli",
        correct : "A"
    },
    {
        question : "5. Astronomik sistemlerin küçükten büyüğe (kapsama) sıralaması hangisinde doğrudur?",
        imgSrc : "img/siralama.png",
        choiceA : "Dünya ⊂ Güneş Sistemi ⊂ Samanyolu",
        choiceB : "Güneş Sistemi ⊂ Dünya ⊂ Samanyolu",
        correct : "A"
    },
    {
        question : "6. Güneş sistemine en yakın yıldız olan Proxima Centauri'yi gözlemlediğimizde aslında onun ne kadar önceki hâlini görmüş oluruz?",
        imgSrc : "img/yildiz_uzaklik.png",
        choiceA : "4,2 yıl önceki",
        choiceB : "8 dakika önceki",
        correct : "A"
    },
    {
        question : "7. Samanyolu Galaksisi'nin tamamını gece gökyüzünde görebilir miyiz?",
        imgSrc : "img/samanyolu_gece.png",
        choiceA : "Evet, karanlık bir yerde tamamı görünür",
        choiceB : "Hayır, içinden baktığımız için sadece bir kısmını görürüz",
        correct : "B"
    },
    {
        question : "8. Güneş tutulmasında, Ay'ın Güneş'ten çok küçük olmasına rağmen onu tamamen örtebilmesinin nedeni nedir?",
        imgSrc : "img/gunes_tutulmasi.png",
        choiceA : "Açısal büyüklüklerinin (görünür çaplarının) neredeyse aynı olması",
        choiceB : "Ay'ın Güneş'e Dünya'dan daha yakın olması",
        correct : "A"
    },
    {
        question : "9. Güneş, şu anki evrim sürecinde hangi evrededir?",
        imgSrc : "img/gunes_anakol.png",
        choiceA : "Kırmızı Dev",
        choiceB : "Anakol (Main Sequence)",
        correct : "B"
    },
    {
        question : "10. Güneş sistemi dışında bize en yakın yıldız hangisidir?",
        imgSrc : "img/proxima.png",
        choiceA : "Proxima Centauri",
        choiceB : "Sirius",
        correct : "A"
    },
    {
        question : "11. Güneş, yaşam döngüsünün (evriminin) sonunda neye dönüşecektir?",
        imgSrc : "img/beyaz_cuce.png",
        choiceA : "Kara Delik",
        choiceB : "Beyaz Cüce",
        correct : "B"
    },
    {
        question : "12. Görünen evrenin sınırları teknoloji ile nasıl değişmektedir?",
        imgSrc : "img/evren_sinir.png",
        choiceA : "Sınırlarımız genişlemektedir",
        choiceB : "Sınırlarımız sabit kalmaktadır",
        correct : "A"
    },
    {
        question : "13. Einstein'ın teorilerine göre zaman mutlak mıdır?",
        imgSrc : "img/zaman.png",
        choiceA : "Evet, zaman her yerde aynı akar",
        choiceB : "Hayır, zaman görecelidir",
        correct : "B"
    },
    {
        question : "14. Güneş'in çekirdeğinde enerji üretimi sırasında hangi element neye dönüşür?",
        imgSrc : "img/fuzyon.png",
        choiceA : "Hidrojen Helyuma dönüşür",
        choiceB : "Helyum Karbona dönüşür",
        correct : "A"
    },
    {
        question : "15. Yıldızlar ilk olarak nasıl doğarlar?",
        imgSrc : "img/nebula.png",
        choiceA : "Gezegenlerin çarpışmasıyla",
        choiceB : "Gaz ve toz bulutlarının çökmesiyle",
        correct : "B"
    },
    {
        question : "16. Aşağıdakilerden hangisi yıldız oluşum sürecinin ilk aşamasıdır?",
        imgSrc : "img/yildiz_olusum.png",
        choiceA : "Gaz ve toz bulutlarının büzülmesi",
        choiceB : "Süpernova patlaması",
        correct : "A"
    },
    {
        question : "17. Çekirdek tepkimeleri başlamadan önceki 'yıldız taslağı'na ne ad verilir?",
        imgSrc : "img/protostar.png",
        choiceA : "Beyaz Cüce",
        choiceB : "Protostar",
        correct : "B"
    },
    {
        question : "18. Anakol evresindeki bir yıldızda 'Hidrostatik Denge' neyi ifade eder?",
        imgSrc : "img/hidrostatik.png",
        choiceA : "Kütle çekimi ile ışınım basıncının dengelenmesi",
        choiceB : "Yıldızın dönme hızı ile kütlesinin dengesi",
        correct : "A"
    },
    {
        question : "19. Güneş gibi bir yıldızın Anakol evresi yaklaşık ne kadar sürer?",
        imgSrc : "img/gunes_omur.png",
        choiceA : "10 Milyar Yıl",
        choiceB : "100 Milyon Yıl",
        correct : "A"
    },
    {
        question : "20. Bir yıldız 'Alt Dev' evresine geçtiğinde yapısında nasıl bir değişim olur?",
        imgSrc : "img/alt_dev.png",
        choiceA : "Yıldız tamamen büzülür ve ısınır",
        choiceB : "Merkez büzülürken dış katmanlar genişler ve soğur",
        correct : "B"
    },
    {
        question : "21. Kırmızı dev evresinde yıldızın rengi neden kırmızıya döner?",
        imgSrc : "img/kirmizi_dev.png",
        choiceA : "Yüzey sıcaklığı azaldığı için",
        choiceB : "Çekirdek sıcaklığı arttığı için",
        correct : "A"
    },
    {
        question : "22. Helyum anakol evresinde yıldızın merkezinde hangi yakıtın tepkimesi başlar?",
        imgSrc : "img/helyum_yanmasi.png",
        choiceA : "Hidrojen",
        choiceB : "Helyum",
        correct : "B"
    },
    {
        question : "23. Güneş kütlesindeki yıldızların evriminin en son aşaması nedir?",
        imgSrc : "img/son_evre.png",
        choiceA : "Nötron Yıldızı",
        choiceB : "Beyaz Cüce",
        correct : "B"
    },
    {
        question : "24. Büyük kütleli yıldızlar ömürlerini tamamlarken hangi şiddetli olay gerçekleşir?",
        imgSrc : "img/supernova_patlama.png",
        choiceA : "Süpernova patlaması",
        choiceB : "Helium parlaması",
        correct : "A"
    },
    {
        question : "25. Çok büyük kütleli yıldızların çökmesi sonucunda oluşabilecek, ışığın bile kaçamadığı gök cismi nedir?",
        imgSrc : "img/karadelik_olusum.png",
        choiceA : "Kara Delik",
        choiceB : "Gezegenimsi Bulutsu",
        correct : "A"
    }

	
// 10 Doğru/Yanlış Sorusu select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
	document.getElementById(runningQuestion).innerHTML = "D";
}

// answer is Wrong
function answerIsWrong(){
	document.getElementById(runningQuestion).innerHTML = " ";
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
	document.getElementById(runningQuestion).innerHTML = "Y";
}

 // score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    	if (scorePerCent < 85 ) {
		   var audio = new Audio('img/basaramadim-.mp3');
		   audio.play();
	     } 
		 
		 		 if (scorePerCent > 85 ) {
		   var audio = new Audio('img/Rasputin .mp3');
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
















