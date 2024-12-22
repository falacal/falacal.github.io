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
        question : "1. Uzayı, uzayda bulunan tüm gök cisimlerini, zamanı ve enerjiyi kapsayan yapıya ........... denir.",
        imgSrc : "img/evren.png",
        choiceA : "Galaksi",
        choiceB : "Evren",
		correct : "B"
    },     {
        question : "2. Gök cisimlerinden kopmuş küçük kaya parçalarına ........... denir.",
        imgSrc : "img/goktasi.png",
        choiceA : "Meteor  ",
        choiceB : "Gök taşı",
		correct : "B"
    },	    {
        question : "3. Atmosfere giren göktaşlarına ...... denir. Genellikle kum tanesiyle çakıl taşı arasındaki büyüklüklerde olan meteorlar atmosferde yanar. Yanma sırasında arkalarında parlak bir iz oluştuğu için yıldızlarla bir ilgisi olmadığı halde bu olaya yıldız kayması da denir.",
        imgSrc : "img/meteor.png",
        choiceA : "Meteor  ",
        choiceB : "Gök taşı",
		correct : "A"
    },      {
        question : "4. Kimi göktaşları ise Dünyanın atmosferine girdikten sonra tamamen yanarak yok olmaz. Yeryüzüne ulaşıp yere düşen bu göktaşlarına ..... adı verilir.",
        imgSrc : "img/meteorit.png",
        choiceA : "Meteor  ",
        choiceB : "Meteorit",
		correct : "B"
    },        {
        question : "5. Evrende kütlesi olmasına rağmen ışık yaymayan, bu nedenle de gözlem araçlarıyla doğrudan gözlenemeyen yapıya ........ denir",
        imgSrc : "img/karanlik.png",
        choiceA : "Nebula",
        choiceB : "Karanlık madde",
		correct : "B"
    },		
	
	{
        question : "6. Samanyolu Gök Adasının disk bileşenlerinin yanında ........ kolları da bulunur.",
        imgSrc : "img/samanyolu.png",
        choiceA : "Spiral",
        choiceB : "Elips",
		correct : "A"
    },	    {
        question : "7. Yer, Güneş sisteminde içten dışa doğru ........ sıradaki gezegendir.",
        imgSrc : "img/dunya.png",
        choiceA : "Birinci",
        choiceB : "Üçüncü",
		correct : "B"
    } , 
 	     
 	    {
        question : "8. Merkür karasal gezegenler grubunda yer alırken Neptün ....... gezegenler sınıfında yer alır.",
        imgSrc : "img/neptun.png",
        choiceA : "Dev gaz",
        choiceB : "Cüce ",
		correct : "A"
    } 
	, 
 	    {
        question : "9. Kepler in 1. Yasasına göre gezegenleri odaklarından birinde Güneşin bulunduğu ....... yörüngelerde dolanır.",
        imgSrc : "img/eliptik.png",
        choiceA : "Dairesel",
        choiceB : "Eliptik",
		correct : "B"
    } 
	, 
 	    {
        question : "10. Samanyolu Gök Adasının merkezinde süper kütleli bir ........ vardır.",
        imgSrc : "img/karadelik.png",
        choiceA : "Kara delik",
        choiceB : "Kızıl dev",
		correct : "A"
    } 
	, 
 	    {
        question : "11. Astronomide yıldızların görünen parlaklıkları ....... ölçeği ile karşılaştırılır.",
        imgSrc : "img/kadir.png",
        choiceA : "Kandela",
        choiceB : "Kadir",
		correct : "B"
    } , 
 	    {
        question : "12. Güneş, evriminin sonunda önce genişleyip kızıl dev haline gelecek merkür, venüs ve dünyayı içine alacak daha sonra içe doğru çöküp ve ........ olacaktır.",
        imgSrc : "img/gunesevrim.png",
        choiceA : "Beyaz Cüce",
        choiceB : "Kara delik",
		correct : "A"
    } 
	, 
 	    {
        question : "13. Uzaklığı belirlenmek istenen bir cismin, iki farklı noktadan gözlemlendiğinde arka plandaki cisimlere göre değişen konumunun açı cinsinden karşılığına ..... denir",
        imgSrc : "img/paralaks.png",
        choiceA : "Işık açısı",
        choiceB : "Paralaks açısı",
		correct : "B"
    } , 
 	    {
        question : "14. Bir gök cisminin .........  olarak nitelendirilmesi için <br> I.   küresel yapıda olması <br> II.  güneş etrafında yörünge hareketi yapması <br> özelliklerini taşıması gerekir.",
        imgSrc : "img/gezegen.png",
        choiceA : "Uydu",
        choiceB : "Gezegen",
		correct : "B"
    } 
	, 
 	    {
        question : "15. Samanyolu gök adasında Güneş sisteminin içinde bulunduğu sarmal kolun adı nedir?",
        imgSrc : "img/orion.png",
        choiceA : "Avcı(Orion)",
        choiceB : "Andromeda",
		correct : "A"
    } , 
 	    {
        question : "16. Güneş Merkezli Evren Modelini ilk kez ortaya koyan astronom kimdir?",
        imgSrc : "img/gunesmerkezli.png",
        choiceA : "Galile",
        choiceB : "Nicolaus Copernicus",
		correct : "A"
    } , 
 	    {
        question : "17. Güneşe en yakın gezegen?",
        imgSrc : "img/merkur.png",
        choiceA : "Merkür",
        choiceB : "Venüs",
		correct : "A"
    } , 
 	    {
        question : "18. Aşağıdakilerden hangisi cüce gezegendir?",
        imgSrc : "img/pluton.png",
        choiceA : "Jüpiter",
        choiceB : "Plüton",
		correct : "B"
    } , 
 	    {
        question : "19. Bu modele göre evrende genişlemeyi durdurmaya fazlasıyla yetecek kütle vardır. Evrendeki kütle çekimi kuvveti önce genişlemeyi yavaşlatıp durdurur sonra da evrenin kendi üstüne çökmesine neden olur. Bu modele ...... modeli denir.",
        imgSrc : "img/kapalikevren.png",
        choiceA : "Kapalı evren",
        choiceB : "Açık evren",
		correct : "A"
    } , 
 	    {
        question : "20. Bu modele göre evrende evrende genişlemeyi durdurmaya yetecek kadar kütle yoktur. Evrenin genişleme hızı başlangıçta artarken sonra sabit kalır. Böylece evren sabit bir hızla sonsuza kadar genişler. Bu modele ...... modeli denir.",
        imgSrc : "img/acikevren.png",
        choiceA : "Kapalı evren",
        choiceB : "Açık evren",
		correct : "B"
    } 
, 
 	    {
        question : "21. Bu modelde evrende genişlemeyi durdurmaya ancak yetecek kadar kütle vardır. Evrenin genişleme hızı önce artar sonra sabit kalır ve sonra da gitgide azalır. Bu modele ...... modeli denir.",
        imgSrc : "img/duzevren.png",
        choiceA : "Paralel evren",
        choiceB : "Düz evren",

		correct : "B"
    } 
, 
 	    {
        question : "22. Mmıknatısal kutuplarından elektromanyetik ışınım yayan, oldukça mıknatıslanmış, dönen nötron yıldızlarına denir. Bu ışınım, yalnızca bir ışın Dünyaya doğrultulduğunda gözlemlenebilir",
        imgSrc : "img/Lightsmall-optimised.gif",
        choiceA : "Karadelik",
        choiceB : "Pulsar veya atarca",
		correct : "B"
    } , 
 	    {
        question : "23. Dünyadan Güneşe olan mesafe olarak kabul edilen bir uzunluk birimidir.",
        imgSrc : "img/au.png",
        choiceA : "Işık yılı",
        choiceB : "AU (Astronomik birim)",
		correct : "B"
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
















