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
        question : "1. ........ arkhedir. Nicelik olarak sınırsız, nitelik olarak belirsizdir. Madde değildir, soyuttur. Sonsuz olan bu ilk nedendir. İlk olarak birbirine karşıt olan  sıcak-soğuk ortaya çıkmıştır. Varlıklar sıcak-soğuk çatışmasından  çıkmıştır.  ",
        imgSrc : "img/refleksif.png",
        choiceA : "Bir ",
        choiceB : "Aperion ",
        choiceC : "Su ",
	    choiceD : "Toprak ",
	    correct : "B"
    }, {
        question : "2. …………  : Varlık vardır, yokluk yoktur. ilkesini temel almıştır. Evreni durduran filozof olarakda bilinir. Arkhe 1’dir. Boşluk içermez, hareketsizdir. Değişim yanılgıdır. Yok olmak yoktur. Sadece var olanın bilgisi vardır.? ",
        imgSrc : "img/pisagor.png",
        choiceA : "Herakleitos",
        choiceB : "Pisagor",
        choiceC : "Parmenides",
	    choiceD : "Thales",
	    correct : "C"
    },	{
        question : '3. …………  : "Değişmeyen tek şey değişimin kendisidir Arkhe ateştir. Her şey karşıtına dönüşür. Logos akıldır. Aynı suda iki kere yıkanmaz. Toplum, her şeyin dış yönüne bakıp boş inançlar içinde yuvarlanıp gider?',
        imgSrc : "img/rasyonellik.png",
        choiceA : "Herakleitos",
        choiceB : "Pisagor",
        choiceC : "Parmenides",
	    choiceD : "Thales",
	    correct : "A"
		
    },    {
        question : "4. MÖ 6.yy-MS 2.yy arasında doğa filozoflarının açıklamalarında varlığı düzenleyen maddesel ilke (ilk neden) hangi kavramla ifade edilmiştir?",
        imgSrc : "img/yigilimli.png",
        choiceA : "İdea ",
        choiceB : "Logos",
        choiceC : "Aperion",
	    choiceD : "Arkhe ",
	    correct : "D"
	    
    } ,    {
        question : "5. Aşağıdakilerden hangisi Antik Çağ (MÖ 6.yy-MS 2.yy) dönemi filozoflarından biri değildir?",
        imgSrc : "img/mitoloji.png",
        choiceA : "Pisagor ",
        choiceB : "Thales",
        choiceC : "Sokrates ",
	    choiceD : "Descartes ",
	    correct : "D"
    } ,    {
        question : "6. Şehir şehir dolaşıp para karşılığı dersler verirlerdi. Söz söyleme sanatı üzerine dersler verirlerdi. Bu kişilere göre kesin bilgi yoktur. Pragmatisttir. Bu kişilere verilen isim nedir?",
        imgSrc : "img/elestiri.png",
        choiceA : "Filozof",
        choiceB : "Hatip",
        choiceC : "Sofist",
	    choiceD : "Öğretmen",
	    correct : "C"
    } ,    {
        question : "7.  Sorgulanmamış hayat yaşamaya değmez. Ahlaki doğrular vardır ve göreceli değildir. İnsanın özü iyidir. Kötülük bilgisizlikten kaynaklanır. Mairotik yöntemi kullanmıştır. Doğru bilgi kişinin kendisindedir doğuştandır ve diyalog yöntemiyle ortaya çıkar",
        imgSrc : "img/hikmet.png",
        choiceA : "Pisagor ",
        choiceB : "Thales",
        choiceC : "Aristoteles ",
	    choiceD : "Sokrates ",
	    correct : "D"
    } ,    {
        question : "8. Varlıkların görünüşleri sürekli değişir. Özleri korunur. Gerçek varlık maddenin özündedir. Maddeler birleşip formları oluşturur. Canlı varlıklar (bitki, hayvan - insan – Tanrı (salt akıl)). Hangi filozof? ",
        imgSrc : "img/kuresel.png",
        choiceA : "Pisagor ",
        choiceB : "Thales",
        choiceC : "Aristoteles ",
	    choiceD : "Sokrates ",
	    correct : "C"
    } ,    {
        question : "9. Devlet, iş bölümünden dolayı ortaya çıkmıştır. Yönetici sınıf bilge, asker sınıfı cesaret, zanaatkar sınıfı ölçülülük erdemlerine sahip olmalıdır. Devlet, filozoflar tarafından yönetilmelidir. Hangi filozof? ",
        imgSrc : "img/tales.png",
        choiceA : "Pisagor ",
        choiceB : "Platon",
        choiceC : "Aristoteles ",
	    choiceD : "Sokrates ",
	    correct : "B"
    } ,    {
        question : "10.  I. Maddi neden:Neyden yapıldığıdır.<br> II. Formel neden:Biçimsel nedendir.<br>III. Fail neden:Maddenin biçim kazanmasını sağlayandır.<br>IV. Ereksel neden:Biçimlendirmekteki amaçtır. <B> Yukarıda verilenlerden hangisi yanlıştır.</B>",
        imgSrc : "img/tutarli.png",
        choiceA : "II , III ",
        choiceB : "II ",
        choiceC : " III",
	    choiceD : "Hepsi doğru ",
	    correct : "D"
    } ,    {
        question : "11.  Erdemlilik eylemlerin aşırılığı ya da eksikliği nedeniyle bozulur. Kişi, kendi iradesiyle orta yolu bulur. İnsanın erdemli olması buna bağlıdır. Aristotelesin görüşü günümüzde ...... olarak da bilinir. ",
        imgSrc : "img/idea.png",
        choiceA : "altın oran ",
        choiceB : "altın orta",
        choiceC : "erekselllik ",
	    choiceD : " fenomen",
	    correct : "B"
    } ,    {
        question : "12. İnsan ne korkak, nede delice atılgan olmalıdır. Bu ikisinin arasında yer almalıdır.  ",
        imgSrc : "img/idea.png",
        choiceA : "cesaret ",
        choiceB : "sorumluluk ",
        choiceC : "cömertlik ",
	    choiceD : "bilgelik ",
	    correct : "A"
    } ,    {
        question : "13. İnsan ne güdümlü olmalıdır nede asi olmalıdır. Bu ikisinin arasında yer almalıdır.  ",
        imgSrc : "img/idea.png",
        choiceA : "cesaret ",
        choiceB : "sorumluluk ",
        choiceC : "cömertlik ",
	    choiceD : "bilgelik ",
	    correct : "B"
    } ,    {
        question : "14.  İnsan ne cimri, nede savurgan olmalıdır. Bu ikisinin arasında yer almalıdır. ",
        imgSrc : "img/idea.png",
        choiceA : "cesaret ",
        choiceB : "sorumluluk ",
        choiceC : "cömertlik ",
	    choiceD : "bilgelik ",
	    correct : "C"
    } ,    {
        question : "15.  İnsan ne vurdumduymaz, nede aşırı kaygılı olmalıdır. Bu ikisinin arasında yer almalıdır.   ",
        imgSrc : "img/idea.png",
        choiceA : "cesaret ",
        choiceB : "sorumluluk ",
        choiceC : "cömertlik ",
	    choiceD : "dengeli olma ",
	    correct : "D"
    } ,    {
        question : "16. İnsan ne cahil, nede bilgiç (çok bilmiş) olmalıdır. Bu ikisinin arasında yer almalıdır.  ",
        imgSrc : "img/idea.png",
        choiceA : "cesaret ",
        choiceB : "sorumluluk ",
        choiceC : "cömertlik ",
	    choiceD : "bilgelik ",
	    correct : "D"
    } ,    {
        question : "17.  'Bu kişiler dayanılmaz bir mantık silsilesi ve bilgilerine olan güvenleriyle sizi aptal, beceriksiz konumuna düşüren ve savunmaya zorlayan insanlardır' ",
        imgSrc : "img/idea.png",
        choiceA : "Ukalalar ",
        choiceB : "Çokbilmişler ",
        choiceC : "Filozoflar ",
	    choiceD : "Sofistler ",
	    correct : "B"
    } ,    {
        question : '18. "İnsan her şeyin ölçüsüdür." diyerek bilgilerin göreceli (kişiden kişiye değişen) olduğunu savunan (sofist) filozof kimdir? ',
        imgSrc : "img/idea.png",
        choiceA : "Gorgias ",
        choiceB : "Sokrates ",
        choiceC : "Protagoras ",
	    choiceD : "Platon ",
	    correct : "C"
    } ,    {
        question : '19. "Hiçbir şey yoktur. Olsa da bilemeyiz. Bilsek de aktaramayız." diyerek hem evrensel bilginin hem varlığın olmadığını savunan (sofist) filozof kimdir?',
        imgSrc : "img/idea.png",
        choiceA : "Protagoras ",
        choiceB : "Platon ",
        choiceC : "Thales ",
	    choiceD : "Gorgias ",
	    correct : "D"
    } ,     {
        question : '20.  ....  göre Düşünce Erdemi eğitimle, Karakter Erdemi de alışkanlıkla elde edilir. Karakter erdemleri çevreyle oluşan erdemlerdir. İnsan eylemlerindeki aşırılık veya eksikliğin iyi olmadığını ve bu iki uç arasında orta yolu bulmak gerektiğini söyler. ',
        imgSrc : "img/idea.png",
        choiceA : "Pisagor ",
        choiceB : "Platon",
        choiceC : "Aristoteles ",
	    choiceD : "Sokrates ",
	    correct : "C"
    } ,    {
        question : "21. Platon'un mağara benzetmesindeki mahkumlar günümüz sinemasında neyi temsil etmektedir?",
        imgSrc : "img/idea.png",
        choiceA : "izleyiciler ",
        choiceB : "projeksiyon ",
        choiceC : "film ",
	    choiceD : "koltuklar ",
	    correct : "A"
    } ,    {
        question : "22. Platon'un mağara benzetmesindeki ateş günümüz sinemasında neyi temsil etmektedir?",
        imgSrc : "img/idea.png",
        choiceA : "izleyiciler ",
        choiceB : "projeksiyon ",
        choiceC : "film ",
	    choiceD : "sinema ekranı ",
	    correct : "B"
    } ,    {
        question : "23. Platon'un mağara benzetmesindeki duvardaki gölgeler günümüz sinemasında neyi temsil etmektedir?",
        imgSrc : "img/idea.png",
        choiceA : "izleyiciler ",
        choiceB : "projeksiyon ",
        choiceC : "film ",
	    choiceD : "sinema ekranı ",
	    correct : "D"
    } ,    {
        question : "24. Bu filozof  insanlarda doğuştan var olan bilgiyi açığa çıkarırken karşılıklı konuşma yöntemini uygular. Bu yöntem, ironi yani alaya alma ve maiotik yani doğurtma olmak üzere iki aşamadan oluşur. ",
        imgSrc : "img/idea.png",
        choiceA : "Aristoteles ",
        choiceB : "Sokrates ",
        choiceC : "Platon ",
	    choiceD : "Thales ",
	    correct : "B"
    },    {
        question : "25. Hangisi Hierapolis 'te yaşamış  Stoa felsefesinin temsilcilerinden biri değildir ?",
        imgSrc : "img/idea.png",
        choiceA : "Kleanthes ",
        choiceB : "Diogenes ",
        choiceC : "Lukianos ",
	    choiceD : "Epiktetos ",
	    correct : "D"
    }  ,    {
        question : "26. Sokrates'in yönteminde ilk önce kendisinin bilmediğini dile getirdiği bölüme ne denir ?",
        imgSrc : "img/idea.png",
        choiceA : "maiotik ",
        choiceB : "form ",
        choiceC : "idea ",
	    choiceD : "ironi ",
	    correct : "D"
    } ,    {
        question : "27. 'Temel amacı mutluluktur. Mutluluğa ulaşmak içinse doğaya uygun yaşamak gerekir. Dolayısıyla doğaya uygun yaşamayı felsefi olarak benimsemişler ve dünya vatandaşlığını savunmuşlardır. '",
        imgSrc : "img/idea.png",
        choiceA : "Sofistler",
        choiceB : "Stoacılar",
        choiceC : "Hedonistler ",
	    choiceD : "Liberaller",
	    correct : "B"
    } ,    {
        question : "28. Alçının vazoya dönüşmesini sağlayan sanatçının nedeni hangisidir? ",
        imgSrc : "img/idea.png",
        choiceA : "formel ",
        choiceB : "fail ",
        choiceC : "maddi ",
	    choiceD : "ereksel ",
	    correct : "B"
    } ,    {
        question : "29. Platon'un mağara benzetmesindeki mahkumlar günümüz sinemasında neyi temsil etmektedir?",
        imgSrc : "img/idea.png",
        choiceA : "izleyiciler ",
        choiceB : "projeksiyon ",
        choiceC : "film ",
	    choiceD : "koltuklar ",
	    correct : "A"
    } ,    {
        question : "30. Platonun sanat anlayışı nasıldır ?",
        imgSrc : "img/idea.png",
        choiceA : "fenomenlerdir ",
        choiceB : "yansımadır ",
        choiceC : "yansımanın yansımasıdır ",
	    choiceD : "ideadır ",
	    correct : "C"
    } ,    {
        question : '31. "Nikomakhos Etik " adlı eserinde ahlak görüşlerini anlatan filozof kimdir?',
        imgSrc : "img/idea.png",
        choiceA : "Aristoteles ",
        choiceB : "Parmenides ",
        choiceC : "Heraklitos ",
	    choiceD : "Sokrates ",
	    correct : "A"
    } ,    {
        question : "32. Aristotelesin altın orta görüşüyle ters düşen hangisidir?",
        imgSrc : "img/idea.png",
        choiceA : "Cesaret ",
        choiceB : "Savurganlık ",
        choiceC : "Sorumluluk ",
	    choiceD : "Bilgelik ",
	    correct : "B"
    } ,    {
        question : "33. Bir heykeli yapan sanatçı aristotelesin dört nedeninden hangisine karşılık gelir?",
        imgSrc : "img/idea.png",
        choiceA : "Fail  ",
        choiceB : "Maddi  ",
        choiceC : "Formel  ",
	    choiceD : "Ereksel  ",
	    correct : "A"
    } ,    {
        question : "34. İran’da MÖ1000-600 yıllarında etkili olan, ikili bir anlayışı öne süren bir inançtır. Ahuramazda ve Ehrimen isimli iki yaratıcı vardır. Felsefenin değer tartışmalarında etkili olan bu inanç  hangisidir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Mani inancı  ",
        choiceB : "Zerdüşt inancı  ",
        choiceC : "Sihizm  ",
	    choiceD : "Hinduizm  ",
	    correct : "B"
	   
    } 
// 27 E KADAR DEĞİŞTİRDİM  34 tane	
	
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
















