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
        question : "1. Tabiat da her şey insanla uyumludur. Ateş, hava, su ve toprak insan varlığına uygundur. Bu uygunluğu sağlayan varlık yaratıcıdır. Bu açıklamayı içeren Tanrının varlığının delili nedir? ",
        imgSrc : "img/refleksif.png",
        choiceA : "Kozmolojik delil ",
        choiceB : "İnaiyet delili ",
        choiceC : "İhtira delili ",
	    choiceD : "Hudüs delili ",
	    correct : "B"
    }, {
        question : "2. Hristiyan felsefesinde ele alınan konulardan biri de tümeller problemidir. Buna göre,  'Tümeller ayrı bir varlık olarak Tanrı’nın zihnindedir.' Yukarıda yer alan açıklama aşağıdaki görüşlerden hangisine karşılık gelir? ",
        imgSrc : "img/soru2.png",
        choiceA : "Kavram realizmi",
        choiceB : "Kavramcılık",
        choiceC : "Adcılık ",
	    choiceD : "Sığır ",
	    correct : "A"
    },	{
        question : "3. Hristiyan felsefesinde ele alınan konulardan biri de tümeller problemidir. Buna göre,  'Tümellerin tek başına gerçeklikleri yoktur. Onlar soyutlama ve genelleme sözlerinden ibarettir.' Yukarıda yer alan açıklama aşağıdaki görüşlerden hangisine karşılık gelir?  ",
        imgSrc : "img/soru2.png",
        choiceA : "Kavram realizmi",
        choiceB : "Kavramcılık",
        choiceC : "Adcılık ",
	    choiceD : "Sığır ",
	    correct : "C"
		
    },    {
        question : "4. Aşağıdakilerden hangisi İslam ve Hıristiyan felsefesinin ortak noktalarından biridir? ",
        imgSrc : "img/soru5.png",
        choiceA : "Her iki felsefe, çok tanrı inancının olduğu toplumlarda ortaya çıkmıştır. ",
        choiceB : "Her iki felsefe, farklı yüzyıllarda ortaya çıkmıştır. ",
        choiceC : "Her iki felsefe, aynı filozoflar tarafından temsil edilmiştir. ",
	    choiceD : "Her iki felsefe, din kaynaklı olup dinî öğretileri temellendirmeyi amaç edinmiştir. ",
	    correct : "D"
	    
    } ,    {
        question : "5. Felsefe Orta Çağ’da Batıda din adamlarını yetiştiren manastır ve katedral okullarında gelişmiş, tamamıyla dini karakterli bir etkinlik olarak ortaya çıkmıştır. Bu okullarda gelişen felsefeye verilen isim aşağıdakilerden hangisidir? ",
        imgSrc : "img/soru6.png",
        choiceA : "Tasavvuf ",
        choiceB : "Skolastik ",
        choiceC : "Akademi ",
	    choiceD : "Rönesans ",
	    correct : "B"
    } ,    {
        question : "6. Aşağıdakilerden hangisi öncelikle Hristiyan felsefesine ait bir özellik olarak gösterilebilir? ",
        imgSrc : "img/soru6a.png",
        choiceA : "Dinsel öğretilerin temellendirilmesi ",
        choiceB : "İnsan ve davranışlara önem verilmesi ",
        choiceC : "Problemlere pratik merkezli yaklaşılması ",
	    choiceD : "Evrenini yapısının araştırılması ",
	    correct : "A"
    } ,    {
        question : "7. Ortaçağda felsefenin ağırlıklı olarak din ve tanrı gibi konuları işlemesi aşağıdakilerden hangisinin göstergesidir? ",
        imgSrc : "img/refleksif.png",
        choiceA : "Felsefenin sistemli olması  ",
        choiceB : "Felsefenin eleştiriye açık olması ",
        choiceC : "Felsefenin varlığı ele alması ",
	    choiceD : "Felsefenin toplumsal koşullardan etkilendiğinin ",
	    correct : "D"
    } ,    {
        question : "8. El Kindi’ye göre âlem kadim değil hadistir. Yani sonradan olmadır. Her sonradan var olanın varlığı bir yaratıcıya bağlıdır. Buna göre El Kindi Tanrı’nın varlığına ilişkin aşağıdaki delillerden hangisini öne sürmüştür?  ",
        imgSrc : "img/elkindi.png",
        choiceA : "İhtira delili ",
        choiceB : "Ahlaki delil ",
        choiceC : "Hüdus delili ",
	    choiceD : "Düzen delili ",
	    correct : "C"
    } ,    {
        question : "9. Hristiyanlık yayılma sürecinde bazı felsefi görüşlerle karşı karşıya gelmiştir.Dine karşı eleştirileri savunmak adına bu din içinde bazı filozoflar çıkmıştır. Savunma adına yapılan bu felsefenin adı aşağıdakilerden hangisidir? ",
        imgSrc : "img/apoloji.png",
        choiceA : "Metafizik ",
        choiceB : "Apoloji ",
        choiceC : "Skolastik ",
	    choiceD : "Patristik ",
	    correct : "B"
    } ,    {
        question : "10. Aşağıdakilerden hangisi İslam felsefesinin genel özellikleri arasında değildir? ",
        imgSrc : "img/aydinyazar.png",
        choiceA : "Antik Yunan felsefesinden etkilenmişlerdir.  ",
        choiceB : "Akıl ,İman, inanç gibi konular tartışılmıştır. ",
        choiceC : "Aydın ve Yazarlar sınıfı oluşmuştur. ",
	    choiceD : "Felsefenin gelişmesine katkı sağlanmıştır. ",
	    correct : "C"
    } ,    {
        question : "11. Aşağıdakilerden hangisi Orta Çağ Felsefesi (MS 2. yüzyıl- MS 15. yüzyıl) temel problemlerinden değildir? ",
        imgSrc : "img/ortacag.png",
        choiceA : "Tanrının varlığını kanıtlama problemi  ",
        choiceB : "Kötülük Problemi ",
        choiceC : "Ruhun ölümsüzlüğü problemi ",
	    choiceD : "Arkhe problemi ",
	    correct : "D"
    } ,    {
        question : "12. Tanrının varlığını evrendeki düzenden hareketle açıklayan görüş aşağıdakilerden hangisidir?",
        imgSrc : "img/kozmoz.png",
        choiceA : "Ontolojik kanıt  ",
        choiceB : "Teleolojik kanıt  ",
        choiceC : "Kozmolojik kanıt  ",
	    choiceD : "Hudus kanıtı  ",
	    correct : "C"
    } ,    {
        question : "13. Aşağıdakilerden hangisi MS 2-MS 15.Yüzyıl Felsefesinin oluşumunda etkili olmamıştır? ",
        imgSrc : "img/refleksif.png",
        choiceA : "Platon ",
        choiceB : "Sokrates ",
        choiceC : "Stoa Felsefesi ",
	    choiceD : "Epikürosçuluk ve Yeni-Platonculuk",
	    correct : "B"
    } ,    {
        question : "14. İskenderiye Kütüphanesi'nin yakılması esnasında yaşamını yitiren filozof kimdir? ",
        imgSrc : "img/refleksif.png",
        choiceA : "Hypatia ",
        choiceB : "Aristoteles ",
        choiceC : "Sokrates ",
	    choiceD : "Aquinalı Thomas ",
	    correct : "A"
    } ,    {
        question : "15. Hangi Filozof Skolastik Dönem'in önde gelenlerindendir? ",
        imgSrc : "img/refleksif.png",
        choiceA : "Augustinus ",
        choiceB : "Anselmus ",
        choiceC : "Platon ",
	    choiceD : "Tertullian  ",
	    correct : "B"
    } ,    {
        question : "16. Aşağıdakilerden hangisi Hristiyan Felsefesinin genel özelliklerinden biri değildir? ",
        imgSrc : "img/soru1.png",
        choiceA : "İnanç merkezlidir.",
        choiceB : "Antik Yunan'dan etkilenmemiştir.",
        choiceC : "Tanrı'nın varlığı kanıtlanmaya çalışılmıştır. ",
	    choiceD : "İnanç bilgiyi mümkün kılar. ",
	    correct : "B"
    } ,    {
        question : "17.  Hristiyan Felsefesinin ilk dönemi ....... olarak bilinir.  ",
        imgSrc : "img/idea.png",
        choiceA : "Skolastik  ",
        choiceB : "Ontolojik  ",
        choiceC : "Kozmolojik  ",
	    choiceD : "Patristik  ",
	    correct : "D"
    } ,    {
        question : "18.  Kötülüğün insandaki irade zayıflığından kaynaklandığını ifade eden filozof kimdir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Augustinus  ",
        choiceB : "A.Thomas  ",
        choiceC : "Anselmus  ",
	    choiceD : "Ockhamlı William  ",
	    correct : "A"
    } ,    {
        question : '19. "İnsan, gerçekliğin evrensel bilgisini elde etme imkanı bulur."  Hristiyanlık felsefesinde bu konunun işlendiği problem aşağıdakilerden hangisinde yer alır? ',
        imgSrc : "img/idea.png",
        choiceA : "Kötülük Problemi  ",
        choiceB : "Tümeller Problemi  ",
        choiceC : "Tanrı'nın Varlığı  ",
	    choiceD : "Tanrı-Evren ilişkisi  ",
	    correct : "B"
    } ,     {
        question : "20.  Aşağıdakilerden hangisi İslâm Felsefesinin genel özelliklerinden biri değildir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Antik Yunan'dan etkilenmiştir.  ",
        choiceB : "Akıl,iman ve inanç gibi konular tartışılmıştır.  ",
        choiceC : "Çeviri faaliyetleri yapılmıştır.  ",
	    choiceD : "Batı'ya bir katkısı olmamıştır.  ",
	    correct : "D"
    } ,    {
        question : "21.   İbn Sînâ varlığı kaça ayırmıştır? ",
        imgSrc : "img/idea.png",
        choiceA : "1 => zorunlu varlık (vâcib-ül vücud)  ",
        choiceB : "2 => zorunlu varlık ve mümkün olan (mümkin-ül vücud)   ",
        choiceC : "3 => zorunlu varlık, mümkün olan ve mümkün olmayan (mümteni-ul vücud)",
	    choiceD : "Madde yoktur   ",
	    correct : "C"
    } ,    {
        question : "22.  Yaratıcının varlığını kanıtlamak için  hudûs(sonradan yaratılan) deliline  başvuran İslâm filozofu kimdir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Eş'arî  ",
        choiceB : "İbn Sînâ  ",
        choiceC : "El Kindî  ",
	    choiceD : "Fârâbî  ",
	    correct : "C"
    } ,    {
        question : "23.  ......  delili, sonradan yaratılanın zorunlu olarak bir yaratıcıyı gerektirmesi mantığına dayanır. ",
        imgSrc : "img/idea.png",
        choiceA : "Hudûs ",
        choiceB : "kadîm (öncesiz)",
        choiceC : "hâdis (sonradan olan)",
	    choiceD : "kedi ",
	    correct : "A"
    } ,    {
        question : "24.  İslam filozoflarından Er Razi hangi felsefi akımı savunmuştur.(Koyu bir rasyonalist olan, çalışmalarında gözlem, deney ve tümevarım yöntemini başarıyla uygulayan Râzî, tıp ve kimya alanındaki başarıları yanında atom görüşleriyle de dikkat çekmişdir.)  ",
        imgSrc : "img/idea.png",
        choiceA : "natüralist (tabiyyun) akımı ",
        choiceB : "materyalizm  ",
        choiceC : "sembolizm  ",
	    choiceD : "nominalizm  ",
	    correct : "A"
    },    {
        question : "25.  Akıl insanı yanıltabilir, gerçek ancak inanç ve vahiyle kavranabilir düşüncesi hangi görüşe aittir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Dogmatik  ",
        choiceB : "Eleştirel  ",
        choiceC : "Uzlaştırıcı  ",
	    choiceD : "Faydacılık  ",
	    correct : "A"
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
















