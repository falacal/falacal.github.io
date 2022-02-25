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
        question : "Şekildeki K, L, M atmaları  x ekseni üzerinde hareket etmektedir. Atmaların titreşim yönleri şekildeki gibi olduğuna göre hangi atmalar +x yönünde hareket etmektedir?",
        imgSrc : "img/atmayonleri.png",
        choiceA : "Yalnız K ",
        choiceB : "K ve L",
        choiceC : "K ve M",
		choiceD : "L ve M",
		correct : "B"
    }, {
        question : "Yapılan işin harcanan enerjiye oranına ne denir?",
        imgSrc : "img/enerjjiverimliligi.png",
        choiceA : "Kinetik Enerji",
        choiceB : "İş",
        choiceC : "Potansiyel Enerji",
		choiceD :  "Verim", 
		 
        correct : "D"
    },	{
        question : "Aşağıdakilerden hangisi Kinetik Enerjinin formülüdür?",
        imgSrc :  "img/kinetikenerjiok.png",
        choiceA : "<img src='img/cekimpotenerji.png'>" ,
        choiceB : "<img src='img/mekanikenerji.png'>" ,
        choiceC : "<img src='img/agirlik.png'>" ,
				
		choiceD :  "<img src='img/kinetikenerji.png'>" ,
		
		
		 
        correct : "D"
    }, {
        question : "Bir cismin konumundan veya durumundan dolayı sahip olduğu enerjiye ne ad verilir?",
        imgSrc : "img/potansiyelenerjiyay.png",
        choiceA : "Verim",
        choiceB : "İş",
        choiceC : "Potansiyel Enerji",
	    choiceD : "Kinetik Enerji",
        correct : "C"
    }, {
        question : "Bir cismin veya sistemin iş yapabilme yeteneğine ne ad verilir?",
        imgSrc : "img/enerji.png",
        choiceA : "Verim",
        choiceB : "İş",
        choiceC : "Enerji",
		choiceD : "Kinetik Enerji",
	    correct : "C"
    }, {
        question : "Aşağıdakilerden hangisi Potansiyel Enerjinin formülüdür?",
        imgSrc :  "img/kinetikenerjiok.png",
        choiceA : "<img src='img/cekimpotenerji.png'>" ,
        choiceB : "<img src='img/mekanikenerji.png'>" ,
        choiceC : "<img src='img/agirlik.png'>" ,
				
		choiceD :  "<img src='img/kinetikenerji.png'>" ,
		correct : "A"
		
		
    }, {
        question : "Aşağıdakilerden hangisi Mekanik Enerjinin formülüdür?",
        imgSrc :  "img/bosresim.png",
        choiceA : "<img src='img/cekimpotenerji.png'>" ,
        choiceB : "<img src='img/mekanikenerji.png'>" ,
        choiceC : "<img src='img/agirlik.png'>" ,
				
		choiceD :  "<img src='img/kinetikenerji.png'>" ,
		correct : "B"
		
    }, {
        question : "Aşağıdakilerden hangisi Ağırlığın  formülüdür?",
        imgSrc :  "img/bosresim.png",
        choiceA : "<img src='img/cekimpotenerji.png'>" ,
        choiceB : "<img src='img/mekanikenerji.png'>" ,
        choiceC : "<img src='img/agirlik.png'>" ,
				
		choiceD :  "<img src='img/kinetikenerji.png'>" ,
		correct : "C"
		
		
    },   	{
        question : "Kuvvetin yaptığı iş kaç joule'dur?",
        imgSrc :   "img/is1.png" ,
        choiceA : "200",
        choiceB : "30",
        choiceC : "60",
		choiceD : "10",
		 
        correct : "C"
    } ,
	
	
	
	
	
	
	
	
	{
        question : "Soldaki sürtünmesiz sistemde bir cisim şekildeki gibi A noktasından serbest bırakılıyor. Cisim hangi noktaya kadar çıkabilir?",
        imgSrc :   "img/mekanikenerjisoru-2.png" ,
        choiceA : "F Noktası",
        choiceB : "L Noktası",
        choiceC : "H Noktası",
		choiceD : "G Noktası",
		 
        correct : "B"
    } ,{
        question : "İş ile ilgili; <br> I. Skaler bir büyüklüktür.<br>  II. Türetilmiş bir büyüklüktür.<br>  III. Birimi “Joule” dür.<br>  <b>yargılarından hangileri doğrudur?</b>",
        imgSrc :   "img/dusunuyor.png" , 
        choiceA : "I",
        choiceB : "I ve II ",
        choiceC : "II ve III ",
		choiceD : "I, II ve III",
		 
        correct : "D"
    }
	 ,{
        question : "2 kg kütleli bir kuş 10 m yükseklikte 5 m/s hızla uçmaktadır. Bu kuşun <b>ağırlığı</b> kaç Newtondur?",
        imgSrc :   "img/kusunmekanikenerjisi.png" , 
        choiceA : "25",
        choiceB : "20 ",
        choiceC : "10",
		choiceD : "50",
		 
        correct : "B"
    }
	 
	 	 ,{
        question : "2 kg kütleli bir kuş 10 m yükseklikte 5 m/s hızla uçmaktadır. Bu kuşun <b>potansiyel enerjisi</b> kaç jouledur?",
        imgSrc :   "img/kusunmekanikenerjisi.png" , 
        choiceA : "125",
        choiceB : "100 ",
        choiceC : "200",
		choiceD : "150",
		 
        correct : "C"
    }
	 
	,{
        question : "2 kg kütleli bir kuş 10 m yükseklikte 5 m/s hızla uçmaktadır. Bu kuşun <b>kinetik enerjisi</b> kaç jouledur?",
        imgSrc :   "img/kusunmekanikenerjisi.png" , 
        choiceA : "50",
        choiceB : "10 ",
        choiceC : "20",
		choiceD : "25",
		 
        correct : "D"
    }
		,{
        question : "2 kg kütleli bir kuş 10 m yükseklikte 5 m/s hızla uçmaktadır. Bu kuşun <b>mekanik enerjisi</b> kaç jouledur?",
        imgSrc :   "img/kusunmekanikenerjisi.png" , 
        choiceA : "250",
        choiceB : "225 ",
        choiceC : "200",
		choiceD : "150",
		 
        correct : "B"
    }
	,{
        question : "Bir elektrik moturu 200 Joule elektrik enerjisi harcarken 180 Joule mekanik enerji üretmektedir. Buna göre, motorun <b>verimi </b>kaçtır?",
        imgSrc :   "img/electric_motor.png" , 
        choiceA : "0,9",
        choiceB : "0,8",
        choiceC : "0,7",
		choiceD : "0,75",
		 
        correct : "A"
    }
	
		,{
        question : "Bir arabanın benzin deposuna 120000 Joule değerinde benzin doldurulduğunda araba 40000 Joule değerinde iş yapıyor.  Buna göre, arabanın <b>verimi  yüzde</b> kaçtır?",
        imgSrc :   "img/car.png" , 
        choiceA : "%80",
        choiceB : "%60",
        choiceC : "%40",
		choiceD : "%33",
		 
        correct : "D"
    }
			,{
        question : "Şekilde verilen A, B ve C cisimlerinin yere gre potansiyel enerjileri arasındaki ilişki, aşağıdakilerin hangisinde doğru verilmiştir?",
         
        imgSrc :   "img/potenerji1.png" , 
        choiceA : "Ea>Eb>Ec",
        choiceB : "Eb=Ec>Ea",
        choiceC : "Eb>Ea=Ec",
		choiceD : "Ec>Eb>Ea",
		 
        correct : "C"
    }
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















