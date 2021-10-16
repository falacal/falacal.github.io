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
        question : "1.	Felsefi görüşler oluşturulurken izlenen akıl yürütme yöntemlerinin belirlenmesi, bunların gerekçelendirilmesi ve bir argümana dönüştürülmesine ....... denir. ",
        imgSrc : "img/iknaetmek.jpg",
        choiceA : "önerme",
        choiceB : "kavram",
        choiceC : "analoji",
	    choiceD : "felsefi temellendirme",
	    correct : "D"
    }, {
        question : "2.	Her önerme biçimsel olarak ....... , ....... ve ....... oluşan üç ögeyi barındırmak zorundadır.",
        imgSrc : "img/onermecesitleri.jpg",
        choiceA : "tümel, tikel, tekil",
        choiceB : "özne, yüklem, bağ",
        choiceC : "gerçeklik, doğruluk",
	    choiceD : "felsefi temellendirme",
	    correct : "B"
    },	{
        question : "3.	Yargı bildiren cümlelere ....... denir.",
        imgSrc : "img/mantık-sembolleri.png",
        choiceA : "önerme",
        choiceB : "kavram",
        choiceC : "analoji",
	    choiceD : "felsefi temellendirme",
	    correct : "A"
		
    },    {
        question : "4. Bir önermenin niceleyicisi, yargısına konu olan öznelerin hepsini kapsıyorsa bu önerme niceliği bakımından ....... bazılarını kapsıyorsa ....... önermedir",
        imgSrc : "img/olumlu-olumsuz.png",
        choiceA : "tümel, tikel",
        choiceB : "özne, yüklem",
        choiceC : "gerçeklik, doğruluk",
	    choiceD : "felsefi temellendirme",
	    correct : "A"
    }, {
        question : "5.	Bilinen bir nesne ya da olmuş bitmiş bir olay veya durum hakkında verilen bir yargının benzer durumlarda da geçerli olabileceğini varsayan akıl yürütme biçimine ....... denir",
        imgSrc : "img/analogy.png",
        choiceA : "önerme",
        choiceB : "kavram",
        choiceC : "analoji",
	    choiceD : "felsefi temellendirme",
	    correct : "C"
    } , {
        question : "6.	Nesnelerin zihindeki tasarımlarına ....... denir.",
        imgSrc : "img/head-concept.jpg",
        choiceA : "önerme",
        choiceB : "kavram",
        choiceC : "analoji",
	    choiceD : "felsefi temellendirme",
	    correct : "B"
    } , {
        question : "7.	Görülen çınar ağacı ....... çınar ağacının yüz yaşında olduğunu iddia etmek ise ....... kavramıyla açıklanır.",
        imgSrc : "img/reality.jpg",
        choiceA : "tümel, tikel",
        choiceB : "özne, yüklem",
        choiceC : "gerçeklik, doğruluk",
	    choiceD : "felsefi temellendirme",
	    correct : "C"
    } , {
        question : "8.	Tek tek olaylardan hareket ederek genel yargılara ulaşmada kullanılan yöntem ....... yöntemidir",
        imgSrc : "img/tumevarim.jpg",
        choiceA : "tümevarım(endüksiyon)",
        choiceB : "analoji",
        choiceC : "tümdengelim(dedüksiyon)",
	    choiceD : "önerme",
	    correct : "A"
    } , {
        question : "9.	....... özelden genele doğru yapılan akıl yürütme biçimidir.",
        imgSrc : "img/tumevarim2.png",
        choiceA : "Tümdengelim(Dedüksiyon)",
        choiceB : "Analoji",
        choiceC : "Tümevarım(Endüksiyon)",
	    choiceD : "Kavramlar",
	    correct : "C"
    } , {
        question : "10.	....... hepimizin ortak biçimde kullandığı dilsel unsurlardır",
        imgSrc : "img/kavram.jpg",
        choiceA : "Kavramlar",
        choiceB : "Düşünme",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "A"
    } , {
        question : "11.	....... düşünme, kültür ve iletişimin temel unsurudur.",
        imgSrc : "img/dil.png",
        choiceA : "Tutarlılık",
        choiceB : "Dil",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "B"
    } , {
        question : "12.	....... , bireyin kendi çıkarımlarına dayalı oluşturduğu yargılardır.",
        imgSrc : "img/69.jpg",
        choiceA : "Tutarlılık",
        choiceB : "Dil",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "C"
    } , {
        question : "13.	Ortaya atılan bir iddayı desteklemek için sunulan gerekçelere ....... adı verilir.",
        imgSrc : "img/argument.png",
        choiceA : "Tutarlılık",
        choiceB : "Dil",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "D"
    } , {
        question : "14.	....... düşüncelerin kendi aralarındaki anlamca uygunluk durumudur",
        imgSrc : "img/tutarlilik.jpg",
        choiceA : "Tutarlılık",
        choiceB : "Dil",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "A"
    } , {
        question : "15.	....... ve olayların zihindeki tasarımına kavram denir.",
        imgSrc : "img/nesneler-objects.png",
        choiceA : "Tutarlılık",
        choiceB : "Nesne",
        choiceC : "Görüş",
	    choiceD : "Argüman",
	    correct : "B"
    } , {
        question : "16.	....... bir varlığın var olması, doğruluk ise yargıların bir özelliğidir",
        imgSrc : "img/gerceklik.png",
        choiceA : "Tutarlılık",
        choiceB :  "Görüş",
        choiceC : "Nesne",
	    choiceD : "Gerçeklik",
	    correct : "D"
    } , {
        question : "17.	....... nesne, olay ve semboller arasında bağ kurma eylemidir.",
        imgSrc : "img/dusunme2.png",
        choiceA : "Felsefi soru ",
        choiceB : "Tutarlılık",
        choiceC : "Düşünme",
	    choiceD : "Görüş",
	    correct : "C"
    } , {
        question : "18.	....... özü anlamaya yönelik, genel nitelikli sorulardır",
        imgSrc : "img/felsefisoru.png",
        choiceA : "Felsefi soru ",
        choiceB : "Tutarlılık",
        choiceC : "Düşünme",
	    choiceD : "Görüş",
	    correct : "A"
    } 
	
// 18 tane	
	
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
















