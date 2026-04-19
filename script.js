// يتم تحميل questions.js قبل script.js في HTML
// لذا يمكننا الوصول لـ specialties و questions مباشرة

// ============================================
// منطق الاختبار
// ============================================

const specialtyKeys = Object.keys(specialties);
const totalQuestions = questions.length;

let currentQuestion = 0;
let selectedAnswers = Array(totalQuestions).fill(null);

let userData = {
    fullName: "",
    phoneOrId: "",
    age: ""
};

// دالة لإنشاء رقم طلب فريد
function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ORD-${timestamp}-${random}`;
}

// ============================================
// إعدادات التيليجرام
// ============================================
const TELEGRAM_BOT_TOKEN = '8316425660:AAEBNk5ZWULPe6JP4_4Dsds5fwZUWLqneMQ';
const TELEGRAM_CHAT_ID = '5342929752';

// رابط الموقع - يتم أخذه تلقائياً من الرابط الحالي
const SITE_URL = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '');

// دالة إرسال إشعار تلقائي إلى التيليجرام مع رابط النتيجة الكاملة
async function sendTelegramNotification(name, age, orderId, scores) {
    // بناء رابط صفحة النتيجة الكاملة
    const scoreValues = specialtyKeys.map(key => scores[key] || 0).join(',');
    const resultLink = `${SITE_URL}/result.html?n=${encodeURIComponent(name)}&a=${age}&s=${scoreValues}`;

    const message =
        `🔔 <b>اختبار جديد مكتمل!</b>\n\n` +
        `👤 <b>الاسم:</b> ${name}\n` +
        `🎂 <b>العمر:</b> ${age}\n` +
        `📱 <b>الهاتف/الهوية:</b> ${userData.phoneOrId}\n` +
        `🆔 <b>رقم الطلب:</b> <code>${orderId}</code>\n\n` +
        `🔗 <b>رابط النتيجة الكاملة:</b>\n${resultLink}`;

    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        console.log('✅ تم إرسال إشعار التيليجرام بنجاح');
    } catch (e) {
        console.log('❌ خطأ في إرسال إشعار التيليجرام:', e);
    }
}

function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

function setScreenVisibility({ welcome, form, quiz, results, progress, loading = false }) {
    document.getElementById('welcomeScreen').style.display = welcome ? 'block' : 'none';
    document.getElementById('userForm').style.display = form ? 'block' : 'none';
    document.getElementById('quizContainer').style.display = quiz ? 'block' : 'none';
    document.getElementById('resultsContainer').style.display = results ? 'block' : 'none';
    document.getElementById('progressContainer').style.display = progress ? 'block' : 'none';

    const loadingEl = document.getElementById('loading');
    if (loading) {
        loadingEl.classList.add('show');
    } else {
        loadingEl.classList.remove('show');
    }
}

function showWelcome() {
    setScreenVisibility({
        welcome: true,
        form: false,
        quiz: false,
        results: false,
        progress: false,
        loading: false
    });
    hideError();
}

function showUserForm() {
    setScreenVisibility({
        welcome: false,
        form: true,
        quiz: false,
        results: false,
        progress: false,
        loading: false
    });
    hideError();
}

function startQuiz() {
    const fullName = document.getElementById('fullName').value.trim();
    const phoneOrId = document.getElementById('phoneOrId').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!fullName || !phoneOrId || !age) {
        showError('يرجى تعبئة جميع الحقول المطلوبة');
        return;
    }

    const ageNum = Number(age);
    if (Number.isNaN(ageNum) || ageNum < 15 || ageNum > 100) {
        showError('يرجى إدخال عمر صحيح بين 15 و100');
        return;
    }

    userData = { fullName, phoneOrId, age };

    currentQuestion = 0;
    selectedAnswers = Array(totalQuestions).fill(null);

    setScreenVisibility({
        welcome: false,
        form: false,
        quiz: true,
        results: false,
        progress: true,
        loading: false
    });

    hideError();
    renderQuestion();
    updateProgress();
}

function renderQuestion() {
    const question = questions[currentQuestion];
    const container = document.getElementById('questionContainer');

    let html = `
        <div class="question-number">السؤال ${currentQuestion + 1} من ${totalQuestions}</div>
        <div class="question-text">${escapeHtml(question.text)}</div>
        <div class="options">
    `;

    question.options.forEach((option, index) => {
        const letter = String.fromCharCode(65 + index);
        const selected = selectedAnswers[currentQuestion] === index ? 'selected' : '';

        html += `
            <div class="option ${selected}" onclick="selectOption(${index})">
                <div class="option-letter">${letter}</div>
                <div class="option-text">${escapeHtml(option.text)}</div>
            </div>
        `;
    });

    html += `</div>`;
    container.innerHTML = html;

    document.getElementById('prevBtn').disabled = currentQuestion === 0;
    document.getElementById('nextBtn').disabled = selectedAnswers[currentQuestion] === null;
    document.getElementById('nextBtn').innerText = currentQuestion === totalQuestions - 1 ? 'إنهاء ←' : 'التالي ←';
}

function selectOption(optionIndex) {
    selectedAnswers[currentQuestion] = optionIndex;
    renderQuestion();
}

function nextQuestion() {
    if (selectedAnswers[currentQuestion] === null) {
        showError('يرجى اختيار إجابة قبل المتابعة');
        return;
    }

    hideError();

    if (currentQuestion < totalQuestions - 1) {
        currentQuestion++;
        renderQuestion();
        updateProgress();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion === 0) return;

    currentQuestion--;
    hideError();
    renderQuestion();
    updateProgress();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressText').innerText = `السؤال ${currentQuestion + 1} من ${totalQuestions}`;
    document.getElementById('progressPercent').innerText = `${Math.round(progress)}%`;
    document.getElementById('progressFill').style.width = `${progress}%`;
}

function finishQuiz() {
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('loading').classList.add('show');

    setTimeout(() => {
        document.getElementById('loading').classList.remove('show');

        // حساب النتائج
        const scores = calculateScores();

        // إرسال إشعار تلقائي للتيليجرام مع رابط النتيجة الكاملة
        const orderNumber = generateOrderNumber();
        sendTelegramNotification(userData.fullName, userData.age, orderNumber, scores);

        // عرض رسالة الواتساب للمستخدم
        showWhatsAppModal();
    }, 1500);
}

function showWhatsAppModal() {
    // رسالة واتساب - الاسم والعمر فقط
    const message = `مرحبا، أريد النتيجة\n\nالاسم: ${userData.fullName}\nالعمر: ${userData.age}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/967779175085?text=${encodedMessage}`;

    document.getElementById('whatsappLink').href = whatsappLink;

    // عرض الـ modal
    const modal = document.getElementById('whatsappModal');
    modal.classList.add('show');
}

function calculateScores() {
    const scores = {};
    specialtyKeys.forEach(key => {
        scores[key] = 0;
    });

    selectedAnswers.forEach((answerIndex, questionIndex) => {
        if (answerIndex === null) return;

        const question = questions[questionIndex];
        const option = question.options[answerIndex];

        if (!option || !option.scores) return;

        Object.entries(option.scores).forEach(([specialty, points]) => {
            if (Object.prototype.hasOwnProperty.call(scores, specialty)) {
                scores[specialty] += points;
            }
        });
    });

    return scores;
}

function showResults() {
    const scores = calculateScores();

    const rankedSpecialties = specialtyKeys
        .map(key => ({
            key,
            name: specialties[key].name,
            description: specialties[key].description,
            color: specialties[key].color,
            score: scores[key] || 0
        }))
        .sort((a, b) => b.score - a.score);

    document.getElementById('resultUserName').innerText = userData.fullName;
    document.getElementById('resultUserInfo').innerText = `العمر: ${userData.age} | المعرف: ${userData.phoneOrId}`;

    const topSpecialtiesContainer = document.getElementById('topSpecialties');
    const barChart = document.getElementById('barChart');

    topSpecialtiesContainer.innerHTML = '';
    barChart.innerHTML = '';

    const maxScore = Math.max(1, ...rankedSpecialties.map(s => s.score));

    const topFragment = document.createDocumentFragment();
    rankedSpecialties.slice(0, 3).forEach((specialty, index) => {
        const percent = Math.round((specialty.score / maxScore) * 100);

        const card = document.createElement('div');
        card.className = `specialty-card rank-${index + 1}`;
        card.innerHTML = `
            <div class="specialty-title">${escapeHtml(specialty.name)}</div>
            <div class="specialty-score">${specialty.score} نقطة</div>
            <div class="specialty-description">${escapeHtml(specialty.description)}</div>
            <div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-secondary);">
                التوافق النسبي: ${percent}%
            </div>
        `;

        topFragment.appendChild(card);
    });
    topSpecialtiesContainer.appendChild(topFragment);

    const chartFragment = document.createDocumentFragment();
    rankedSpecialties.forEach(specialty => {
        const percent = Math.round((specialty.score / maxScore) * 100);

        const item = document.createElement('div');
        item.className = 'chart-item';
        item.innerHTML = `
            <div class="chart-label">${escapeHtml(specialty.name)}</div>
            <div class="chart-bar-container">
                <div class="chart-bar" style="width: ${percent}%; background: linear-gradient(135deg, ${specialty.color}, ${specialty.color}CC);">
                    ${specialty.score}
                </div>
            </div>
        `;

        chartFragment.appendChild(item);
    });
    barChart.appendChild(chartFragment);

    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'none';
}

function restartQuiz() {
    currentQuestion = 0;
    selectedAnswers = Array(totalQuestions).fill(null);
    userData = { fullName: "", phoneOrId: "", age: "" };

    document.getElementById('fullName').value = '';
    document.getElementById('phoneOrId').value = '';
    document.getElementById('age').value = '';

    showWelcome();
}

function showError(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.classList.add('show');
}

function hideError() {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.classList.remove('show');
    errorMessage.innerText = '';
}

// ============================================
// ربط الدوال مع النافذة
// ============================================

window.showWelcome = showWelcome;
window.showUserForm = showUserForm;
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.restartQuiz = restartQuiz;
window.selectOption = selectOption;

// ============================================
// عرض النتيجة تلقائياً من رابط URL (بعد الدفع)
// ============================================
(function checkResultFromURL() {
    const params = new URLSearchParams(window.location.search);
    let resultData = null;

    const scoresParam = params.get('s');
    // محاولة قراءة الرابط القصير (الجديد)
    if (scoresParam) {
        const name = params.get('n') || '';
        const age = params.get('a') || '';

        // إعادة بناء كائن scores من القيم المفصولة بفواصل
        const scoreValues = scoresParam.split(',').map(Number);
        const scores = {};
        specialtyKeys.forEach((key, i) => {
            scores[key] = scoreValues[i] || 0;
        });

        resultData = { name, age, scores };
    }
    // محاولة قراءة الرابط الطويل (القديم)
    else if (params.get('data')) {
        try {
            const dataStr = params.get('data');
            const decodedStr = decodeURIComponent(escape(atob(dataStr)));
            resultData = JSON.parse(decodedStr);
        } catch (e) {
            console.error("Error parsing old data link", e);
        }
    }

    if (!resultData) return; // لا يوجد نتائج في الرابط

    function showResultFromData(data) {
        // أخفِ كل العناصر
        ['welcomeScreen', 'userForm', 'quizContainer', 'loading', 'progressContainer']
            .forEach(id => {
                const el = document.getElementById(id);
                if (el) el.style.display = 'none';
            });

        userData.fullName = data.name;
        userData.age = data.age;

        const rankedSpecialties = specialtyKeys
            .map(key => ({
                key,
                name: specialties[key].name,
                description: specialties[key].description,
                color: specialties[key].color,
                score: data.scores[key] || 0
            }))
            .sort((a, b) => b.score - a.score);

        document.getElementById('resultUserName').innerText = data.name;
        document.getElementById('resultUserInfo').innerText = `العمر: ${data.age}`;

        const topSpecialtiesContainer = document.getElementById('topSpecialties');
        const barChart = document.getElementById('barChart');
        topSpecialtiesContainer.innerHTML = '';
        barChart.innerHTML = '';

        const maxScore = Math.max(1, ...rankedSpecialties.map(s => s.score));

        // أفضل 3 تخصصات
        rankedSpecialties.slice(0, 3).forEach((specialty, index) => {
            const percent = Math.round((specialty.score / maxScore) * 100);
            const card = document.createElement('div');
            card.className = `specialty-card rank-${index + 1}`;
            card.innerHTML = `
                <div class="specialty-title">${escapeHtml(specialty.name)}</div>
                <div class="specialty-score">${specialty.score} نقطة</div>
                <div class="specialty-description">${escapeHtml(specialty.description)}</div>
                <div style="margin-top:15px;font-size:0.9rem;color:var(--text-secondary)">
                    التوافق النسبي: ${percent}%
                </div>
            `;
            topSpecialtiesContainer.appendChild(card);
        });

        // الرسم البياني
        rankedSpecialties.forEach(specialty => {
            const percent = Math.round((specialty.score / maxScore) * 100);
            const item = document.createElement('div');
            item.className = 'chart-item';
            item.innerHTML = `
                <div class="chart-label">${escapeHtml(specialty.name)}</div>
                <div class="chart-bar-container">
                    <div class="chart-bar" style="width:${percent}%;background:linear-gradient(135deg,${specialty.color},${specialty.color}CC)">
                        ${specialty.score}
                    </div>
                </div>
            `;
            barChart.appendChild(item);
        });

        // إظهار النتائج (بدون قسم الدفع)
        const resultsContainer = document.getElementById('resultsContainer');
        resultsContainer.style.display = 'block';
        const paymentSection = resultsContainer.querySelector('.payment-section');
        if (paymentSection) paymentSection.style.display = 'none';
    }

    // استدعاء الدالة حسب حالة الصفحة
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => showResultFromData(resultData));
    } else {
        showResultFromData(resultData);
    }
})();
