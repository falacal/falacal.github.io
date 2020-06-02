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
        question : "1.	Bir ışık kaynağının birim zamanda yaydığı ışık enerjisi .......... olarak tanımlanır.",
        imgSrc : "img/aydinlanma3.png",
        choiceA : "Aydınlanma şiddeti",
        choiceB : "Işık şiddeti",
        choiceC : "Işık akısı",
	    choiceD : "lüx (lx)",
	    correct : "B"
    }, {
        question : "2.	Üzerine düşen ışığı tamamen geçiren maddeler .......... madde olarak adlandırılır.",
        imgSrc : "img/aydinlanma2.png",
        choiceA : "Saydam",
        choiceB : "Yarısaydam",
        choiceC : "Saydam olmayan madde" ,
	    choiceD : "Gölge",
	    correct : "A"
    },	{
        question : "3.	Birim yüzeye düşen ışık akısı miktarı o yüzeyin ................... eşittir.",
        imgSrc : "img/aydinlanma1.png",
        choiceA : "Işık akısı",
        choiceB : "Yansıması",
        choiceC : "Gölgesi",
	    choiceD : "Aydınlanma şiddeti",
	    correct : "D"
		
    },{
        question : "4.	Noktasal ışık kaynağı ile saydam olmayan cismin .......... elde edilebilir.",
        imgSrc : "img/golge.png",
        choiceA : "Işık akısı",
        choiceB : "Yansıması",
        choiceC : "Gölgesi" ,
		choiceD : "Aydınlanma şiddeti",
		correct : "C"
    },   {
        question : "5.	Yansıma ile ışığı bir noktada toplamak için .......... aynalar kullanılır.",
        imgSrc : "img/cukur3.gif",
        choiceA : "Tümsek",
        choiceB : "Çukur",
        choiceC : "Düzlem",
		choiceD : "Parabolik",
		correct : "B"
    }, {
        question : "6.	Küresel aynalarda tepe ile merkez doğrultusunun orta noktası .......... noktası olarak adlandırılır.",
        imgSrc : "img/cukur-aynada-goruntu-cisim-merkezde.png",
        choiceA : "Merkez",
        choiceB : "Odak",
        choiceC : "Tepe" ,
		choiceD : "Asal eksen",
		correct : "B"
    },   {
        question : "7.	Gelen ışın, yansıyan ışın ve yüzey normali aynı .......... içerisindedir.",
        imgSrc : "img/duzlem2.png",
        choiceA : "Odak",
        choiceB : "Düzlem",
        choiceC : "Merkez",
		choiceD : "Asal eksen",
		correct : "B"
    }, {
        question : "8.	Düz aynalarda görüntü aynaya göre .......... olur.",
        imgSrc : "img/duzlem1.png",
        choiceA : "Baş aşağı",
        choiceB : "Ters",
        choiceC : "Simetrik" ,
		choiceD : "Gerçek",
		correct : "C"
    },   {
        question : "9.	Küresel aynalarda tepe noktasına gelen ışın .......... ile eşit açı yaparak yansır.",
        imgSrc : "img/cukurtepe.png",
        choiceA : "Gölgesi",
        choiceB : "Cisim",
        choiceC : "Saydam",
		choiceD : "Asal eksen",
		correct : "D"
    }, {
        question : "10.	ışığın boşluktaki hızının herhangi bir ortamdaki hızına oranı ortamın .......... eşittir.",
        imgSrc : "img/kirilma2.png",
        choiceA : "Kırılma indisine",
        choiceB : "Sınır açısına",
        choiceC : "Işık hızına" ,
		choiceD : "Saydamlığına",
		correct : "A"
    },   {
        question : "11.	Kırılma açısının 90° olmasını sağlayan gelme açısı .......... olarak tanımlanır.",
        imgSrc : "img/sinir-acisi.png",
        choiceA : "Gelme açısı",
        choiceB : "Sınır açısı",
        choiceC : "Yansıma açısı",
		choiceD : "Kırılma açısı",
		correct : "B"
    }, {
        question : "12.	ışığın yağmur damlacıklarında kırılmaya uğraması .......... adı verilen doğa olayına neden olur.",
        imgSrc : "img/prizma1.gif",
        choiceA : "Tamamlayıcı renkler",
        choiceB : "Boya renkleri",
        choiceC : "Serap olayı" ,
		choiceD : "Gökkuşağı",
		correct : "D"
    },   {
        question : "13. ışıkta ........................... ana renkler olarak adlandırılır.",
        imgSrc : "img/rgbvecyan.png",
        choiceA : "Kırmızı, sarı ve yeşil",
        choiceB : "Kırmızı, yeşil ve mavi ",
        choiceC : "Kırmızı, yeşil ve mor",
		choiceD : "Kırmızı, turuncu, sarı",
		correct : "B"
    }, {
        question : "14.	Karışımları .......... ışığı veren renkler birbirini tamamlayıcı renkler olarak adlandırılır.",
        imgSrc : "img/rgbvecyan.png",
        choiceA : "Beyaz",
        choiceB : "Yeşil",
        choiceC : "Kırmızı" ,
		choiceD : "Mavi",
		correct : "A"
    },   {
        question : "15.	Birbirini kesen iki düzlem arasında kalan saydam ortamlar .......... oluşturur.",
        imgSrc : "img/prizma.png",
        choiceA : "Düzlem aynayı",
        choiceB : "Çukur aynayı",
        choiceC : "Işık prizmasını",
		choiceD : "Tümsek aynayı",
		correct : "C"
    }, {
        question : "16.	ışığın .......... özelliğinden yararlanarak görüntü oluşturan, en az bir yüzeyi küresel ortamlar mercek olarak tanımlanır.",
        imgSrc : "img/ince2.png",
        choiceA : "Yansıma",
        choiceB : "Kırılma",
        choiceC : "İletilme" ,
		choiceD : "Yarı saydam",
		correct : "B"
    }
	,	   {
        question : "17.	ince kenarlı merceklerde sadece .......... ile mercek arasındaki cismin görüntüsü sanaldır.",
        imgSrc : "img/ince20.png",
        choiceA : "3F",
        choiceB : "2F",
        choiceC : "Merkez noktası",
		choiceD : "Odak noktası",
		correct : "D"
    }, {
        question : "18.	Merceğin yapıldığı maddenin kırıcılık indisi arttıkça odak uzaklığı .......... .",
        imgSrc : "img/lens3.png",
        choiceA : "ters döner",
        choiceB : "sabitleşir",
        choiceC : "artar" ,
		choiceD : "azalır",
		correct : "D"
    },   {
        question : "19.	Boyada ana renkler üçe ayrılır. Bunlar sarı, cyan ve .......... dır.",
        imgSrc : "img/rgbvecyan.png",
        choiceA : "turkuaz",
        choiceB : "magenta",
        choiceC : "mavi",
		choiceD : "yeşil",
		correct : "B"
    }, {
        question : "20.	ince kenarlı merceğin odak noktası ile optik merkez arasındaki bir asal eksene dik bir cismin görüntüsü düz, ........ ve cisimden büyüktür.",
        imgSrc : "img/ince20.png",
        choiceA : "sabit",
        choiceB : "gerçek",
        choiceC : "sanal" ,
		choiceD : "ters",
		correct : "C"
    } 
	 
	
	
	
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
    

	if (scorePerCent < 60 ) {
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
















