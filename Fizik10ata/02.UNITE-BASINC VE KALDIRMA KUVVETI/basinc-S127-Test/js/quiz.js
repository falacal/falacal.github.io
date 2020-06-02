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
        question : "1.	Atmosferin, ağırlığından dolayı birim yüzeye uyguladığı kuvvete .......... denir. ",
        imgSrc : "img/acikhavabasinci2.png",
        choiceA : "kapalı kap gaz basıncı",
        choiceB : "açık hava basıncı",
        choiceC : "rutubet",
	    choiceD : "rüzgar",
	    correct : "B"
    }, {
        question : "2.	Açık hava basıncını ilk defa .......................... ölçmüştür. ",
        imgSrc : "img/toricelli.png",
        choiceA : "Torricelli",
        choiceB : "Niels Bohr",
        choiceC : "de Broglie",
	    choiceD : "Isac Newton",
	    correct : "A"
    },	{
        question : "3.	Basınç farkından yararlanarak deniz derinliğini ölçen aletlere........... denir. ",
        imgSrc : "img/batimetre1.png",
        choiceA : "barometre",
        choiceB : "manometre",
        choiceC : "altimetre",
	    choiceD : "batimetre",
	    correct : "D"
		
    },    {
        question : "4.	Sıvının cisme uyguladığı kaldırma kuvveti, cismin yerini değiştirdiği sıvının .......... eşittir. ",
        imgSrc : "img/kaldirma-kuvveti2.png",
        choiceA : "ağırlığına",
        choiceB : "öz kütlesine",
        choiceC : "erime noktasına",
	    choiceD : "kaynama noktasına",
	    correct : "A"
    }, {
        question : "5.	Bir cismin havadaki ağırlığı sudaki ağırlığından .............. kadar daha fazladır. ",
        imgSrc : "img/yuzmedurumlari.png",
        choiceA : "suyun ağırlığı",
        choiceB : "kabın ağırlığı",
        choiceC : "kaldırma kuvveti",
	    choiceD : "suyun hacmi",
	    correct : "C"
    },	{
        question : "6.	Kabın içindeki sıvının yüksekliği ......... kabın tabanına etki eden sıvı basıncı azalır. ",
        imgSrc : "img/subasinci.png",
        choiceA : "artarsa",
        choiceB : "azalırsa",
        choiceC : "buharlaşırsa",
	    choiceD : "kaynarsa",
	    correct : "B"
		
    },       {
        question : "7.	Hareket halindeki sıvıların basıncına ............... basınç denir. ",
        imgSrc : "img/akiskanlarin-basinci1.png",
        choiceA : "statik",
        choiceB : "kinematik",
        choiceC : "mekanik",
	    choiceD : "dinamik",
	    correct : "D"
    }, {
        question : "8.	Kapalı kaplardaki gaz basıncını ölçen araçlara ............. denir. ",
        imgSrc : "img/manometre2.png",
        choiceA : "manometre",
        choiceB : "barometre",
        choiceC : "batimetre",
	    choiceD : "altimetre",
	    correct : "A"
    },	{
        question : "9.	Molekülleri birbiri üzerinden kayarak öteleme hareketi yapan maddelere ........ denir. ",
        imgSrc : "img/katisivigazanimasyon.gif",
        choiceA : "katı",
        choiceB : "gaz",
        choiceC : "akışkan madde",
	    choiceD : "plazma",
	    correct : "C"
		
    },    {
        question : "1O. Bir noktadaki sıvı basıncı o noktanın sıvı yüzeyine olan derinliği ile ........... orantılıdır. ",
        imgSrc : "img/subasinci.png",
        choiceA : "ters",
        choiceB : "logaritmik",
        choiceC : "doğru",
	    choiceD : "hiperpolik",
	    correct : "C"
    }, {
        question : "11.	Kasırga esnasında ev içindeki hava basıncı evin dışındaki hava basıncından büyük olduğu için  çatılar .............. doğru uçar. ",
        imgSrc : "img/catiucuyor.gif",
        choiceA : "içe",
        choiceB : "sağa",
        choiceC : "sola",
	    choiceD : "dışa",
	    correct : "D"
    },	{
        question : "12.	Deniz seviyesinde 76 cm yükseklikteki cıvanın yaptığı basınca ......... denir. ",
        imgSrc : "img/acik-hava-basinci.png",
        choiceA : "1 km",
        choiceB : "1 atm",
        choiceC : "1 kg",
	    choiceD : "1 ton",
	    correct : "B"
		
    },    {
        question : "13.	Sıvı içine bırakılan cismin ......... koşulunun gerçekleşmesi için özkütlesi, sıvının özkütlesinden küçük olmalıdır. ",
        imgSrc : "img/yuzmedurumlari.png",
        choiceA : "uçma",
        choiceB : "yüzme",
        choiceC : "batma",
	    choiceD : "buharlaşma",
	    correct : "B"
    } 
	
// 13 tane	
	
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
















