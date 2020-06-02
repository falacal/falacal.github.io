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
        question : "1) Aralarındaki boşluklarla birlikte  gök cisimlerin tümüne verilen ad? ",
        imgSrc : "img/evren.png  ",
        choiceA : "boşluk",
        choiceB : "galaksi",
        choiceC : "Evren",
		choiceD : "yıldız",
		correct : "C"
    }, {
        question : "2) Dünya’ya en yakın yıldızın adı? ",
        imgSrc : "img/sun.gif  ",
        choiceA : "kutup yıldızı",
        choiceB : "güneş",
        choiceC : "ay",
		choiceD : "mars",
		correct : "B"
    }, {
        question : "3) Dünya atmosferi dışındaki gök cisimlerinin bulunduğu boşluğa verilen ad? ",
        imgSrc : "img/yorungede.gif  ",
        choiceA : "galaksi",
        choiceB : "meteor",
        choiceC : "kıyruklu yıldız",
		choiceD : "Uzay",
		correct : "D"
    }, {
        question : "4) Dünya’nın uydusu? ",
        imgSrc : "img/moons.png  ",
        choiceA : "Ay",
        choiceB : "Güneş",
        choiceC : "Yıldız",
		choiceD : "Mars",
		correct : "A"
    }, {
        question : "5) Milyonlarca gök cisminden oluşan gök adalara  verilen  ad? ",
        imgSrc : "img/galaksi.gif  ",
        choiceA : "Uzay",
        choiceB : "Plazma",
        choiceC : "Güneş sistemi",
		choiceD : "Galaksi",
		correct : "D"
    },{
        question : '6) "İnsanların geçmişte gökyüzü ile ilgili olayları nasıl inceleyip yorumladıklarını araştıran alt alandır. Arkeoloji, antropoloji, etnografya bilimleri ile ortak çalışır."<br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır?  ',
        imgSrc : "img/astrojeoloji.png  ",
        choiceA : "Astrobiyoloji ",
        choiceB : "Arkeoastronomi",
        choiceC : "Astromatematik",
		choiceD : "Astrojeoloji",
		correct : "B"
    }, {
        question : '7) "Gök cisimlerinin yörüngeleri ile ilgili hesaplamaları yapar. Ayrıca gözlemlerden elde edilen sayısal verilerin yorumlanması da bu alt alanın konusudur. Gök mekaniği olarak da adlandırılır. " <br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır? ',
        imgSrc : "img/astromath.gif  ",
        choiceA : "Arkeoastronomi ",
        choiceB : "Astrobiyoloji",
        choiceC : "Astrojeoloji",
		choiceD : "Astromatematik",
		correct : "D"
    },{
        question : '8) "Gök fiziği olarak da adlandırılan bu alt alan, gök cisimlerinden yayılan elektromanyetik dalgalardan elde edilen verileri yorumlar. Ayrıca gök cisimleri ve yıldızlar arası ortamdaki madde-ışınım etkileşimi de bu alt alanın konusudur." <br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır?',
        imgSrc : "img/astrofizik.gif  ",
        choiceA : "Astrofizik",
        choiceB : "Arkeoastronomi",
        choiceC : "Astrokimya",
		choiceD : "Astrojeoloji",
		correct : "A"
    }, {
        question : '9) "Gök cisimlerinin ve yıldızlar arası ortamın kimyasal yapısını inceleyen alt alandır." <br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır?',
        imgSrc : "img/astrokimya.gif  ",
        choiceA : "Astrojeoloji ",
        choiceB : "Arkeoastronomi",
        choiceC : "Astrokimya",
		choiceD : "Astrofizik",
		correct : "C"
    },{
        question : '10) "Evrendeki olası yaşam formlarının oluşum ve gelişimlerini inceleyen alt alandır." <br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır?',
        imgSrc : "img/arkeobiyoji.png",
        choiceA : "Astrojeoloji ",
        choiceB : "Astrokimya",
        choiceC : "Astrobiyoloji",
		choiceD : "Astrofizik",
		correct : "C"
    }, {
        question : '11) "Gezegenlerin, doğal uyduların, gök taşı vb. gök cisimlerinin yapılarını ve oluşumlarını inceleyen alt alandır" <br>Bu cümlede tanımlanan Astronominin hangi alt alanıdır? ',
        imgSrc : "img/arkeojeoloji.png",
        choiceA : "Astrojeoloji",
        choiceB : "Astrofizik",
        choiceC : "Astrokimya",
		choiceD : "Arkeoastronomi",
		correct : "A"
    },{
        question : '12) "Galilei teleskopla Samanyolu gök adasını gözlemlemiştir." <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/galile2.png",
        choiceA : "Babiller ",
        choiceB : "Mısırlılar",
        choiceC : "Orta Asya Türkleri",
		choiceD : "Avrupalılar",
		correct : "D"
    },{
        question : '13) "Kullandıkları takımyıldız adlandırmaları günümüzde de geçerlidir." <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/babil.png",
        choiceA : "Mısırlılar",
        choiceB : "Babiller",
        choiceC : "Orta Asya Türkleri",
		choiceD : "Çinliler",
		correct : "B"
    },{
        question : '14) "Bir günün 24 saate bölünme uygulamaları günümüze kadar ulaşmıştır." <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/misir.png  ",
        choiceA : "Çinliler ",
        choiceB : "Orta Asya Türkleri",
        choiceC : "Mısırlılar",
		choiceD : "Babiller",
		correct : "C"
    },{
        question : '15) "Evrenin altın veya demir bir kazık çevresinde dönen kubbe olduğunu ileri sürmüşlerdir." <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/demirkazik.png",
        choiceA : "Orta Asya Türkleri ",
        choiceB : "Babiller",
        choiceC : "Mısırlılar",
		choiceD : "Çinliler",
		correct : "A"
    },{
        question : '16) "Ay ve Güneş tutulması dışında meteor ve meteorit gibi gök cisimlerini de gözlemlemişlerdir" <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/cinliler.png  ",
        choiceA : "Mısırlılar ",
        choiceB : "Çinliler",
        choiceC : "Eski Yunanlılar",
		choiceD : "Babiller",
		correct : "B"
    },{
        question : '17) "Geliştirilen yıldız parlaklığı hesaplama sistemi çağdaş astronomi için temel olmuştur." <br>Bu cümle aşağıdakilerden hangisi ile ilgilidir?',
        imgSrc : "img/eskiyunan.png",
        choiceA : "Eski Yunanlılar ",
        choiceB : "Babiller",
        choiceC : "Orta Asya Türkleri",
		choiceD : "Mısırlılar",
		correct : "A"
    },{
        question : '18) "1403 yılında Semerkant ta doğmuştur. 1474 tarihinde İstanbul da vefat etmiştir. astronomi alanındaki eserlerinden bazıları;"<br> •Şerh-i Zic-i Uluğ Bey,<br>•Risale der İlmil-Hey e,<br>•el-Fethiyye fi İlmil-Hey e<br> Bu bilim insanımız kimdir?',
        imgSrc : "img/alikuscu.png",
        choiceA : "El-Biruni ",
        choiceB : "El-Battani ",
        choiceC : "Ömer Hayyam",
		choiceD : "Ali Kuşçu",
		correct : "D"
    },{
        question : '19)  Evrensel çekim yasasında Güneş ve gezegenler arasındaki çekim kuwetinin Güneş ile gezegenlerin birbirlerine olan uzaklıklarının karesi ile ters orantılı olduğunu ifade eden bilim insanı?',
        imgSrc : "img/newton.png",
        choiceA : "Galile ",
        choiceB : "Sir Isaac Newton",
        choiceC : "Nicolaus Copernicus",
		choiceD : "Einstein",
		correct : "B"
    },{
        question : '20) Samanyolu galaksisinin çok sayıda yıldızdan meydana geldiğini gözlemlemiş, Jüpiterin dört uydusunu keşfetmiş, Güneş in kendi ekseni etrafında 26 günlük periyotlarla dönme hareketi yaptığını bulan bilim insanı?',
        imgSrc : "img/galile.png",
        choiceA : "Einstein ",
        choiceB : "Sır lsaac Newton",
        choiceC : "Galile",
		choiceD : "Nicolaus Copernicus ",
		correct : "C"
    },{
        question : '21) Polonya da 1473 yılında doğmuş, çıplak gözle yaptığı gözlemler sonucunda Dünyanın ve diğer gök cisimlerinin Güneşin etrafında döndüğünü tespit edip bulan bilim insanı?',
        imgSrc : "img/kopernik.png",
        choiceA : "Einstein",
        choiceB : "Nicolaus Copernicus ",
        choiceC : "Galile",
		choiceD : "Sır lsaac Newton",
		correct : "B"
    },{
        question : '22) "Nişabur doğumludur (عمر خیام) Yaşadığı dönemin ünlü veziri Nizamül-Mülk ve Hasan Sabbah ile aynı medresede eğitim görmüş ve hayatı boyunca her ikisi ile de ilişkisini kesmemiştir ve astronomi alanında yaptığı çalışmalarla günümüz astronomi bilimine ışık tutmuştur. "<br> Bu bilim insanı ve şair kimdir?',
        imgSrc : "img/hayyam.png",
        choiceA : "El-Biruni ",
        choiceB : "El-Battani ",
        choiceC : "Ömer Hayyam",
		choiceD : "Ali Kuşçu",
		correct : "C"
    }
	
	
	
	
	
	
	
	 
	
	
// 18 SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















