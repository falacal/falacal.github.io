// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1.Homojen karışımlara  ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "prinç",
        choiceC : "çözelti(eriyik; solüsyon)",
		correct : "C",
    },     {
        question : "2. Birbiri içerisinde her bölümünde eşit şekilde dağılmış olan karışımlara  ........... karışım denir.",
        imgSrc : "img/dusun.png",
        choiceA : "homojen",
        choiceB : "heterojen",
        choiceC : "kedi",
		correct : "A"
    }
	,	    {
        question : "3. Birbiri içerisinde her bölümünde eşit şekilde dağılmamış olan karışımlara ........... karışım denir.",
        imgSrc : "img/dusun.png",
        choiceA : "homojen",
        choiceB : "heterojen",
        choiceC : "timsah",
		correct : "B"
    },      {
        question : "4. Bir katının sıvı içerisinde çözünmeyip dağılmasıyla oluşan karışımlara ........... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "kremit",
        choiceB : "süspansiyon",
        choiceC : "emülsiyon ",
		correct : "B"
    },        {
        question : "5. Örneğin tebeşir tozu su karışımı bir ............  dır/dir/dur.",
        imgSrc : "img/dusun.png",
        choiceA : "emülsiyon",
        choiceB : "tuğla",
        choiceC : "süspansiyon ",
		correct : "C"
    },
	
		
	
	{
        question : "6. Çözünmeyen iki sıvının birbiri içerisinde heterojen dağılmasıyla oluşan karışımlara  ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "briket",
        choiceB : "süspansiyon",
        choiceC : "emülsiyon ",
		correct : "C"
    },	    {
        question : "7. Zeytinyağı + su karışımı ............ a örnektir.",
        imgSrc : "img/dusun.png",
        choiceA : "emülsiyon",
        choiceB : "süspansiyon",
        choiceC : "metal",
		correct : "A"
    } , 
 	     
 	    {
        question : "8. Bir sıvının veya bir katının gaz içinde dağılmasıyla oluşan heterojen karışımlara ...........  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "emülsiyon",
        choiceB : "süspansiyon",
        choiceC : "aerosol",
		correct : "C"
    } 
	, 
 	    {
        question : "9. Duman ve sis ............ örnek olarak verilebilir.",
        imgSrc : "img/dusun.png",
        choiceA : "aerosollere",
        choiceB : "emülsiyonlara",
        choiceC : "süspansiyonlara",
		correct : "A"
    } 
	, 
 	    {
        question : "10. Bir maddenin sıvı içerinde 'asılı' kalmasıyla oluşan heterojen karışımlara ...........  karışımlar denir.",
        imgSrc : "img/dusun.png",
        choiceA : "timsah",
        choiceB : "tepeler",
        choiceC : "kolloit ",
		correct : "C"
    } 
	, 
 	    {
        question : "11. Süt bir  ....... karışımdır. ",
        imgSrc : "img/dusun.png",
        choiceA : "kolloit",
        choiceB : "kedi",
        choiceC : "emülsiyon ",
		correct : "A"
    } 
	, 
 	    {
        question : "12. Bakır + Çinko homojen karışımına alaşım denir ve ........ ismi verilir.",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "prinç",
        choiceC : "lehim",
		correct : "B"
    } 
	, 
 	    {
        question : "13. Kalay (Sn)  + kurşun (Pb) homojen karışımına alaşım denir ve ........ ismi verilir.",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "prinç",
        choiceC : "lehim",
		correct : "C"
    } 
	, 
 	    {
        question : "14. Kalay, bakır ve çinko karışımı alaşıma  ....... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "prinç",
        choiceC : "tunç",
		correct : "C"
    } 
	, 
 	    {
        question : "15. Paladyum 100 Santigrad dereceye ısıtıldığında üzerine  hidrojen gazı püskürtülürse hidrojeni soğurur (içine çeker)ve bu durum  .........  örneğidir.",
        imgSrc : "img/dusun.png",
        choiceA : "aerosol",
        choiceB : "emülsiyon",
        choiceC : "alaşım",
		correct : "A"
    } 
	
	, 
 	    {
        question : "16. Çözeltiler içerdikleri çözünen maddenin göreceli  miktarlarına göre ....... ve ....... olmak üzere ikiye ayrılırlar.",
        imgSrc : "img/dusun.png",
        choiceA : "asit -baz ",
        choiceB : "seyreltik - derişik",
        choiceC : "babun - timsah ",
		correct : "B"
    } 
	, 
 	    {
        question : "17. Verilen bir çözelti için belirli miktar çözücüde çözünmüş madde miktarına .......  denir.",
        imgSrc : "img/dusun.png",
        choiceA : "kalay",
        choiceB : "kleptomani",
        choiceC : "derişim",
		correct : "C"
    } 
	, 
 	    {
        question : "18. Derişimin düşük olduğu çözeltilere  ....... çözelti denir.",
        imgSrc : "img/dusun.png",
        choiceA : "seyreltik",
        choiceB : "derişik",
        choiceC : "bronz",
		correct : "A"
    } 
	
	, 
 	    {
        question : "19. Derişimin yüksek olduğu çözeltilere ....... çözelti denir.",
        imgSrc : "img/dusun.png",
        choiceA : "seyreltik",
        choiceB : "derişik",
        choiceC : "bronz",
		correct : "B"
    } 

