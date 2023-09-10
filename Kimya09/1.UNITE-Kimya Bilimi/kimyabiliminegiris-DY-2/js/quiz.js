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
        question : "1)	 Metallerden alaşım elde edilmesi ",
        imgSrc : "img/kimya1.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "B" 
    }, {
        question : "2)	Bir bileşiği oluşturan elementler arasındaki sabit oranın var olması. ",
        imgSrc : "img/kimya2.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "A"
    },	{
        question : "3) Kimyanın bilim dalı olmadan önceki hâli olarak kabul edilebilir.",
        imgSrc : "img/simyaci21.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "B"
    }, {
        question : "4)	Orta Asya’da yapılan araştırmalarda ........... yıllara ait çanak çömleklerle, çakmak taşından yapılmış topuz, mızrak gibi silahlar bulunmuştur. ",
        imgSrc : "img/canakcomlek1.png",
        choiceA : " MÖ 5000’li ",
        choiceB : " MÖ 8000’li ",
		correct : "B"
    }, 
	    {
        question : "5)	Bakır ve kalaydan yapılan tunç alaşım, ilk defa .... toplulukları tarafından kullanılmıştır. ",
        imgSrc : "img/canakcomlek2.png",
        choiceA : "Avrupa ",
        choiceB : "Orta Asya",
		correct : "B"
    }, {
        question : "6)	Sabun, ilk defa MÖ 4000’li yıllarda ..................  kullanılmıştır.",
        imgSrc : "img/soap2.png",
        choiceA : "Mezopotamya’da",
        choiceB : "Orta Asya'da",
		correct : "A"
    },	{
        question : "7)	MÖ 2300’lerde Simyacılar ...... bazı çiçeklerden parfüm üretilmiş ve cam şişelerde saklanmıştır. ",
        imgSrc : "img/parfume3.png",
        choiceA : "Çin’de",
        choiceB : "Avrupa'da (Fransa)",
		correct : "A"
    }, {
        question : "8)	.............’da MÖ 2800’lü yıllarda icat edilen araba, kavimlerinin göçlerinde önemli rol oynamıştır. ",
        imgSrc : "img/araba3.png",
        choiceA : "Orta Asya",
        choiceB : "Arabistan",
		correct : "A"
    },    {
        question : "9)	Mısır’da yer altı suları; kalsiyum bikarbonat, sodyum karbonat ve sodyum sülfat bakımından çok zengindir. Bu maddeler tuz olup bu tuzlardan oluşan karışıma .......  denir. ",
        imgSrc : "img/natron3.png",
        choiceA : "neft",
        choiceB : "natron",
		correct : "B"
    }, {
        question : "10)	Mısırlılar .......  yakarak kükürt dioksit gazını elde ediyor, daha sonra bu gazı kurutulmuş meyvelerin ağartılmasında kullanarak ağartılmış meyvelerin raf ömrünü uzatmışlardır.",
        imgSrc : "img/kukurtleme3.png",
        choiceA : "Karbonu(kömürü)",
        choiceB : "kükürdü ",
		correct : "B"
    }, {
        question : "11)	Mısır’da ......... yıllarda cam üretimi ve işlemeciliği yapılmıştır. ",
        imgSrc : "img/glassmaking3.png",
        choiceA : "MÖ 1370’li",
        choiceB : "MS 1370’li",
		correct : "A"
    }, {
        question : "12)	Mısır’da rahib ve simyacılar,   çok iyi nem çekici olduğundan mumyalama işleminde  ......  kullanılmıştır.  ",
        imgSrc : "img/natronlama3.png",
        choiceA : "natron ",
        choiceB : "kükürt",
		correct : "A"
    }, {
        question : "13)	 Yunan uygarlığında doğaya yaklaşım ........ felsefi inanca dayanır. ",
        imgSrc : "img/eskiyunan3.png",
        choiceA : "bir",
        choiceB : "iki",
		correct : "B"
    }, {
        question : "14)	Yunan uygarlığındaki felsefi düşüncelerden ilki  Epikuros (Epikur) ve Democritus (Demokritus) tarafından savunulan ....... düşüncedir. ",
        imgSrc : "img/eskiyunan4.png",
        choiceA : "idealist",
        choiceB : "maddeci",
		correct : "B"
    }, {
        question : "15)	Bunlardan ikincisi Platon ve Aristo tarafından savunulan ....... düşüncedir.  ",
        imgSrc : "img/eskiyunan4.png",
        choiceA : "idealist",
        choiceB : "maddeci",
		correct : "A"
    }, {
        question : "16)	Epikuros ve Democritus, tüm doğanın ..... adı verilen görünmeyen ve bölünemeyen çok küçük parçacıklardan oluştuğunu ileri sürmüşlerdir.",
        imgSrc : "img/eskiyunan5.png",
        choiceA : "elektron",
        choiceB : "atom",
		correct : "B"
    }, {
        question : "17)	Platon ve Aristo ise maddenin düşüncelerden ya da Platon’un savunduğuna göre ....... oluştuğunu ileri sürmüşlerdir. ",
        imgSrc : "img/eskiyunan6.png",
        choiceA : "protonlardan",
        choiceB : "elementlerden ",
		correct : "B"
    }, {
        question : "18)	Sicilyalı düşünür olan Empedokles (Empedokles) (MÖ 462-432) ilk defa ..... düşüncesini ortaya koydu",
        imgSrc : "img/eskiyunan7.png",
        choiceA : "Dört element",
        choiceB : "Arke",
		correct : "A"
    }, {
        question : "19)	 .....ilk defa İslam uygarlığında üretilmiş ve damıtma işleminde kullanılmıştır. ",
        imgSrc : "img/imbik1.png",
        choiceA : "İmbik  ",
        choiceB : "Fotometre",
		correct : "A"
    }, {
        question : "20)	.............., parfüm ve ilaç gibi maddelerin üretilmesinde kullanılmıştır. ",
        imgSrc : "img/imbik1.png",
        choiceA : "İmbik  ",
        choiceB : "Fotometre",
		correct : "A"
    }, {
        question : "21)	 .....  Çin, Hint, Mısır, Mezopotamya, Yunan, Orta Asya ve İslam uygarlıklarında insanların madde ile ilgili yüzyıllardır yaptığı keşifler ve buluşlar sayesinde gelişmiştir. ",
        imgSrc : "img/imbikkimya2.png",
        choiceA : "Kimya",
        choiceB : "Simya (alşimi)",
		correct : "A"
    } 
	
	
	
	
	








// 22 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















