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
        question : "1. Işık şiddeti ...........   ile ölçülür.",
        imgSrc : "img/fotometre1.png",
        choiceA : "Terazi",
        choiceB : "Fotometre",

		correct : "B"
    },     {
        question : "2. Birim yüzeye düşen ışık akısı miktarına ........... denir.",
        imgSrc : "img/aydinlanma2.png",
        choiceA : "Aydınlanma Şiddeti",
        choiceB : "Işık Şiddeti",

		correct : "A"
    }
	,	    {
        question : "3. Işık akısı birimi ........... dir.",
        imgSrc : "img/isikakisi3.png",
        choiceA : "Lüx",
        choiceB : "Lümen",

		correct : "B"
    },      {
        question : "4. Gelen ışının yüzeyin normali ile yaptığı açı artarsa aydınlanma şiddeti  ...........  .",
        imgSrc : "img/aydinlanma4.png",
        choiceA : "Artar",
        choiceB : "Azalır",

		correct : "B"
    },        {
        question : "5. Aydınlanma şiddeti   ...........  harfi ile gösterilir .",
        imgSrc : "img/aydinlanma2.png",
        choiceA : "Φ",
        choiceB : "E",

		correct : "B"
    },
	
		
	
	{
        question : "6. ...........  aydınlanma şiddet birimidir . ",
        imgSrc : "img/luks.gif",
        choiceA : "Lümen",
        choiceB : "Lüks",

		correct : "B"
    },	    {
        question : "7.  Aydınlanma şiddeti, noktasal ışık kaynağı ile yüzey arasındaki uzaklığın karesiyle ........... orantılıdır.",
        imgSrc : "img/luks.gif",
        choiceA : "Ters",
        choiceB : "Doğru",

		correct : "A"
    } , 
 	     
 	    {
        question : "8. Aydınlanma şiddeti ile ışık şiddeti ........... orantılıdır.",
        imgSrc : "img/luks.gif",
        choiceA : "Doğru",
        choiceB : "Ters",

		correct : "A"
    } 
	, 
 	    {
        question : "9. Işık şiddeti   ...........  harfi ile gösterilir..",
        imgSrc : "img/luks2.png",
        choiceA : "E",
        choiceB : "I",

		correct : "B"
    } 
	, 
 	    {
        question : "10. Işık kaynağından çıkan ışınlar birbirine paralel ise bu ışınlara dik tutulan yüzeydeki aydınlanma şiddeti uzaklıkla ........... .",
        imgSrc : "img/isikdemeti.png",
        choiceA : "Değişir",
        choiceB : "Değişmez",

		correct : "B"
    } 
	, 
 	    {
        question : "11. ........... bir ışık kaynağının birim zamanda yaydığı enerjinin bir ölçüsüdür.",
        imgSrc : "img/isiksiddeti.png",
        choiceA : "Işık Şiddeti",
        choiceB : "Işık Akısı",

		correct : "A"
    } 
	, 
 	    {
        question : "12. I. Isaac Newton II. Christian Huygens III. Thomas Young Yukarıda verilen bilim insanlarından hangileri ışığın dalga modelini savunmuştur? .",
        imgSrc : "img/tanecikdalga.png",
        choiceA : "Isaac Newton ve Christian Huygens",
        choiceB : "Christian Huygens ve Thomas Young",

		correct : "B"
    } 
	, 
 	    {
        question : "13. I. Isaac Newton II. Christiaan Huygens III. Max Planck Yukarıda verilen bilim insanlarından hangisi ışığın tanecik modelini savunmuştur?  .",
        imgSrc : "img/tanecikdalga.png",
        choiceA : "Isaac Newton ve Max Planck",
        choiceB : "Christiaan Huygens ve Max Planck",

		correct : "A"
    } 
	, 
 	    {
        question : "14. I. Işık şiddeti II. Kaynağa olan uzaklık III. Kaynaktan yayılan ışınların doğrultusu Aydınlanma şiddeti yukarıdaki ifadelerden hangisine bağlıdır?  .",
        imgSrc : "img/aydinlanmasiddeti.png",
        choiceA : "I ve II",
        choiceB : "I, II ve III",

		correct : "B"
    } 
	, 
 	    {
        question : "15. I. İçme suyu II. Pencere camı III. Hava IV. Buzlu cam V. Yağlı kâğıt Yukarıda verilen maddelerden kaç tanesinin arkasından etrafa baktığınızda etraftakileri net görürsünüz? .",
        imgSrc : "img/saydam.png",
        choiceA : "I ve III",
        choiceB : "I, II ve III",

		correct : "B"
    } 
	
	, 
 	    {
        question : "16. Bir el fenerinin duvarda oluşturduğu aydınlık dairenin alanı,fener duvardan uzaklaştırıldıkça ışık dairesinin alanı artar. Bu durum, duvara düşen ışık akısının miktarının .......... gösterir.",
        imgSrc : "img/yuzey.png",
        choiceA : "sabit olduğunu",
        choiceB : "arttığını",

		correct : "A"
    } 
	, 
 	    {
        question : "17. Noktasal ışık kaynağının X, Y ve Z noktalarında oluşturacağı aydınlanma şiddetlerini büyükten küçüğe doğru sıralayınız.",
        imgSrc : "img/ornek1.png",
        choiceA : "Ey>Ex>Ez",
        choiceB : "Ez>Ex>Ey",

		correct : "B"
    } 
	, 
 	    {
        question : "18. İçi boş yarım küre şeklindeki cismin O noktasına bırakılan kaynağın A, B, C noktalarında oluşturduğu aydınlanmaları sıralayınız. ",
        imgSrc : "img/ornek2.png",
        choiceA : "Ea>Eb>Ec",
        choiceB : "Ea=Eb=Ec",

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
    	if (scorePerCent < 71 ) {
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
















