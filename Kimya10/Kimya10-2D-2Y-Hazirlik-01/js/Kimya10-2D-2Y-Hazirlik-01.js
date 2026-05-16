// ========== KİMYA 10. SINIF - 2. DÖNEM 2. YAZILI HAZIRLIK ==========
// Dosya: js/Kimya10-2D-2Y-Hazirlik-01.js
// MEB Senaryo 3 - Gazlar & Çözeltiler Konuları

// ========== GLOBAL DEĞİŞKENLER ==========
let completedStudents = [];
let currentStudent = null;
let currentQuestionIndex = 0;
let score = 0;
let isTransitioning = false;

// ========== SORU HAVUZU (50 Soru) ==========
const questions = [
    
    // ===== BÖLÜM 1: GAZLARIN YAYILMASI - GRAHAM YASASI (10 Soru) =====
    {
        question: "Graham yayılma yasasına göre, aynı sıcaklıkta gazların yayılma hızı aşağıdakilerden hangisi ile ters orantılıdır?",
        options: ["Mol kütlesi", "Mol kütlesinin karekökü", "Basınç", "Hacim"],
        answer: 1,
        image: "img/graham-yasa.png"
    },
    {
        question: "NH₃ (17 g/mol) ve HCl (36,5 g/mol) gazları aynı anda cam tüpün uçlarından bırakıldığında beyaz NH₄Cl halkası nerede oluşur?",
        options: ["Tam ortada", "NH₃ tarafına daha yakın", "HCl tarafına daha yakın", "Tüpün dışına taşar"],
        answer: 2,
        image: "img/nh3-hcl-deney.png"
    },
    {
        question: "NH₃ ve HCl gazlarının karşılaşması sonucu oluşan beyaz halkanın kimyasal formülü nedir?",
        options: ["NH₃Cl", "NH₄Cl", "N₂HCl", "NHCl₂"],
        answer: 1,
        image: "img/beyaz-halka.png"
    },
    {
        question: "Gazların yayılma hızı ile mol kütlesi arasındaki ilişkiyi ilk kez deneysel olarak gösteren bilim insanı kimdir?",
        options: ["Avogadro", "Graham", "Dalton", "Boyle"],
        answer: 1,
        image: "img/graham-portre.png"
    },
    {
        question: "Aynı koşullarda He (4 g/mol) ve CH₄ (16 g/mol) gazlarından hangisi daha hızlı yayılır?",
        options: ["He", "CH₄", "Eşit hızda", "Karşılaştırılamaz"],
        answer: 0,
        image: "img/gaz-yayilma.png"
    },
    {
        question: "Graham yasasına göre, yayılma hızı 2 kat fazla olan bir gazın mol kütlesi, diğerine göre nasıl olmalıdır?",
        options: ["2 kat büyük", "2 kat küçük", "4 kat küçük", "4 kat büyük"],
        answer: 2,
        image: "img/acaba_nedir.png"
    },
    {
        question: "Cam tüp deneyinde beyaz halkanın HCl tarafına yakın oluşmasının temel nedeni nedir?",
        options: ["HCl daha ağır olduğu için yavaş yayılır", "NH₃ daha ağır olduğu için yavaş yayılır", "HCl daha reaktiftir", "NH₃ daha az çözünür"],
        answer: 0,
        image: "img/tup-deney.png"
    },
    {
        question: "Aşağıdaki gazlardan hangisi aynı sıcaklıkta en hızlı yayılır? (H:1, C:12, N:14, O:16)",
        options: ["CO₂ (44 g/mol)", "N₂ (28 g/mol)", "CH₄ (16 g/mol)", "O₂ (32 g/mol)"],
        answer: 2,
        image: "img/gaz-molkutle.png"
    },
    {
        question: "Gazların yayılma hızı sıcaklık arttıkça nasıl değişir?",
        options: ["Azalır", "Değişmez", "Artar", "Önce artar sonra azalır"],
        answer: 2,
        image: "img/sicaklik-etki.png"
    },
    {
        question: "NH₃ + HCl → NH₄Cl tepkimesi hangi tür kimyasal olaydır?",
        options: ["Yanma", "Çökelme", "Asit-baz nötralleşme", "Redoks"],
        answer: 2,
        image: "img/tepkime-turu.png"
    },
    
    // ===== BÖLÜM 2: ÇÖZÜNME OLAYININ SINIFLANDIRILMASI (10 Soru) =====
    {
        question: "Aşağıdakilerden hangisi fiziksel çözünmeye örnektir?",
        options: ["HCl'nin suda çözünmesi", "NaCl'nin suda çözünmesi", "NH₃'ün suda çözünmesi", "Na'nın suda çözünmesi"],
        answer: 1,
        image: "img/fiziksel-cozunme.png"
    },
    {
        question: "HCl gazının suda çözünmesi kimyasal çözünme olarak sınıflandırılır çünkü:",
        options: ["Renk değişir", "Yeni madde (H₃O⁺ ve Cl⁻) oluşur", "Isı açığa çıkar", "Gaz halinden sıvı hale geçer"],
        answer: 1,
        image: "img/kimyasal-cozunme.png"
    },
    {
        question: "Aşağıdakilerden hangisi iyonik çözünmeye örnektir?",
        options: ["Şekerin suda çözünmesi", "Naftalinin benzende çözünmesi", "KNO₃'ün suda çözünmesi", "İyotun alkolde çözünmesi"],
        answer: 2,
        image: "img/iyonik-cozunme.png"
    },
    {
        question: "Moleküler çözünmede çözünen madde nasıl dağılır?",
        options: ["İyonlarına ayrışarak", "Molekül bütünlüğünü koruyarak", "Atomlarına ayrılarak", "Radikal oluşturarak"],
        answer: 1,
        image: "img/molekuler-cozunme.png"
    },
    {
        question: "KNO₃'ün suda çözünmesi sırasında çözeltinin soğuması hangi tür çözünme olduğunu gösterir?",
        options: ["Ekzotermik", "Endotermik", "İzotermik", "Adyabatik"],
        answer: 1,
        image: "img/endotermik.png"
    },
    {
        question: "NaOH'in suda çözünmesi sırasında çözeltinin ısınması neyi gösterir?",
        options: ["Endotermik çözünme", "Ekzotermik çözünme", "Fiziksel çözünme", "Moleküler çözünme"],
        answer: 1,
        image: "img/ekzotermik.png"
    },
    {
        question: "Aşağıdakilerden hangisi elektrik akımını ileten çözelti oluşturur?",
        options: ["Şekerli su", "Naftalinli benzen", "Tuzlu su", "İyotlu alkol"],
        answer: 2,
        image: "img/elektrolit.png"
    },
    {
        question: "İyonik çözünme ile moleküler çözünme arasındaki temel fark nedir?",
        options: ["Sıcaklık etkisi", "Çözünenin iyonlarına ayrışıp ayrışmaması", "Çözücü türü", "Karıştırma hızı"],
        answer: 1,
        image: "img/cozunme-fark.png"
    },
    {
        question: "NH₃'ün suda çözünmesi: NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ tepkimesi hangi çözünme türüdür?",
        options: ["Fiziksel-İyonik", "Kimyasal-İyonik", "Fiziksel-Moleküler", "Kimyasal-Moleküler"],
        answer: 1,
        image: "img/amonyak-cozunme.png"
    },
    {
        question: "Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
        options: ["NaCl → İyonik çözünme", "Şeker → Moleküler çözünme", "HCl → Kimyasal çözünme", "Naftalin → İyonik çözünme"],
        answer: 3,
        image: "img/acaba_nedir.png"
    },
    
    // ===== BÖLÜM 3: DERİŞİM HESAPLAMALARI - MOLARİTE (10 Soru) =====
    {
        question: "0,4 mol KCl içeren 800 mL çözeltinin molar derişimi (M) kaçtır?",
        options: ["0,2 M", "0,5 M", "2 M", "5 M"],
        answer: 1,
        image: "img/molarite-hesap.png"
    },
    {
        question: "Molarite (M) birimi aşağıdakilerden hangisidir?",
        options: ["g/L", "mol/kg", "mol/L", "g/mol"],
        answer: 2,
        image: "img/birimler.png"
    },
    {
        question: "2 mol NaOH kullanılarak 4 L çözelti hazırlanırsa molarite kaç M olur?",
        options: ["0,25 M", "0,5 M", "2 M", "8 M"],
        answer: 1,
        image: "img/molarite-ornek.png"
    },
    {
        question: "0,5 M 200 mL NaCl çözeltisinde kaç mol NaCl vardır?",
        options: ["0,1 mol", "0,25 mol", "1 mol", "2,5 mol"],
        answer: 0,
        image: "img/mol-hesap.png"
    },
    {
        question: "0,5 M 800 mL KCl çözeltisinin derişimini 0,2 M yapmak için hacmi kaç mL'ye tamamlamak gerekir?",
        options: ["1000 mL", "1200 mL", "2000 mL", "4000 mL"],
        answer: 2,
        image: "img/seyreltme.png"
    },
    {
        question: "Bir çözeltiyi seyreltirken aşağıdakilerden hangisi DEĞİŞMEZ?",
        options: ["Hacim", "Derişim", "Çözünen mol sayısı", "Çözücü kütlesi"],
        answer: 2,
        image: "img/seyreltme-prensip.png"
    },
    {
        question: "M₁V₁ = M₂V₂ formülü hangi işlem için kullanılır?",
        options: ["Derişim hesaplama", "Seyreltme hesaplama", "Mol kütle bulma", "Yoğunluk hesaplama"],
        answer: 1,
        image: "img/formul.png"
    },
    {
        question: "58,5 g NaCl (M=58,5 g/mol) kullanılarak 1 L çözelti hazırlanırsa molarite kaç olur?",
        options: ["0,1 M", "0,5 M", "1 M", "2 M"],
        answer: 2,
        image: "img/kutle-mol.png"
    },
    {
        question: "0,2 M 500 mL çözelti ile 0,1 M 1000 mL çözelti karşılaştırıldığında hangisi doğrudur?",
        options: ["Mol sayıları eşittir", "İlk çözeltide 2 kat fazla çözünen vardır", "İkinci çözelti daha derişiktir", "Hacimleri eşittir"],
        answer: 0,
        image: "img/karsilastirma.png"
    },
    {
        question: "Derişimi 2 M olan 300 mL çözeltiye 700 mL su eklenirse yeni derişim kaç M olur?",
        options: ["0,3 M", "0,6 M", "1,2 M", "3 M"],
        answer: 1,
        image: "img/seyreltme-sonuc.png"
    },
    
    // ===== BÖLÜM 4: ÇÖZÜNÜRLÜK TANIMI VE BİRİMLER (8 Soru) =====
    {
        question: "Çözünürlük kavramının doğru tanımı aşağıdakilerden hangisidir?",
        options: ["Her sıcaklıkta çözünebilen miktar", "Belirli koşullarda 100 g çözücüde çözünebilen maksimum miktar", "Çözünenin çözücüdeki hızı", "Çözeltinin yoğunluğu"],
        answer: 1,
        image: "img/cozunurluk-tanim.png"
    },
    {
        question: "Çözünürlüğün SI birim sistemindeki molar ifadesi aşağıdakilerden hangisidir?",
        options: ["g/100g su", "mol/L", "mol/m³", "kg/kg"],
        answer: 2,
        image: "img/si-birim.png"
    },
    {
        question: "Pratikte en yaygın kullanılan çözünürlük birimi hangisidir?",
        options: ["mol/m³", "g/100 g su", "kg/m³", "mol/kg"],
        answer: 1,
        image: "img/pratik-birim.png"
    },
    {
        question: "20°C'de NaCl'in çözünürlüğü 36 g/100 g su ise, 200 g suda en fazla kaç gram NaCl çözünür?",
        options: ["18 g", "36 g", "72 g", "108 g"],
        answer: 2,
        image: "img/cozunurluk-oran.png"
    },
    {
        question: "Doymuş çözelti nasıl tanımlanır?",
        options: ["Daha fazla çözünen çözebilecek çözelti", "Maksimum çözünen içeren çözelti", "Çözüneni tamamen çökmüş çözelti", "Seyreltilmiş çözelti"],
        answer: 1,
        image: "img/doymus-cozelti.png"
    },
    {
        question: "Aşırı doymuş çözeltinin özelliği aşağıdakilerden hangisidir?",
        options: ["Kararlıdır", "Ek kristal eklenince çökme başlar", "Daha az çözünen içerir", "Sıcaklıkla ilgisi yoktur"],
        answer: 1,
        image: "img/asiri-doymus.png"
    },
    {
        question: "Çözünürlük çarpımı (Kç) hangi tür maddeler için kullanılır?",
        options: ["Çok çözünen tuzlar", "Az çözünen tuzlar", "Gazlar", "Organik sıvılar"],
        answer: 1,
        image: "img/kc-kavrami.png"
    },
    {
        question: "Çözünürlük değeri hangi faktörlere bağlı olarak değişir?",
        options: ["Sadece sıcaklık", "Sadece basınç", "Sıcaklık, basınç ve madde doğası", "Sadece karıştırma"],
        answer: 2,
        image: "img/faktorler-genel.png"
    },
    
    // ===== BÖLÜM 5: ÇÖZÜNÜRLÜĞE ETKİ EDEN FAKTÖRLER (10 Soru) =====
    {
        question: "Katı maddelerin sudaki çözünürlüğü sıcaklık arttıkça genellikle nasıl değişir?",
        options: ["Azalır", "Değişmez", "Artar", "Önce azalır sonra artar"],
        answer: 2,
        image: "img/kati-sicaklik.png"
    },
    {
        question: "Gazların sudaki çözünürlüğü sıcaklık arttıkça nasıl değişir?",
        options: ["Artar", "Değişmez", "Azalır", "Ters orantılı değildir"],
        answer: 2,
        image: "img/gaz-sicaklik.png"
    },
    {
        question: "Basınç hangi tür maddelerin çözünürlüğünü belirgin şekilde etkiler?",
        options: ["Katılar", "Sıvılar", "Gazlar", "Hepsi"],
        answer: 2,
        image: "img/basinc-gaz.png"
    },
    {
        question: "Henry yasasına göre gazların çözünürlüğü basınç ile nasıl ilişkilidir?",
        options: ["Ters orantılı", "Doğru orantılı", "İlişkisiz", "Karekök orantılı"],
        answer: 1,
        image: "img/henry-yasa.png"
    },
    {
        question: "'Benzer benzeri çözer' ilkesine göre polar bir madde hangi çözücüde iyi çözünür?",
        options: ["Apolar çözücü", "Polar çözücü", "Her çözücüde", "Hiçbirinde"],
        answer: 1,
        image: "img/benzer-benzeri.png"
    },
    {
        question: "Aşağıdakilerden hangisi polar çözücüdür?",
        options: ["Benzen (C₆H₆)", "Heksan (C₆H₁₄)", "Su (H₂O)", "Karbon tetraklorür (CCl₄)"],
        answer: 2,
        image: "img/polar-cozucu.png"
    },
    {
        question: "NaCl çözeltisine HCl eklendiğinde NaCl'in çözünürlüğü nasıl etkilenir?",
        options: ["Artar", "Azalır", "Değişmez", "Önce artar sonra azalır"],
        answer: 1,
        image: "img/ortak-iyon.png"
    },
    {
        question: "Ortak iyon etkisi hangi prensiple açıklanır?",
        options: ["Avogadro Prensibi", "Le Chatelier Prensibi", "Graham Yasası", "Henry Yasası"],
        answer: 1,
        image: "img/lechatelier.png"
    },
    {
        question: "Karıştırma işlemi çözünürlüğü nasıl etkiler?",
        options: ["Artırır", "Azaltır", "Etkilemez, sadece hızı artırır", "Sıcaklığa bağlı değiştirir"],
        answer: 2,
        image: "img/karistirma-etki.png"
    },
    {
        question: "Aşağıdakilerden hangisi çözünürlüğü ETKİLEMEZ?",
        options: ["Sıcaklık", "Basınç (gazlar için)", "Çözücü türü", "Çözeltinin rengi"],
        answer: 3,
        image: "img/acaba_nedir.png"
    },
    
    // ===== BÖLÜM 6: KOLİGATİF ÖZELLİKLER (12 Soru) =====
    {
        question: "Koligatif özellikler aşağıdakilerden hangisine bağlıdır?",
        options: ["Çözünenin kimliğine", "Çözeltideki tanecik sayısına", "Çözücünün rengine", "Kabın şekline"],
        answer: 1,
        image: "img/koligatif-tanim.png"
    },
    {
        question: "Aşağıdakilerden hangisi koligatif özellik DEĞİLDİR?",
        options: ["Kaynama noktası yükselmesi", "Donma noktası alçalması", "Buhar basıncı düşmesi", "Çözünürlük artması"],
        answer: 3,
        image: "img/koligatif-degil.png"
    },
    {
        question: "0,2 m NaCl ve 0,2 m şeker çözeltilerinden hangisinin kaynama noktası daha yüksektir?",
        options: ["Şeker çözeltisi", "NaCl çözeltisi", "Eşittir", "Karşılaştırılamaz"],
        answer: 1,
        image: "img/kaynama-karsilastirma.png"
    },
    {
        question: "NaCl'in suda iyonlaşması sonucu oluşan tanecik sayısı şekerin kaç katıdır?",
        options: ["1 kat", "2 kat", "3 kat", "4 kat"],
        answer: 1,
        image: "img/vant-hoff.png"
    },
    {
        question: "van't Hoff faktörü (i) NaCl için yaklaşık kaçtır?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        image: "img/vant-hoff-deger.png"
    },
    {
        question: "Donma noktası alçalması (ΔTf) formülü aşağıdakilerden hangisidir?",
        options: ["ΔTf = Kb·m", "ΔTf = i·Kf·m", "ΔTf = m/V", "ΔTf = P·V"],
        answer: 1,
        image: "img/formul-donma.png"
    },
    {
        question: "Saf suya tuz eklendiğinde donma noktası nasıl değişir?",
        options: ["Yükselir", "Alçalır", "Değişmez", "Önce yükselir sonra alçalır"],
        answer: 1,
        image: "img/donma-tuz.png"
    },
    {
        question: "Kışın yollara tuz dökülmesinin temel amacı nedir?",
        options: ["Yolu temizlemek", "Buzun donma noktasını düşürerek erimesini sağlamak", "Araba lastiklerini korumak", "Görünürlüğü artırmak"],
        answer: 1,
        image: "img/yol-tuz.png"
    },
    {
        question: "0,2 m CaCl₂ çözeltisi için van't Hoff faktörü yaklaşık kaçtır? (CaCl₂ → Ca²⁺ + 2Cl⁻)",
        options: ["1", "2", "3", "4"],
        answer: 2,
        image: "img/caci2-iyon.png"
    },
    {
        question: "Aynı molalitede NaCl, CaCl₂ ve şeker çözeltilerinden hangisinin donma noktası en düşüktür?",
        options: ["Şeker", "NaCl", "CaCl₂", "Hepsi eşit"],
        answer: 2,
        image: "img/donma-karsilastirma.png"
    },
    {
        question: "Kaynama noktası yükselmesi (ΔTb) hangi durumda daha büyük olur?",
        options: ["Tanecik sayısı azsa", "Tanecik sayısı çoksa", "Çözücü azsa", "Sıcaklık düşükse"],
        answer: 1,
        image: "img/kaynama-yukselme.png"
    },
    {
        question: "Hipotez: 'Tanecik sayısı arttıkça kaynama noktası yükselmesi artar.' Bu hipotezi test etmek için aşağıdakilerden hangisi yapılmalıdır?",
        options: ["Farklı çözücüler kullanmak", "Aynı molalitede farklı i sayısı olan çözeltileri karşılaştırmak", "Sıcaklığı değiştirmek", "Basıncı değiştirmek"],
        answer: 1,
        image: "img/hipotez-test.png"
    }
];

