// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [



    {
        question : "01- 15.-17. Yüzyıl Felsefesi deyince ............... akla gelir",
        imgSrc : "img/html.png",
        choiceA : "İlk çağ",
        choiceB : "Orta çağ",
        choiceC : "Rönesans",
        correct : "C"
    },{
        question : "02- Rönesansın kelime anlamı nedir?",
        imgSrc : "img/css.png",
        choiceA : "Bilimsel ilerleme",
        choiceB : "Yeniden Doğuş",
        choiceC : "Akıl çağı",
        correct : "B"
    },{
        question : "03- Rönesansın ortaya çıkmasına neden olan sebepler aşağıdakilerden hangisidir?",
        imgSrc : "img/js.png",
        choiceA : "İstanbul un fethi, Doğudaki eserlerin avrupa dillerine çevirilmesi",
        choiceB : "Barutun, pusulanın bulunması, matbanın icadı, coğrafi keşifler",
        choiceC : "Hepsi ",
        correct : "C"
    },{
        question : "04- Rönesans döneminde hangi faaliyetler olmamıştır?",
        imgSrc : "img/js.png",
        choiceA : "Bilimsel yöntem arayışları ve çeviri faaliyetleri ",
        choiceB : "İlk neden ve değişim düşünceleri",
        choiceC : "Hukuk alanında yeni sistem arayışları",
        correct : "B"
    },{
        question : "05- ..... bir felsefe değil bir yönelimin adlandırılmasıdır ve insanı özneleştiren bir çaba içerir. İnsanın merkeze alındığı, akılın öne çıkarıldığı bir bakış açısıdır, yeni hayat anlayışı ile insan ve dünya üzerine felsefe yapma isteğinden oluşur.",
        imgSrc : "img/js.png",
        choiceA : "Stoacılık",
        choiceB : "Hümanizm",
        choiceC : "Nihilizm",
        correct : "B"
    },{
        question : "06- Bilim ve felsefenin merkezi konumuna gelen çeviri yerlerinin isimleri için aşağıdakilerden hangisi doğrudur?",
        imgSrc : "img/js.png",
        choiceA : "Toledo, Tunus, Bağdat ",
        choiceB : "Solerno, Sicilya  ",
        choiceC : "Hepsi",
        correct : "C"
    },{
        question : "07- Aşağıdakilerden hangisi 15-17.Yüzyıl modern düşüncenin özelliklerinden değildir?",
        imgSrc : "img/js.png",
        choiceA : "Hukuk kilisenin etkisindedir.",
        choiceB : "İnsan merkezlidir. Toplumsal hayat dünyevidir.",
        choiceC : "Felsefenin konusu insan,doğa ve evrendir.",
        correct : "A"
    },{
        question : "08- Hangisi istenen ütopyaya örnek verilemez?",
        imgSrc : "img/js.png",
        choiceA : "(G. Orwell) 1984",
        choiceB : "(Farabi)  El-Medinetül Fazıla",
        choiceC : "(Thomas More) Ütopya",
        correct : "A"
    },{
        question : "09- İnsan insanın kurdudur diyen filozof kimdir?",
        imgSrc : "img/thomashobbes.png",
        choiceA : "René Descartes ",
        choiceB : "Thomas Hobbes",
        choiceC : "Francis Bacon",
        correct : "B"
    },{
        question : "10- Descartes 'in ortaya koyduğu metodik şüphe yöntemi onu sonuç olarak nereye götürmüştür?",
        imgSrc : "img/Descartes.png",
        choiceA : "Düşünüyorum o halde varım.",
        choiceB : "Bilgi güçtür.",
        choiceC : "Bilimsel yöntemler insanı geliştirir.",
        correct : "A"
    },{
        question : "11- İslam coğrafyasında yapılan  .... faaliyetleri Rönesans'ın ortaya çıkmasında etkili olmuştur.",
        imgSrc : "img/js.png",
        choiceA : "keşifler",
        choiceB : "çeviri",
        choiceC : "astronomi",
        correct : "B"
    },{
        question : "12- Dünya merkezli evren anlayışından Güneş merkezli evren anlayışını ortaya koyan, düalist (ikili) evren anlayışından monist (tekçi) evren anlayışına geçilmesine öncülük eden bilim insanı kimdir?",
        imgSrc : "img/js.png",
        choiceA : "Galileo",
        choiceB : "Newton",
        choiceC : "Kopernik",
        correct : "C"
    },{
        question : "13- Hangisi 15. ve 17. yüzyılda öne çıkan konular ve görüşlerden değildir?",
        imgSrc : "img/js.png",
        choiceA : "Hümanizm",
        choiceB : "Kartezyen Felsefe",
        choiceC : "Rasyonalizm",
        correct : "C"
    },{
        question : "14- Rönesans hangi ülkede başlamıştır?",
        imgSrc : "img/js.png",
        choiceA : "İtalya",
        choiceB : "İspanya",
        choiceC : "İngiltere",
        correct : "A"
    },{
        question : "15- Ütopya kimin eseridir?",
        imgSrc : "img/js.png",
        choiceA : "R. Descartes",
        choiceB : "T. More",
        choiceC : "G. Orwell",
        correct : "B" 
    },{
        question : "16- Teleskobu kim icat etmiştir?",
        imgSrc : "img/js.png",
        choiceA : "Newton",
        choiceB : "Galilei",
        choiceC : "Kopernik",
        correct : "B"
    },{
        question : "17- .... felsefesinde doğru bilginin varlığını ortaya koymak ve bilgi ile ilgili tüm şüpheleri ortadan kaldırarak doğru ve kesin bilgiye erişmek amaçlanmaktadır. Bütün bilgilere şüphe ile yaklaşılmalı en sonunda şüphe edilmeyen bilgiye ulaşılmalıdır",
        imgSrc : "img/js.png",
        choiceA : "Kartezyen",
        choiceB : "Stoa",
        choiceC : "Rasyonalizm",
        correct : "A"
    },{
        question : "18- Kartezyen Felsefesinin diğer adı nedir?",
        imgSrc : "img/js.png",
        choiceA : "Bacon Felsefesi",
        choiceB : "Descartes Felsefesi",
        choiceC : "Newton Felsefesi",
        correct : "B"
    },{
        question : "19- Descartes açısından insanın bütün özü veya doğası olan töz nedir?",
        imgSrc : "img/js.png",
        choiceA : "Yer kaplama",
        choiceB : "Konuşmak",
        choiceC : "Düşünmek",
        correct : "C"
    },{
        question : "20- Aşağıdakilerden hangisi 'Toplum Sözleşmesi' filozoflarından değildir?",
        imgSrc : "img/js.png",
        choiceA : "Platon",
        choiceB : "John Locke",
        choiceC : "J.J. Rousseau",
        correct : "A"
    },{
        question : "21- .... 14. Yüzyılda insanı evrende tek yüce değer sayan, insanı geliştirme ve yüceltme amacını güden, kilise ve devlet baskısına dayanan Ortaçağ zihniyetine tepki olarak doğan, İnsanın varlığını ve değerlerini düşüncenin odağına koyan akımdır.",
        imgSrc : "img/js.png",
        choiceA : "Pozitivizm",
        choiceB : "Realizm",
        choiceC : "Hümanizm",
        correct : "C"
    },{
        question : "22- Bacon’a göre doğru düşünce,........... yüzünden engellenir. ",
        imgSrc : "img/js.png",
        choiceA : "İdoller",
        choiceB : "Tözler",
        choiceC : "İdealar",
        correct : "A"
    },{
        question : "23- Güneş merkezli evren sistemini savunduğu için ..... engizisyon mahkemesinde yargılanan bilim insanıdır.",
        imgSrc : "img/js.png",
        choiceA : "Kopernik",
        choiceB : "Galilleo",
        choiceC : "Newton",
        correct : "B"
    },{
        question : "24-  İnsanın merkeze alınarak aklın öne çıkarılması anlayışına ....... denir",
        imgSrc : "img/js.png",
        choiceA : "Pozitivizm",
        choiceB : "Realizm",
        choiceC : "Hümanizm",
        correct : "C"
    },{
        question : "25- İslam coğrafyasından yapılan ..... faaliyetleri Rönesans’ın ortaya çıkışında etkili olmuştur.",
        imgSrc : "img/js.png",
        choiceA : "keşifler",
        choiceB : "çeviri",
        choiceC : "astronomi",
        correct : "B"
    },{
        question : "26-  R. Descartes denilince aklımıza   .....    gelir.",
        imgSrc : "img/js.png",
        choiceA : "Kütle çekim görüşü",
        choiceB : "Bilimsel yöntem",
        choiceC : "Kartezyen felsefe",
        correct : "C"
    },{
        question : "27-  F. Bacon denilince aklımıza   .....    gelir.",
        imgSrc : "img/js.png",
        choiceA : "Kütle çekim görüşü",
        choiceB : "Bilimsel yöntem",
        choiceC : "Kartezyen felsefe",
        correct : "B"
    },{
        question : "28- T. Hobbes denilince aklımıza   .....    gelir.",
        imgSrc : "img/js.png",
        choiceA : "Mutlak gücün egemenliği",
        choiceB : "Bilimsel yöntem",
        choiceC : "Kartezyen felsefe",
        correct : "A"
    },{
        question : "29- Newton denilince aklımıza   .....    gelir.",
        imgSrc : "img/js.png",
        choiceA : "Dünya merkezli evren anlayışı",
        choiceB : "Kütle çekim görüşü",
        choiceC : "Bilimsel yöntem",
        correct : "B"
    },{
        question : "30- Nikolas Kopernik ...... bulan bilim insanıdır.",
        imgSrc : "img/js.png",
        choiceA : "Güneş'in merkezde, gezegenlerin onun etrafında döndüğünü",
        choiceB : "Kütle çekim kanununu",
        choiceC : "Dünya merkezli evren anlayışını",
        correct : "A"
    }
	
	
	
	
	
	
	
	
	
	
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 90; // 10s
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

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
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
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















