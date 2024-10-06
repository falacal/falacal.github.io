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
        question : "01. Atom kavramından bahseden ilk kişi kimdir?",
        imgSrc : "img/insanenerji1.gif",
        choiceA : "Dalton",
        choiceB : "Thomson",
        choiceC : "Demokritos",
        correct : "C"
       },{
        question : " 02. Daltonun atom modeline göre aşağıdaki ifadelerden hangisi doğrudur?",
        imgSrc : "img/dalton.png",
        choiceA : "Atomun merkezinde çekirdek vardır.",
        choiceB : "Atom küre şeklindedir.",
        choiceC : "Atom içerisinde pozitif ve negatif yükler vardır",
        correct : "B"
    },{
        question : "03. Thomson atom modelinde aşağıdakilerden hangisini söylememiştir?",
        imgSrc : "img/thomson.png",
        choiceA : "Atomun içerisinde pozitif ve negatif yükler vardır.",
        choiceB : "Atomun büyük bir kısmı boşluktur.",
        choiceC : "Pozitif ve negatif yükler birbirine eşittir.",
        correct : "B"
    },{
        question : "04. Atom ile ilgili aşağıdakilerden hangisi diğerlerinden sonra bulunmuştur?",
        imgSrc : "img/atom.png",
        choiceA : "nötron ",
        choiceB : "proton ",
        choiceC : "elektron ",
        correct : "A"
    },{
        question : "05. Rutherford atom modelini nasıl açıklamıştır? ",
        imgSrc : "img/tutherford.png",
        choiceA : "Atomun alfa parçacıkları ile etkileşimiyle",
        choiceB : "Sürtünme ile elektriklenme ile",
        choiceC : "Belirsizlik ilkesi ile",
        correct : "A"
    },{
        question : "06. Nötronların varlığını kim bulmuştur?",
        imgSrc : "img/notron.png",
        choiceA : "Ernest Rutherford",
        choiceB : "James  Chadwick ",
        choiceC : "Joseph John Thomson",
        correct : "B"
    },{
        question : "07. Bir atomun enerji alması ile elektronlarının üst enerji seviyelerine çıkması hangi atom modeli ile açıklanabilir?",
        imgSrc : "img/emisyon.png",
        choiceA : "Thomson",
        choiceB : "Rutherford ",
        choiceC : "Bohr",
        correct : "C"
    },{
        question : "08. Uyarılmış haldeki bir atomun temel hale dönerken yaptığı enerji yayımına ne denir?",
        imgSrc : "img/isima.png ",
        choiceA : "Işıma  ",
        choiceB : "Soğurma ",
        choiceC : "Enerji ",
        correct : "A"
    },{
        question : "09. Çekirdek aşağıda verilen hangi bilim adamı tarafından keşfedilmiştir?",
        imgSrc : "img/rutherforddeneyi.png",
        choiceA : "Dalton",
        choiceB : "Rutherford",
        choiceC : "Bohr",
        correct : "B"
    },{
        question : "10. Modern atom modeline neden ihtiyaç duyulmuştur ?",
        imgSrc : "img/heisenberg.png",
        choiceA : "Çekirdekten bahsedilmediği için ",
        choiceB : "Elektronların yeri ve hızı aynı anda belirlenemediği için",
        choiceC : "Atom küresel olduğu için ",
        correct : "B"
    },{
        question : "11. Atomun büyük bir kısmının boş olduğu hangi deney ile bulunmuştur?",
        imgSrc : "img/rutherforddeneyi.png",
        choiceA : "Kanal ışınları deneyi ",
        choiceB : "Katot ışınları deneyi ",
        choiceC : "Alfa parçacıklarının altın plakaya gönderilmesi deneyi",
        correct : "C"
    },{
        question : "12. Protonu keşfeden bilim insanı?",
        imgSrc : "img/proton.png",
        choiceA : "Rutherford  ",
        choiceB : "Bohr ",
        choiceC : "Thomson ",
        correct : "A"
    },{
        question : "13. Bir bileşiği oluşturan atomların kütleleri, sayıları oranı bir tam sayı veya basit bir kesirdir.<br> Farklı elementlerin atomlarının kütleleri farklıdır. <br> Yukarıda bazı özellikleri verilen atom modeli hangi bilim insanına aittir??",
        imgSrc : "img/dalton2.png",
        choiceA : "Rutherford ",
        choiceB : "Bohr ",
        choiceC : "Dalton ",
        correct : "C"
    },{
        question : "14.Bohr Atom Modeli’ne göre,<br> I. Elektronlar çekirdek çevresinde orbitallerde hareket eder.<br> II. Elektronların yeri sabit değildir. <br> III. Atoma enerji verilirse elektron daha yüksek enerji seviyelerine çıkabilir.<br>yargılarından hangileri doğrudur?",
        imgSrc : "img/bohr2.png",
        choiceA : "I ve II ",
        choiceB : "II veIII ",
        choiceC : "I, II ve III  ",
        correct : "C"
    },{
        question : "15. Dalton Atom Modeli ile kimyanın hangi temel kanunu ispatlanmıştır?",
        imgSrc : "img/kutlekorunur.png",
        choiceA : "Kütlenin Korunumu  ",
        choiceB : "Sabit Oranlar ",
        choiceC : "Sabit Hacimler ",
        correct : "A"
    },{
        question : "16.' <sub>17</sub>Cl elementi doğada izotopları halinde bulunabilir.' <br> Yukarıda verilen bilgi Daltonun hangi varsayımını çürütmüştür?",
        imgSrc : "img/atom.png ",
        choiceA : "Atom parçalanamaz",
        choiceB : "Atom içi dolu küredir",
        choiceC : "Bir elementin tüm atomları aynıdır ",
        correct : "C"
    },{
        question : "17.Bohr Atom Modeli aşağıdakilerden hangisine daha çok benzer?",
        imgSrc : "img/bohr2.png ",
        choiceA : "Üzümlü kek ",
        choiceB : "Dönme dolap ",
        choiceC : "Güneş sistemi  ",
        correct : "C"
    },{
        question : "18. 'Farklı element atomlarının kütleleri farklıdır.' teorisi Dalton’a aittir.<BR> Buna göre aşağıdakilerden hangisi Daltonun bu teorisini çürütmüştür?",
        imgSrc : "img/izobaratomlar2.png ",
        choiceA : "İzobar atomlar ",
        choiceB : "İzotop atomlar ",
        choiceC : "İzoton atomlar ",
        correct : "A"
    },{
        question : "19.Atom numarası farklı, kütle numarası aynı olan atomlara ..... atom denir. atomların fiziksel ve kimyasal özellikleri farklıdır. Na ve Mg atomlarının kütle numaraları 24 dür. ",
        imgSrc : "img/izobaratomlar2.png ",
        choiceA : "İzobar atomlar ",
        choiceB : "İzotop atomlar ",
        choiceC : "İzoton atomlar ",
        correct : "A"
    }
	
	
	
// 20 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 180; // 180 s
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
















