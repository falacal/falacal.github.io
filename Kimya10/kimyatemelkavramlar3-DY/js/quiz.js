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
        question : "1)	Bir atomun kimyasal bağda, bağlayıcı elektron çiftini çekme kabiliyetininin ölçüsüne ne denir?",
        imgSrc : "img/degerelektronu.png",
        choiceA : "Değerlik elektronu",
        choiceB : "Elektronegatiflik",
		correct : "B" 
    }, {
        question : "2)	Bir element atomunun katman elektron dağılımı yapıldığında son katmandaki elektronlara ne  isim verilir?",
        imgSrc : "img/degerelektronu.png",
        choiceA : "Değerlik elektronu veya elektronları",
        choiceB : "Elektronegatiflik",
		correct : "A"
    },	{
        question : "3) Metal atomları, son katmanlarındaki değerlik elektronlarını vererek pozitif yüklü hale geçerek katyon oluşturur.",
        imgSrc : "img/lewiskatyon1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
		correct : "A"
    }, {
        question : "4)	Ametaller genellikle son katmanlarına elektron alarak negatif yüklü anyon hâline gelirken asal gaz katman elektron dağılımına ulaşır. Böylece kararlı olur. ",
        imgSrc : "img/anyon2.png",
        choiceA : "Yanlış",
        choiceB : "Doğru",
		correct : "B"
    }, 
	    {
        question : "5)	Ametal-ametal atomları arasında iki ya da daha fazla elektronun ortak kullanılmasıyla oluşan bağa ne denir",
        imgSrc : "img/kovalentbag1.png",
        choiceA : "İyonik bağ",
        choiceB : "Kovalent bağ",
		correct : "B"
    }, {
        question : "6) Kovalent bağların oluşumu Lewis yapısı ile açıklanabilir. Kovavalent bağı oluşturan elektronlara ne isim verilir?",
        imgSrc : "img/baglayicielektron1.png",
        choiceA : "Ortaklanmamış elektron çifti",
        choiceB : "Bağlayıcı elektron çifti",
		correct : "B"
    },	{
        question : "7) Bağ oluşumuna katılmamış elektron çiftlerine ne isim verilir?",
        imgSrc : "img/ortaklanmamiselektron1.png",
        choiceA : "Ortaklanmamış elektron çifti",
        choiceB : "Bağlayıcı elektron çifti",
		correct : "A"
    }, {
        question : "8) Kovalent bağ H<sub>2</sub> molekülünde olduğu gibi elektronegatiflikleri aynı iki ametal atomu arasında oluşuyorsa ........ bağ denir.",
		imgSrc : "img/apolar1.png",
        choiceA : "polar kovalent",
        choiceB : "apolar kovalent",
		correct : "B"
    },    {
        question : "9) Kovalent bağ HCI molekülünde olduğu gibi elektronegatiflikleri farklı ametal atomları arasında oluşuyorsa ........ bağ olarak tanımlanır.",
        imgSrc : "img/polar1.png",
        choiceA : "polar kovalent",
        choiceB : "apolar kovalent",
		correct : "A"
    }, {
        question : "10)	 H<sub>2</sub>O molekülünde ortaklaşmamış iki çift elektron(4 elektron) oksijen atomu üzerinde yoğunlaştığından  moleküldeki oksijen kalıcı kısmi negatif, hidrojen H atomları da kalıcı kısmi pozitif olur ve molekülde kutuplaşma olduğundan ......... bağ oluşur.",
        imgSrc : "img/polar2.png",
        choiceA : "apolar kovalent",
        choiceB : "polar kovalent",
		correct : "B"
    }, {
        question : "11)	Soldaki görselde görüldüğü üzere merkez atom ortaklanmamış elektron içeriyorsa molekül ......... dır.",
        imgSrc : "img/polar3.png",
        choiceA : "apolar kovalent bağ",
        choiceB : "polar kovalent bağ",
		correct : "B"
    }, {
        question : "12) Cl atomlarının elektronegatiflikleri aynı olduğundan bağlayıcı elektron çifti her iki Cl atomu tarafından eşit kuvvetle çekilir. Bu nedenle bağ ....... kovalenttir. ",
        imgSrc : "img/apolar2.png",
        choiceA : "apolar",
        choiceB : "polar",
		correct : "A"
    }, {
        question : "13) Soldaki görselde Lewis yapıları verilen H<sub>2</sub>S molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/polar4.png",
        choiceA : " 2- 2 - polar - polar ",
        choiceB : " 2- 2 - apolar - apolar",
		correct : "A"
    }, {
        question : "14) Soldaki görselde Lewis yapıları verilen O<sub>2</sub> molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/apolar5.png",
        choiceA : " 2- 4 - polar - polar ",
        choiceB : " 2- 4 - apolar - apolar",
		correct : "B"
    }, {
        question : "15) Soldaki görselde Lewis yapıları verilen Cl<sub>2</sub> molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/apolar6.png",
        choiceA : " 1- 6 - polar - polar ",
        choiceB : " 1- 6 - apolar - apolar",
		correct : "B"
    }, {
        question : "16) Soldaki görselde Lewis yapıları verilen BF<sub>3</sub> (Bor triflorür)  molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/apolar7.png",
        choiceA : " 3- 9 - polar - apolar ",
        choiceB : " 3- 9 - apolar - apolar",
		correct : "A"
    }, {
        question : "17) Soldaki görselde Lewis yapıları verilen HCl molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/polar8.png",
        choiceA : " 1- 3 - polar - polar ",
        choiceB : " 1- 3 - apolar - apolar",
		correct : "A"
    } , {
        question : "18) Soldaki görselde Lewis yapıları verilen SO<sub>2</sub> molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/polar9.png",
        choiceA : " 3- 6 - polar - polar ",
        choiceB : " 6- 3 - apolar - apolar",
		correct : "A"
    } , {
        question : "19) Soldaki görselde Lewis yapıları verilen CCl<sub>4</sub> molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/CCl4.png",
        choiceA : " 4- 12 - polar - polar ",
        choiceB : " 4- 12 - polar - apolar",
		correct : "B"
    } , {
        question : "20) Soldaki görselde Lewis yapıları verilen SO<sub>3</sub> molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/SO3.png",
        choiceA : " 4- 8 - polar - apolar ",
        choiceB : " 4- 8 - polar -  polar",
		correct : "A"
    } , {
        question : "21) Soldaki görselde Lewis yapıları verilen O<sub>3</sub> (Ozon) molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?",
        imgSrc : "img/O3.png",
        choiceA : " 6- 3 - apolar - polar ",
        choiceB : " 3- 6 - apolar -  polar",
		correct : "B"
    } , {
        question : '22) Soldaki görselde Lewis yapıları verilen <font color="red"><b> CO </b> </font color="red">  (<b><font color="red"> karbonmonoksit</font color="red"></b> ) molekülüyle  ilgili olarak boş bırakılan kısımları aşağıdaki şıklardan hangisinde sırasıyla doğru olarak verilmiştir?',
        imgSrc : "img/CO.png",
        choiceA : " 3- 2 - apolar - polar ",
        choiceB : " 3- 2 - polar -  polar",
		correct : "B"
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
















