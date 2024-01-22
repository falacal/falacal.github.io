// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");

 
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "1- Belli bir hukuk düzeni içerisinde, hukuk kurallarının kişilere belli yönde davranmaya izin vermesi, belli şeyleri istemeye yetkili kılmasına ne denir? ?",
        imgSrc : "img/bilgeliksevgisi1.png",
        choiceA : "HAK",
        choiceB : "HÜRRİYET ",
		correct : "A"
    },        {
        question : "2-  Fransız İnsan ve Yurttaş Hakları bildirgesi ne zaman kabul edilmiştir?",
        imgSrc : "img/filozof1.png",
        choiceA : "1881",
        choiceB : "1789",

		correct : "B"
    },    {
        question : "3- kişinin siyasal gücün kullanımına katılmasını sağlayan haklara ne tür haklar ve ödevler denir? ",
        imgSrc : "img/felsefehikmet.png",
        choiceA : "Yasama, yürütme ve yargı hakkı ve ödevleri",
        choiceB : "Siyasal haklar ve ödevler",

		correct : "B"
    },        {
        question : "4- Seçme ve Seçilme hakkı ne tür haklara örnektir?",
        imgSrc : "img/bilincozbilinc.png",
        choiceA : "Siyasal haklara ",
        choiceB : "Kişi özgürlüğü hakkı  ",

		correct : "A"
    },        {
        question : "5- Kişi özgürlüğünü ve siyasal hakları içeren haklara ne isim verilir?",
        imgSrc : "img/sorular1.png",
        choiceA : "İkinci kuşak haklar",
        choiceB : "Birinci kuşak haklar veya klasik haklar ",

		correct : "B"
    },    {
        question : "6- İnsan hakları ve özgürlüklerinin, uluslararası düzeyde tanınarak güvence altına alınmasını sağlayan bildirinin adı nedir kaç yılında ilan edilmiştir?",
        imgSrc : "img/farkindalik1.png",
        choiceA : "İnsan Hakları Beyannamesi 1948 yılı",
        choiceB : "İnsan Hakları Beyannamesi 1848 yılı",
		correct : "A"
    },      {
        question : "7- Osmanlı devlet yönetiminde, ilk kez özellikle Müslüman olmayanlara dinî inançlarını ve ibadetlerini yerine getirme hususunda fermanlarla serbestlik tanınmış böylece insan hak ve özgürlükleri koruma altına alınmasına yönelik adımlar atılmasını sağlayan fermanın ismi ve tarihi?",
        imgSrc : "img/evrensellik1.png",
        choiceA : "Islahat Fermanı - 1856",
        choiceB : "Tanzimat Fermanı - 1839",

		correct : "B"
    },        {
        question : "8-  Her türlü yönetim ve karar alma işlerini yasalara uygun olarak gerçekleştiren devlete ne denir?",
        imgSrc : "img/felsefikonu1.png",
        choiceA : "Hukuk Devleti",
        choiceB : "Demokratik Devlet ",

		correct : "A"
    },    {
        question : "9- Hukuk devetinde hukukun problemleri çözme konusunda bu şekilde belirleyici olmasına ne denir?",
        imgSrc : "img/felsefiklavuzdur1.png",
        choiceA : "Meclisin üstünlüğü",
        choiceB : "Hukukun üstünlüğü",

		correct : "B"
    },        {
        question : "10- Demokratik sistemlerde siyasi partiler kadar önemli insan haklarını korumada, toplumu eğitmede, bilgilendirmede ve kamuoyu oluşturmada önemli katkılar sunan kuruluşlara ne isim verilir?  ",
        imgSrc : "img/boil-water.gif",
        choiceA : "Dernek, vakıf ve kooperatifler",
        choiceB : "Sivil toplum kuruluşları",

		correct : "B"
    },        {
        question : "11- Demokrasilerde kontrol ve denge mekanizmasının adil yürütülmesi için yetkiler paylaşılır ve iktidarın tek bir gücün eline geçmesi engellenir ve her bir yetki bir diğerini denetler. Bu açıklama hangi kavramı ifade etmektedir?",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Güçler Birliği",
        choiceB : "Güçler Ayrılığı",

		correct : "B"
    } ,        {
        question : "12-  Din ve devlet işlerinin birbirinden ayrılması, devletin her dini inanca aynı mesafede durması, devlet işleyişinde dinsel kural, örf ve adetler yerine evrensel hukuk norm kurallarına göre davranılmasına ne isim verilir?",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Şeriat",
        choiceB : "Laiklik",

		correct : "B"
    } ,        {
        question : "13- Medya okuryazarı bir kişi, verilen haberleri ve  mesajlarıı doğru analiz eder, haberlerin ve verilen mesajların doğruluğunu sorgular. ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Yanlış ",
        choiceB : "Doğru",

		correct : "B"
    } ,        {
        question : "14- Kişi kendi hak ve özgürlüklerini kullanırken başkalarının hak ve özgürlüklerini hesaba katmak zorunda değildir. ",
        imgSrc : "img/acabanedirnedir1.png",
        choiceA : "Yanlış ",
        choiceB : "Doğru",

		correct : "A"
    }
	
	
	
	
	
	//,     {
     //   question : " ",
     //   imgSrc : "img/",
    //    choiceA : "Doğru",
    //    choiceB : "Yanlış",

	//	correct : "A"
   // }
	
	
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
    
 	if (scorePerCent < 90 ) {
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
















