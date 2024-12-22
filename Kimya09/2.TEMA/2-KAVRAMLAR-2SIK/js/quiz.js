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
        question : "1- Kimyasal bağ yapan bir atomun bağ elektronlarını kendine doğru çekme gücünün büyüklüğüne denir.",
        imgSrc : "img/onerme1.png",
        choiceA : "İyonlaşma",
        choiceB : "Elektronegatiflik",

		correct : "B"
    }    ,        {
        question : "2- Gaz hâlindeki nötr bir atomdan elektron koparmak için gerekli olan enerjiye denir.",
        imgSrc : "img/delil1.png",
        choiceA : "İyonlaşma",
        choiceB : "İzoelektronik",

		correct : "A"
    },    {
        question : "3-  Elektronegatiflik değeri 4,0 olarak kabul edilen element. ",
        imgSrc : "img/tumdengelim2.png",
        choiceA : "C==>Karbon",
        choiceB : "F==>Flor",

		correct : "B"
    } ,        {
        question : "4- Elektron sayıları ve elektron dizilimleri aynı, proton sayıları farklı taneciklere denir.",
        imgSrc : "img/dogrubilgi2.jpg",
        choiceA : "İzoelektronik",
        choiceB : "İzotop",

		correct : "A"
    },        {
        question : "5- Pozitif yüklü iyonlara denir.",
        imgSrc : "img/bilimadami.jpg",
        choiceA : "Anyon",
        choiceB : "Katyon",

		correct : "B"
    },    {
        question : "6- Negatif yüklü iyonlara denir .",
        imgSrc : "img/dusunme.jpg",
        choiceA : "Anyon",
        choiceB : "Katyon",

		correct : "A"
    },      {
        question : "7- 8A grubundaki elementlere denir.",
        imgSrc : "img/onerme.png",
        choiceA : "Halojenler",
        choiceB : "Soy Gazlar",

		correct : "B"
    }
	,        {
        question : "8- Bir atomun elektron alması veya vermesi durumuna denir.",
        imgSrc : "img/kiyas.png",
        choiceA : "Nötron",
        choiceB : "İyon",

		correct : "B"
    },    {
        question : "9- 7A grubu  elementlerinin özel adı.",
        imgSrc : "img/arkhe-nedir.jpg",
        choiceA : "Halojenler",
        choiceB : "Soy Gazlar",

		correct : "A"
    },        {
        question : "10- “3A grubu elementlerinin özel adı.",
        imgSrc : "img/kavramlar2.jpg",
        choiceA : "Metaller",
        choiceB : "Toprak Metaller",

		correct : "B"
    },        {
        question : "11- 2A grubu elementlerinin özel adı.",
        imgSrc : "img/critcal-thinking.jpg",
        choiceA : "Toprak Alkali Metaller",
        choiceB : "Toprak Metaller",

		correct : "A"
    },        {
        question : "12- 1A grubu elementlerinin özel adı.",
        imgSrc : "img/misunderstanding-concept.jpg",
        choiceA : "Alkali Metaller",
        choiceB : "Toprak Metaller",

		correct : "A"
	
	  }, {
        question : "13- Atomun en dış temel enerji kabuğundaki elektronlara ne elektronları denir?.",
        imgSrc : "img/critcal-thinking.jpg",
        choiceA : "Valans (Değerlik)",
        choiceB : "Orbital",

		correct : "A"
	
	  }, {
        question : "14- “Temel hâldeki elektronlar eş enerjili atom orbitallerine önce birer birer aynı, daha sonra eşleşirken zıt yönde yerleşir.",
        imgSrc : "img/goz.jpg",
        choiceA : "Aufbau İlkesi",
        choiceB : "Hund Kuralı",

		correct : "B"
	
	  }, {
        question : "15- Bir atom orbitalinde zıt yönlü olmak koşuluyla en fazla iki elektron bulunabilir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Pauli Dışlama İlkesi",
        choiceB : "Aufbau İlkesi",

		correct : "A"
	
	  }, {
        question : "16- Elektronlar orbitallere yerleşirken önce en düşük, daha sonra yüksek enerjili atom orbitallerine atomun enerjisini en aza indirecek şekilde yerleşir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Pauli Dışlama İlkesi",
        choiceB : "Aufbau İlkesi",

		correct : "B"
	
	  } , {
        question : "17- Elektronun belirli bir anda nerede olacağını kesin olarak belirlemek  mümkün değildir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Pauli Dışlama İlkesi",
        choiceB : "Heisenberg belirsizlik ilkesi",

		correct : "B"
	
	  } , {
        question : "18- Elektronun atom içinde bulunma olasılığının yüksek olduğu  bölgeler tanımlanabilir ve bu bölgelere denir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Orbital",
        choiceB : "Çekirdek",

		correct : "A"
	
	  } , {
        question : "19- Uyarılmış atomun aldığı enerjinin bir kısmını ışıma olarak geri yaymasına denir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Absorpsiyon (Soğurma)",
        choiceB : "Emisyon (Yayma)",

		correct : "B"
	
	  } , {
        question : "20- Bir atomun elektronlarının bir ya da birkaçının daha yüksek  enerji düzeyine çıkması haline denir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Uyarılmış atom",
        choiceB : "Emisyon (Yayma)",

		correct : "A"
	
	  } , {
        question : "21- Atom çekirdeğinde bulunan pozitif yüklü tanecik.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Nötron",
        choiceB : "Proton",

		correct : "B"
	
	  } , {
        question : "22- Atom çekirdeğinde bulunan yükü olmayan tanecik.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Nötron",
        choiceB : "Proton",

		correct : "A"
	
	  } , {
        question : "23- Temel hâldeki atom, bir foton (ışın)  absorbe ettiğinde elektron bir yörüngeden diğer bir yörüngeye geçebilir. Bu geçiş sırasında absorbe edilen ışının enerjisi, yörüngeler arasındaki enerji farkına eşittir. Bu olaya  ... denir.",
        imgSrc : "img/felsefimetinler.jpg",
        choiceA : "Absorpsiyon (soğurma)",
        choiceB : "Emisyon (Yayma)",

		correct : "A"
	
	  }           
	
	
	//,     {
     //   question : " ",
     //   imgSrc : "img/",
    //    choiceA : "Doğru",
    //    choiceB : "Yanlış",

	//	correct : "A"
   // }
	
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
    
 	if (scorePerCent < 90 ) {
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
















