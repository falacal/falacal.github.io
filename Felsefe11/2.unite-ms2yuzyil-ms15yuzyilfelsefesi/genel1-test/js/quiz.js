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
        question : "1. Düşünce tarihinin en uzun dönemi olan ………..    felsefesi, kendinden sonraki dönemleri etkilemiştir. Bu etkinin merkezini inanç ve inanca destek olan akıl oluşturmuştur?	 ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "MÖ 6 - MS 2. yüzyıl ",
        choiceB : "MS 2 - 15. yüzyıl ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "B"
    }, {
        question : "2. Aşağıdaki düşünürlerden hangisi   MS 2 yüzyıl - 15. yüzyıl Hristiyan felsefesi düşünür ve filozoflarından   değildir? ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Clemens (Klemens) (150-215)  ",
        choiceB : "Tertullian (Tertulyan) (155-240)  ",
        choiceC : "Augustinus (Agistinus) (354-430) ",
	    choiceD : "El Kindî (801-866) ",
	    correct : "D"
    },	{
        question : "3. Aşağıdaki düşünürlerden hangisi   MS 2 yüzyıl - 15. yüzyıl islam felsefesi düşünür ve filozoflarından   değildir? ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Fârâbî (871-951) ",
        choiceB : "İbn Sînâ (980-1037) ",
        choiceC : "Boethius (Boyetus) (480-524) ",
	    choiceD : "Gazâlî (1058-1111) ",
	    correct : "C"
		
    },    {
        question : "4. Hristiyan filozoflarının ilgisini ilk olarak insan ruhunun ahlaki gelişimini kendi sisteminin temel parçası yapan ……  çekmiştir. Hristiyanlığı savunmak ve yaymak için ondan faydalanılmıştır. Özellikle ruhun ölmemesi hatta tekrar dirilebilmesi fikrini desteklediği için bu eğilimi doğal bir şekilde gerçekleştirmiştir.",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Fârâbî (871-951) ",
        choiceB : "Platon ",
        choiceC : "İbn Sînâ (980-1037) ",
	    choiceD : "Augustinus (Agistinus) (354-430) ",
	    correct : "B"
	    
    } ,    {
        question : "5. Aşağıdaki düşünürlerden hangisi   MS 2 yüzyıl - 15. yüzyıl Hristiyan felsefesi düşünür ve filozoflarından   değildir?  ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "İbn Rüşd (1126-1198) ",
        choiceB : "Erigena (Ercina) (810-877) ",
        choiceC : "Anselmus (Anselmus) (1033-1109) ",
	    choiceD : "Aquinalı Thomas (Akinalı Tamıs) (1225-1274) ",
	    correct : "A"
    } ,    {
        question : "6. Aşağıdaki düşünürlerden hangisi   MS 2 yüzyıl - 15. yüzyıl islam felsefesi düşünür ve filozoflarından   değildir?   ",
       imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Mevlânâ (1207-1273)  ",
        choiceB : "Hacı Bektâş Velî (1209-1271) ",
        choiceC : "Ockhamlı William (Okhamlı Vilyım) (1285-1349) ",
	    choiceD : "Yûnus Emre (1238-1321) ",
	    correct : "C"
    } ,    {
        question : "7.  ....... etkisi daha çok İslam felsefesinde görülür ve geliştirdiği mantık, Tanrı’nın varlığına yönelik akılsal kanıtlamalara destek olarak kullanılmış ve her türlü tartışmada yöntem olarak belirlenmiştir.	 ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Platon’nun ",
        choiceB : "Aristoteles’in ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "B"
    } ,       {
        question : "8.  Aşağıdaki düşünürlerden hangisi   MS 2 yüzyıl - 15. yüzyıl Hristiyan felsefesi düşünür ve filozoflarından   değildir? 	 ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Aquinalı Thomas (Akinalı Tamıs) (1225-1274) ",
        choiceB : "Ockhamlı William (Okhamlı Vilyım) (1285-1349) ",
        choiceC : "İbn Haldun (1332-1406) ",
	    choiceD : "Erigena (Ercina) (810-877) ",
	    correct : "C"
    } , 	{
        question : "9. Bu felsefe, ahlak, istenç (irade) konularında Hristiyan felsefesini derinden etkileyen diğer bir felsefedir. …..  felsefesine göre insanlar arasında ayrım yoktur. Alt-üst, zengin-fakir vb. hiçbir statü insanların birbirine olan eşitliğini bozamaz. ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Stoa  ",
        choiceB : "Epikürosçuluk ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "A"
    } ,    {
        question : "10. MS 2-MS 15. yüzyıl felsefesini etkileyen bir diğer felsefe dir. Mutluluğa ulaşmak için dünyevi hazlardan uzak durulması gerektiği düşüncesi üzerinden oluşan tartışmalar bu dönem felsefesini etkilemiştir?",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Epikürosçuluk ",
        choiceB : "Stoacılık  ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "A"
    } ,    {
        question : "11. MS 2-MS 15. yüzyıl felsefesini etkileyen bir diğer felsefe dir. “Tanrı” ve “ruh” kavramları konusundaki düşüncesi üzerinden oluşan tartışmalar bu dönem felsefesini etkilemiştir. ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Yeni-Platonculuk ",
        choiceB : "Epikürosçuluk ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "A"
    } ,    {
        question : "12. SUDÛR    ( الصدور  )    nedir?",
       imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Tüm varlıkların toplamına bütünü oluşturmasına denir.",
        choiceB : "Varlığın mutlak birden çıkıp sıra düzeni içinde evreni oluşturması",
        choiceC : " ",
	    choiceD : " ",
	    correct : "B"
    } ,    {
        question : "13. Sudûr yerine kullanılan eş manalı kelimeler? ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : " 'feyz, akmak, fışkırmak, taşmak' mânasındaki kelimeler kullanılır. ",
        choiceB : "Uçmak, yükselmek ",
        choiceC : " ",
	    choiceD : " ",
	    correct : "A"
    } ,    {
        question : "14. MS 2-MS 15. Yüzyıl Felsefesi hangi felsefi düşünce , akımların senteziyle oluşmuştur? ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "Platon ve  Aristo ",
        choiceB : "Stoa Felsefesi ve Epikürosçuluk ",
        choiceC : "Yeni Platonculuk ",
	    choiceD : "Hepsi ",
	    correct : "D"
    } ,    {
        question : "15. Genellikle sudûr doktrinini savunan İslâm filozoflarına göre ...... , Allah'ın küllî bilgisi ve takdirinin kâinatın varlığı ve iyiliği yönünde tecelli etmesidir.  ",
        imgSrc : "img/etkiedenfelsefeler1.png",
        choiceA : "feyz ",
        choiceB : "fail ",
        choiceC : "inâyet ",
	    choiceD : "aşkın ",
	    correct : "C"
    } 
// 34 tane	
	
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
    

	if (scorePerCent < 80 ) {
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
