// ========== TEMEL FONKSİYONLAR ==========

/**
 * Öğrenci numarasına göre öğrenciyi bulur
 * @param {string} studentNo - Öğrenci numarası
 * @returns {object|null} - Öğrenci objesi veya null
 */
function findStudent(studentNo) {
    if (typeof studentDatabase !== 'undefined' && Array.isArray(studentDatabase)) {
        return studentDatabase.find(s => s.no === studentNo.trim());
    }
    return null;
}

/**
 * Quiz'i başlatır
 */
function startQuiz() {
    const studentNoInput = document.getElementById('studentNo');
    if (!studentNoInput) {
        alert('❌ Hata: studentNo elementi bulunamadı!');
        return;
    }
    
    const studentNo = studentNoInput.value.trim();
    const errorDiv = document.getElementById('login-error');
    
    if (!studentNo) { 
        alert('⚠️ Lütfen öğrenci no giriniz!'); 
        return; 
    }
    
    let student;
    // 🔹 0 numaralı giriş = Konuk/Demo
    if (studentNo === "0") {
        student = { no: "0", ad: "Konuk", soyad: "Öğrenci", sinif: "Demo" };
    } else {
        student = findStudent(studentNo);
        if (!student) { 
            if (errorDiv) {
                errorDiv.textContent = '❌ Öğrenci no bulunamadı!'; 
                errorDiv.style.display = 'block';
            }
            return; 
        }
    }
    
    if (errorDiv) errorDiv.style.display = 'none';
    
    currentStudent = student;
    
    // UI geçişleri
    const loginSection = document.getElementById('login-section');
    const activeInfoSection = document.getElementById('active-info-section');
    const newQuizArea = document.getElementById('new-quiz-area');
    const progressTracker = document.getElementById('progress-tracker');
    
    if (loginSection) loginSection.style.display = 'none';
    if (activeInfoSection) {
        activeInfoSection.style.display = 'block';
        document.getElementById('active-name').textContent = `${student.ad} ${student.soyad}`;
        document.getElementById('active-no').textContent = student.no;
    }
    if (newQuizArea) newQuizArea.style.display = 'none';
    if (progressTracker) {
        progressTracker.style.display = 'flex';
        initProgressTracker();
    }
    
    // Skor sıfırla
    score = 0;
    currentQuestionIndex = 0;
    if (document.getElementById('active-score')) {
        document.getElementById('active-score').textContent = '0';
        document.getElementById('active-total').textContent = questions.length;
    }
    
    loadQuestion();
}

