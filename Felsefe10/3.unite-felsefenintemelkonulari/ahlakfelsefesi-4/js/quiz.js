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
        question : "1. Evrensel Ahlak Yasasının Varlığını Kabul Etmeyen Görüşlerden ...... e göre ahlaksal eylemin amacının haz olduğunu savunan felsefedir. Bu görüşe göre haz kişiye ve yere göre değiştiğinden evrensel bir ahlak yasası yoktur.",
        imgSrc : "img/etik1.png",
        choiceA : "Egoizm (Bencilik)",
        choiceB : "Hedonizm (Hazcılık)",
        choiceC : "Pragmatizm (Faydacılık)",
	    choiceD : "Anarşizm",
	    correct : "B"
    }, {
        question : "2. ...... insanın eylemlerinde kendi çıkarına öncelik vermesi gerektiğini savunan görüştür. Önemli temsilcisi Thomas Hobbes’a göre insan, doğası gereği bencildir. Ahlaksal eylemde egemen olan çıkar olduğundan herkes için geçerli ahlak kuralları yoktur.",
        imgSrc : "img/etik1.png",
        choiceA : "Egoizm ",
        choiceB : "Hedonizm ",
        choiceC : "Pragmatizm ",
	    choiceD : "Anarşizm",
	    correct : "A"
    },	{
        question : "3. ...... bir eylemin bireye yarar sağladığı zaman iyi olduğunu savunan görüştür. Buna göre fayda insana ve topluma göre değiştiğinden evrensel ahlak yasası yoktur. Önemli temsilcileri William James ve John Dewey’dir.",
        imgSrc : "img/etik1.png",
        choiceA : "Egoizm ",
        choiceB : "Hedonizm ",
        choiceC : "Pragmatizm ",
	    choiceD : "Anarşizm",
	    correct : "C"
		
    },    {
        question : "4. ...... Sınırsız özgürlükten yana olan bir görüştür. Bu görüşü benimseyenler özgürlüğü sınırlayacak tüm kural ve kurum ların ortadan kaldırılması gerektiğini savunurlar. Önemli temsilcileri Max Stirner (1806-1856), Mihail Bakunin (1814-1876) ve Proudhon’dur (1809-1865).",
        imgSrc : "img/etik1.png",
        choiceA : "Egoizm ",
        choiceB : "Hedonizm ",
        choiceC : "Pragmatizm ",
	    choiceD : "Anarşizm",
	    correct : "D"
    } ,    {
        question : "5. ...... akımının temsilcisi Nietzsche' ye göre akıl değil, irade; toplum değil birey önemlidir. Bu nedenle var olan ahlak kuralları ortadan kaldırılmalı ve yerine güçlü iradeye sahip olan 'üst insan' tarafından yeni kurallar getirilmelidir. İnsan yapayalnızdır.",
        imgSrc : "img/etik1.png",
        choiceA : "Egoizm ",
        choiceB : "Hedonizm ",
        choiceC : "Pragmatizm ",
	    choiceD : "Nihilizm ",
	    correct : "D"
    } ,	{
        question : "6. Evrensel ahlak yasası mümkün olmadığını savunan ...... akımının temsilci si Jean Paul Sartre bu düşüncenin temsilcilerin dendir. Varoluşçuluk, insanın varoluşu ile doğal nesnelere özgü varlık türü arasında ki karşıtlığı vurgulayan felsefi akımdır.",
        imgSrc : "img/etik1.png",
        choiceA : "determinizim",
        choiceB : "otodeterminizim",
        choiceC : "Egzistansiyalizm",
	    choiceD : "indeterminizim",
	    correct : "C"
		
    },    {
        question : "7. Evrensel ahlak yasası mümkündür diyen ..... akımının temsilcisi  olan J. Bentham ve J. S. Mill’e göre insan ahlaksal eylemlerinde, diğer insanların da yararını dikkate almalıdır. Her eylemde olabildiğin ce çok insanın olabildiğince çok mutluluğu göz önünde tutulmalıdır.",
        imgSrc : "img/etik1.png",
        choiceA : "Entüisyonizm (Sezgicilik) ",
        choiceB : "Ütilitarizm(Olanakçılık, Faydacılık)",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "B"
    } ,    {
        question : "8. Evrensel ahlak yasası mümkündür diyen ..... akımının temsilcisi  olan Henry Louis Bergson’a göre insan neyin iyi, neyin kötü olduğunu ancak sezgiyle anlayabilir. İnsan ahlaksal eylemde kendi sezgisine uygun davranırsa herkes için iyi olanı yapmış olur.",
        imgSrc : "img/etik1.png",
        choiceA : "Entüisyonizm ",
        choiceB : "Ütilitarizm",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "A"
    } ,    {
        question : "9. Evrensel ahlak yasası mümkündür diyen ..... İnsanın mutlu olabilmesi için gerekli olan ahlaki davranışın bilgi ile elde edilebileceğini savunan bir yaklaşımdır. Başlıca temsilcileri Sokrates, Platon'dur ",
        imgSrc : "img/etik1.png",
        choiceA : "Erdem Etiği",
        choiceB : "Entüisyonizm",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "A"
    } ,    {
        question : "10. Evrensel ahlak yasası mümkündür diyen .....  temsilcisi  Spinozaya göre, ahlak anlayışında insanı doğanın ayrılmaz bir parçası olarak görür. Ona göre insan da diğer varlıklar gibi tek tözün ürünüdür. Tek töz olan Tanrı iki temel niteliği çerçevesinde farklı görünümler almışdır.",
        imgSrc : "img/etik1.png",
        choiceA : "Entüisyonizm (Sezgicilik) ",
        choiceB : "Erdem Etiği",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "C"
    } , {
        question : "11. Evrensel ahlak yasası mümkündür diyen ..... temsilcisi Kant'a göre bir eylem bir eğilimden ya da bir duygudan dolayı değil de bir ödev duygusuyla gerçekleştirilmişse ahlaki bir eylem olabilir. ",
        imgSrc : "img/etik1.png",
        choiceA : "Entüisyonizm (Sezgicilik) ",
        choiceB : "Ütilitarizm(Olanakçılık, Faydacılık)",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "D"
    } , {
        question : "12. insan eylemlerinin son ereği olarak mutluluğu gören anlayışlara genel olarak ......... denir.",
        imgSrc : "img/etik1.png",
        choiceA : "Entüisyonizm (Sezgicilik) ",
        choiceB : "Eudaimonizm (öydaymonizm)",
        choiceC : "Ahlaksal Determinizm",
	    choiceD : "Ödev Etiği",
	    correct : "B"
    } 
	
	
	
	
	
	
	
	
	
	
	
	
	

// 12 tane	
	
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
















