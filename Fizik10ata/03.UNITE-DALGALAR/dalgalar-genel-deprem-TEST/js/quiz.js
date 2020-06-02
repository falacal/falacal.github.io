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
        question : "Yer kabuğunun içinde ani kaya kıvrılmaları ile açığa çıkan enerjinin dalgalar halinde yayılması sonucu yerin sarsılmasına ne denir.",
        imgSrc : "img/acceptableInsecureGnu-max-1mb.gif",
        choiceA : "Heyelan",
        choiceB : "Kasırga",
        choiceC : "Fırtına",
		choiceD : "Deprem",
		correct : "D"
    }, {
        question : "Levhaların birbirine sürtünmeleri ve birbirlerine göre hareketi sonucu oluşan sarsıntılara  ne denir? ",
        imgSrc : "img/sarsinti.gif",
        choiceA : "Heyelan",
        choiceB : "volkanik deprem",
        choiceC : "tektonik deprem",
		choiceD : "Çöküntü depremi",
		correct : "C"
    }, 	{
        question : "Volkanik püskürme sonucu oluşan depremlere ne denir?",
        imgSrc : "img/volcano.gif",
        choiceA : "Çöküntü depremi",
        choiceB : "Volkanik deprem",
        choiceC : "Tektonik deprem",
		choiceD : "Heyelan",
		correct : "B"
    },     {
        question : "Sarsıntının başladığı nokta ne olarak tanımlanır. ",
        imgSrc : "img/odaknoktasi.png",
        choiceA : "Odak noktası",
        choiceB : "Deprem üsü",
        choiceC : "Fay",
		choiceD : "Plaka",
		correct : "A"
    }, {
        question : "Deprem dalgalarının yeryüzüne ulaştığı en kısa noktaya ne denir?",
        imgSrc : "img/odaknoktasi.png",
        choiceA : "Deprem merkez üssü",
        choiceB : "Odak noktası",
        choiceC : "Fay hattı",
		choiceD : "Deprem dalgası",
		correct : "A"
    }, 	{
        question : "Yerkabuğunda meydana gelen arazi kırığına ne denir?",
        imgSrc : "img/faysarp.png",
        choiceA : "Taşküre",
        choiceB : "Heyelan",
        choiceC : "Manto",
		choiceD : "Fay",
		correct : "D"
    },    {
        question : "Depremin merkezinde açığa çıkan enerjinin miktarına ne denir?",
        imgSrc : "img/energy.gif",
        choiceA : "Depremin şiddeti",
        choiceB : "Depremin büyüklüğü",
        choiceC : "Richter",
		choiceD : "Erezyon",
		correct : "B"
    }, {
        question : "Depremin insanlar ve binalar üzerinde meydana getirdiği hasarın derecesine ne denir?",
        imgSrc : "img/apartmanyikiliyor.gif",
        choiceA : "Depremin büyüklüğü",
        choiceB : "Richter",
        choiceC : "Depremin şiddeti",
		choiceD : "Zarar",
		correct : "C"
    }, 	{
        question : "Yer hareketlerini sürekli olarak kaydederek yer sarsıntılarının büyüklüğünü, süresini, merkezini ve saatini saptamaya yarayan aygıta ne denir?",
        imgSrc : "img/sismograph.gif",
        choiceA : "Sismograf",
        choiceB : "Kalorimetre",
        choiceC : "Maden detektörü",
		choiceD : "Multimetre",
		correct : "A"
    },    {
        question : "Deprem oluşumunu inceleyen ve deprem bilimi anlamına gelen kelimeye ne nedir?",
        imgSrc : "img/fayhatti.png",
        choiceA : "Zooloji",
        choiceB : "Fizik",
        choiceC : "Sismoloji",
		choiceD : "Astronomi",
		correct : "C"
    }, {
        question : "Deprem dalgalarının büyüklüğünün 1 ile 9 arasındaki rakamlarla ifade edilmesine  ne denir?",
 
        imgSrc :  "img/fayhatti.png",
        choiceA : "Richter ölçeği",
        choiceB : "Aralık ölçeği",
        choiceC : "Mutlak ölçek",
		choiceD : "Bağıl ölçek",
		correct : "A"
    }, 	{
        question : "Okyanus tabanında oluşan depremler  dev dalgalara sebeb olur bu dev dalgalar ne isim verilir?",
        imgSrc : "img/tusunami2.gif",
        choiceA : "Kasırga",
        choiceB : "Tsunami",
        choiceC : "Hortum",
		choiceD : "Girdap",
		correct : "B"
    },    {
        question : "Deprem dalgaları anlamında kullanılan   söze ne denir?",
        imgSrc : "img/tusunami.gif",
        choiceA : "Yay dalgası",
        choiceB : "Ses dalgası",
        choiceC : "Tsunami dalgasi",
		choiceD : "Sismik dalgalar",
		correct : "D"
    }, {
        question : "Sismik dalgalar cisim dalgaları ve yüzey dalgaları olmak üzere  kaç çeşittir?",
        imgSrc : "img/depremdalgalarikacaayrilir.png",
        choiceA : "İki çeşittir, 1- S dalgaları, 2- P dalgaları",
        choiceB : "İki çeşittir, 1- Love dalgaları, 2- Rayleigh dalgaları",
        choiceC : "İki çeşittir, 1- Deprem dalgaları, 2- Volkanik dalgalar",
		choiceD : "İki çeşittir, 1- Yüzey dalgaları, 2- Cisim dalgaları",
		correct : "D"
    }, 	{
        question : "Deprem odağından çevreye yayılan, sismografa (depremin şiddetini ölçen cihaz) ilk ulaşan yıkım etkisi düşük, boyuna bir dalga türü olan cisim dalgasına ne isim verilir?",
        imgSrc : "img/pdalgasi2300.gif",
        choiceA : "Rayleigh",
        choiceB : "P",
        choiceC : "S",
		choiceD : "Love",
		correct : "B"
    },    {
        question : "Deprem odağından çevreye yayılan, sismografa (depremin şiddetini ölçen cihaz) ikinci sırada ulaşan, yalnızca katı ortamda ilerleyebilen, yıkım etkisi düşük, enine bir dalga türü olan cisim dalgasına ne isim verilir?",
        imgSrc : "img/sdalgasi.gif",
        choiceA : "rayleigh",
        choiceB : "P",
        choiceC : "S",
		choiceD : "love",
		correct : "C"
    }, {
        question : "Odağa en yakın yani merkez üssü olarak adlandırılan bölgeden yayılan dalgalara ne dalgaları denir?",
        imgSrc : "img/surfacewaves.gif",
        choiceA : "Yüzey dalgaları",
        choiceB : "Cisim dalgaları",
        choiceC : "P",
		choiceD : "S",
		correct : "A"
    }, 	{
        question : "Yeryüzünde okyanus üzerinde ilerleyen su dalgası gibi ilerleyen dalgalara ne dalgası denir?",
        imgSrc : "img/rayleigh2.gif",
        choiceA : "Cisim dalgaları",
        choiceB : "P",
        choiceC : "Rayleigh dalgası",
		choiceD : "S",
		correct : "C"
    },    {
        question : "Yeri yatay düzlemde hareket ettiren yüzey dalgalarına ne dalgası denir?",
        imgSrc : "img/lovedalgasi.gif",
        choiceA : "Rayleigh dalgası",
        choiceB : "S",
        choiceC : "Love dalgaları",
		choiceD : "P",
		correct : "C"
    }, {
        question : "Yandaki şekilde gösterilen, yüzeyde yayılabilen sismik dalganın adı nedir?",
        imgSrc : "img/love3.png",
        choiceA : "Love dalgası", 
        choiceB : "S",
        choiceC : "Rayleigh dalgası",
		choiceD : "P",
		correct : "A"
    }, 	{
        question : "Yandaki şekilde gösterilen, yüzeyde yayılabilen sismik dalganın adı nedir?",
        imgSrc : "img/raylight3.png",
        choiceA : "S",
        choiceB : "Rayleigh dalgası",  
        choiceC : "Love dalgası", 
		choiceD : "P",
		correct : "B"
    } , 	{
        question : "Depremler konusunda çalışan bilim adamına ne denir?",
        imgSrc : "img/sismolog.jpg",
        choiceA : "Arkeolog",
        choiceB : "Kimyager",  
        choiceC : "Zoolog ", 
		choiceD : "Sismolog",
		correct : "D"
    }, 	{
        question : "Yer hareketini algılayan ve sarkaç sistemine göre çalışan alete ne denir?",
        imgSrc : "img/basic.sismometer.png",
        choiceA : "Sismometre",
        choiceB : "Sismograf",  
        choiceC : "Richter", 
		choiceD : "Fay lçer",
		correct : "A"
    }
	
	, 	{
        question : "Sismometreler tarafından algılanan yer hareketini sinyal şekline dönüştürerek kağıt film veya bilgisayar ortamına aktaran aygıtın ismi?",
        imgSrc : "img/sismograph.gif",
        choiceA : "Sismometre",
        choiceB : "Sismograf",  
        choiceC : "Richter", 
		choiceD : "Fay lçer",
		correct : "B"
    }, 	 
	{
        question : "Yerkabuğunda yan yana duran iki blok arasındaki bağil hareket sonunda oluşmuş kırık yapısına ne denir?",
        imgSrc : "img/deprem2.gif",
        choiceA : "Manto",
        choiceB : "Taşküre",  
        choiceC : "Dış çekirdek", 
		choiceD : "Fay",
		correct : "D"
    }
	
	// 	{
    //    question : "",
    //    imgSrc : "img/",
    //    choiceA : "S",
     //   choiceB : "",  
    //    choiceC : "", 
	//	choiceD : "",
	//	correct : ""
    //}
	
	
	
	
	
//  25 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
	 
	 
	//  "<button onClick="window.location.href=window.location.href">"  + "Tekrarla" + "</button>" 
	 
	 
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
