/**
 * İlerleme takipçisini (D/Y ikonları) başlatır
 */
function initProgressTracker() {
    const tracker = document.getElementById('progress-tracker');
    if (!tracker) return;
    
    tracker.innerHTML = '';
    questions.forEach((_, idx) => {
        const icon = document.createElement('div');
        icon.className = 'progress-icon';
        icon.id = `prog-${idx}`;
        tracker.appendChild(icon);
    });
}

/**
 * Mevcut soruyu ekrana yükler
 */
function loadQuestion() {
    isTransitioning = false;
    const quizContent = document.getElementById('quiz-content');
    if (!quizContent) return;
    
    quizContent.innerHTML = '';
    const q = questions[currentQuestionIndex];
    
    // Soru kutusu
    const qBox = document.createElement('div'); 
    qBox.className = 'question-box';
    
    const qText = document.createElement('div'); 
    qText.className = 'question-text';
    qText.innerHTML = `<strong>Soru ${currentQuestionIndex + 1}/${questions.length}:</strong><br>${q.question}`;
    qBox.appendChild(qText);
    
    // Seçenekler
    const optionsDiv = document.createElement('div'); 
    optionsDiv.className = 'options';
    
    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button'); 
        btn.className = 'option-btn'; 
        btn.innerHTML = `<strong>${String.fromCharCode(65+idx)})</strong> ${opt}`;
        btn.onclick = () => checkAnswer(idx, btn);
        optionsDiv.appendChild(btn);
    });
    
    qBox.appendChild(optionsDiv); 
    quizContent.appendChild(qBox);

    // Resim paneli
    const imagePanel = document.getElementById('image-panel');
    if (imagePanel) {
        if (q.image) {
            imagePanel.innerHTML = `<img src="${q.image}" alt="Soru Görseli" onerror="this.parentElement.innerHTML='<div class=\\'no-image-msg\\'>Görsel yüklenemedi</div>'">`;
        } else {
            imagePanel.innerHTML = `<div class="no-image-msg">🧪<br>Kimya<br>Sorusu</div>`;
        }
    }
}

