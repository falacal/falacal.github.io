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
        question : "1)  Vektörler \frac{\partial }{\partial x} B   </s:Bvec>  ...a–...b–...X–...    ",
        imgSrc : "img/hucre1.gif ",
        choiceA : "fikrî mülkiyet ",
        choiceB : "bilişim etiği ",
        choiceC : "Atıf",
		
		correct : "B"
    }, {
        question : "2) Kişinin kendi zihni tarafından ürettiği her türlü ürün olarak tanımlanmaktadır. ",
        imgSrc : "  ",
        choiceA : "fikrî mülkiyet ",
        choiceB : "bilişim etiği ",
        choiceC : "Atıf",
		 
		correct : "A"
    },	{
        question : "3) İnsanların yaşadıkları ortamda yaptıkları davranışların doğru ya da yanlış olarak değerlendiren felsefeye ne denir ",
        imgSrc : "  ",
        choiceA : "Etik  ",
        choiceB : "İlke ",
        choiceC : "Siber Zorbalık ",
		correct : "A"
    }, {
        question : "4)  Bilişim teknolojileri aşağıda verilen hangi alanlarda tercih edilmektedir? ",
        imgSrc : "  ",
        choiceA : "Bankacılık, eğitim  ",
        choiceB : "Sağlık, güvenlik ",
        choiceC : "Hepsi ",
		correct : "C"
    },  {
        question : "5) Aşağıdakilerden hangisi etik ilkelerden değildir? ",
        imgSrc : "  ",
        choiceA : "Fikri Mülkiyet ",
        choiceB : "Siber Zorbalık ",
        choiceC : "Gizlilik ",
		correct : "B"
    },  {
        question : "6) Telif hakları konusunda esneklik sağlamayı amaçlayan kar amacı gütmeyen kuruluşun adı nedir?  ",
        imgSrc : "  ",
        choiceA : "Unicef  ",
        choiceB : "Creative Copyright ",
        choiceC : "Creative Commons ",
		correct : "C"
    },  {
        question : "7) Telif hakları konusunda her hakkı saklıdır olarak tanımlanan lisans türü ©️ aşağıdakilerden hangisidir? ",
        imgSrc : "  ",
        choiceA : "CopyRight  ",
        choiceB : "CopyLeft ",
        choiceC : "CopyDown ",
		correct : "A"
    },  {
        question : "8) Aşağıda verilen parolalardan hangisi en güçlüdür?  ",
        imgSrc : "  ",
        choiceA : "123456789 ",
        choiceB : "f@c€$ifrem33 ",
        choiceC : "1905bilisim ",
		correct : "B"
    },  {
        question : "9)  Eserin telif haklarının belirli bölümlerinden, eser sahibi tarafından belirtilen şartlar altında feragat edilmiş olduğuna işaret eden lisans türüdür aşağıdaki seçeneklerden hangisidir?",
        imgSrc : "img/telifsiniriyok.png",
        choiceA : "CopyLeft  ",
        choiceB : "CopyDown",
        choiceC : "CopyUp",
		correct : "A"
    },  {
        question : "10)  Yukarıda resmi verilen lisans türünün anlamı nedir?",
        imgSrc : "img/kamumalidir.png",
        choiceA : "Telif Hakları Saklıdır  ",
        choiceB : "Kamu Malıdır ",
        choiceC : "Sahibinden İzin Alınarak Kullanılmalıdır ",
		correct : "B"
    },  {
        question : "11) MEB tarafından geliştirilen bir oyun olan Bilişimciler Kazanıyor Oyunu ücretsiz olarak sunulmuştur. Buna göre bu oyunun lisans türü aşağıdakilerden hangisidir. ",
        imgSrc : "  ",
        choiceA : "Freeware Yazılım  ",
        choiceB : "Lisanslı Yazılım ",
        choiceC : "Demo Yazılım ",
		correct : "A"
    },  {
        question : "12) IP adreslerini kaydetmeyen ve Gabriel Weinberg tarafından  geliştirilen arama motoru sitesi hangisidir? ",
        imgSrc : "  ",
        choiceA : "google.com  ",
        choiceB : "yandex.com.tr ",
        choiceC : "duckduckgo.com ",
		correct : "C"
    },  {
        question : "13) MEB tarafından geliştirilen Antivirüs yazılımı olan Bilişimci Ruh ücretli bir şekilde sunulmaktadır. Buna göre bu Antivirüs yapımcısı hangi lisans türünü kullanmaktadır. ",
        imgSrc : "img/  ",
        choiceA : "Freeware Yazılım  ",
        choiceB : "Lisanslı Yazılım ",
        choiceC : "Demo Yazılım ",
		correct : "B"
    },  {
        question : "14) Aşağıdakilerden hangisi Bilişim teknolojilerinin doğru kullanımına örnek değildir? ",
        imgSrc : "img/  ",
        choiceA : "Başkalarına zarar vermek için kullanmamalısınız.",
        choiceB : "İzinsiz kullanmamızda sakınca yoktur ",
        choiceC : "Başkasına ait olan verileri incelememelisiniz. ",
		correct : "B"
    },  {
        question : "15) İnternette doğru bilgiye ulaşmak için aşağıda verilen durumlardan hangisinin yapılması daha iyi olur? ",
        imgSrc : "img/ ",
        choiceA : "İnternette tek bir kaynağa bakmak yeterli olacaktır.  ",
        choiceB : "Uzantısı gov olan siteler tercih edilirse bilgilerin doğruluk oranı artar ",
        choiceC : "Sosyal medya siteleri tercih edilerek doğru bilgiye ulaşılabilir ",
		correct : "B"
    }
	,  {
        question : "16) Aşağıda verilen internet adreslerinden hangisi vakıf sitesi olabilir? ",
        imgSrc : "img/ ",
        choiceA : "linux.org  ",
        choiceB : "tosyahasanrizapasamtal.meb.k12.tr ",
        choiceC : "eba.gov.tr ",
		correct : "A"
    },  {
        question : "17) Aşağıda verilen internet adreslerinden hangisi okul sitemize ait olabilir? ",
        imgSrc : "img/verimmotor.gif ",
        choiceA : "tosyahasanrizapasamtal.org  ",
        choiceB : "tosyahasanrizapasamtal.meb.k12.tr ",
        choiceC : "tosyahasanrizapasamtal.gov.tr ",
		correct : "B"
    },  {
        question : "18) Türkiye Cumhuriyeti’nin İnternet ülke kodu aşağıdakilerden hangisidir? ",
        imgSrc : "img/ ",
        choiceA : ".tü ",
        choiceB : ".tr ",
        choiceC : ".tt ",
		correct : "B"
    },  {
        question : "19) Aşağıda verilen site adreslerinden hangisi devlet kurumuna ait bir web sitesi uzantısı olabilir ",
        imgSrc : "img/ ",
        choiceA : ".org  ",
        choiceB : ".k12.tr ",
        choiceC : ".gov.tr ",
		correct : "C"
    }
	,  {
        question : "20) Bilgisayarın donanıma nasıl davranacağını anlatan, bilgisayara yön veren komutlar ve işlemler bütünüdür.",
        imgSrc : "img/ ",
        choiceA : "Fikrî mülkiyet ",
        choiceB : "Programlama",
        choiceC : "Algoritma ",
		correct : "B"
    },  {
        question : "21) İnternet ortamında başkalarından kaynaklanan kötü davranışlara maruz kalabilirsiniz, internet etiğine uymayan davranışlara ............. denir. ",
        imgSrc : "img/ ",
        choiceA : "siber (dijital) zorbalık. ",
        choiceB : "zorbalık ",
        choiceC : "etik dışılık ",
		correct : "A"
    },  {
        question : "22) Klavyeden, dosyadan veya başka bir aygıttan veri almaya ................. denir. ",
        imgSrc : "img/ ",
        choiceA : "hata ayıklama (debugging)",
        choiceB : "çıktı ",
        choiceC : "girdi ",
		correct : "C"
    },  {
        question : "23) Ekranda veriyi görüntüleme veya başka bir aygıta göndermeye ................. denir. ",
        imgSrc : "img/ ",
        choiceA : "hata ayıklama (debugging)",
        choiceB : "çıktı ",
        choiceC : "girdi ",
		correct : "B"
    },  {
        question : "24) Programlamada yapılan söz dizimsel hataların diğer ismi ................. ",
        imgSrc : "img/ ",
        choiceA : "hata ayıklama (debugging)",
        choiceB : "Syntax Error ",
        choiceC : "algoritma ",
		correct : "B"
    },  {
        question : "25) Programlamada yapılan çalışma zamanı hatasının diğer ismi ................. ",
        imgSrc : "img/ ",
        choiceA : "hata ayıklama (debugging)",
        choiceB : "Syntax Error ",
        choiceC : "Run-time Error ",
		correct : "C"
    },   {
        question : "26)  yapılacak işlemleri bilgisayarın anladığı dilde adım adım yazabilmektir. ",
        imgSrc : "img/ ",
        choiceA : "Algoritma",
        choiceB : "Veri ",
        choiceC : "Run-time Error ",
		correct : "A"
    },  {
        question : "27) Bilgisayara girdi yapılan işlenmemiş (ham) anlamsız bilgilere verilen isimdir. Hesaplama işlemlerinde kullanılabilen tek veri türüdür.  ",
        imgSrc : "img/ ",
        choiceA : "Algoritma",
        choiceB : "Veri ",
        choiceC : "Run-time Error ",
		correct : "B"
    } ,  {
        question : "28) Telif hakkı eserin doğması ile beraber ortaya çıkan bir haktır. Creative Commons bu hakka itiraz etmez ancak kullanılması, değiştirilmesi, karıştırılması veya ticari olarak kullanılmasının hakkındaki kararı eserin ........... bırakır.",
        imgSrc : "img/ ",
        choiceA : "kendisine",
        choiceB : "kullanıcılarına ",
        choiceC : "yaratıcısına ",
		correct : "C"
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
















