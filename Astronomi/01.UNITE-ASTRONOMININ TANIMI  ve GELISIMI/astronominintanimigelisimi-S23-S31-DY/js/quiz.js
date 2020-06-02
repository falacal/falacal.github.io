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
        question : "1. Ateşin keşfi insanların uzaya olan ilgilerinin artmasına neden olmuştur.",
        imgSrc : "img/ates1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    }, {
        question : "2. Bilim deneye dayalı düzenli bilgi olarak tanımlanabilir.",
        imgSrc : "img/bilim1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : "3. Evrendeki olası yaşam formlarının, oluşum ve gelişimini inceleyen astronomi  alt alanı astrojeolojidir.",
        imgSrc : "img/uzayliorman1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    }, {
        question : "4. Teleskobun icadı ayrıntılı astronomi incelemelerini hızlandırmıştır. ",
        imgSrc : "img/teleskop3.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : "5. Optik teleskoplar mercek kullanılarak üretilen teleskoplardır.",
        imgSrc : "img/aynaliteleskop2.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    },{
        question : "6. Yapma uydular astronomik araştırmalarda kullanılan teleskopları taşır.",
        imgSrc : "img/yorungede.gif  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : '7. Dilimize Fransızcadan geçen astronomi sözcüğünün kökeni, eski Yunanca yıldız anlamına gelen "astro" ve yasa anlamına gelen "nomos" sözüklerine dayanmaktadır.',
        imgSrc : "img/astronoma1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    },{
        question : "8. Avrupa Nükleer Araştırma Merkezi veya bilinen adı ile CERN, İsviçre-Fransa sınırında yer alan dünyanın en  küçük  parçacık fiziği laboratuvarıdır. ",
        imgSrc : "img/cern1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    }, {
        question : "9. MÖ 276-194 yılları arasında yaşayan bilim insanı Eratosthenes (Eratoshenes) yerkürenin yarıçapını, günümüz ölçülerine çok yakın hesaplamamıştır. ",
        imgSrc : "img/dunyacapi1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    },{
        question : "10. Görünür ışın: Beyaz ışık olarak da adlandırılan bu bölge, gözümüzün algılayabildiği 400 nm ile 700 nm dalga boyu arasındaki EM (Elektro Manyetik) dalgaları içerir. ",
        imgSrc : "img/emspeektrum.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : "11. a.	Dürbünler ve teleskoplarda cisimden ışık ışınlarının ilk ulaştığı mercek objektif olarak adlandırılır.",
        imgSrc : "img/objektif1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : "12. Dürbünlerde gözümüzün dayalı olduğu göz merceğine oküler  denmez.",
        imgSrc : "img/objektif1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    }, {
        question : "13. Elektromanyetik tayfın radyo dalgaları bölgesindeki ışınımları toplayarak gözlem yapmaya yarayan çanak şeklindeki  antenlere radyo teleskop denir. ",
        imgSrc : "img/radyoliteleskop1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "A"
    }, {
        question : "14. Astrofotoğrafçılık için uygun olmamaları aynalı teleskopların olumsuz yanlarına örnektir. ",
        imgSrc : "img/aynaliteleskop1.png  ",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
    }, {
        question : "15.	Gözlemlerle sonuca ulaşmak bilimsel çalışma basamaklarındandır.",
        imgSrc : "img/gozlem.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 		correct : "B"
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
