/**
 * Cevap kontrolü ve geri bildirim
 * @param {number} selectedIdx - Seçilen seçenek indeksi
 * @param {HTMLElement} btn - Tıklanan buton elementi
 */
function checkAnswer(selectedIdx, btn) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const q = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    const icon = document.getElementById(`prog-${currentQuestionIndex}`);
    
    if (selectedIdx === q.answer) {
        btn.classList.add('correct');
        if (icon) {
            icon.classList.add('correct');
            icon.textContent = 'D';
        }
        score++;
    } else {
        btn.classList.add('wrong');
        if (buttons[q.answer]) buttons[q.answer].classList.add('correct');
        if (icon) {
            icon.classList.add('wrong');
            icon.textContent = 'Y';
        }
    }
    
    // Skor güncelle
    const scoreEl = document.getElementById('active-score');
    if (scoreEl) scoreEl.textContent = score;
    
    // Kısa bekleme → sonraki soru
    setTimeout(() => { nextQuestion(); }, 400);
}

/**
 * Sonraki soruya geçer veya sonuçları gösterir
 */
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

/**
 * Sınav sonuçlarını gösterir ve listeye ekler
 */
function showResults() {
    const total = questions.length;
    const yuzde = Math.round((score / total) * 100);
    
    const newResult = {
        ad: currentStudent?.ad || 'Bilinmiyor',
        soyad: currentStudent?.soyad || '',
        sinif: currentStudent?.sinif || '',
        no: currentStudent?.no || '0',
        puan: `${score}/${total}`,
        yuzde: yuzde
    };

    // Önceki sonucu güncelle veya yeni ekle
    const existingIndex = completedStudents.findIndex(s => s.no === newResult.no);
    if (existingIndex > -1) {
        completedStudents[existingIndex] = newResult;
    } else {
        completedStudents.push(newResult);
    }

    // Puanı yüksekten düşüğe sırala
    completedStudents.sort((a, b) => b.yuzde - a.yuzde);

    renderResultsList();

    // Sonuç ekranı
    const quizContent = document.getElementById('quiz-content');
    if (quizContent) {
        quizContent.innerHTML = `
            <div style="text-align:center; padding:20px; background:linear-gradient(135deg,#d4edda,#c3e6cb); border-radius:8px; border:2px solid #28a745;">
                <h3 style="color:#155724; margin:0 0 10px 0;">✅ Sınav Tamamlandı!</h3>
                <p style="margin:5px 0;"><strong>${newResult.ad} ${newResult.soyad}</strong></p>
                <p style="font-size:2.5em; font-weight:bold; color:#155724; margin:10px 0;">${score} / ${total}</p>
                <p style="font-size:1.3em; color:#155724;">%${yuzde}</p>
                <p style="margin-top:15px; font-style:italic; color:#555;">${getFeedback(yuzde)}</p>
            </div>
        `;
    }
    
    // UI güncelle
    const progressTracker = document.getElementById('progress-tracker');
    const newQuizArea = document.getElementById('new-quiz-area');
    const imagePanel = document.getElementById('image-panel');
    
    if (progressTracker) progressTracker.style.display = 'none';
    if (newQuizArea) newQuizArea.style.display = 'block';
    if (imagePanel) imagePanel.innerHTML = `<div class="no-image-msg">🎉<br>Başarılı!</div>`;
}

