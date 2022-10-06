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
        question : "1. Felsefe nerede ortaya çıkmıştır?	 ",
        imgSrc : "img/refleksif.png",
        choiceA : "Antik Yunan ",
        choiceB : "Mısır ",
        choiceC : "Mezopotamya ",
	    choiceD : "Çin ",
	    correct : "A"
    }, {
        question : "2. Felsefe ne zaman ortaya çıkmıştır? ",
        imgSrc : "img/pisagor.png",
        choiceA : "MÖ 4.yüzyıl ",
        choiceB : "MÖ 6.yüzyıl ",
        choiceC : "MÖ 8.yüzyıl ",
	    choiceD : "MÖ 2.yüzyıl ",
	    correct : "B"
    },	{
        question : "3. Felsefenin kelime anlamı nedir?",
        imgSrc : "img/rasyonellik.png",
        choiceA : "Gerçeğe ulaşma ",
        choiceB : "Düşünme ",
        choiceC : "Bilgelik sevgisi ",
	    choiceD : "Bilgi ",
	    correct : "C"
		
    },    {
        question : "4. Tarihteki ilk filozof kimdir?	 ",
        imgSrc : "img/yigilimli.png",
        choiceA : "Aristoteles ",
        choiceB : "Thales",
        choiceC : "Sokrates ",
	    choiceD : "Platon ",
	    correct : "B"
	    
    } ,    {
        question : "5. Felsefe terimini ilk defa kullanan filozof kimdir?	 ",
        imgSrc : "img/mitoloji.png",
        choiceA : "Pisagor ",
        choiceB : "Thales",
        choiceC : "Sokrates ",
	    choiceD : "Platon ",
	    correct : "A"
    } ,    {
        question : "6. İlk filozof Thales'e göre arkhe (varlığın ana maddesi) nedir?	 ",
        imgSrc : "img/elestiri.png",
        choiceA : "ateş ",
        choiceB : "hava ",
        choiceC : "toprak ",
	    choiceD : "su ",
	    correct : "D"
    } ,    {
        question : "7. Anaksimenes'e göre arkhe (varlığın ana maddesi) nedir?	 ",
        imgSrc : "img/hikmet.png",
        choiceA : "ateş ",
        choiceB : "hava ",
        choiceC : "toprak ",
	    choiceD : "su ",
	    correct : "B"
    } ,    {
        question : "8. Anaksimandros'a göre arkhe (varlığın ana maddesi) nedir?	 ",
        imgSrc : "img/kuresel.png",
        choiceA : "aperion ",
        choiceB : "atom ",
        choiceC : "ateş ",
	    choiceD : "bir ",
	    correct : "A"
    } ,    {
        question : "9. Demokritos'a göre arkhe (varlığın ana maddesi) nedir? ",
        imgSrc : "img/tales.png",
        choiceA : "aperion ",
        choiceB : "atom ",
        choiceC : "ateş ",
	    choiceD : "bir ",
	    correct : "B"
    } ,    {
        question : "10. Empedokles'e göre arkhe (varlığın ana maddesi) nedir?",
        imgSrc : "img/tutarli.png",
        choiceA : "hava ",
        choiceB : "su ",
        choiceC : "Hava, su, toprak ve ateş ",
	    choiceD : "toprak ",
	    correct : "C"
    } ,    {
        question : "11. Parmenides'e göre arkhe (varlığın ana maddesi) nedir? ",
        imgSrc : "img/idea.png",
        choiceA : "aperion ",
        choiceB : "atom ",
        choiceC : "ateş ",
	    choiceD : "bir ",
	    correct : "D"
    } ,    {
        question : "12. Herakleitos'a göre arkhe (varlığın ana maddesi) nedir? ",
        imgSrc : "img/idea.png",
        choiceA : "ateş ",
        choiceB : "atom ",
        choiceC : "su ",
	    choiceD : "toprak ",
	    correct : "A"
    } ,    {
        question : "13. Taoizmin kurucusu kimdir? (Çin Uyg.)  ",
        imgSrc : "img/idea.png",
        choiceA : "Lao Tse ",
        choiceB : "Sokrates ",
        choiceC : "Uygurlar ",
	    choiceD : "Platon ",
	    correct : "A"
    } ,    {
        question : "14. Zerdüşt inancı hangi uygarlığa aittir? ",
        imgSrc : "img/idea.png",
        choiceA : "Çin ",
        choiceB : "Hint ",
        choiceC : "Sümer ",
	    choiceD : "İran ",
	    correct : "D"
    } ,    {
        question : "15. Tarihte ilk yazılı kültüre geçiş yapan uygarlık hangisidir? (Gılgamış Destanı, çivi yazısı) ",
        imgSrc : "img/idea.png",
        choiceA : "Çin ",
        choiceB : "Sümerler ",
        choiceC : "İran ",
	    choiceD : "Mısır ",
	    correct : "B"
    } ,    {
        question : "16. Hiyeroglif yazı hangi uygarlığa aittir?  ",
        imgSrc : "img/idea.png",
        choiceA : "Çin ",
        choiceB : "Sümerler ",
        choiceC : "İran ",
	    choiceD : "Mısır ",
	    correct : "D"
    } ,    {
        question : "17. Evrenin yaratılışında 'su'yun her şeyin kökeni ve canlı kaynağı olduğu fikri bulunan inanıştır. Bu inanış hangi uygarlığa aittir? ",
        imgSrc : "img/idea.png",
        choiceA : "Çin ",
        choiceB : "Hint ",
        choiceC : "Sümer ",
	    choiceD : "Yunan ",
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
    } ,    {
        question : '20. İroni ve Maiotik aşamalarından oluşan yöntemiyle kişilerde doğuştan bilgilerin var olduğunu diyalog ile ortaya çıkarılabileceğini savunan ünlü filozof kimdir?',
        imgSrc : "img/idea.png",
        choiceA : "Sokrates ",
        choiceB : "Aristoteles ",
        choiceC : "Platon ",
	    choiceD : "Thales ",
	    correct : "A"
    } ,    {
        question : "21. Aşağıdaki lerden hangisi Felsefenin çıkışını etkileyen medeniyetlerden değildir?",
        imgSrc : "img/idea.png",
        choiceA : "Çin ",
        choiceB : "Yunan ",
        choiceC : "Rus ",
	    choiceD : "Sümer ",
	    correct : "C"
    } ,    {
        question : "22. Geometrideki teoremi ile ünlü tarihin ilk filozofu kimdir? ",
        imgSrc : "img/idea.png",
        choiceA : "Pisagor",
        choiceB : "Thales ",
        choiceC : "Heraklitos ",
	    choiceD : "Anaksimenes ",
	    correct : "B"
    } ,    {
        question : '23. "Aynı ırmakta iki kez yıkananılmaz " sözü kime aittir ? ',
        imgSrc : "img/idea.png",
        choiceA : "Heraklitos ",
        choiceB : "Thales ",
        choiceC : "Diogenes ",
	    choiceD : "Anaksimenes ",
	    correct : "A"
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
        question : "27. Hangisi Aristoteles'in öne sürdüğü dört nedenden biri değildir?",
        imgSrc : "img/idea.png",
        choiceA : "maddi ",
        choiceB : "formel ",
        choiceC : "bilgelik ",
	    choiceD : "fail",
	    correct : "C"
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
// 34 tane	
	
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
















