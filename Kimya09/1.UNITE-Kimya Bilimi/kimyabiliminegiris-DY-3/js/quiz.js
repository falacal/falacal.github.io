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
        question : "1)	.... MÖ 492-432 yılları arasında yaşamış Sicilyalı bir düşünürdür. Ona göre madde su, hava, ateş ve toprak olmak üzere (dört öge düşüncesi) dört elementten oluşuyordu. ",
        imgSrc : "img/empedokles1.png",
        choiceA : "Aristo",
        choiceB : "Empedokles",
		correct : "B" 
    }, {
        question : "2)	Empedokles; maddeleri bir arada tutan etkenin .....  , ayrı tutan etkeninde ..... olduğunu ileri sürüyordu. ",
        imgSrc : "img/empedokles2.png",
        choiceA : "sevgi - nefret",
        choiceB : "dostluk-düşmanlık",
		correct : "A"
    },	{
        question : "3) Empedokles; taneciklerin birbirini çekmesini ..... , itmesini de ...... duygusuna bağlıyordu.  ",
        imgSrc : "img/empedokles2.png",
        choiceA : "dostluk-düşmanlık",
        choiceB : "sevgi - nefret",
		correct : "B"
    }, {
        question : "4)	....... MÖ 470-361 yılları arasında yaşamış bir düşünürdür, maddenin atomos (atom) adı verilen çok küçük parçacıklardan oluştuğunu ieri sürmüştür.",
        imgSrc : "img/democritus1.png",
        choiceA : "Aristo",
        choiceB : "Democritus",
		correct : "B"
    }, 
	    {
        question : "5)	...... , Antik yunanda, maddelerin atomlardan oluştuğunu, maddelerin farklı özelliklerde olmasının nedenini bu maddelerin farklı atomlardan oluşmasına bağlıyordu. ",
        imgSrc : "img/democritus1.png",
        choiceA : "Democritus",
        choiceB : "Aristo",
		correct : "A"
    }, {
        question : "6)	.... MÖ 384-322 yılları arasında yaşamıştır. Empedokles’in düşüncesinden etkilenmiştir. Dört element düşüncesini geliştirmiş, evrende toprak, hava, su ve ateş farklı oranlarda birleşerek farklı maddelerin oluşmasına neden olmuştur fikrini ileri sürmüştür.",
        imgSrc : "img/aristo1.png",
        choiceA : "Democritus",
        choiceB : "Aristo",
		correct : "B"
    },	{
        question : "7)	Aristo’ya göre, ateş elementinin ...... gibi özellikleri vardır. ",
        imgSrc : "img/aristo1.png",
        choiceA : "kuru-soğuk",
        choiceB : "kuru-sıcak",
		correct : "B"
    }, {
        question : "8) Aristo’ya göre, hava elementinin  ......   gibi özellikleri vardır.",
        imgSrc : "img/aristo1.png",
        choiceA : "sıcak-ıslak",
        choiceB : "soğuk-ıslak",
		correct : "A"
    },    {
        question : "9)	Aristo’ya göre, su elementinin   ......   gibi özellikleri vardır.  ",
        imgSrc : "img/aristo1.png",
        choiceA : "sıcak-ıslak",
        choiceB : "soğuk-ıslak",
		correct : "B"
    }, {
        question : "10)	Aristo’ya göre, toprak elementinin  ......   gibi özellikleri vardır.",
        imgSrc : "img/aristo1.png",
        choiceA : "kuru-soğuk",
        choiceB : "kuru-sıcak",
		correct : "A"
    }, {
        question : "11)	......... , kimya laboratuvarını ilk defa kurarak ve doğadaki maddeleri saflaştırarak elementleri ve bileşikleri elde etmeye çalışmıştır.",
        imgSrc : "img/cabirbinhayyan1.png",
        choiceA : "Ömer Hayyam (عمر الخيّام)",
        choiceB : "Ebû Mûsa Câbir bin Hayyân (ابو موسی جابربن حیان)",
		correct : "B"
    }, {
        question : "12)	 Altın ve platin gibi soy metalleri çözen kral suyunu (3 hacim hidroklorik asit ve 1 hacim nitrik asit) keşfetmiştir.",
        imgSrc : "img/cabirbinhayyan1.png",
        choiceA : "Ömer Hayyam (عمر الخيّام)",
        choiceB : "Ebû Mûsa Câbir bin Hayyân (ابو موسی جابربن حیان)",
		correct : "B"
    }, {
        question : "13)	Asetik asit, sitrik asit, tartarik asit, arsenik tozu gibi maddelerin keşfini yapmıştır.",
        imgSrc : "img/cabirbinhayyan1.png",
        choiceA : "Ömer Hayyam (عمر الخيّام)",
        choiceB : "Ebû Mûsa Câbir bin Hayyân (ابو موسی جابربن حیان)",
		correct : "B"
    }, {
        question : "14)	 .....  İranlı hekim ve filozoftur. Kroze ve fırın gibi laboratuvar araçlarını geliştirmiş, kostik sodayı ve gliserini keşfetmiştir. ",
        imgSrc : "img/errazi1.png",
        choiceA : "Aristo",
        choiceB : "Ebubekir er-Razi",
		correct : "A"
    }, {
        question : "15)	....... , kimya ve fizik alanında birçok çalışma yapmış ve eserler vermiş bir bilim insanıdır. En önemli eseri “Kuşkucu Kimyager” adlı kitabıdır.",
        imgSrc : "img/RobertBoyle1.png",
        choiceA : "Robert Boyle",
        choiceB : "Ebû Mûsa Câbir bin Hayyân (ابو موسی جابربن حیان)",
		correct : "A"
    }, {
        question : "16)	........ , elementin 'kendinden daha basit maddelere ayrıştırılamayan saf madde' olduğunu ileri sürerek Aristo’nun 2000 yıllık dört element düşüncesine son vermiştir. ",
        imgSrc : "img/RobertBoyle1.png",
        choiceA : "Ebû Mûsa Câbir bin Hayyân (ابو موسی جابربن حیان)",
        choiceB : "Robert Boyle",
		correct : "B"
    }, {
        question : "17)	........ , gazlar üzerine yaptığı çalışmalarda gazların basıncı ile hacmi arasındaki ilişkiyi açıklamıştır. Sabit sıcaklıkta miktarı değişmeyen bir gazın basıncı ile hacminin çarpımının sabit olduğunu tespit etmiştir.",
        imgSrc : "img/RobertBoyle2.png",
        choiceA : "Robert Boyle",
        choiceB : "Antoine Lavoisier",
		correct : "A"
    }, {
        question : "18)	Fransız bilim insanı .......  'Kütlenin Korunumu Kanunu'nu bulmuştur. Havada bulunan oksijenin yanan bir madde ile etkileşerek yanmayı gerçekleştirdiğini ve böylece metal oksitlerin oluştuğunu açıklamıştır.",
        imgSrc : "img/lavvaziye1.png",
        choiceA : "Robert Boyle",
        choiceB : "Antoine Lavoisier",
		correct : "B"
    }, {
        question : "19)	 Fenikeli gemiciler Suriye'deki bir nehrin ağzında karaya çıkmışlar ateş yakıp, ateşte sodyum nitrat tuzunu (NaNO3: Şili güherçilesi) eritip kum ile karıştırınca tesadüf eseri ...... bulmuşlardır. ",
        imgSrc : "img/cam1.png",
        choiceA : "camı",
        choiceB : "mıknatısı",
		correct : "A"
    }, {
        question : "20)	......  , elementin “kendinden daha basit maddelere ayrıştırılamayan saf madde” olduğunu ileri sürmüştür. ",
        imgSrc : "img/RobertBoyle2.png",
        choiceA : "Robert Boyle",
        choiceB : "Antoine Lavoisier",
		correct : "A"
    } 
	
	
	








// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















