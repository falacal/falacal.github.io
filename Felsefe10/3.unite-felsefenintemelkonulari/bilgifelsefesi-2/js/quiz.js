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
        question : "9.	'Neyi bilebilirim?' sorusu ........ sorusudur.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "bilginin imkanı",
        choiceB : "bilginin kaynağı",
        choiceC : "bilginin sınırları",
	    choiceD : "bilginin değeri",
	    correct : "C"
    } , {
        question : "10.	'Ne tür bir bilgi doğru kabul edilebilir ?' sorusu ........ sorusudur.",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "bilginin imkanı",
        choiceB : "bilginin kaynağı",
        choiceC : "bilginin sınırları",
	    choiceD : "bilginin değeri",
	    correct : "D"
    } , {
        question : "11.	Günlük yaşamın sınırları içinde gelişen, duyum ve algıya dayanan, deneyimsel bilgiye  ........ denir. ",
        imgSrc : "img/dil.png",
        choiceA : "dini bilgi",
        choiceB : "gündelik Bilgi",
        choiceC : "bilimsel Bilgi",
	    choiceD : "teknik Bilgi",
	    correct : "B"
    } , {
        question : "12.	........, özne ile nesne arasındaki ilişkinin inanç, vahiy, kutsal kitap ve din çerçevesinde kurulduğu bilgi çeşididir.",
        imgSrc : "img/69.jpg",
        choiceA : "Dini bilgi",
        choiceB : "Gündelik Bilgi",
        choiceC : "Bilimsel Bilgi",
	    choiceD : "Teknik Bilgi",
	    correct : "A"
    } , {
        question : "13.	........ insanın, temel gereksinimlerini karşılamak ve yaşamını kolaylaştırmak için bilgisini kullanma amacıyla araç gereç ile ilgili bilgilere denir.",
        imgSrc : "img/argument.png",
        choiceA : "Dini bilgi",
        choiceB : "Gündelik Bilgi",
        choiceC : "Bilimsel Bilgi",
	    choiceD : "Teknik Bilgi",
	    correct : "D"
    } , {
        question : "14.	........   güzeli arama, bulma veya onu yaratma anlamına gelen bir etkinliktir.",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "Sanat bilgisi",
        choiceB : "Gündelik Bilgi",
        choiceC : "Bilimsel Bilgi",
	    choiceD : "Teknik Bilgi",
	    correct : "A"
    } , 	{
        question : "15. ........ evreni ve var olan her şeyi bütün olarak kavramak, bilmek isteyen ve tümel bir açıklama tutkusundan kaynaklanan bir bilgi türüdür.",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "Sanat bilgisi",
        choiceB : "Felsefi ilgi",
        choiceC : "Bilimsel bilgi",
	    choiceD : "Teknik bilgi",
	    correct : "B"
    } , 	{
        question : "16.	........, sınırlı bir konusu ve belli bir yöntemi olan; sistemli ve genel-geçer sonuçlara ulaşmak isteyen bir bilgidir.",
        imgSrc : "img/gerceklik.png",
        choiceA : "Sanat bilgisi",
        choiceB : "Gündelik Bilgi",
        choiceC : "Bilimsel Bilgi",
	    choiceD : "Teknik Bilgi",
	    correct : "C"
    } ,	{
        question : "17.	Bilginin doğruluk ölçütlerinden biri olan   ........  : Düşünce ile nesne arasında ki tam uyuma denir. ",
        imgSrc : "img/dusunme2.png",
        choiceA : "tümel uzlaşım",
        choiceB : "tutarlılık",
        choiceC : "apaçıklık",
	    choiceD : "uygunluk",
	    correct : "D"
    } , 	{
        question : "18.	Bilginin doğruluk ölçütlerinden biri olan   ........ : Zihindeki bir bilginin zihinde ki başka bir bilgi ile çelişmemesidir. Örneğin a=b, b=c ise a=c dir.",
        imgSrc : "",
		choiceA : "tümel uzlaşım",
        choiceB : "tutarlılık",
        choiceC : "apaçıklık",
	    choiceD : "uygunluk",
	    correct : "B"
    } , 	{
        question : "19. Bilginin doğruluk ölçütlerinden biri olan   ........ : Bir bilginin veya önermenin doğruluğu hakkında herkesin veya çoğunluğun aynı düşüncede birleşmesidir.",
        imgSrc : "",
		choiceA : "tümel uzlaşım",
        choiceB : "tutarlılık",
        choiceC : "apaçıklık",
	    choiceD : "uygunluk",
	    correct : "A"
    } , 	{
        question : "20.	Bilginin doğruluk ölçütlerinden biri olan   ........ : Bir bilgi veya önermenin hem açık ve seçik hem de kuşku duyulmayan bir açıklıkta olması durumudur. Bu tür bilgiler sezgisel bir kavrama ve çıkarımla elde edilir.",
        imgSrc : "",
		choiceA : "tümel uzlaşım",
        choiceB : "tutarlılık",
        choiceC : "apaçıklık",
	    choiceD : "uygunluk",
	    correct : "C"
    } , 	{
        question : "21.	Bilginin doğruluk ölçütlerinden biri olan   ........ :  Bir bilgi veya düşüncenin bir bütünlük içinde tutarsızlık içermeden kavranmasıdır. Örnek, diş ağrısının hissedilip bilinmesi bu tür bilgidir.",
        imgSrc : "",
		choiceA : "yarar",
        choiceB : "açık bilgi",
        choiceC : "seçik bilgi",
	    choiceD : "apaçıklık",
	    correct : "B"
    } , 	{
        question : "22.	Bilginin doğruluk ölçütlerinden biri olan   ........ : Bir bilgi veya önermenin bir başka bilgi veya önerme ile karıştırılmamasıdır. Örneğin, hangi dişin ağrıdığının bilinmesi bu tür bilgidir.",
        imgSrc : "",
		choiceA : "yarar",
        choiceB : "açık bilgi",
        choiceC : "seçik bilgi",
	    choiceD : "apaçıklık",
	    correct : "C"
    } , 	{
        question : "23. Bilginin doğruluk ölçütlerinden biri olan   ........ :	Bir bilgi veya önerme yararlı, uygulanabilir, doyurucu sonuçlar veriyorsa doğrudur. Alınan ilaç diş ağrısını gideriyorsa, o ilaç ile ilgili bilgi doğrudur .",
        imgSrc : "",
		choiceA : "yarar",
        choiceB : "açık bilgi",
        choiceC : "seçik bilgi",
	    choiceD : "apaçıklık",
	    correct : "A"
    } , 	{
        question : "24. Doğru bilginin imkansızlığını savunan akıma genel olarak ........ denir. Sofistler ve Taoizm de bu akıma dahil edilir",
        imgSrc : "",
		choiceA : "septizm (kuşkuculuk)",
        choiceB : "rasyonalizm (akılcılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "entüisyonizm(sezgicilik)",
	    correct : "A"
    } , 	{
        question : "25. Doğru bilgi mümkündür diyen görüşe ........ denir.",
        imgSrc : "",
		choiceA : "realizm",
        choiceB : "rasyonalizm",
        choiceC : "empirizm ",
	    choiceD : "dogmatizm",
	    correct : "D"
    } , 	{
        question : "26.  Bu düşünürler, insan zihninin doğuştan boş olmadığını ileri sürerler. İnsanlar doğduklarında bazı bilgilerle donatılmışlardır, zamanla bu bilgileri hatırlarlar.",
        imgSrc : "",
		choiceA : "kritisizm (eleştiricilk)",
        choiceB : "rasyonalizm (akılcılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "entüisyonizm(sezgicilik)",
	    correct : "B"
    } , 	{
        question : "27. Bilginin kaynağını deneyim olarak kabul eden düşünce sistemine ........ denir. .",
        imgSrc : "",
		choiceA : "kritisizm (eleştiricilk)",
        choiceB : "rasyonalizm (akılcılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "entüisyonizm(sezgicilik)",
	    correct : "C"
    } , 	{
        question : "28. Rasyonalizme tepki olarak doğmuşdur. Bu görüşe göre insan aklı sınırlıdır. Çünkü insan aklı zaman ve mekan içinde deneye dayanarak bilgi elde eder. Böyle kaynak <br> lar ise  hakikatin bilgisini veremez diyen görüşe  ........ denir.",
        imgSrc : "",
		choiceA : "kritisizm (eleştiricilk)",
        choiceB : "pragmatizm (faydacılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "entüisyonizm(sezgicilik)",
	    correct : "D"
    } , 	{
        question : "29. Fikirlerimizin ve her çeşit bilgilerimizin kaynağı duyulardır. Zihin ve düşünce hayatımızın tamamının duyular ve onların değişmeleriyle açıklanabileceğini kabul eden görüşe ....... denir.",
        imgSrc : "",
		choiceA : "sensualizm (duyumculuk)",
        choiceB : "pragmatizm (faydacılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "entüisyonizm(sezgicilik)",
	    correct : "A"
    } , 	{
        question : "30. Bilgilerin deneye dayalı olmasını savunan felsefi düşüncedir. ........  ilk kez sistemleştiren A. Comte'tur .",
        imgSrc : "",
		choiceA : "sensualizm (duyumculuk)",
        choiceB : "pragmatizm (faydacılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "pozitivizm(olguculuk)",
	    correct : "D"
    } , 	{
        question : "31. Bilginin kaynağının hem deneyde hem de akılda gören bilgi görüşüne ........ denir.",
        imgSrc : "",
		choiceA : "sensualizm (duyumculuk)",
        choiceB : "pragmatizm (faydacılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "kritisizm(eleştiricik)",
	    correct : "D"
    } , 	{
        question : "32. Bilgilerimizin sınırlarını, bilginin işlevi ve sonuçları belirler. Doğru bilgi işe yaradığı ölçüde aranan ve istenen bir etkinliktir. Bu görüşe ........ denir.",
        imgSrc : "",
		choiceA : "sensualizm (duyumculuk)",
        choiceB : "pragmatizm (faydacılık)",
        choiceC : "empirizm (deneycilik)",
	    choiceD : "kritisizm(eleştiricik)",
	    correct : "B"
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
















