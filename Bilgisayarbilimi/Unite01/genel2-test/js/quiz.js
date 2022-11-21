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
        question : "1. Bilgisayar tarafından gerçekleştirilecek eylemleri ve hesaplamaları belirtip art arda gelen komutlara denir. ",
        imgSrc : "img/program1.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "hata ayıklama",
	    choiceD : "algoritma",
	    correct : "A"
    }, {
        question : "2. Bir problem durumunu çözmek için ilgili adımların mantıksal  sıralanmasına ..... denir.",
        imgSrc : "img/algoritma1.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "hata ayıklama",
	    choiceD : "algoritma",
	    correct : "D"
    },	{
        question : "3. Herhangi bir programlama hatasını bulma ve ortadan kaldırma sürecidir.",
        imgSrc : "img/hataayiklama.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "hata ayıklama",
	    choiceD : "algoritma",
	    correct : "C"
		
    },    {
        question : "4. Programın kaynak kodunun yapısına denir. ",
        imgSrc : "img/sozdizimi.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "hata ayıklama",
	    choiceD : "algoritma",
	    correct : "B"
	    
    } ,    {
        question : "5. Programın ayrıştırılmasını imkânsız hâle getiren hataya denir (Dolayısıyla yorumlanmasını da imkânsız hâle getirir.) ",
        imgSrc : "img/syntaxerror.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "söz dizimi hatası",
	    choiceD : "algoritma",
	    correct : "C"
    } ,    {
        question : "6. İnsanlar tarafından rahatlıkla okunabilmesi, yazılması ve anlaşılması için geliştirilmiş Python benzeri programlama dillerine denir. ",
        imgSrc : "img/pythonecode.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "düşük seviyeli dil",
	    choiceD : "yüksek seviyeli dil",
	    correct : "D"
    } ,    {
        question : '7. Bilgisayarın kolay bir şekilde yürütmesi için tasarlanmış programlama dili. "Makine dili” veya “birleştirici dil” adı da verilmektedir. ',
        imgSrc : "img/machinecode.png",
        choiceA : "program ",
        choiceB : "söz dizimi",
        choiceC : "düşük seviyeli dil",
	    choiceD : "yüksek seviyeli dil",
	    correct : "C"
    } ,    {
        question : "8. Yüksek seviyeli bir dilde yazılmış programı, düşük seviyeli bir dile çevirme işlemidir. ",
        imgSrc : "img/derleme.png",
        choiceA : "derleme ",
        choiceB : "söz dizimi",
        choiceC : "düşük seviyeli dil",
	    choiceD : "yüksek seviyeli dil",
	    correct : "A"
    } ,    {
        question : "9. Yüksek seviyeli bir dildeki programın derlemeden önceki hâli. ",
        imgSrc : "img/pythonecode.png",
        choiceA : "derleme ",
        choiceB : "kaynak kod",
        choiceC : "düşük seviyeli dil",
	    choiceD : "yüksek seviyeli dil",
	    correct : "B"
    } ,    {
        question : "10.  Derleyicinin programı (kaynak kodu) çevirmesiyle ortaya çıkan kod serisi. ",
        imgSrc : "img/machinecode.png",
        choiceA : "derleme ",
        choiceB : "kaynak kod",
        choiceC : "hedef kod",
	    choiceD : "yüksek seviyeli dil",
	    correct : "C"
    } ,    {
        question : "11. Bir problem durumunu çözmek için ilgili adımların mantıksal sıralanması. ",
        imgSrc : "img/algoritma1.png",
        choiceA : "derleme ",
        choiceB : "kaynak kod",
        choiceC : "algoritma",
	    choiceD : "hedef kod",
	    correct : "C"
    } ,    {
        question : "12. Yüksek seviyeli dilde yazılmış bir programı satır satır çevirerek yürütme, işletme, çalıştırmaya denir. ",
        imgSrc : "img/derleme.png",
        choiceA : "derleme ",
        choiceB : "kaynak kod",
        choiceC : "algoritma",
	    choiceD : "yorumlama ",
	    correct : "D"
    } ,    {
        question : "13. Algoritmanın görsel gösterimine denir. ",
        imgSrc : "img/akisdiyag.png",
        choiceA : "derleme ",
        choiceB : "kaynak kod",
        choiceC : "Akış şeması",
	    choiceD : "yorumlama ",
	    correct : "C"
    } ,    {
        question : "14. Programın söz dizimsel yapısının temel ögelerinden biri. Doğal dillerdeki kelimeye benzetilebilir. ",
        imgSrc : "img/token.png",
        choiceA : "token ",
        choiceB : "kaynak kod",
        choiceC : "Akış şeması",
	    choiceD : "yorumlama ",
	    correct : "A"
    } ,    {
        question : "15. Bir programın birden fazla bilgisayar türünde yürütülebilmesi özelliği. ",
        imgSrc : "img/compatible.png",
        choiceA : "token ",
        choiceB : "taşınabilirlik",
        choiceC : "Akış şeması",
	    choiceD : "yorumlama ",
	    correct : "B"
    } ,    {
        question : "16. Problemi formüle etme, probleme çözüm bulma ve problemin çözümü ifade etme süreci. ",
        imgSrc : "img/problemcozme.png",
        choiceA : "token ",
        choiceB : "taşınabilirlik",
        choiceC : "problem çözme",
	    choiceD : "yorumlama ",
	    correct : "C"
    } ,    {
        question : "17. Python yorumlayıcısının bir değeri ekranda göstermesini sağlayan komut. ",
        imgSrc : "img/print1.png",
        choiceA : "token ",
        choiceB : "taşınabilirlik",
        choiceC : "problem çözme",
	    choiceD : "print ",
	    correct : "D"
    } ,    {
        question : "18. Yanda, klavyeden girilen iki sınav puanının ortalamasını bularak öğrencinin dersten geçip geçmediğini kontrol eden yapı görülmektedir. Bu yapıya ........ denir. ",
        imgSrc : "img/algoritma1.png",
        choiceA : "sözde kod ",
        choiceB : "akış şeması",
        choiceC : "algoritma",
	    choiceD : "tren",
	    correct : "C"
    } ,    {
        question : "19. Yanda, klavyeden girilen iki sınav puanının ortalamasını bularak öğrencinin dersten geçip geçmediğini kontrol eden yapı görülmektedir. Bu yapıya ........ denir. ",
        imgSrc : "img/akissema1.png",
        choiceA : "sözde kod ",
        choiceB : "akış şeması",
        choiceC : "algoritma",
	    choiceD : "tren",
	    correct : "B"
    } ,     {
        question : "20. Yanda, klavyeden girilen iki sınav puanının ortalamasını bularak öğrencinin dersten geçip geçmediğini kontrol eden yapı görülmektedir. Bu yapıya ........ denir. ",
        imgSrc : "img/sozdekod1.png",
        choiceA : "sözde kod ",
        choiceB : "akış şeması",
        choiceC : "algoritma",
	    choiceD : "tren",
	    correct : "A"
    } ,    {
        question : '21. Python programlama dilinde “Sabit” ve “değişken” önemli iki kavramdır. Programcı işlenmemiş hâlde veriyi alır,  işlenmiş hâle yani bilgiye dönüştürür. Bunlar eşitlik ve ifadelerin yapı taşıdır. ',
        imgSrc : "img/akisdiyag.png",
        choiceA : "DOĞRU ",
        choiceB : "YANLIŞ",
        choiceC : "TREN",
	    choiceD : "KEDİ",
	    correct : "A"
    } ,    {
        question : "22. Programcı, problemi çözebilmek için gereken sabit ve değişkenleri, uygun “veri türü”nde, örneğin sayısal veri veya alfanümerik(Karakter) veri olarak tanımlayabilir. ",
        imgSrc : "img/akisdiyag.png",
        choiceA : "DOĞRU ",
        choiceB : "YANLIŞ",
        choiceC : "TREN",
	    choiceD : "KEDİ",
	    correct : "A"
    } ,    {
        question : "23. Sayısal veriler tüm sayı tiplerini içerir. Sayısal veri, hesaplama işlemlerinde kullanılabilen tek veri türüdür. Pozitif ya da negatif tam sayılar ve reel sayılar kullanılabilir. ",
        imgSrc : "img/sayisalveri1.png",
        choiceA : "KEDİ ",
        choiceB : "TREN",
        choiceC : "DOĞRU",
	    choiceD : "YANLIŞ",
	    correct : "C"
    } ,    {
        question : '24. Karakter veri seti; tüm tek haneli sayılar ("0".. "9"), harfler ("a".."z", "A".."Z") ve özel karakterleri ("#", "&", "*", ..) kapsar. ',
        imgSrc : "img/alfasayisalveri1.png",
        choiceA : "KEDİ ",
        choiceB : "DOĞRU",
        choiceC : "TREN",
	    choiceD : "YANLIŞ",
	    correct : "B"
    },    {
        question : "25. Mantıksal veri, veri setinde yalnızca iki kelime barındırır: doğru ve yanlış. Bu veri evet ya da hayır şeklindeki karar verme süreçlerinde kullanılır. Örneğin elde edilen değer, beklenen değer mi, evli mi, arabası var mı, öğrenci lise mezunu mu gibi sonucu kesin doğru ya da yanlış olan durumlarda mantıksal veri tanımlaması yapılır.  ",
        imgSrc : "img/mantiksallveri1.png",
        choiceA : "SERÇE ",
        choiceB : "DOĞRU",
        choiceC : "TREN",
	    choiceD : "YANLIŞ",
	    correct : "B"
    }    
// .. E KADAR DEĞİŞTİRDİM  34 tane	
	
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
