/**
 * Puana göre geri bildirim mesajı döndürür
 * @param {number} puan - Yüzdelik puan
 * @returns {string} - Geri bildirim metni
 */
function getFeedback(puan) {
    if (puan >= 90) return "🌟 Mükemmel! Konuyu tam olarak kavradın.";
    if (puan >= 70) return "✅ Çok iyi! Biraz daha pratikle tam puan alabilirsin.";
    if (puan >= 50) return "👍 İyi başlangıç! Tekrar çalışmanı öneririm.";
    return "📚 Konuyu tekrar gözden geçirmende fayda var.";
}

/**
 * Sonuç listesini render eder
 */
function renderResultsList() {
    const listContainer = document.getElementById('results-list');
    if (!listContainer) return;
    
    listContainer.innerHTML = ''; 
    
    if (completedStudents.length === 0) {
        listContainer.innerHTML = '<div style="color:#999; text-align:center; padding:10px; font-size:0.85em;">Henüz sınav tamamlanmadı.</div>';
        return;
    }
    
    completedStudents.forEach((st) => {
        const row = document.createElement('div');
        row.className = 'result-row';
        row.innerHTML = `
            <span class="no-badge">${st.no}</span>
            <span class="name">${st.ad} ${st.soyad}</span>
            <span class="class-info">${st.sinif}</span>
            <span class="score ${st.yuzde >= 70 ? 'pass' : 'fail'}">${st.puan}</span>
        `;
        listContainer.appendChild(row);
    });
}

