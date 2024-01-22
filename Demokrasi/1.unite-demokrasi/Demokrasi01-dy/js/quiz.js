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
        question : "1- Demokratik yönetim sistemleri ilk kez nerede ortaya çıkmıştır?",
        imgSrc : "img/bilgeliksevgisi1.png",
        choiceA : "Eski Arabistan ve daha sonra Mısırda",
        choiceB : "Eski Yunanistan’da ve daha sonra Roma’da ",
		correct : "B"
    },        {
        question : "2- ........ , halkın egemenliğine dayanan yönetim şekli olarak tanımlanır. Yani halkın kendi temsilcilerini seçerek onlar tarafından yönetilmeyi kabul etmesidir.",
        imgSrc : "img/filozof1.png",
        choiceA : "Cumhuriyet",
        choiceB : "Demokrasi",

		correct : "B"
    },    {
        question : "3- Demokrasi ile yönetilen ülkelerde üç önemli güç vardır. Bunlar nelerdir? ",
        imgSrc : "img/felsefehikmet.png",
        choiceA : "Yasama, yürütme ve yargı ",
        choiceB : "Güçler ayrılığı ilkesi",

		correct : "A"
    },        {
        question : "4- Devletin yasama, yürütme ve yargı kuvvetlerinin birbirinden ayrılması ve bu sayede gücün kötüye kullanılmasının engellenmesine ne denir?",
        imgSrc : "img/bilincozbilinc.png",
        choiceA : "Güçler ayrılığı ilkesi ",
        choiceB : "Yasama, yürütme ve yargı ",

		correct : "A"
    },        {
        question : "5- Demokrasi ve Cumhuriyet eşdeğer kavramlardır.",
        imgSrc : "img/sorular1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "B"
    },    {
        question : "6-  ........., siyasi gücün halk ve temsilcileri tarafından paylaşıldığı bir devlet yönetim şeklidir ve yapısı gereği monarşinin yokluğu üzerine kuruludur. ",
        imgSrc : "img/farkindalik1.png",
        choiceA : "Demokrasi",
        choiceB : "Cumhuriyet",
		correct : "B"
    },      {
        question : "7- Demokrasi kavramı, Cumhuriyet kavramından daha geniş kapsamlıdır. ",
        imgSrc : "img/evrensellik1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",

		correct : "A"
    },        {
        question : "8- Parlamenter Sistem, Başkanlık Sistemi, Yarı Başkanlık Sistemi, Meclis Hükûmeti gibi kavramlar  bizlere neyi bildirir?",
        imgSrc : "img/felsefikonu1.png",
        choiceA : "Gerçekte Demokratik yönetimlerin olmadığını",
        choiceB : "Temsilî demokrasinin farklı uygulanış biçimlerini ",

		correct : "B"
    },    {
        question : "9- Seçmenler önce parlamentoyu  oluşturacak vekilleri seçer ve çoğunluğu tek başına veya birlikte elde edebilecek olan partiler  hükûmeti kurar. Kurulacak olan kabine, yasamadan  güvenoyu aldıktan sonra göreve başlar.",
        imgSrc : "img/felsefiklavuzdur1.png",
        choiceA : "Parlamenter sistem ",
        choiceB : "Başkanlık sistemi",

		correct : "A"
    },        {
        question : "10- Din ve devlet işlerinin birbirinden ayrılması, devletin her dini inanca aynı mesafede durması, devlet işleyişinde dinsel kural, örf ve adetler yerine evrensel hukuk norm kurallarına göre davranılmasıdır. ",
        imgSrc : "img/boil-water.gif",
        choiceA : "Şeriat",
        choiceB : "Laiklik",

		correct : "B"
    },        {
        question : "11- Başka insanlara ve canlılara zarar vermeden dilediğini yapabilme hakkına ne denir? ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Demokrasi",
        choiceB : "Özgürlük",

		correct : "B"
    } ,        {
        question : "12- İnsan ……………………… ve ……………………… bir varlıktır. ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "değerli - onurlu ",
        choiceB : "bağımlı - biat eden",

		correct : "A"
    } ,        {
        question : "13- Hukukun kişilere tanıdığı yetkiye ne denir? ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Özgürlük ",
        choiceB : "Hak",

		correct : "B"
    } ,        {
        question : "14- Hukukun kişilere tanıdığı yetkiye ne denir? ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Özgürlük ",
        choiceB : "Hak",

		correct : "B"
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
















