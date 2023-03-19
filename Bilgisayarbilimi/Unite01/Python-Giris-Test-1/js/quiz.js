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
        question : "01- Python, öğrenmesi kolay, tamamen özgür ve ücretsiz bir programlama dilidir. Nesnelere dayalı bir dil olup okunabilirliği yüksektir",
        imgSrc : "img/dusunuyor.png",
        choiceA : "Yanlış",
        choiceB : "Doğru",
        choiceC : "Emin değilim",
 		correct : "B"
    }, {
        question : "02- Tam sayılar pozitif, negatif ya da sıfır değeri alabilir. Kesirli değerleri içermez. Örneğin 99, 105, 0, -56 ve 7896 birer tam sayıdır.",
        imgSrc : "img/dusunuyor.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        choiceC : "Emin değilim",
 		correct : "A"

    },	{
        question : "03- Python, toplama işlemi için toplama (+) sembolünü kullanır. Böylece yorumlayıcı bir hesap makinesi gibi işlem yapar. <br> >>> 5 + 4 <br> 9",
        imgSrc : "img/dusunuyor.png",  
		choiceA : "Yanlış",
        choiceB : "Doğru",
        choiceC : "Emin değilim",
 		correct : "B"
			

    }, {
        question : '04- Python ifadelerinin türünü belirtmek için type() fonksiyonu kullanılabilir. Örneğin aşağıdaki type(4) komutu, 4 sayısının türünün <br> >>> type(4) <br> <class "int" <br> int yani tamsayı olduğunu gösterir',
        imgSrc : "img/dusunuyor.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        choiceC : "Emin değilim",
 		correct : "A"
	    
    }, 	{
        question : '05- Python ifadelerinin türünü belirtmek için type() fonksiyonu kullanılabilir. Örneğin aşağıdaki type("4") komutu, 4 sayısının türünün <br> >>> type(4) <br> <class "str" <br> str yani string(sayısal olmayan veri karakter)  olduğunu gösterir',
        imgSrc : "img/dusunuyor.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
        choiceC : "Emin değilim",
 		correct : "A"
    },{
        question : '06- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=3 <br> >>> b=2 <br> >>> c=a+b <br> >>> print(c)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "1",
        choiceB : "6",
        choiceC : "5",
 		correct : "C"
    }, {
        question : '07- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=3 <br> >>> b=2 <br> >>> c=a**b <br> >>> print(c)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "6",
        choiceB : "9",
        choiceC : "1",
 		correct : "B"
    }, {
        question : '08- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=2 <br> >>> b=4 <br> >>> c=a**b <br> >>> print(c)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "8",
        choiceB : "4",
        choiceC : "16",
 		correct : "C"
    }, {
        question : '09- I. int(sayı) fonksiyonu içerisindeki sayıyı tamsayıya dönüştürür. <br> II. float(sayı) fonksiyonu içerisindeki sayıyı real sayıya dönüştürür.',
        imgSrc : "img/dusunuyor.png",
        choiceA : "Yanlış",
        choiceB : "Doğru",
        choiceC : "Emin değilim",
 		correct : "B"
    },{
        question : '10- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=2,6 <br> >>> b=int(a)<br> >>> c=b <br> >>> print(c)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "2,6",
        choiceB : "2",
        choiceC : "2,0",
 		correct : "B"
    },  {
        question : '11- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=2 <br> >>> b=6 <br> >>> a=a+b <br> >>> print(a)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "8",
        choiceB : "24",
        choiceC : "2",
 		correct : "A"
    },	 {
        question : '12- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=2 <br> >>> b=float(a)<br> >>> c=b <br> >>> print(c)<br> >>> ? ',
        imgSrc : "img/dusunuyor.png",
        choiceA : "2,6",
        choiceB : "2",
        choiceC : "2,0",
 		correct : "C"
    },  {
        question : '13- I. float(sayı) fonksiyonu içerisindeki sayıyı reel sayıya dönüştürür. <br> II.  Mod operatörü (%) sayı bölümünden kalanı hesaplar.',
        imgSrc : "img/dusunuyor.png",
        choiceA : "Yanlış",
        choiceB : "Doğru",
        choiceC : "Emin değilim",
 		correct : "B"
    },{
        question : '14- 9 sayısının 5 e bölümünden kalanı bulan Python programı aşağıdaki gibidir. <br> >>> a=9 <br> >>> b=5<br> >>> c=a%b <br> >>> print(c)<br> >>> 4 ',
	    imgSrc : "img/modislemi2.png",
        choiceA : "Yanlış",
        choiceB : "Doğru",
        choiceC : "Emin değilim",
 		correct : "B"
    }, {
        question : '15- Aşağıdaki Python kodunun ekrana ne yazdığını bulunuz.(Soru işareti yerine) <br> >>> a=29 <br> >>> b=6 <br> >>> c=a%b <br> >>> print(c)<br> >>> ? ',
	    imgSrc : "img/modislemi1.png",
        choiceA : "3",
        choiceB : "4",
        choiceC : "5",
 		correct : "C"
    }
	
	
// 15 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