/**
 * Yeni quiz için tüm değerleri sıfırlar
 */
function resetForNewQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    isTransitioning = false;
    currentStudent = null;

    const quizContent = document.getElementById('quiz-content');
    const progressTracker = document.getElementById('progress-tracker');
    const loginSection = document.getElementById('login-section');
    const activeInfoSection = document.getElementById('active-info-section');
    const newQuizArea = document.getElementById('new-quiz-area');
    const imagePanel = document.getElementById('image-panel');
    const studentNoInput = document.getElementById('studentNo');
    const loginError = document.getElementById('login-error');

    if (quizContent) quizContent.innerHTML = '<p style="text-align:center; color:#888; margin-top:50px; font-size:1em;">👈 Lütfen soldan öğrenci no girerek başlayın.</p>';
    if (progressTracker) progressTracker.style.display = 'none';
    if (loginSection) loginSection.style.display = 'block';
    if (activeInfoSection) activeInfoSection.style.display = 'none';
    if (newQuizArea) newQuizArea.style.display = 'none';
    if (studentNoInput) studentNoInput.value = '';
    if (loginError) loginError.style.display = 'none';
    if (imagePanel) imagePanel.innerHTML = `<div class="no-image-msg">Resim<br>Bekleniyor...</div>`;
}

// ========== SAYFA YÜKLENDİĞİNDE HAZIRLIK ==========
document.addEventListener('DOMContentLoaded', function() {
    // Enter tuşu ile giriş desteği
    const studentNoInput = document.getElementById('studentNo');
    if (studentNoInput) {
        studentNoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') startQuiz();
        });
        studentNoInput.focus();
    }
    
    // Eğer studentDatabase yüklenmediyse uyarı
    if (typeof studentDatabase === 'undefined') {
        console.warn('⚠️ studentDatabase bulunamadı! js/ogrenci_verileri2025-2026.js dosyasını kontrol edin.');
    }
});