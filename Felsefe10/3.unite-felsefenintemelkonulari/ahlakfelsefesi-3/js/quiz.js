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
        question : "1.	'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, insanın özgürce eylemde bulunamayacağını, insanın kendi elinde olmayan koşulların etkisi altında eylemde bulunduğunu kabul eden akıma ...... denir.",
        imgSrc : "img/refleksif.png",
        choiceA : "fatalizim",
        choiceB : "indeterminizim",
        choiceC : "otodeterminizim",
	    choiceD : "determinizim",
	    correct : "D"
    }, {
        question : "2. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ...... akımına göre insanın iradesi, eylemleri içten ve dıştan gelen nedenlerle belirlenmiştir. İnsan eylemlerinde özgür değildir ve yaptık larından sorumlu tutulamaz.",
        imgSrc : "img/pisagor.png",
        choiceA : "determinizim",
        choiceB : "otodeterminizim",
        choiceC : "fatalizim",
	    choiceD : "indeterminizim",
	    correct : "A"
    },	{
        question : "3. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan .....	göre kişi, eylemlerinde tümüyle özgürdür. Onu davranışa yön lendiren herhangi bir neden bulunma maktadır. İnsan yaptıklarından sorumludur, davranışlarının sonucunu üstlenmelidir.  ",
        imgSrc : "img/rasyonellik.png",
        choiceA : "determinizim",
        choiceB : "otodeterminizim",
        choiceC : "fatalizim",
	    choiceD : "indeterminizim",
	    correct : "D"
		
    },    {
        question : "4. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ahlaksal özerklik adı da verilen ..... e göre kişinin iyi ve kötü konusunda kendi ahlaki değerlerini oluşturabilme ve bu değerlere ulaşabilme özgürlüğü olduğunu savunur ",
        imgSrc : "img/yigilimli.png",
        choiceA : "determinizim",
        choiceB : "otodeterminizim",
        choiceC : "fatalizim",
	    choiceD : "indeterminizim",
	    correct : "B"
    } ,    {
        question : "5. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ..... e göre   insanın mutlak anlamda özgür olmamakla birlikte bazı seçimlerde bulunduğunu, insanın kaderinin ve bazı kararlarının kendisine bağlı olduğunu öne süren bir orta yol özgürlük düşüncesidir.",
        imgSrc : "img/mitoloji.png",
        choiceA : "determinizim",
        choiceB : "fatalizim",
        choiceC : "otodeterminizim",
	    choiceD : "indeterminizim",
	    correct : "C"
    } ,    {
        question : "6. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ..... e göre göre insan rüzgâr önünde savrulan kuru bir yaprak gibi kaderin elinde bir oyuncaktır. İnsan senaryosu daha önceden yazılmış bir sahnede figürandır.",
        imgSrc : "img/elestiri.png",
        choiceA : "liberteryanizm",
        choiceB : "fatalizim",
        choiceC : "otodeterminizim",
	    choiceD : "indeterminizim",
	    correct : "B"
    } ,    {
        question : "7. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ..... e göre tüm olaylar yaratıcı bir güç tarafından önceden belirlenmiştir. Bu belirlenmiş durumu değiştirilemez. Kişi özgür olmadığından davranışları nedeniyle sorumlu tutulamaz.",
        imgSrc : "img/hikmet.png",
        choiceA : "fatalizim",
        choiceB : "liberteryanizm",
        choiceC : "indeterminizim",
	    choiceD : "otodeterminizim",
	    correct : "A"
    } ,    {
        question : "8. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ..... e göre ..... bireysel özerkliği savunur. İnsan kendi seçimlerini yapar. Özgürlük her insanın doğuştan sahip olduğu bir haktır. ",
        imgSrc : "img/kuresel.png",
        choiceA : "fatalizim, fatalizim",
        choiceB : "liberteryanizm, liberteryanizm",
        choiceC : "indeterminizim, indeterminizim",
	    choiceD : "otodeterminizim, otodeterminizim",
	    correct : "B"
    } ,    {
        question : "9. 'İnsan özgürce eylemde bulunurken özgürmüdür?' sorusuna, verilen cevap lardan ..... e göre 	insan eylemleri tamamen ya da kısmen de olsa açıklanamaz. Bu eylemleri belirleyen kurallar olmadığından insan özgürdür.",
        imgSrc : "img/tales.png",
        choiceA : "liberteryanizm",
        choiceB : "determinizim",
        choiceC : "indeterminizim",
	    choiceD : "otodeterminizim",
	    correct : "A"
    } ,    {
        question : "10. .... insanın davranışlarını, karakter yapısını ve bununla ilgili değerlendirmeleri düzenleyen kurallar bütünü olarak tanımlanabilir.",
        imgSrc : "img/tutarli.png",
        choiceA : "İyi",
        choiceB : "Kötü",
        choiceC : "Erdem",
	    choiceD : "Ahlak",
	    correct : "D"
    } ,    {
        question : "11. .......  İnsanın ahlaki eylemlerini ve bu eylemlerin dayandığı ilkeleri konu alan felsefe dalına  denir.",
        imgSrc : "img/idea.png",
        choiceA : "Ahlak",
        choiceB : "Ahlak Felsefesi",
        choiceC : "İdea",
	    choiceD : "Diyalektik",
	    correct : "B"
    } ,    {
        question : "12. .......  toplumsal yaşamda insan eylemlerini düzenleyen ve bu eylemlerde iyi-kötü ayrımı yapan, genel kabul görmüş kurallar bütününe denir.",
        imgSrc : "img/idea.png",
        choiceA : "Vicdan",
        choiceB : "Ahlak Felsefesi",
        choiceC : "Erdem",
	    choiceD : "Ahlak",
	    correct : "D"
    } ,    {
        question : "13. .......  insanda iyi ve kötüyü ayırt edebilmeyi sağlayan bir iç yeti veya iç duyuş biçiminde tanımlanabilir.",
        imgSrc : "img/idea.png",
        choiceA : "Ahlak",
        choiceB : "Ahlak Felsefesi",
        choiceC : "Vicdan",
	    choiceD : "Sorumluluk",
	    correct : "C"
    } ,    {
        question : "14. .......  insanın eylemlerinin sonuçlarını baştan üstlenebilmesine denir. ",
        imgSrc : "img/idea.png",
        choiceA : "Ahlak",
        choiceB : "Özgürlük",
        choiceC : "Vicadan",
	    choiceD : "Sorumluluk",
	    correct : "D"
    } ,    {
        question : "15. ....... insanın kendi seçimleriyle davranabilmesidir. Diğer bir deyişle, insanın eylemlerini seçerken iradesini serbestçe  kullanabilmesidir ",
        imgSrc : "img/idea.png",
        choiceA : "Ahlak",
        choiceB : "Özgürlük",
        choiceC : "Vicdan",
	    choiceD : "Sorumluluk",
	    correct : "B"
    } ,    {
        question : "16. ....... yapmak zorunda olduğumuz, yapmamız gereken, ahlakça yükümlü olduğumuz şeyleri dile getirir. Alman filozof Kant’a göre   eylemlerimizin belirleyicisi olan bir duygudur. ",
        imgSrc : "img/idea.png",
        choiceA : "Ödev",
        choiceB : "Özgürlük",
        choiceC : "Vicadan",
	    choiceD : "Sorumluluk",
	    correct : "B"
    }  ,    {
        question : "17. ....... ,Yunanca “arete” sözcüğüne dayanır, insanın iyi davranışlara yönelmeyi seçmesine  denir.",
        imgSrc : "img/idea.png",
        choiceA : "Ödev",
        choiceB : "Özgürlük",
        choiceC : "Erdem",
	    choiceD : "Sorumluluk",
	    correct : "C"
    } ,    {
        question : "18. ....... ahlaki açıdan iyi ya da kötü olarak değerlendirilebilen davranışlarımıza denir.",
        imgSrc : "img/idea.png",
        choiceA : "Ahlaki Karar",
        choiceB : "Ahlaki Eylem",
        choiceC : "Ahlak Yasası",
	    choiceD : "Sorumluluk",
	    correct : "B"
    },    {
        question : "19. ....... , bireyin, kendi özgür iradesi ile ve iyiyi isteyerek ahlak yasasına uygun olarak verdiği kararlara denir",
        imgSrc : "img/idea.png",
        choiceA : "Ahlaki Karar",
        choiceB : "Ahlaki Eylem",
        choiceC : "Ahlak Yasası",
	    choiceD : "Sorumluluk",
	    correct : "A"
    }  ,    {
        question : "20. .......  görüşe göre insan dünya sahnesinde yalnızca bir oyuncudur. Oynayacağı rolü seçemez, oyuna müdahale edemez. Her insanın bu sahne içinde ne yapacağını evrensel akıl belirler. Kişinin kontrol edebileceği tek şey vardır: kendi tavırları ve tutkuları.",
        imgSrc : "img/idea.png",
        choiceA : "Epikürizm",
        choiceB : "Özgürlük",
        choiceC : "Vicadan",
	    choiceD : "Stoacı",
	    correct : "D"
    } ,    {
        question : "21. ....... e göre insan hayatının amacı mutluluktur. Temel felsefeleri 'Hazza yaklaş, acıdan uzaklaş.'tır. Aristippos gibi filozoflar hazlar arasında ayırım yapmazken Epiküros’a göre uzun süre mutluluk sağlayan hazları tercih etmeli, hesapçı davranmalıyız.",
        imgSrc : "img/idea.png",
        choiceA : "Epikürizm",
        choiceB : "Özgürlük",
        choiceC : "Vicadan",
	    choiceD : "Stoacı",
	    correct : "A"
    } ,    {
        question : "22. .......’a göre temel erdemler; 1-ölçülülük, 2-cesaret, 3-bilgelik ve 4-adalettir.",
        imgSrc : "img/idea.png",
        choiceA : "Aristoteles",
        choiceB : "Platon",
        choiceC : "Aristippos",
	    choiceD : "Epiküros",
	    correct : "B"
    } ,    {
        question : "23. ....... ’e göre erdem, aşırı uç noktalardan kaçınmak, iki aşırı uç arasındaki orta yolu bulmaktır.",
        imgSrc : "img/idea.png",
        choiceA : "Aristoteles",
        choiceB : "Platon",
        choiceC : "Aristippos",
	    choiceD : "Epiküros",
	    correct : "A"
    } ,    {
        question : "24. ....... göre erdem dört temele dayanır: bilgelik, cesaret, adalet ve kendini kontrol etmek  ",
        imgSrc : "img/idea.png",
        choiceA : "Epiküristlere ",
        choiceB : "Stoacılara ",
        choiceC : "Platon'a",
	    choiceD : "Aristoteles'e",
	    correct : "B"
    } ,    {
        question : "25. 'Her şeyin ifrat(aşırı fazlası) ve tefriti(normalden azı) iyi değildir.'  görüşünü benimseyen  ''Gâlibî'' lerin bu Erdem ilkesi aşağıdaki filozofların ve akımların hangisiyle örtüşmektedir?",
        imgSrc : "img/idea.png",
        choiceA : "Epikürizim ",
        choiceB : "Stoacı görüş",
        choiceC : "Platon",
	    choiceD : "Aristoteles",
	    correct : "D"
	    
    } 
// 25 tane	
	
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
















