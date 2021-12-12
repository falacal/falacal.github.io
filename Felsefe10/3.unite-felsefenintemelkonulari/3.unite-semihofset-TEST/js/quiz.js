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
        question : "1.	Fârâbî’ye göre yaratıcı varlık olan ........ mükemmeldir, mutlaktır, birdir. ",
        imgSrc : "img/iknaetmek.jpg",
        choiceA : "Ceprail",
        choiceB : "İlah",
        choiceC : "Azrail",
	    choiceD : "Tanrı",
	    correct : "D"
    }, {
        question : "2. Hegel varlık alanında ........ temsilcisidir.",
        imgSrc : "img/onermecesitleri.jpg",
        choiceA : "egzistansiyalizmin",
        choiceB : "nihilizmin",
        choiceC : "idealizmin",
	    choiceD : "realizmin",
	    correct : "C"
    },	{
        question : "3.	Doğruluk ........ bir özelliğidir.",
        imgSrc : "img/mantık-sembolleri.png",
        choiceA : "bilginin",
        choiceB : "estetiğin",
        choiceC : "nihilizmin",
	    choiceD : "yasanın",
	    correct : "A"
		
    },    {
        question : "4. ........ göre deneye dayanan bilgi doğrudur",
        imgSrc : "img/olumlu-olumsuz.png",
        choiceA : "Pragmatizme",
        choiceB : "Empirizme",
        choiceC : "Rasyonalizme",
	    choiceD : "İdealizme",
	    correct : "B"
    }, {
        question : "5.	Bilimin insanlığın ortak mirası olması ........ bir özellikte olduğunu gösterir.",
        imgSrc : "img/analogy.png",
        choiceA : "bölgesel",
        choiceB : "kavramsal",
        choiceC : "evrensel",
	    choiceD : "estetik",
	    correct : "C"
    } , {
        question : "6.	........ bilimsel yöntem ile olaylar arasında ulaşılan değişmez neden-sonuç ilişkisidir.",
        imgSrc : "img/head-concept.jpg",
        choiceA : "Teori",
        choiceB : "Yasa",
        choiceC : "Hipotez",
	    choiceD : "Kuram",
	    correct : "B"
    } , {
        question : "7.	İnsanın ahlaksal eylemlerinde iyiye yönelmesi ........ .",
        imgSrc : "img/reality.jpg",
        choiceA : "pragmatizmdir",
        choiceB : "evrenseldir",
        choiceC : "estetiktir",
	    choiceD : "erdemdir",
	    correct : "D"
    } , {
        question : "8.	........ ahlaksal eylemin amacının haz olduğunu savunan felsefedir.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Entüisyonizm",
        choiceB : "Hedonizm",
        choiceC : "Liberalizm",
	    choiceD : "Ateizm",
	    correct : "B"
    } , {
        question : "9.	Tanrı’nın varlığının ya da yokluğunun bilinemeyeceğini savunan görüş ........ .",
        imgSrc : "img/tumevarim2.png",
        choiceA : "ateizmdir",
        choiceB : "panteizmdir",
        choiceC : "agnostisizmdir",
	    choiceD : "deizmdir",
	    correct : "C"
    } , {
        question : "10.	Tanrı ve evrenin aynı olduğunu savunan görüş ........ .",
        imgSrc : "img/kavram.jpg",
        choiceA : "ateizmdir",
        choiceB : "panteizmdir",
        choiceC : "agnostisizmdir",
	    choiceD : "deizmdir",
	    correct : "B"
    } , {
        question : "11.	Devletin iktidar gücünü kullanabilmesi ........ ",
        imgSrc : "img/dil.png",
        choiceA : "egemenliktir",
        choiceB : "adaletdir",
        choiceC : "bağımsızlıktır",
	    choiceD : "hürriyetdir",
	    correct : "A"
    } , {
        question : "12.	Toplumda bireylerin yasalara bağlı beklentileri ........ .",
        imgSrc : "img/69.jpg",
        choiceA : "sorumluluktur",
        choiceB : "haktır",
        choiceC : "bağımsızlıktır",
	    choiceD : "egemenliktir",
	    correct : "B"
    } , {
        question : "13.	........ göre güzellik, iyi ideasına dayalıdır.",
        imgSrc : "img/argument.png",
        choiceA : "Aristoteles' e",
        choiceB : "Sokrates' e",
        choiceC : "Platon’a",
	    choiceD : "Herakleitos' a",
	    correct : "C"
    } , {
        question : "14.	Sanat ve felsefenin ortak özelliklerinden biri ........ olmalarıdır.",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "somutsal",
        choiceB : "öznel",
        choiceC : "nesnel",
	    choiceD : "argümansal",
	    correct : "B"
    } , 	{
        question : "15. Varlığın var olduğunu ve iki ayrı cevherden oluştuğunu savunan görüşe ........  denir. Varlık ruh ve madde olarak farklı tözlere sahiptir. Bu görüşü savunan çağdaş felsefenin kurucusu ........ tir. ",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "monizm, Thales ",
        choiceB : "düalizm, Decartes",
        choiceC : "pluralizm, Empedokles",
	    choiceD : "monizm, Empedokles ",
	    correct : "B"
    } , 	{
        question : "16.	Varlığın ikiden fazla töze dayandığını savunan görüşe ....... denir.Bu görüşü savunan filozof ........ tir. ",
        imgSrc : "img/gerceklik.png",
        choiceA : "pluralizm, Anaskimenes’ ",
        choiceB : "düalizm, Decartes",
        choiceC : "pluralizm, Empedokles",
	    choiceD : "monizm, Empedokles ",
	    correct : "C"
    } ,	{
        question : "17.	Varlığın idea, kavram ya da düşünce cinsinden olduğunu savunan .......'e göre her varlık madde ve formdan oluşur. İdea (form), tek tek nesnelerin özüdür. Bu filozofa göre duyulur dünyadaki her şey form kazanmış maddedir.",
        imgSrc : "img/dusunme2.png",
        choiceA : "Platon",
        choiceB : "Aristoteles",
        choiceC : "Sokrates",
	    choiceD : "Herakleitos",
	    correct : "B"
    } , 	{
        question : "18.	Varlığın idea, kavram ya da düşünce cinsinden olduğunu savunan .......'e göre her varlık düşünerek anlamdırılabilen, değişime kapalı idealardan ve duyusal bir varlığa bağlı idealardan yararlanarak var olan fenomenlerden oluşur. Fenomenler gerçekliğin birer kopyasıdır.",
        choiceA : "Platon",
        choiceB : "Aristoteles",
        choiceC : "Sokrates",
	    choiceD : "Herakleitos",
	    correct : "A"
    } 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	





	
	

	
// 18 tane	
	
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
















