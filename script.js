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

let currentOrderNumber = "";
let loadingTimer = null;

// دالة لإنشاء رقم طلب فريد
function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `ORD-${timestamp}-${random}`;
}
const TELEGRAM_BOT_TOKEN = '8316425660:AAEBNk5ZWULPe6JP4_4Dsds5fwZUWLqneMQ';
const TELEGRAM_CHAT_ID = '5342929752';

// رابط الموقع
const SITE_URL = window.location.origin;

// رسائل التحميل
const loadingSteps = [
    "🧠 تحليل نمط الشخصية...",
    "📊 تحليل القدرات والميول...",
    "🔍 مطابقة إجاباتك مع التخصصات...",
    "⚠️ رصد نقاط القوة والضعف...",
    "✅ تجهيز الملخص النهائي..."
];

// دالة إرسال إشعار تلقائي إلى التيليجرام
async function sendTelegramNotification(name, age, orderId, scores) {
    if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === 'PUT_YOUR_BOT_TOKEN_HERE') {
        console.warn('Telegram token is not configured.');
        return;
    }

    const scoreValues = specialtyKeys.map(key => scores[key] || 0).join(',');
    const resultLink = `${SITE_URL}/result.html?n=${encodeURIComponent(name)}&a=${encodeURIComponent(age)}&s=${encodeURIComponent(scoreValues)}`;

    const message =
        `🔔 <b>اختبار جديد مكتمل!</b>\n\n` +
        `👤 <b>الاسم:</b> ${escapeHtml(name)}\n` +
        `🎂 <b>العمر:</b> ${escapeHtml(age)}\n` +
        `📱 <b>الهاتف/الهوية:</b> ${escapeHtml(userData.phoneOrId)}\n` +
        `🆔 <b>رقم الطلب:</b> <code>${escapeHtml(orderId)}</code>\n\n` +
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
        console.log('✅ Telegram notification sent');
    } catch (e) {
        console.log('❌ Telegram error:', e);
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

function setScreenVisibility({ welcome, form, quiz, loading = false, gate = false, progress = false }) {
    const welcomeEl = document.getElementById('welcomeScreen');
    const formEl = document.getElementById('userForm');
    const quizEl = document.getElementById('quizContainer');
    const progressEl = document.getElementById('progressContainer');
    const loadingEl = document.getElementById('loading');
    const gateEl = document.getElementById('whatsappGate');

    if (welcomeEl) welcomeEl.style.display = welcome ? 'block' : 'none';
    if (formEl) formEl.style.display = form ? 'block' : 'none';
    if (quizEl) quizEl.style.display = quiz ? 'block' : 'none';
    if (progressEl) progressEl.style.display = progress ? 'block' : 'none';

    if (loadingEl) {
        loadingEl.style.display = loading ? 'flex' : 'none';
        if (loading) {
            loadingEl.classList.add('show');
            startLoadingAnimation();
        } else {
            loadingEl.classList.remove('show');
            stopLoadingAnimation();
        }
    }

    if (gateEl) {
        gateEl.style.display = gate ? 'flex' : 'none';
        if (!gate) gateEl.classList.remove('show');
    }
}

function startLoadingAnimation() {
    const loadingStep = document.getElementById('loadingStep');
    const loadingText = document.getElementById('loadingText');
    if (!loadingStep) return;

    if (loadingText) {
        loadingText.innerText = "🤖 يقوم الذكاء الاصطناعي بتحليل إجاباتك...";
    }

    stopLoadingAnimation();

    let index = 0;
    loadingStep.innerText = loadingSteps[index];

    loadingTimer = setInterval(() => {
        index = (index + 1) % loadingSteps.length;
        loadingStep.innerText = loadingSteps[index];
    }, 1100);
}

function stopLoadingAnimation() {
    if (loadingTimer) {
        clearInterval(loadingTimer);
        loadingTimer = null;
    }
}

function showWelcome() {
    setScreenVisibility({
        welcome: true,
        form: false,
        quiz: false,
        loading: false,
        gate: false,
        progress: false
    });
    hideError();
}

function showUserForm() {
    setScreenVisibility({
        welcome: false,
        form: true,
        quiz: false,
        loading: false,
        gate: false,
        progress: false
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
        loading: false,
        gate: false,
        progress: true
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

async function finishQuiz() {
    currentOrderNumber = generateOrderNumber();

    // تخزين محلي اختياري
    const scores = calculateScores();
    try {
        localStorage.setItem('lastQuizSubmission', JSON.stringify({
            orderId: currentOrderNumber,
            userData,
            answers: selectedAnswers,
            scores,
            createdAt: new Date().toISOString()
        }));
    } catch (e) {
        console.warn('localStorage unavailable:', e);
    }

    // إظهار التحميل فقط
    setScreenVisibility({
        welcome: false,
        form: false,
        quiz: false,
        loading: true,
        gate: false,
        progress: false
    });

    // إرسال إشعار إلى تيليجرام
    await sendTelegramNotification(
        userData.fullName,
        userData.age,
        currentOrderNumber,
        scores
    );

    // انتظار قصير لعرض تجربة التحليل
    setTimeout(() => {
        setScreenVisibility({
            welcome: false,
            form: false,
            quiz: false,
            loading: false,
            gate: true,
            progress: false
        });

        showWhatsAppGate();
    }, 2800);
}

function showWhatsAppGate() {
    const message =
        `مرحبا، أنهيت الاختبار وأريد استلام نتيجتي الكاملة.\n\n` +
        `الاسم: ${userData.fullName}\n` +
        `العمر: ${userData.age}\n` +
        `رقم الطلب: ${currentOrderNumber}`;

    const whatsappLink =
        `https://wa.me/967779175085?text=${encodeURIComponent(message)}`;

    // زر الواتساب
    const btn = document.getElementById('whatsappBtn');
    if (btn) {
        btn.href = whatsappLink;
    }

    // إظهار البوابة
    const gate = document.getElementById('whatsappGate');
    if (gate) {
        gate.style.display = 'flex';
        gate.classList.add('show');
    }

    // 🔥 مهم: منع التمرير + إخفاء أي محتوى خلفي
    document.body.classList.add('gate-active');

    // 🔒 اختياري: تفريغ أي محتوى ممكن يحتوي نتائج (حماية إضافية)
    const quiz = document.getElementById('quizContainer');
    if (quiz) quiz.innerHTML = '';

    const loading = document.getElementById('loading');
    if (loading) loading.innerHTML = '';

    // 🧠 تركيز المستخدم (تجربة أفضل)
    if (btn) {
        setTimeout(() => btn.focus(), 300);
    }
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

function restartQuiz() {
    currentQuestion = 0;
    selectedAnswers = Array(totalQuestions).fill(null);
    userData = { fullName: "", phoneOrId: "", age: "" };
    currentOrderNumber = "";

    try {
        localStorage.removeItem('lastQuizSubmission');
    } catch (e) { }

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
window.showWhatsAppGate = showWhatsAppGate;

// ============================================
// تهيئة أولية
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    showWelcome();
});