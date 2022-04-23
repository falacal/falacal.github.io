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
        question : "1. Sanata konu olan nesne, varlık   ........ dır. ",
        imgSrc : "img/iknaetmek.jpg",
        choiceA : "suje",
        choiceB : "erdem",
        choiceC : "obje",
	    choiceD : "varlık",
	    correct : "C"
    }, {
        question : "2. Sanatla ilgilenen, sanattan anlayan kişiye denir",
        imgSrc : "img/onermecesitleri.jpg",
        choiceA : "Suje",
        choiceB : "Erdem",
        choiceC : "Obje",
	    choiceD : "Varlık",
	    correct : "A"
    },	{
        question : "3. Sanatla uğraşan ve ondan anlayan kişinin sanat eserine karşı gösterdiği ilgiye denir.",
        imgSrc : "img/mantık-sembolleri.png",
        choiceA : "Estetik haz",
        choiceB : "Estetik tavır",
        choiceC : "Sanat eseri",
	    choiceD : "Estetik yargı",
	    correct : "B"
		
    },    {
        question : "4. Estetik bir öznenin; estetik bir tavırla, estetik nesneye yaklaşması sonucunda duyduğu estetik heyecan veya duygudur." ,
		imgSrc : "img/olumlu-olumsuz.png",
        choiceA : "Estetik haz",
        choiceB : "Estetik tavır",
        choiceC : "Sanat eseri",
	    choiceD : "Estetik yargı",
	    correct : "A"
    }, {
        question : "5.	Öznenin sanat eseri (nesne) hakkında güzel veya hoş olduğu yönünde bir karara varmasına denir.",
        imgSrc : "img/analogy.png",
        choiceA : "Estetik haz",
        choiceB : "Estetik tavır",
        choiceC : "Sanat eseri",
	    choiceD : "Estetik yargı",
	    correct : "D"
    } , {
        question : "6.	Estetik öznenin estetik nesneden hoşlanma ve beğeni duygusuna ........  denir ",
        imgSrc : "img/head-concept.jpg",
        choiceA : "güzel, güzellik",
        choiceB : "yüce",
        choiceC : "estetik",
	    choiceD : "sanat eseri",
	    correct : "A"
    } , {
        question : "7. İnsanın duygularını okşayan güzelliktir. Zevk veren, beğenilen anlamındadır.",
        imgSrc : "img/reality.jpg",
        choiceA : "Yüce",
        choiceB : "Beğeni",
        choiceC : "Hoş",
	    choiceD : "bilginin değeri",
	    correct : "C"
    } , {
        question : "8. Büyük, ulu, ulvi, Hayranlık uyandıran, ulaşılması zor olan şey",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Beğeni",
        choiceB : "Yüce",
        choiceC : "Hoş",
	    choiceD : "Resim",
	    correct : "B"
    } , {
        question : "9. Yaratıcılık ve ustalık sonucu ortaya çıkan ürüne denir. ",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Estetik haz",
        choiceB : "Estetik tavır",
        choiceC : "Sanat eseri",
	    choiceD : "Estetik yargı",
	    correct : "C"
    } , {
        question : "10.	Sanatçının bir şeyi benzetme yoluyla eserine aktarmasıdır.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Beğeni",
        choiceB : "Yüce",
        choiceC : "Hoş",
	    choiceD : "Taklit (Mimesis)",
	    correct : "D"
    } , {
        question : "11.	Sanat eseri sanatçının bireysel bir ürünüdür. ",
        imgSrc : "img/dil.png",
        choiceA : "Yaratıcılık",
        choiceB : "Teklik",
        choiceC : "Öznellik",
	    choiceD : "Güzellik",
	    correct : "C"
    } , {
        question : "12.	Sanat eseri sanatçının duygu, düşünce ve hayallerini yeni bir form, biçim ve sunumda dile getirmesidir.  ",
        imgSrc : "img/69.jpg",
        choiceA : "Yaratıcılık",
        choiceB : "Teklik",
        choiceC : "Öznellik",
	    choiceD : "Güzellik",
	    correct : "A"
    } , {
        question : "13.	Sanat eseri bir seri üretimle ortaya çıkmaz. Sanat eseri eşsizdir, aynısı yoktur.",
        imgSrc : "img/argument.png",
        choiceA : "Yaratıcılık",
        choiceB : "Teklik",
        choiceC : "Öznellik",
	    choiceD : "Güzellik",
	    correct : "B"
    } , {
        question : "14.	Sanatın temel amacı estetik bir kaygı taşımaktır. Bu estetik kaygı eserde dile getirilir.",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "Yaratıcılık",
        choiceB : "Teklik",
        choiceC : "Öznellik",
	    choiceD : "Güzellik",
	    correct : "D"
    } , 	{
        question : "15. Sanat eseri belirli bir sanatçıya veya topluma ait olsa da bütün insanlığı kapsayan bir mesaj taşıyacaktır.",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "Yaratıcılık",
        choiceB : "Teklik",
        choiceC : "Evrensellik",
	    choiceD : "Güzellik",
	    correct : "C"
    } , 	{
        question : "16. Sanatı açıklayan kuramlardan biri Taklit Olarak Sanat olup bu kurama göre  Sanat doğanın taklididir. Bu kuramın temsilcileri ....... dır.	",
        imgSrc : "img/gerceklik.png",
        choiceA : "B. Croce",
        choiceB : "F. Schiller ",
        choiceC : "Platon, Aristo",
	    choiceD : "Rayda giden Tren",
	    correct : "C"
    } ,	{
        question : "17.	Sanatı açıklayan kuramlardan biri Yaratma Olarak Sanat olup bu kurama göre  Sanat insanın üstün bir emeği ve yaratıcılığıdır. Bu kuramın temsilcileri ....... dır.	",
        imgSrc : "img/dusunme2.png",
        choiceA : "B. Croce",
        choiceB : "F. Schiller ",
        choiceC : "Platon, Aristo",
	    choiceD : "Damda gezen Kedi",
	    correct : "A"
    } , 	{
        question : "18.	Sanatı açıklayan kuramlardan biri Oyun Olarak Sanat olup bu kurama göre  Sanatın temel amacı oyundur. Bu kuramın temsilcileri ....... dır.	",
        imgSrc : "",
        choiceA : "B. Croce",
        choiceB : "F. Schiller ",
        choiceC : "Platon, Aristo",
	    choiceD : "Damda gezen Kedi",
	    correct : "B"
    } , 	{
        question : "19.  Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Pythogoras (Pisagor) a göre güzellik, ........ dir.	 ",
        imgSrc : "",
		choiceA : "güzel ideası ",
        choiceB : "matematik denge ve ahenk",
        choiceC : "denge, uyum, simetri",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "B"
    } , 	{
        question : "20. Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Platon a göre güzellik, ........ dir.	 ",
        imgSrc : "",
		choiceA : "güzel ideası ",
        choiceB : "matematik denge ve ahenk",
        choiceC : "denge, uyum, simetri",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "A"
    } , 	{
        question : "21.	Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Aristoteles e göre güzellik, ........ dir.	 ", 
        imgSrc : "",
		choiceA : "güzel ideası ",
        choiceB : "matematik denge ve ahenk",
        choiceC : "denge, uyum, simetri",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "C"
    } , 	{
        question : "22.	Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Plotinos a göre güzellik, ........ dir.	 ", 
        imgSrc : "",
		choiceA : "güzel ideası ",
        choiceB : "matematik denge ve ahenk",
        choiceC : "denge, uyum, simetri",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "D"
    } , 	{
        question : "23. Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Kant a göre güzellik, ........ dir.	 ", 
        imgSrc : "",
		choiceA : "mutlak varlığın (geist) dışa vurumu",
        choiceB : "denge, uyum, simetri",
        choiceC : "karşılıksız hoşlanılan, objenin amacına uygunluğu",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "C"
    } , 	{
        question : "24. Filozoflar güzelliğin ortak bir biçim ve öze sahip olduğunu düşünmüşlerdir. Hegel e  göre güzellik, ........ dir.	 ", 
        imgSrc : "",
		choiceA : "mutlak varlığın (geist) dışa vurumu",
        choiceB : "denge, uyum, simetri",
        choiceC : "karşılıksız hoşlanılan, objenin amacına uygunluğu",
	    choiceD : "Tanrısal bir yansıma",
	    correct : "A"
    } 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	





	
	

	
// 32 tane	
	
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
















