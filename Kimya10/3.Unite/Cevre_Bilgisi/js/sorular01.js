
    let completedStudents = [];
    let currentStudent = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let isTransitioning = false;

    const questions = [
        { question: "Brom ve klor içeren kimyasallar stratosferdeki _______ tabakasını tahrip eder.", options: ["Ozon", "Metan", "Azot"], answer: 0, image: "img/acaba_nedir.png" },
        { question: "_______ yağmurları mermer ve tarihi eserlere zarar verir.", options: ["Tuzlu", "Asit", "Bazik"], answer: 1 },
        { question: "Hava kirliliği _______ ve yapay olmak üzere iki kaynaktan oluşur.", options: ["Kimyasal", "Doğal", "Fiziksel"], answer: 1 },
        { question: "Isıtma sistemleri ve fabrika bacaları _______ kirlilik kaynaklarındandır.", options: ["Yapay", "Doğal", "Biyolojik"], answer: 0 },
        { question: "Sera etkisi sonucu Dünya'nın ısınmasına _______ denir.", options: ["Sera Etkisi", "Küresel Isınma", "İklim Değişikliği"], answer: 1 },
        { question: "Asit yağmurlarına neden olan gazlar: NOx, SOx ve _______.", options: ["Oksijen", "Hidrojen", "Karbon Dioksit"], answer: 2 },
        { question: "Plansız kentleşme _______ en önemli nedenlerindendir.", options: ["Çevre Kirliliğinin", "Nüfus Azalmasının", "Teknolojinin"], answer: 0 },
        { question: "_______ gazı su buharıyla birleşince sülfürik asit oluşur.", options: ["CO₂", "SO₃", "NO₂"], answer: 1 },
        { question: "Tehlikeli madde kullanımını azaltan kimya: _______ Kimya.", options: ["Yeşil", "Mavi", "Kırmızı"], answer: 0 },
        { question: "Yeşil kimya ilkesi: _______ ekonomisi.", options: ["Atom", "Enerji", "Su"], answer: 0 },
        { question: "Mikro ölçekli deneyde su kullanımı makroya göre daha _______.", options: ["azdır", "fazladır", "eşittir"], answer: 0 },
        { question: "Kirliliği seyreltmek için kullanılan su: _______ su ayak izi.", options: ["Gri", "Mavi", "Yeşil"], answer: 0 },
        { question: "_______ ayak izini azaltmak için toplu taşıma kullanılmalı.", options: ["Karbon", "Su", "Toprak"], answer: 0 },
        { question: "Atığı en aza indiren deney türü: _______ ölçekli.", options: ["Mikro", "Makro", "Nano"], answer: 0 },
        { question: "Su ve karbon ayak izi küçültülerek _______ dünya hedeflenir.", options: ["Sürdürülebilir", "Geçici", "Hızlı"], answer: 0 }
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
