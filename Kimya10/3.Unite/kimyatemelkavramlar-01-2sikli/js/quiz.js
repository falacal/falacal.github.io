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
        question : "1) Spor yaparken glikojen, oksijenle parçalanarak enerji oluşturur.  Oksijen yetersiz kaldığında , yorgunluk oluşur. Yorgunluğun sebebi kanda miktarı artan  .......  dır. 	",
        imgSrc : "",
        choiceA : "asetik asit ve CO<sub>2</sub> ",
        choiceB : "laktik asit ve CO<sub>2</sub>",
		correct : "B" 
    }, {
        question : "2) Temas ettirildikleri bir maddenin asidik veya bazik olma durumuna göre belli pH aralıklarında renk değiştiren, zayıf organik asit ya da bazlara .... denir.",
        imgSrc : "",
        choiceA : "indikatör",
        choiceB : "asit",
		correct : "A"
    },	{
        question : "3)  Bazı indikatör maddeler, süzgeç kâğıdına emdirilerek kullanılır. Bu kâğıtlara ..... denir.  ",
        imgSrc : "",
        choiceA : "kese kağıdı",
        choiceB : "pH kâğıdı",
		correct : "B"
    }, {
        question : "4) [H<sup>+</sup>] > [OH<sup>–</sup>] <br> H<sup>+</sup> iyonu derişimi , OH<sup>–</sup> iyonu derişiminden büyük olan çözeltilere .....  çözelti denir. ",
        imgSrc : "img/",
        choiceA : "bazik",
        choiceB : "asidik",
		correct : "B"
    }, 
	    {
        question : "5) [OH<sup>–</sup>]  > [H<sup>+</sup>+] <br> H<sup>+</sup> iyonu derişimi , OH<sup>–</sup> iyonu derişiminden küçük olan çözeltilere .....  çözelti denir.",
        imgSrc : "img/",
        choiceA : "bazik",
        choiceB : "asidik",
		correct : "A"
    }, {
        question : "6) [H<sup>+</sup>] = [OH<sup>–</sup>] <br> H<sup>+</sup> iyonu derişimi , OH<sup>–</sup> iyonu derişimine eşit olan çözeltilere .....  çözelti denir. ",
        imgSrc : "img/",
        choiceA : "nötr",
        choiceB : "bazik",
		correct : "A"
    },	{
        question : "7) Çözeltilerin pH değeri ...... arasında değişir. ",
        imgSrc : "img/",
        choiceA : "1-12",
        choiceB : "1-14",
		correct : "B"
    }, {
        question : "8) Sağlıklı bir vücutta insan derisinin  pH değeri ..... 'dir",
        imgSrc : "img/",
        choiceA : "7.5",
        choiceB : "5.5",
		correct : "B"
    },    {
        question : "9)  Sağlıklı bir vücutta   idrarın pH değeri ..... 'dir",
        imgSrc : "img/",
        choiceA : "8",
        choiceB : "3",
		correct : "A"
    }, {
        question : "10)	 Sağlıklı bir vücutta insan kanının  pH değeri ..... 'dir",
        imgSrc : "img/",
        choiceA : "7,3-7,4",
        choiceB : "3-10",
		correct : "A"
    }, {
        question : "11)	Arrhenius'un asit-baz tanımına göre HCl, HBr, HI, HF, HNO<sub>3</sub>, H<sub>2</sub>SO<sub>4</sub> vb. maddeler suda çözündüğünde ortama ..... iyonu verebildiği için ..... dir.",
        imgSrc : "",
        choiceA : " OH<sup>–</sup> ,  baz ",
        choiceB : "H<sup>+</sup> , asit",
		correct : "B"
    }, {
        question : "12) NaOH, KOH, Ca(OH)<sub>2</sub> , Ba(OH)<sub>2</sub> vb. maddeler suda çözündüğünde ortama ..... iyonu verebildiği için .....  dır",
        imgSrc : "",
        choiceA : "OH<sup>–</sup> ,  baz ",
        choiceB : "H<sup>+</sup> , asit",
		correct : "A"
    }, {
        question : "13) Oksijence zengin olan ametal oksitler (CO<sub>2</sub>, SO<sub>2</sub>, SO<sub>3</sub>, N<sub>2</sub>O<sub>5</sub> vb.), yapısında H<sup>+</sup> iyonu olmadığı hâlde su ile etkileştiğinde asit oluşturarak çözeltiye H<sup>+</sup> iyonu verebilir. Bu maddelere ........ denir.",
        imgSrc : "",
        choiceA : "asidik oksit ",
        choiceB : "bazik oksit",
		correct : "A"
    }, {
        question : "14) Metal oksitler (Na<sub>2</sub>O, K<sub>2</sub>O, CaO, BaO vb.), su ile etkileştiğinde baz oluşturarak çözeltiye OH<sup>-</sup> iyonu verebildikleri için bazik özellik gösterir. Bu maddelere .......  denir. ",
        imgSrc : "",
        choiceA : "asidik oksit ",
        choiceB : "bazik oksit",
		correct : "B"
	},	{
        question : "15) Kuvvetli asit ve bazların sulu çözeltileri tepkimeye girdiğinde asit ve baz tamamen iyonlaşarak tuz ve su oluşturur. Gerçekleşen tepkimeye ....... denir.",
        imgSrc : "",
        choiceA : "yanma tepkimesi",
        choiceB : "nötralleşme tepkimesi",
		correct : "B"
    }, {
        question : "16)  Elektron verme eğilimi hidrojenden büyük olan metallere ....... denir. ",
        imgSrc : "",
        choiceA : "pasif metal",
        choiceB : "aktif metal",
		correct : "B"
    }, {
        question : "17) Elektron verme eğilimi hidrojenden küçük olan Cu, Ag, Hg, Au ve Pt gibi metallere  ......  denir.",
        imgSrc : "",
        choiceA : "pasif metal",
        choiceB : "aktif metal",
		correct : "A"
    }, {
        question : "18) Pasif metallerden Cu, Hg ve Ag  kuvvetli oksijenli asitlerle tepkime verebildiği için bu metaller ......... olarak adlandırılır.",
        imgSrc : "",
        choiceA : "soy metal",
        choiceB : "yarı soy metal",
		correct : "B"
    } , {
        question : "19) Pasif metallerden Pt ve Au hiçbir asitle tepkime vermediği için bu metallere ..... denir. ",
        imgSrc : "",
        choiceA : "soy metal",
        choiceB : "yarı soy metal",
		correct : "A"
    } , {
        question : "20) Be, Al, Zn, Cr, Sn ve Pb gibi tepkimeye girecekleri maddeye göre asit veya  baz gibi davranan metallere ...... denir.",
        imgSrc : "",
        choiceA : "amfoter metal ",
        choiceB : "yarı soy metal",
		correct : "A"
    } , {
        question : "21) Üç hacim hidroklorik asit (HCl) ve bir hacim nitrik asitten (HNO3) oluşan bir karışıma ..... denir.",
        imgSrc : "",
        choiceA : "Kral suyu",
        choiceB : "Meyve suyu",
		correct : "A"
    } , {
        question : "22)  Soy metallerden  ........ hiçbir asitle tepkime veremez. Ancak bir asit karışımı olan kral suyu ile tepkime verir.",
        imgSrc : "",
        choiceA : "Ca, Na",
        choiceB : "Pt ve Au",
		correct : "B"
    } , {
        question : "23) .......  zayıf bir asit olmasına rağmen aktif metallerle tepkimeye girer, camı ve porseleni aşındırır. Bu nedenle cam ve metal kaplarda değil plastik maddelere etki etmediği için plastik kaplarda saklanmalıdır.",
        imgSrc : "",
        choiceA : "HidroKlorik asit (HCl) ",
        choiceB : "Hidroflorik asit (HF)",
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
















