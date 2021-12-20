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
        question : "1. 'İnsan zihninde doğuştan bilgiler vardır. Bilgi sadece bir hatırlamadır.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/iknaetmek.jpg",
        choiceA : "Fenomenoloji (Görüngübilim))",
        choiceB : "Rasyonalizm (Akılcılık)",
        choiceC : "Pragmatizm (Faydacılık)",
	    choiceD : "Pozivitizm (Olguculuk)",
	    correct : "B"
    }, {
        question : "2. 'İnsanı anlamanın yolu onun özünde nasıl bir varlık olduğunu anlamaktır.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/onermecesitleri.jpg",
        choiceA : "Fenomenoloji (Görüngübilim))",
        choiceB : "Rasyonalizm (Akılcılık)",
        choiceC : "Pragmatizm (Faydacılık)",
	    choiceD : "Pozivitizm (Olguculuk)",
	    correct : "A"
    },	{
        question : "3. 'Bir düşünce eğer işe yararsa bireysel veya toplumsal herhangi bir sorunu çözerse doğrudur.' Bu görüş hangi bilgi kuramına aittir?",
        imgSrc : "img/mantık-sembolleri.png",
        choiceA : "Fenomenoloji (Görüngübilim))",
        choiceB : "Rasyonalizm (Akılcılık)",
        choiceC : "Pragmatizm (Faydacılık)",
	    choiceD : "Pozivitizm (Olguculuk)",
	    correct : "C"
		
    },    {
        question : "4. 'Zihnimizde doğuştan hiçbir bilgi yoktur. Bütün bilgilerimiz sonradan edinilir.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/olumlu-olumsuz.png",
        choiceA : "Fenomenoloji (Görüngübilim))",
        choiceB : "Rasyonalizm (Akılcılık)",
        choiceC : "Empirizm (Deneycilik)",
	    choiceD : "Pozivitizm (Olguculuk)",
	    correct : "C"
    }, {
        question : "5.	'İnsan için süreyi kavramak önemlidir. İnsan süreyi zamanın akışından kavrar' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/analogy.png",
        choiceA : "Analitik Felsefe (Çözümleyici Felsefe)",
        choiceB : "Fenomenoloji (Görüngübilim))",
        choiceC : "Pozivitizm (Olguculuk)",
	    choiceD : "Entüisyonizm (Sezgicilik)",
 	    correct : "D"
    } , {
        question : "6.	'İnsan bilgisi deneyle başalar fakat sadece deneyden doğmaz. Zihnimizde doğuştan bazı kategoriler vardır.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "",
		choiceA : "Analitik Felsefe (Çözümleyici Felsefe)",
        choiceB : "Kritisizm ((Eleştiri Felsefesi)",
        choiceC : "Pozivitizm (Olguculuk)",
	    choiceD : "Entüisyonizm (Sezgicilik)",
	    correct : "B"
    } , {
        question : "7. 'Felsefe olgusal konuları incelemelidir. Deneyin konusu olmayan metafizik konulardan uzak durmalıdır.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/reality.jpg",
        choiceA : "Analitik Felsefe (Çözümleyici Felsefe)",
        choiceB : "Fenomenoloji (Görüngübilim))",
        choiceC : "Pozivitizm (Olguculuk)",
	    choiceD : "Entüisyonizm (Sezgicilik)",
	    correct : "C"
    } , {
        question : "8. 'Felsefe dil çözümlemeleri ile uğraşmalıdır. Dile getirilemeyen, sınanabilir olmayan yargılar anlamsızdır.' Bu görüş hangi bilgi kuramına aittir?  ",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Analitik Felsefe (Çözümleyici Felsefe)",
        choiceB : "Fenomenoloji (Görüngübilim))",
        choiceC : "Pozivitizm (Olguculuk)",
	    choiceD : "Entüisyonizm (Sezgicilik)",
	    correct : "A"
    } ,







	{
        question : "9.  ........ : Belirli bir yöntemle olaylar arasında değişmez neden-sonuç ilişkilerine ulaşmaya çalışan etkinliktir",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilim nedir?",
        choiceC : "Bilimsel yöntem nedir?",
	    choiceD : "Bilimsel sonuç nedir?",
	    correct : "B"
    } , {
        question : "10.	........ : Olay ve olguları akılcı ve nesnel biçimde ele almadır.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilim nedir?",
        choiceC : "Bilimsel yöntem nedir?",
	    choiceD : "Bilimsel sonuç nedir?",
	    correct : "A"
    } , {
        question : "11.	 ........ : Olguları betimleme ve açıklama yoluyla anlamaya çalışmadır.",
        imgSrc : "img/dil.png",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilimsel düşüncenin işlevi nedir?",
        choiceC : "Bilimsel yöntem nedir?",
	    choiceD : "Bilimsel sonuç nedir?",
	    correct : "B"
    } , {
        question : "12.	........ :  Belirli bir yöntem sonucu ulaşılan ve üzerinde herkesin uzlaşabileceği yargılardır.",
        imgSrc : "img/69.jpg",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilimsel düşüncenin işlevi nedir?",
        choiceC : "Bilimsel sonuç nedir? ",
	    choiceD : "Bilimsel yöntem nedir?",
	    correct : "C"
    } , {
        question : "13.	 ........ :  Bilimsel soruların çözümünde bilgilerin sistemli biçimde toplanması, yorumlanması ve değerlendirilmesi sürecinde izlenilen yoldur ",
        imgSrc : "img/argument.png",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilimsel düşüncenin işlevi nedir?",
        choiceC : " Bilimsel sonuç nedir? ",
	    choiceD : "Bilimsel yöntem nedir?",
	    correct : "D"
    } , {
        question : "14.  ........ :  Bilimin akılcı, nesnel, metodik ve sistemli olmasıdır. ",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "Bilimsel yaklaşım nedir?",
        choiceB : "Bilimsel düşüncenin işlevi nedir?",
        choiceC : "Bilimi diğer insan etkinliklerinden ayıran özellikler nelerdir? ",
	    choiceD : "Bilimsel yöntem nedir?",
	    correct : "C"
    } , 	{
        question : "15. Bilimsel bilginin özelliklerinden ........ , olaylar arasında değişmez neden-sonuç ilişkilerine ulaşır.",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "mantıksal olma",
        choiceB : "metodik olma",
        choiceC : "yasalara ulaşma",
	    choiceD :  "evrensellik  ",
	    correct : "C"
    } , 	{
        question : "16.	Bilimsel bilginin özelliklerinden ........ , bilgiye ulaşmada bilimsel yöntem ve teknikler kullanılmasıdır.",
        imgSrc : "img/gerceklik.png",
        choiceA : "yasalara ulaşma ",
        choiceB : "evrensellik  ",
        choiceC : "mantıksal olma ",
	    choiceD : "metodik olma",
	    correct : "D"
    } ,	{
        question : "17.	Bilimsel bilginin özelliklerinden ........ , insanlığın ortak mirası olmasıdır.",
        imgSrc : "img/dusunme2.png",
        choiceA : "mantıksal olma",
        choiceB : "olgusal olma ",
        choiceC : "eleştirel olma  ",
	    choiceD : "evrensel olma ",
	    correct : "D"
	  
    } , 	{
        question : "18.	Bilimsel bilginin özelliklerinden ........ , akıl ilkelerine ve çıkarım kurallarına dayalı olmasıdır.",
        imgSrc : "",
        choiceA : "mantıksal olma",
        choiceB : "olgusal olma ",
        choiceC : "eleştirel olma  ",
	    choiceD : "evrensel olma ",
	    correct : "A"
    } , 	{
        question : "19. Bilimsel bilginin özelliklerinden ........ , önermeleri doğrudan ya da dolaylı olarak gözleme dayanan olguları dile getirmesidir.",
        imgSrc : "",
        choiceA : "ilerlemeci olması",
        choiceB : "olgusal olma ",
        choiceC : "eleştirel olma  ",
	    choiceD : "evrensel olma ",
	    correct : "B"
    } , 	{
        question : "20.	Bilimsel bilginin özelliklerinden ........ , durağan değil, birikerek gelişen bir süreç içinde olmasına denir.",
        imgSrc : "",
        choiceA : "ilerlemeci olması",
        choiceB : "mantıksal olma  ",
        choiceC : "olgusal olma  ",
	    choiceD : "evrensel olma ",
	    correct : "A"
    } , 	{
        question : "21.	Bilimsel bilginin özelliklerinden ........ , var olan bilgi, kuram ve yasaları sorgulamadır.",
        imgSrc : "",
        choiceA : "mantıksal olma  ",
        choiceB : "olgusal olma  ",
        choiceC : "eleştirel olma ",
	    choiceD : "evrensel olma ",
	    correct : "C"
    } , 	{
        question : "22.	Bilimsel bilginin özelliklerinden ........ , tek tek olguları değil, aynı türden olguları ele almasıdır.",
        imgSrc : "",
        choiceA : "eleştirel olma ",
        choiceB : "genelleyici olma ",
        choiceC : "nesnel olma ",
	    choiceD : "öngörülü olma ",
	    correct : "B"
    } , 	{
        question : "23. Bilimsel bilginin özelliklerinden ........ , olay ve olguları ön yargılardan arınmış, tarafsız olarak ele alınmasıdır. ",
        imgSrc : "",
        choiceA : "öngörülü olma ",
        choiceB : "eleştirel olma  ",
        choiceC : "genelleyici olma  ",
	    choiceD : "nesnel olma ",
	    correct : "D"
    } , 	{
        question : "24. Bilimsel bilginin özelliklerinden ........ , geçmiş çalışmalara dayanılarak gelecekle ilgili olayların  kestirilebilmesidir. ",
        imgSrc : "",
        choiceA : "öngörülü olma ",
        choiceB : "eleştirel olma  ",
        choiceC : "genelleyici olma  ",
	    choiceD : "nesnel olma ",
	    correct : "A"
    } , 	{
        question : "25. Doğrulanmış hipotez olan teori, sayılarla ifade edilirse yasa ortaya çıkar. Yasa, olaylar arasında değişmez neden-sonuç ilişkisini gösterir.",
        imgSrc : "",
        choiceA : "Yasa aşaması: ",
        choiceB : "Teori aşaması: ",
        choiceC : "Deney aşaması: ",
	    choiceD : "Hipotez aşaması: ",
	    correct : "A"
    } , 	{
        question : "26.  Hipotez doğrulanıyorsa teori oluşur, doğrulanmıyorsa yeni bir hipotez kurulur",
        imgSrc : "",
        choiceA : "Yasa aşaması: ",
        choiceB : "Teori aşaması: ",
        choiceC : "Deney aşaması: ",
	    choiceD : "Hipotez aşaması: ",
	    correct : "B"
    } , 	{
        question : "27. İncelenecek konuyla ilgili sorunlar net biçimde ortaya konur",
        imgSrc : "",
        choiceA : "Yasa aşaması: ",
        choiceB : "Teori aşaması: ",
        choiceC : "Deney aşaması: ",
	    choiceD : "Problem aşaması:  ",
	    correct : "D"
    } , 	{
        question : "28. Problemle ilgili veriler toplanır, sınıflandırılır ve düzenlenir. Böylece problemin sınırları çizilir.",
        imgSrc : "",
        choiceA : "Gözlem aşaması:  ",
        choiceB : "Teori aşaması: ",
        choiceC : "Deney aşaması: ",
	    choiceD : "Problem aşaması:  ",
	    correct : "A"
    } , 	{
        question : "29. Verilere dayalı ve henüz denenmemiş çözüm önerisi hazırlanır.",
        imgSrc : "",
        choiceA : "Gözlem aşaması:  ",
        choiceB : "Teori aşaması: ",
        choiceC : "Hipotez aşaması:  ",
	    choiceD : "Problem aşaması:  ",
	    correct : "C"
    } , 	{
        question : "30. Olayların nedenlerini bulmak için belirli koşullar oluşturularak hipotez sınanır. Hipotezin olguları tarafından desteklenip desteklenmediğine bakılır.",
        imgSrc : "",
        choiceA : "Gözlem aşaması:  ",
        choiceB : "Teori aşaması: ",
        choiceC : "Deney aşaması: ",
	    choiceD : "Problem aşaması:  ",
	    correct : "C"
    }  
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	
	





	
	

	
// 32 tane	
	
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
















