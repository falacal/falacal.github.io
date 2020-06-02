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
        question : "01- Ses dalgaları maddelerin  titreşimi   ile oluşmaz.",
        imgSrc : "img/titresenhava.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }, {
        question : "02- Ses dalgalarında sıkışmalar  tepe noktasını  genleşmeler  çukur noktasını gösterir. ",
        imgSrc : "img/gevsemesikisma.png",
        choiceA : "Doğru",
        choiceB : "Yanlış", 
		correct : "A"
    },	{
        question : "03- Ses dalgalarını taşıyan tanecikler olduğundan, ses boşlukta da yayılabilir.",
        imgSrc : "img/uzayses.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }, {
        question : "04- Ses dalgalarının havadaki hızı herzaman 340 m/s ‘dir. ",
        imgSrc : "img/ses343.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }, {
        question : "05- Ses dalgaları ortamın yoğunluğuna bağlıdır, ortamın yoğunluğu arttıkça ses dalgalarının yayılma hızı AZALIR.",
        imgSrc :  "img/sesyogunluk.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
		
		
    }, {
        question : "06- Genelde sesin katı ortamlardaki yayılma hızı sıvı ortamdaki yayılma hızından büyük,  sıvı ortamdaki yayılma hızı da gaz ortamdaki yayılma hızından büyüktür.(Vkati>Vsıvı>Vgaz)",
        imgSrc :  "img/seskatisivigaz.jpg",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
		
    }, {
        question : "07- Hava sıcaklığı arttıkça sesin hızı azalır.",
        imgSrc :  "img/sessicaklik1.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
		
		
    },   	{
        question : "08- Ses dalgalarının titreşim doğrultusu, yayılma doğrultusuna paralel olduğundan  ses  dalgaları boyuna dalgadır.",
        imgSrc :   "img/sesdalga.gif" ,
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    } ,
	
	
	
	
	
	
	
	
	{
        question : "09- Frekansı büyük olan ses  ince (tiz=yüksek frekans), frekansı küçük olan ses kalın (pes=düşük frekans) işitilir.",
        imgSrc :   "img/pestizses.png" ,
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    } ,{
        question : "10- Ayşe bağlamanın önce 1 noktasına  basarak sonra 2 noktasına basarak teli titreştiriyor. 1 noktasına bastığında kalın(pes) ses 2 noktasına bastığında  ince(tiz) ses çıkıyor. Bu durumdan tel uzunluğu, ses frekansı  ile ters orantılıdır sonucuna varılabilir.",
        imgSrc :   "img/sesteller.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	 ,{
        question : "11- İki nokta arasına gerilmiş bir telin titreşimi ile oluşan ses dalgalarının  frekansı, telin kalınlığıyla ters orantılıdır. Yani " + "<b style='color:red;'> Telin kalınlığı arttıkça frekans azalır, ses kalınlaşır. </b> ",
        imgSrc :   "img/sestellerincekalin.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	 
	 	 ,{
        question : "12- Periyodik bir etki altındaki sistemlerde salınımlar meydana gelir. Bu salınımlar sistemin doğal frekansına eşit olursa sistem maksimum genlikle salınmaya (titreşmeye) başlar. Bu duruma rezonans" + "<b style='color:red;'>  denmez.</b> ",
        imgSrc :   "img/sescatali.gif" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }
	 
	,{
        question : "13- Diyapazon U biçimindeki metale vurulduğunda belirli frekanslarda ses çıkaran araçtır",
        imgSrc : "img/diyapazon.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }, {
        question : "14- Diyapazonların büyüklüğü azaldıkça çıkardığı sesin frekansı azalır. ",
        imgSrc :  "img/diyapazonlar.png",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
		
		
    }, {
        question : "15- Sesin Yankısı ses dalgalarının pürüzsüz sert bir yüzeye çarpıp geri dönmesi olayına yankı denmez. ",
        imgSrc :  "img/echo.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
		
    }, {
        question : "16- Yankı olayı sesin net duyulmasını engeller. Sinema, tiyatro gibi mekanlarda yankı olayı engellenir. Buna akustik denir ",
        imgSrc :  "img/sesyalitimiakustik.gif",
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
		
		
    },   	{
        question : "17- Sesin Tınısı Aynı şiddet ve frekanstaki sesleri ayırt etmemizi sağlar.Müzik aletlerinin çıkardığı sesin hangi müzik aletine ait olduğunu tınısı sayesinde ayırt ederiz.",
        imgSrc :   "img/tininedir.png" ,
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    } ,
	
	
	
	
	
	
	
	
	{
        question : "18- Sesin Frekansı (yüksekliği)Sesi oluşturan kaynağın bir saniyedeki titreşim sayısına frekansı denir. Sesin yüksekliği frekans ile doğru orantılıdır. ",
        imgSrc :   "img/alcakyuksekfrekans.png" ,
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    } ,{
        question : "19- Sesin Şiddeti (Gürlüğü=Enerjisi): Sesin zayıf ya da kuvvetli olmasına şiddet denir. Sesin, genliği büyükse ses şiddetli (enerjisi çok), genliği küçük ise ses zayıf (enerjisi az) duyulur. ",
        imgSrc :   "img/alcakyuksekenerjilises.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	 ,{
        question : "20- İnsan kulağının ses eşiği 0 desibel (0 dB) ve 120 desibel (120 dB) aralığı değildir ",
        imgSrc :   "img/desibel.gif" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }
	 
	 	 ,{
        question : "21- İnsanlar ses düzeyi olarak 60 db’den sonraki sesleri gürültü olarak adlandırırlar. ve 90 Desibelden sonraki sesler insan kulağına hasar vermeye başlar.",
        imgSrc :   "img/gurultu.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	
	,{
        question : "22- İnsan kulağı, 20 Hz ile 20000 Hz frekanslı dalgaları duyamaz",
        imgSrc :   "img/insanisitme.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }
	 
	 	 ,{
        question : "23- 20.000 Hz’den yüksek frekanslı dalgalara ultrasonik (ses ötesi) dalgalar denir.",
        imgSrc :   "img/ultrasoniksesler.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	,{
        question : "24- 20 Hz den düşük frekanslı dalgalara sesaltı (infrasonik) dalgalar denmez ",
        imgSrc :   "img/sesaraliklari.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }
	 
	 	 ,{
        question : "25- Deprem dalgaları sesaltı dalgalara örnektir. Bu yüzden bazı canlılar deprem dalgalarının oluşturduğu sesleri duyar",
        imgSrc :   "img/deprem2e.gif" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	,{
        question : "26- Davul gibi vurmalı çalgılarda davula gerilen derinin gerginliği artarsa çıkardığı sesin frekansı azalır. ",
        imgSrc :   "img/davul.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "B"
    }
	 
	 	 ,{
        question : "27- Davul gibi vurmalı çalgılarda davula gerilen derinin  yüzeyi büyürse ses kalınlaşır yani frekans azalır.",
        imgSrc :   "img/davulyuzeyalani.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	,{
        question : "28- Flüt gibi üflemeli aletlerde havanın titreşmesi ile  farklı sesler çıkar. Flütün bütün delikleri kapatılıp üflenirse kalın ses, Flütün bütün delikleri  açılıp üflenirse ince ses çıkar.",
        imgSrc :   "img/flute.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }

		 
	 	 ,{
        question : "29- Şişelere vurduğumuzda, K şişesinden ince ses, L şişesinden kalın ses çıkar.",
        imgSrc :   "img/siselerevurma.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	
	,{
        question : "30- Şişelere üflendiğinde, 1 şişesinden kalın ses, 2 şişesinden ince ses çıkar. ",
        imgSrc :   "img/siselerevufleme.png" , 
        choiceA : "Doğru",
        choiceB : "Yanlış",
 
		correct : "A"
    }
	 
 
	
	
	
	
	
	
	
	 

	
//   SORU select all elements	
	
	
	
	
	
	
	
	
	
	
	
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
















