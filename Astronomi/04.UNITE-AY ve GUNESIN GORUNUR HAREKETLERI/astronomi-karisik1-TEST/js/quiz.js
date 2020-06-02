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
        question : "Güneş sistemimizdeki en büyük gezegen?",
        imgSrc : "img/jupiter.png",
        choiceA : "Satürn",
        choiceB : "Venüs",
        choiceC : "Dünya",
		choiceD : "Jüpiter",
		correct : "D"
    }, {
        question : "Merkezlerinde çekirdek (nükleer) tepkimeleri ile hidrojeni helyuma dönüştürerek enerji üreten ve uzaya salan yoğun plazma küresi?",
        imgSrc : "img/supergiant.png",
        choiceA : "Nebula",
        choiceB : "Karadelik",
        choiceC : "Yıldız",
		choiceD :  "Gezegen", 
		correct : "C"
		
    },	{
        question : "Uzayda sabit bir noktadan eşit uzaklıktaki noktaların oluşturduğu geometrik cisme denir. ",
        imgSrc :  "img/sphere.png",
        choiceA : "Yıldız" ,
        choiceB : "Küre" ,
        choiceC : "Karadelik" ,
		choiceD :  "Süpernova" ,
		correct : "B"
		
    },{
        question : "Görünür ışık için dalga boyu en küçük olan renk? ",
        imgSrc : "img/emspek.png",
        choiceA : "Mor",
        choiceB : "Mavi",
        choiceC : "Yeşil",
		choiceD : "Kırmızı",
		correct : "A"
    }, {
        question : "Dünya ve Güneş merkezi arasındaki ortalama uzaklığın kısaltmasına denir?",
        imgSrc : "img/abbirimi.png",
        choiceA : "AB",
        choiceB : "Parsek",
        choiceC : "Işık Yılı",
		choiceD : "149600000 km",
		
        correct : "A"
    }, {
        question : "Çekim alanı her türlü maddesel oluşumun ve ışınımın kendisinden kaçmasına izin vermeyecek derecede güçlü olan, kozmik gök cismine ne denir?",
        imgSrc : "img/karadelik.png",
        choiceA : "Yıldız",
        choiceB : "Nebula",
        choiceC : "Karadelik",
		choiceD : "Süpernova",
		
        correct : "C"
    }, {
        question : "Görünür ışık için dalga boyu en büyük olan renk? ",
        imgSrc : "img/emspek.png",
        choiceA : "Kırmızı",
        choiceB : "Yeşil",
        choiceC : "Mavi",
		choiceD : "Mor",
		
        correct : "A"
    }, {
        question : "Güneş sisteminde etrafındaki halkaların güzelliğiyle bilinen gezegen?",
        imgSrc : "img/saturn.png",
        choiceA : "Venüs",
        choiceB : "Satürn",
        choiceC : "Merkür",
		choiceD : "Uranüs",
		
        correct : "B"
    },   	{
        question : "Dünya üzerinde Ekvatora paralel çizilen çemberlere denir?",
        imgSrc : "img/enlemboylam.png",
        choiceA : "Uçlak",
        choiceB : "Zenit",
        choiceC : "Boylam",
		choiceD : "Enlem",
		
        correct : "D"
    },
	
	
	
	
	
	
	
	
	{
        question : "Uzayda bulunan hidrojen ve helyum gibi gazlar ile tozlardan oluşmuş büyük ölçekli bulutlara denir?",
        imgSrc : "img/nebula.png",
        choiceA : "Karadelik",
        choiceB : "Yıldız",
        choiceC : "Bulutsu",
		choiceD : "Süpernova",
		
        correct : "C"
    },{
        question : "Güneşin görünür yıllık hareketinde 21 Mart ta bulunduğu noktanın ismi?",
        imgSrc : "img/burctakimyildizlari.png",
        choiceA : "Boğa",
        choiceB : "Balık",
        choiceC : "Koç",
		choiceD : "Kova",
		
        correct : "C"
    },{
        question : "Uçlak kelimesinin eş anlamlısı denir?",
        imgSrc : "img/kutuplar.png",
        choiceA : "Kutup",
        choiceB : "Zenit",
        choiceC : "Boylam",
		choiceD : "Enlem",
		
        correct : "A"
    },{
        question : "Gök Ada kelimesinin eşanlamısıdır? ",
        imgSrc : "img/galaxy.png",
        choiceA : "Nebula",
        choiceB : "Güneş Sistemi",
        choiceC : "Yıldız",
		choiceD : "Galaksi",
		
        correct : "D"
    },{
        question : "Güneşe en yakın gezegendir? ",
        imgSrc : "img/mercur.png",
        choiceA : "Venüs",
        choiceB : "Merkür",
        choiceC : "Neptün",
		choiceD : "Dünya",
		
        correct : "B"
    },{
        question : "Dünya üzerindeki bir gözlemcinin bulunduğu noktada çekül doğrultusuna dik olan düzleme denir?",
        imgSrc : "img/guneshareket.png",
        choiceA : "Eşlek",
        choiceB : "Tutulum",
        choiceC : "Çevren",
		choiceD : "Gün Yayı",
		
        correct : "C"
    },{
        question : "Çekül doğrultusunun gök küresini gözlemcinin başı doğrultusunda kestiği noktaya denir?",
        imgSrc : "img/zenitnadir.png",
        choiceA : "Öğlen çemberi",
        choiceB : "Çekül(düşey)",
        choiceC : "Nadir(ayakucu)",
		choiceD : "Zenit(başucu)",
		
        correct : "D"
    },{
        question : "Güneş sistemimizde <b>özkütlesi </b> en büyük olan bir gezegen? ",
        imgSrc : "img/gezegenler.png",
        choiceA : "Jüpiter",
        choiceB : "Venüs",
        choiceC : "Dünya",
		choiceD : "Mars",
		
        correct : "C"
    },
	
	
	
	
	
	{
        question : "Günlük çemberin çevrenin üstünde kalan parçasına denir?",
        imgSrc : "img/kutupyildizi.png",
        choiceA : "Gece yayı",
        choiceB : "Zenit",
        choiceC : "Nadir",
		choiceD : "Gün yayı",
		
        correct : "D"
    },{
        question : "Güneşe yakınlıkta ikinci sırada olan gezegen? ",
        imgSrc : "img/sun.png",
        choiceA : "Neptün",
        choiceB : "Merkür",
        choiceC : "Dünya",
		choiceD : "Venüs",
		
        correct : "D"
    },{
        question : "Dünya üzerinde kutuplardan geçen düzlemlerin yer yuvarlağı ile arakesitlerine denir?",
        imgSrc : "img/sunrays.png",
        choiceA : "Çevren",
        choiceB : "Gün Yayı",
        choiceC : "Boylam",
		choiceD : "Enlem",
		
        correct : "C"
    },{
        question : "Dünya'nın dönme ekseninin uzantısının gök küresini güneyde kestiği varsayılan noktaya denir?",
        imgSrc : "img/gokuclaklari.png",
        choiceA : "Çevren Düzlemi",
        choiceB : "Güney Gök Uçlağı ",
        choiceC : "Astronomik Ufuk",
		choiceD : "Kuzey Gök Uçlağı",
		
        correct : "B"
    },{
        question : "Güneş sistemindeki en yüksek dağa  sahip olan gezegen?",
        imgSrc : "img/olympus.png",
        choiceA : "Jüpiter",
        choiceB : "Dünya",
        choiceC : "Satürn",
		choiceD : "Mars",
		
        correct : "D"
    },{
        question : "Üzerine düşen tüm ışınım enerjisini soğuran yani ışığı hiç yansıtmayan cisimlerdir? ",
        imgSrc : "img/tenor2-400.gif",
        choiceA : "Kara delik",
        choiceB : "Kara cisim",
        choiceC : "Nebula",
		choiceD : "Plazma",
		
        correct : "B"
    },{
        question : "Yıldızların ana  enerji kaynağı nedir?",
        imgSrc : "img/wormhole.png",
        choiceA : "Karbon",
        choiceB : "Helyum",
        choiceC : "Hidrojen",
		choiceD : "Oksijen",
		
        correct : "C"
    },{
        question : "Dünya'nın Ekvator düzlemi ile gök küresinin ara kesitine ne denir?",
        imgSrc : "img/gokeslegi.png",
        choiceA : "Gök Eşleği",
        choiceB : "Baş ucu noktası(Zenit)",
        choiceC : "Coğrafi kon düzeneği",
		choiceD : "Beyaz cüce",
		
        correct : "A"
    },
	
	
	{
        question : "Dünya'nın dönme ekseninin uzantısının gök küresini kuzeyde kestiği varsayılan noktaya denir",
        imgSrc : "img/gokeslegi.png",
        choiceA : "Kuzey Gök Uçlağı",
        choiceB : "Baş ucu noktası(Zenit)",
        choiceC : "Coğrafi kon düzeneği",
		choiceD : "Güney Gök Uçlağı ",
		
        correct : "A"
    },
	
	{
        question : "Yerküre üzerinde coğrafi yerlerin konumlarını belirlemek için kullanılan kon düzeneğine denir?",
        imgSrc : "img/wormhole2.png",
        choiceA : "Gök Eşleği",
        choiceB : "Baş ucu noktası(Zenit)",
        choiceC : "Göksel kon düzeneği",
		choiceD : "Coğrafi Kon Düzeneği",
		
        correct : "D"
    },
	
	

	
	{
        question : "Dünya'daki biyolojik yaşam için gerekli olan elementler hangi olay sonucu oluşmuştur? ",
        imgSrc : "img/supernova.png",
        choiceA : "Big Bang(Büyük Patlama)",
        choiceB : "Baş ucu noktası(Zenit)",
        choiceC : "Süper nova patlaması",
		choiceD : "Coğrafi Kon Düzeneği",
		
        correct : "C"
    },
	
	
	
	
		{
        question : "Güneş evriminin sonunda neye dönüşür?",
        imgSrc : "img/anakolyildizi.png",
        choiceA : "Kızıl dev",
        choiceB : "Beyaz cüce",
        choiceC : "Nötron yıldızı",
		choiceD : "Kara delik",
		
        correct : "B"
    },
	
	
	
		{
        question : "Çevren düzleminin bir başka ismidir?",
        imgSrc : "img/ufuklar.png",
        choiceA : "Ufuk Düzlemi",
        choiceB : "Gece çemberi",
        choiceC : "Astronomik düzlem",
		choiceD : "Zenit",
		
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
    

	if (scorePerCent < 60 ) {
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
















