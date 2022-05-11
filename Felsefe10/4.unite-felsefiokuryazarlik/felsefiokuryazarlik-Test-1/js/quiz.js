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
        question : "1.  Felsefi metinler .............. ilişkisi içerisinde okunmalıdır.",
        imgSrc : "img/iknaetmek.jpg",
        choiceA : "yorumlama",
        choiceB : "parça bütün",
        choiceC : "temellendirme",
	    choiceD : "çok yönlü",
	    correct : "B"
    }, {
        question : "2.   Felsefi deneme .............. ve yazmak bireye felsefi konularda düşünme yeteneği kazandırır.",
        imgSrc : "img/onermecesitleri.jpg",
        choiceA : "yorumlama",
        choiceB : "parça bütün",
        choiceC : "temellendirme",
	    choiceD : "okumak",
	    correct : "D"
    },	{
        question : "3.  Felsefi perspektiften bakabilmenin en önemli özelliği .............. düşünebilmektir.",
		imgSrc : "img/mantık-sembolleri.png",
        choiceA : "eleştirel",
        choiceB : "parça bütün",
        choiceC : "temellendirme",
	    choiceD : "çok yönlü",
	    correct : "A"
		
    },    {
        question : "4.  .............. metinler, filozofun düşünsel sistemini yansıtır.",
        imgSrc : "img/olumlu-olumsuz.png",
        choiceA : "eleştirel",
        choiceB : "parça bütün",
        choiceC : "felsefi",
	    choiceD : "çok yönlü",
	    correct : "C"
    }, {
        question : "5.	Herkesin aynı biçimde düşündüğü yerde .............. mümkün değildir.",
        imgSrc : "img/analogy.png",
        choiceA : "yorumlama",
        choiceB : "parça bütün",
        choiceC : "temellendirme",
	    choiceD : "gelişme",
 	    correct : "D"
    } , {
        question : "6.	 .............. herhangi bir konuda özel görüş ve düşüncelerin anlatıldığı yazılardır.",
        imgSrc : "",
        choiceA : "Eleştiri ",
        choiceB : "Parça bütün",
        choiceC : "Felsefi",
	    choiceD : "Deneme",
	    correct : "D"
    } , {
        question : "7.  Farklı bakabilmek aynı zamanda .............. düşünebilmek demektir.",
        imgSrc : "img/reality.jpg",
        choiceA : "eleştirel",
        choiceB : "parça bütün",
        choiceC : "felsefi",
	    choiceD : "çok yönlü",
	    correct : "D"
    } , {
        question : "8. Elde edilen fikirlerin belirli bir bakış açısıyla anlamlandırılmasına .............. denir.", 
        imgSrc : "img/tumevarim.jpg",
        choiceA : "yorumlama",
        choiceB : "parça bütün",
        choiceC : "temellendirme",
	    choiceD : "okumak",
	    correct : "A"
    } ,







	{
        question : "9.  .............. bir düşünceyi veya görüşü gerekçe ve dayanak göstererek ispatlama amacını taşır. ",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Yorumlama",
        choiceB : "Parça bütün",
        choiceC : "Temellendirme",
	    choiceD : "Okumak",
	    correct : "C"
    } , {
        question : "10.	Daha önce üzerine düşünülmüş, görüş oluşturulmuş bir felsefi problemin başka bir filozof tarafından yeniden değerlendirilmesi felsefenin ........... özelliği ile açıklanır.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "öncül",
        choiceB : "akıl yürütme",
        choiceC : "alternatif görüş geliştirme",
	    choiceD : "refleksif olma",
	    correct : "D"
    } , {
        question : "11.	  Bir metinden yola çıkarak metnin argümanlarından farklı yeni argümanlar geliştirerek metnin zenginleştirilmesi ve metnin yeniden üretilmesine ........... denir.",
        imgSrc : "img/dil.png",
        choiceA : "öncül",
        choiceB : "akıl yürütme",
        choiceC : "alternatif görüş geliştirme",
	    choiceD : "refleksif olma",
	    correct : "C"
    } , {
        question : "12.	 Felsefi denemelerde ileri sürülen iddialar (sav) deney ve gözlemle değil, ........... ile kanıtlanır.",
        imgSrc : "img/69.jpg",
        choiceA : "öncül",
        choiceB : "akıl yürütme",
        choiceC : "alternatif görüş geliştirme",
	    choiceD : "refleksif olma",
	    correct : "B"
    } , {
        question : "13.	 Mantıksal akıl yürütmelerde her zaman ........... sonuçtan önce gelir.    ",
        imgSrc : "img/argument.png",
        choiceA : "öncül",
        choiceB : "akıl yürütme",
        choiceC : "alternatif görüş geliştirme",
	    choiceD : "refleksif olma",
	    correct : "A"
    } , {
        question : "14.	 Dil konuşma aracından önce ........... nin yapı taşıdır.   ",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "bilgi",
        choiceB : "düşünce",
        choiceC : "özgünlük",
	    choiceD : "akıl yürütme",
	    correct : "B"
    } , 	{
        question : "15.  Düşünme zihnin gerçekleştirdiği bir faaliyet (edim) iken bu faaliyetin ortaya çıkardığı ürüne ........... denir.",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "bilgi",
        choiceB : "düşünce",
        choiceC : "özgünlük",
	    choiceD : "akıl yürütme",
	    correct : "A"
    } , 	{
        question : "16.	 Felsefi denemelerin değerini belirleyen en önemli ölçüt tutarlılığının yanında ........... tür.",
        imgSrc : "img/gerceklik.png",
        choiceA : "bilgi",
        choiceB : "düşünce",
        choiceC : "özgünlük",
	    choiceD : "akıl yürütme",
	    correct : "D"
    } ,	{
        question : "17.	 Metin çözümlenirken öncelikle metinde geçen problemin; felsefenin varlık, ........ ve ........ alanlarından hangisiyle ilişkili olduğu belirlenir.",
        imgSrc : "img/dusunme2.png",
        choiceA : "tümel, uzlaşım",
        choiceB : "tümel, tutarlılık",
        choiceC : "bilgi, değer",
	    choiceD : "uygunluk, tutarlılık",
	    correct : "C"
    } , 	{
        question : "18.	Bir metinde geçen kavram, fikir ve o fikri desteleyen yargıları bulmak için ........ yapmak gerekir. ",
        imgSrc : "",
        choiceA : "metin analizi",
        choiceB : "kavramlar",
        choiceC : "problemler",
	    choiceD : "alternatif",
	    correct : "A"
    } , 	{
        question : "19.  Felsefi metnin temel bileşenleri ........  ve fikirlere destek olan diğer düşüncelerdir.  ",
        imgSrc : "",
        choiceA : "metin analizi",
        choiceB : "kavramlar",
        choiceC : "problemler",
	    choiceD : "alternatif",
	    correct : "B"
    } , 	{
        question : "20.	 Bir düşüncenin yerine geçebilecek başka bir görüşe ........ fikir denir.",
        imgSrc : "",
        choiceA : "metin analizi",
        choiceB : "kavramlar",
        choiceC : "problemler",
	    choiceD : "alternatif",
	    correct : "D"
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
