, 
 	    {
        question : "20. Çözünen katının çözeltiden ayrılıp, kristaller oluşturma işlemine ....... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "seyreltik",
        choiceB : "derişik",
        choiceC : "kristalleşme",
		correct : "C"
    } , 

 	{
        question : "21. Heterojen karışımlarda miktarı az olan bileşene  ......... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "dağılan faz ",
        choiceB : "dağıtıcı faz ",
        choiceC : "horoz",
		correct : "A"
    } , 
 	{
        question : "22. Heterojen karışımlarda miktarı fazla  olan bileşene  ......... denir.",
        imgSrc : "img/dusun.png",
        choiceA : "dağılan faz ",
        choiceB : "dağıtıcı faz ",
        choiceC : "horoz",
		correct : "B"
    } , 
 	    {
		question : "23. Kekik bitkisinden kekik yağı elde etmek için ......... yöntemi kullanılır.",  
        imgSrc : "img/dusun.png",
        choiceA : "çözelti",
        choiceB : "heterojen",
        choiceC : "özütleme ",
		correct : "C"
    } , 
	{
        question : "24. Süspansiyon, emülsiyon, aerosol birer ......... karışımdır.",
        imgSrc : "img/dusun.png",
        choiceA : "çözelti",
        choiceB : "heterojen",
        choiceC : "özütleme ",
		correct : "B"
    } ,
 	    {
        question : "25. Temiz hava, bir …………………… örneğidir. ",
        imgSrc : "img/dusun.png",
        choiceA : "çözelti",
        choiceB : "heterojen",
        choiceC : "özütleme ",
		correct : "A"
    } ,
 	    {
        question : "26. Çözünme sürecinde çözücü moleküllerinin birbirinden ayrılması, enerji yönünden …………… olaydır. ",
        imgSrc : "img/dusun.png",
        choiceA : "ekzotermik" ,
        choiceB : "endotermik" ,
		choiceC : "özütleme ",
		correct : "B"
    } ,
 	    {
        question : "27. Çözeltiler …………………… ile incelenerek diğer karışımlardan kolaylıkla ayrılabilir.",
        imgSrc : "img/dusun.png",
        choiceA : "ekzotermik" ,
        choiceB : "endotermik" ,
		choiceC : "Tyndall etkisi  ",
		correct : "C"
    } ,
 	    {
        question : "28. Bir içme suyunda 0,5 ………………… NH<sup>+</sup><sub>4</sub> olması demek, 1 L içme suyunda 0,5 mg NH<sup>+</sup><sub>4</sub> bulunması demektir.",
        imgSrc : "img/dusun.png",
        choiceA : "bbg" ,
        choiceB : "ppm" ,
		choiceC : "ccm ",
		correct : "B"
    } ,
 	    {
        question : "29. Apolar bir maddenin, apolar bir çözücü içinde çözünmesi …………………… kuvvetleri ile açıklanabilir. ",
        imgSrc : "img/dusun.png",
        choiceA : "ekzotermik" ,
        choiceB : "endotermik" ,
		choiceC : "London",
		correct : "C"
    } ,
 	    {
        question : "30. Çözeltilerde çözünenin tanecik boyutu 10<sup>–9</sup> m’ den küçüktür. ",
        
        imgSrc : "img/dusun.png",
        choiceA : "Belki" ,
        choiceB : "Doğru" ,
        choiceC : "Yanlış ",		
		correct : "B"
    }  ,
 	    {
        question : "31. Çözünme olayında, çözünen taneciklerin çevresinin çözücü tanecikleri ile sarılmasına ..... denir ",
        
        imgSrc : "img/dusun.png",
        choiceA : "hidratasyon  " ,
        choiceB : "solvatasyon kuvvetleri  " ,
        choiceC : "solvatasyon",		
		correct : "C"
    }  ,
 	    {
        question : "32. Çözünen ve çözücü tanecikleri arasında meydana gelen çekim kuvvetlerine ..... denir ",
        
        imgSrc : "img/dusun.png",
        choiceA : "hidratasyon  " ,
        choiceB : "solvatasyon kuvvetleri  " ,
        choiceC : "solvatasyon",			
		correct : "B"
    }  ,
 	    {
        question : "33. Çözücü tanecikleri ile sarılmış taneciklere ise ..... adı verilir. ",
        
        imgSrc : "img/dusun.png",
       choiceA : "solvatize tanecikler" ,
        choiceB : "solvatasyon kuvvetleri  " ,
        choiceC : "solvatasyon",	
		correct : "A"
    }  ,
 	    {
        question : "34. Çözünme sırasında çözücü olarak su kullanılmış ise solvatasyon olayı ..... özel adını alır. ",
        imgSrc : "img/dusun.png",
        choiceA : "solvatize tanecikler" ,
        choiceB : "solvatasyon kuvvetleri  " ,
        choiceC : "hidratasyon  ",		
		correct : "C"
    }  ,
 	    {
        question : "35. Etrafı su molekülleriyle çevrilmiş taneciklere ..... denir  ",
        imgSrc : "img/dusun.png",
        choiceA : "solvatize tanecikler" ,
        choiceB : "Hidratize tanecikler   " ,
        choiceC : "hidratasyon  ",		
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
    choiceC.innerHTML = q.choiceC;
    
	
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
    	if (scorePerCent < 85 ) {
		   var audio = new Audio('img/basaramadim-.mp3');
		   audio.play();
	     }
		 
		 if (scorePerCent > 85 ) {
		   var audio = new Audio('img/Rasputin.mp3');
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
















