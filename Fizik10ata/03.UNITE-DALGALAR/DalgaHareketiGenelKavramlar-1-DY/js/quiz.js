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
        question : "1. Cisimlerin bir nokta etrafında, o noktaya eşit uzaklıktaki iki nokta arasında gidip gelme hareketine  ...........  denir.",
        imgSrc : "img/titresim1.png",
        choiceA : "dalga hareketi",
        choiceB : "titreşim hareketi",

		correct : "B"
    },     {
        question : "2. 	 Enerjinin, esnek bir ortamda titreşim hareketi ile iletilmesine ........... denir.",
        imgSrc : "img/esnekortam1.png",
        choiceA : "dalga hareketi",
        choiceB : "titreşim hareketi",

		correct : "A"
    }
	,	    {
        question : "3.  Bir dalga kaynağı tarafından, eşit zaman aralıklarında düzgün olarak oluşturulan dalgalara  ........... denir.",
        imgSrc : "img/periyodikdalga1.png",
        choiceA : "periyodik dalga",
        choiceB : "dalga boyu",

		correct : "A"
    },      {
        question : "4. 	Bir tam dalganın oluşum süresine  ...........	 denir.",
        imgSrc : "img/peryot2.png",
        choiceA : "frekans",
        choiceB : "periyot",

		correct : "B"
    },        {
        question : "5. Periyot ........... harfi ile gösterilir ve birimi saniye dir.",
        imgSrc : "img/peryot2.png",
        choiceA : "T",
        choiceB : "f",

		correct : "A"
    },
	
		
	
	{
        question : "6.   1 s'de (saniyede) oluşturulan dalga sayısına ...........  denir.",
        imgSrc : "img/peryot2.png",
        choiceA : "frekans",
        choiceB : "periyot",

		correct : "A"
    },	    {
        question : "7.  Frekans ........... harfi ile gösterilir ve birimi  1/s = Hz (Hertz) dir.",
        imgSrc : "img/peryot2.png",
        choiceA : "T",
        choiceB : "f",

		correct : "B"
    } , 
 	     
 	    {
        question : "8. Periyodu T=1/3 saniye olan bir kaynağın frekansı ........... Hertz'dir.",
        imgSrc : "img/peryot2.png",
        choiceA : "3",
        choiceB : "4",

		correct : "A"
    } 
	, 
 	    {
        question : "9. Frekansı f=1/5 Hz olan bir kaynağın periyodu T= .... s'dir. (saniyedir)",
        imgSrc : "img/peryot2.png",
        choiceA : "6",
        choiceB : "5",

		correct : "B"
    } 
	, 
 	    {
        question : "10. Bir kaynaktan çıkan  dalgalar ........... oluşturur.",
        imgSrc : "img/periyodikdalga1.png",
        choiceA : "tepe ve çukurlar",
        choiceB : "tepeler",

		correct : "A"
    } 
	, 
 	    {
        question : "11. Ardışık iki dalga tepesi ya da ardışık iki dalga çukuru arasındaki uzaklığa ....... denir.",
        imgSrc : "img/dalgaboyu1.png",
        choiceA : "genlik",
        choiceB : "dalga boyu",

		correct : "B"
    } 
	, 
 	    {
        question : "12. Dalga üzerindeki bir noktanın denge konumuna uzaklığına ....... denir.",
        imgSrc : "img/uzanim1.png",
        choiceA : "uzanım",
        choiceB : "genlik",

		correct : "A"
    } 
	, 
 	    {
        question : "13.  Dalga çukuru ya da dalga tepesinin denge konumuna maksimum olan uzaklığına ....... denir",
        imgSrc : "img/genlik1.png",
        choiceA : "uzanım",
        choiceB : "genlik",

		correct : "B"
    } 
	, 
 	    {
        question : "14. Dalganın birim zamandaki yer değiştirmesine  ....... denir, v harfi ile gösterilir",
        imgSrc : "img/dalgahizi1.png",
        choiceA : "hız",
        choiceB : "uzanım",

		correct : "A"
    } 
	, 
 	    {
        question : "15. Şekilde bir bölümü görünen periyodik dalganın genliği a, dalga boyu λ'dır.Buna göre, dalganın genliği a kaç  birimdir? (Bölmeler eşit aralıklıdır.)",
        imgSrc : "img/soruresim1.png",
        choiceA : "2 birim",
        choiceB : "4 birim",

		correct : "A"
    } 
	
	, 
 	    {
        question : "16. Şekilde bir bölümü görünen periyodik dalganın genliği a, dalga boyu λ'dır.Buna göre, dalganın dalga boyu  λ kaç birimdir? (Bölmeler eşit aralıklıdır.)",
        imgSrc : "img/soruresim1.png",
        choiceA : "8 birim",
        choiceB : "4 birim",

		correct : "A"
    } 
	, 
 	    {
        question : "17. Düşey kesiti şekildeki gibi olan dalga leğeninde bulunan kaynak, periyodik su dalgaları oluşturmaktadır. Dalga leğeninin boyu 60 cm olduğuna göre, dalgaların dalga boyu kaç cm'dir?",
        imgSrc : "img/soruresim2.png",
        choiceA : "λ=L/4=60/4=15 cm",
        choiceB : "2λ=60 ==> λ=30 cm",

		correct : "B"
    } 
	, 
 	    {
        question : "18.  İlerleyebilmesi için maddesel bir ortama gereksinim duyan dalgalara ......... denir.",
        imgSrc : "img/ornek2.png",
        choiceA : "mekanik dalga",
        choiceB : "elektromanyetik (EM) dalga",

		correct : "A"
    } 
	
	, 
 	    {
        question : "19.  Yay, su, ses ve deprem dalgaları mekanik dalgadır.",
        
        imgSrc : "img/dusun.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    } 

, 
 	    {
        question : "20. Yüklü parçacıkların ivmeli hareketleri sonucunda oluşan dalgalardır. İlerleyebilmesi için maddesel bir ortama ihtiyaç duymazlar, boşlukta da yayılabilirler.",
        
        imgSrc : "img/EM-Wave.gif",
        choiceA : "mekanik dalga",
        choiceB : "elektromanyetik (EM) dalga",

		correct : "B"
    } 
, 
 	    {
        question : "21. Titreşim doğrultusu yayılma doğrultusuna dik olan dalgalara ......... denir.",
        
        imgSrc : "img/eninedalga1.png",
        choiceA : "enine dalga",
        choiceB : "boyuna dalga",

		correct : "A"
    } 
, 
 	    {
        question : "22. Titreşim doğrultusu yayılma doğrultusuna paralel olan dalgalara ......... denir.",
        
        imgSrc : "img/boyunadalga1.png",
        choiceA : "enine dalga",
        choiceB : "boyuna dalga",

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
		 
		 if (scorePerCent > 90 ) {
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
















