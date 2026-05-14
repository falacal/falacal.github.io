
    let completedStudents = [];
    let currentStudent = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let isTransitioning = false;

    const questions = [
    // ========== DENİZ KİRLİLİĞİ VE AĞIR METAL TEMİZLİĞİ (7 soru) ==========
    {
        question: "Deniz ve okyanuslardaki ağır metalleri temizlemek için kullanılan doğal bir yöntem hangisidir?",
        options: ["Su mercimekleriyle temizlik", "Pirinayla temizlik", "Manyetit nanoparçacıklar", "Membran filtreler"],
        answer: 0,  // A
        image: "img/su-mercimegi.png"
    },
    {
        question: "Ağır metal temizliğinde bitkisel ekstraksiyon yöntemine ne ad verilir?",
        options: ["Nanoteknoloji", "Fitoekstraksiyon", "Biyoremediasyon", "Membran filtrasyon"],
        answer: 1,  // B
        image: "img/fitoekstraksiyon.png"
    },
    {
        question: "Sudaki nanoparçacıkları temizlemek için hangi yöntem kullanılır?",
        options: ["Bakterilerle temizlik", "Pirinayla temizlik", "Su mercimekleriyle temizlik", "Manyetit nanoparçacıklar"],
        answer: 3,  // D
        image: "img/manyetit.png"
    },
    {
        question: "Ağır metal temizliğinde biyolojik yöntem olarak hangisi kullanılır?",
        options: ["Membran filtreler", "Pirinayla temizlik", "Manyetit nanoparçacıklar", "Bakterilerle temizlik"],
        answer: 3,  // D
        image: "img/bakteri.png"
    },
    {
        question: "Deniz kirliliğinde ağır metal temizliği için kullanılan fiziksel yöntem hangisidir?",
        options: ["Fitoekstraksiyon", "Membran filtreler", "Bakteriyel arıtma", "Su mercimekleri"],
        answer: 1,  // B
        image: "img/membran.png"
    },
    {
        question: "Pirinayla ağır metal temizliği yöntemi hangi prensibe dayanır?",
        options: ["Adsorpsiyon (yüzeye tutunma)", "Biyolojik parçalama", "Filtreleme", "Manyetik ayırma"],
        answer: 0,  // A
        image: "img/pirina.png"
    },
    {
        question: "Aşağıdaki yöntemlerden hangisi deniz kirliliği için çözüm DEĞİLDİR?",
        options: ["Fitoekstraksiyon", "Manyetit nanoparçacıklar", "Membran filtreler", "Petrol bazlı temizleyiciler"],
        answer: 3,  // D
        image: "img/kirlilik.png"
    },
    
    // ========== KATILAR (Amorf & Kristal) (7 soru) ==========
    {
        question: "Aşağıdakilerden hangisi amorf katılara örnektir?",
        options: ["Sofra tuzu (NaCl)", "Cam", "Elmas", "Buz (katı H₂O)"],
        answer: 1,  // B
        image: "img/amorf-kati.png"
    },
    {
        question: "Kristal katıların özelliği OLMAYAN hangisidir?",
        options: ["Düzenli yapıya sahiptir", "Erime noktası keskindir", "X-ışınlarında kırınım yapar", "Tanecikleri rastgele dizilidir"],
        answer: 3,  // D
        image: "img/kristal-yapi.png"
    },
    {
        question: "İyonik katılara aşağıdakilerden hangisi örnektir?",
        options: ["Elmas", "Sofra tuzu (NaCl)", "Buz (katı H₂O)", "Lastik"],
        answer: 1,  // B
        image: "img/iyonik-kati.png"
    },
    {
        question: "Kovalent katılara örnek olarak aşağıdakilerden hangisi verilebilir?",
        options: ["Magnezyum (Mg)", "Kuru buz (katı CO₂)", "Grafit", "Tereyağı"],
        answer: 2,  // C
        image: "img/kovalent-kati.png"
    },
    {
        question: "Metalik katıların özelliği aşağıdakilerden hangisidir?",
        options: ["İşlenebilir ve parlaktır", "Elektrik iletmez", "Düşük erime noktasına sahiptir", "Amorf yapıdadır"],
        answer: 0,  // A
        image: "img/metalik-kati.png"
    },
    {
        question: "Moleküler katılara örnek aşağıdakilerden hangisidir?",
        options: ["Kalsiyum oksit (CaO)", "Sodyum (Na)", "Buz (katı H₂O)", "Plastik"],
        answer: 2,  // C
        image: "img/molekuler-kati.png"
    },
    {
        question: "Aşağıdaki eşleştirmelerden hangisi YANLIŞTIR?",
        options: ["Amorf katı → Lastik", "Metalik katı → Grafit", "İyonik katı → NaCl", "Moleküler katı → Kuru buz"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    
    // ========== DENGE BUHAR BASINCI (4 soru) ==========
    {
        question: "Denge buhar basıncı hangi durumda oluşur?",
        options: ["Sıvıyla buharı dinamik dengedeyken", "Sıvı tamamen buharlaştığında", "Sıvı kaynama noktasına ulaştığında", "Dış basınç sıfır olduğunda"],
        answer: 0,  // A
        image: "img/denge-buhar.png"
    },
    {
        question: "Denge buhar basıncı aşağıdakilerden hangisine BAĞLI DEĞİLDİR?",
        options: ["Sıvının cinsine", "Sıvının miktarına", "Sıvının saflık derecesine", "Sıvının sıcaklığına"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    {
        question: "Sıcaklık arttıkça bir sıvının denge buhar basıncı nasıl değişir?",
        options: ["Azalır", "Değişmez", "Önce artar sonra azalır", "Artar"],
        answer: 3,  // D
        image: "img/acaba_nedir.png"
    },
    {
        question: "Saf su ile tuzlu suyun aynı sıcaklıktaki denge buhar basınçları için ne söylenebilir?",
        options: ["Eşittir", "Tuzlu suyun buhar basıncı daha yüksektir", "Karşılaştırılamaz", "Saf suyun buhar basıncı daha yüksektir"],
        answer: 3,  // D
        image: "img/acaba_nedir.png"
    },
    
    // ========== KAYNAMA (5 soru) ==========
    {
        question: "Kaynama olayı ile ilgili aşağıdakilerden hangisi DOĞRUDUR?",
        options: ["Yalnız sıvı yüzeyinde gerçekleşir", "Sıvının her yerinde buharlaşma olur", "Dış basınçtan etkilenmez", "Sıvı miktarına bağlıdır"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    {
        question: "Kaynama noktası nasıl tanımlanır?",
        options: ["Sıvının donduğu sıcaklık", "Buhar basıncının dış basıncı aştığı sıcaklık", "Sıvının viskozitesinin sıfır olduğu sıcaklık", "Buhar basıncının dış basınca eşit olduğu sıcaklık"],
        answer: 3,  // D
        image: "img/acaba_nedir.png"
    },
    {
        question: "Kaynama noktasını etkileyen faktörler arasında aşağıdakilerden hangisi YOKTUR?",
        options: ["Dış basınç", "Isıtıcının gücü", "Sıvının cinsi", "Sıvının saflığı"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    {
        question: "Yüksek rakımlı bir yerde suyun kaynama noktası deniz seviyesine göre nasıl olur?",
        options: ["Daha yüksektir", "Aynıdır", "Önce düşer sonra yükselir", "Daha düşüktür"],
        answer: 3,  // D
        image: "img/acaba_nedir.png"
    },
    {
        question: "Saf bir sıvıya tuz eklendiğinde kaynama noktası nasıl değişir?",
        options: ["Düşer", "Yükselir", "Değişmez", "Önce düşer sonra yükselir"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    
    // ========== VİSKOZİTE (4 soru) ==========
    {
        question: "Viskozite nedir?",
        options: ["Sıvının buharlaşma hızı", "Sıvının yüzey gerilimi", "Sıvının akmaya karşı gösterdiği direnç", "Sıvının ısı iletkenliği"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Viskozitesi yüksek bir sıvı için aşağıdakilerden hangisi söylenebilir?",
        options: ["Çok hızlı akar", "Düşük yoğunluktadır", "Akmaya karşı direnci yüksektir", "Kolay buharlaşır"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Sıcaklık arttıkça sıvıların viskozitesi genellikle nasıl değişir?",
        options: ["Artar", "Değişmez", "Önce artar sonra azalır", "Azalır"],
        answer: 3,  // D
        image: "img/acaba_nedir.png"
    },
    {
        question: "Basınç arttıkça bir sıvının viskozitesi nasıl değişir?",
        options: ["Azalır", "Artar", "Değişmez", "Önce azalır sonra artar"],
        answer: 1,  // B
        image: "img/acaba_nedir.png"
    },
    
    // ========== ADEZYON, KOHEZYON, YÜZEY GERİLİMİ (5 soru) ==========
    {
        question: "Farklı tür moleküller arasındaki çekim kuvvetine ne ad verilir?",
        options: ["Kohezyon", "Yüzey gerilimi", "Adezyon", "Viskozite"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Yağmur sonrası camda su damlalarının yapışması hangi kuvvetin sonucudur?",
        options: ["Kohezyon", "Yerçekimi", "Adezyon", "Manyetik kuvvet"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Aynı tür moleküllerin birbirini çekmesine ne ad verilir?",
        options: ["Adezyon", "Yüzey gerilimi", "Kohezyon", "Kılcallık"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Su damlasının küre şeklini alması hangi kuvvetin sonucudur?",
        options: ["Adezyon", "Viskozite", "Kohezyon", "Buhar basıncı"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    },
    {
        question: "Sıvı yüzeyinin esnek bir zar gibi davranmasına ne ad verilir?",
        options: ["Viskozite", "Kılcallık", "Yüzey gerilimi", "Buharlaşma"],
        answer: 2,  // C
        image: "img/acaba_nedir.png"
    }
];

    function findStudent(studentNo) {
        if (typeof studentDatabase !== 'undefined') {
            return studentDatabase.find(s => s.no === studentNo.trim());
        }
        return null;
    }

    function startQuiz() {
        const studentNo = document.getElementById('studentNo').value.trim();
        const errorDiv = document.getElementById('login-error');
        
        if (!studentNo) { alert('⚠️ Lütfen öğrenci no giriniz!'); return; }
        
        let student;
        // 🔹 0 numaralı giriş kontrolü (Konuk/Demo)
        if (studentNo === "0") {
            student = { no: "0", ad: "Konuk", soyad: "Öğrenci", sinif: "Demo" };
        } else {
            student = findStudent(studentNo);
            if (!student) { 
                errorDiv.textContent = '❌ Öğrenci no bulunamadı!'; 
                errorDiv.style.display = 'block';
                return; 
            }
        }
        errorDiv.style.display = 'none';
        
        currentStudent = student;
        
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('active-info-section').style.display = 'block';
        document.getElementById('active-name').textContent = `${student.ad} ${student.soyad}`;
        document.getElementById('active-no').textContent = student.no;
        document.getElementById('active-total').textContent = questions.length;
        document.getElementById('active-score').textContent = '0';

        document.getElementById('new-quiz-area').style.display = 'none';
        document.getElementById('progress-tracker').style.display = 'flex';
        
        initProgressTracker();
        loadQuestion();
    }

    function initProgressTracker() {
        const tracker = document.getElementById('progress-tracker');
        tracker.innerHTML = '';
        questions.forEach((_, idx) => {
            const icon = document.createElement('div');
            icon.className = 'progress-icon';
            icon.id = `prog-${idx}`;
            tracker.appendChild(icon);
        });
    }

    function loadQuestion() {
        isTransitioning = false;
        const quizContent = document.getElementById('quiz-content');
        quizContent.innerHTML = '';
        
        const q = questions[currentQuestionIndex];
        
        const qBox = document.createElement('div'); 
        qBox.className = 'question-box';
        
        const qText = document.createElement('div'); 
        qText.className = 'question-text';
        qText.innerText = `Soru ${currentQuestionIndex + 1}/${questions.length}: ${q.question}`;
        qBox.appendChild(qText);
        
        const optionsDiv = document.createElement('div'); 
        optionsDiv.className = 'options';
        
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('button'); 
            btn.className = 'option-btn'; 
            btn.innerText = opt;
            btn.onclick = () => checkAnswer(idx, btn);
            optionsDiv.appendChild(btn);
        });
        
        qBox.appendChild(optionsDiv); 
        quizContent.appendChild(qBox);

        const imagePanel = document.getElementById('image-panel');
        if (q.image) {
            imagePanel.innerHTML = `<img src="${q.image}" alt="Soru Resmi">`;
        } else {
            imagePanel.innerHTML = `<div class="no-image-msg">Bu soruda<br>resim yok</div>`;
        }
    }

    function checkAnswer(selectedIdx, btn) {
        if (isTransitioning) return;
        isTransitioning = true;
        
        const q = questions[currentQuestionIndex];
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(b => b.disabled = true);
        
        const icon = document.getElementById(`prog-${currentQuestionIndex}`);
        
        if (selectedIdx === q.answer) {
            btn.classList.add('correct');
            icon.classList.add('correct');
            icon.textContent = 'D';
            score++;
        } else {
            btn.classList.add('wrong');
            buttons[q.answer].classList.add('correct');
            icon.classList.add('wrong');
            icon.textContent = 'Y';
        }
        
        document.getElementById('active-score').textContent = score;
        // ⏱️ 0.1 saniye bekleme süresi
        setTimeout(() => { nextQuestion(); }, 100); 
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        const yuzde = Math.round((score / questions.length) * 100);
        const newResult = {
            ad: currentStudent.ad,
            soyad: currentStudent.soyad,
            sinif: currentStudent.sinif,
            no: currentStudent.no,
            puan: `${score}/${questions.length}`,
            yuzde: yuzde
        };

        const existingIndex = completedStudents.findIndex(s => s.no === currentStudent.no);

        if (existingIndex > -1) {
            completedStudents[existingIndex] = newResult;
        } else {
            completedStudents.push(newResult);
        }

        // Puanı yüksek olandan düşüğe sırala
        completedStudents.sort((a, b) => b.yuzde - a.yuzde);

        renderResultsList();

        document.getElementById('quiz-content').innerHTML = '<p style="text-align:center; color:#888; margin-top:40px; font-size:1.1em;">✅ Sınav başarıyla tamamlandı!</p>';
        document.getElementById('progress-tracker').style.display = 'none';
        document.getElementById('new-quiz-area').style.display = 'block';
        document.getElementById('image-panel').innerHTML = `<div class="no-image-msg">Sınav Bitti! </div>`;
    }

    function renderResultsList() {
        const listContainer = document.getElementById('results-list');
        listContainer.innerHTML = ''; 
        
        completedStudents.forEach((st, index) => {
            const row = document.createElement('div');
            row.className = 'result-row';
            //  Rapor satırı: No | Ad Soyad | Sınıf | Puan
            row.innerHTML = `
                <span class="no-badge">${st.no}</span>
                <span class="name">${st.ad} ${st.soyad}</span>
                <span class="class-info">${st.sinif}</span>
                <span class="score">${st.puan}</span>
            `;
            listContainer.appendChild(row);
        });
        
        if (completedStudents.length === 0) {
            listContainer.innerHTML = '<div style="color:#999; text-align:center; padding:10px; font-size:0.85em;">Henüz sınav tamamlanmadı.</div>';
        }
    }

    function resetForNewQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        isTransitioning = false;
        currentStudent = null;

        document.getElementById('new-quiz-area').style.display = 'none';
        document.getElementById('quiz-content').innerHTML = '<p style="text-align:center; color:#888; margin-top:40px; font-size:1em;">Lütfen soldan öğrenci no girerek başlayın.</p>';
        document.getElementById('progress-tracker').style.display = 'none';

        document.getElementById('login-section').style.display = 'block';
        document.getElementById('active-info-section').style.display = 'none';
        document.getElementById('studentNo').value = '';
        document.getElementById('login-error').style.display = 'none';

        document.getElementById('image-panel').innerHTML = `<div class="no-image-msg">Resim<br>Bekleniyor...</div>`;
    }
