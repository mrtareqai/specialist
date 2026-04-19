// ملف عرض النتيجة - يقرأ البيانات من معاملات URL المختصرة
// n=الاسم, a=العمر, s=النقاط (مفصولة بفواصل بترتيب التخصصات الثابت)

function loadAndDisplayResult() {
    const params = new URLSearchParams(window.location.search);
    const container = document.getElementById('resultContent');

    if (!container) return;

    let resultData = null;

    // محاولة قراءة الرابط القصير (الجديد)
    const scoresParam = params.get('s');
    if (scoresParam) {
        const name = params.get('n') || '';
        const age = params.get('a') || '';

        const scoreValues = scoresParam.split(',').map(Number);
        const sKeys = (typeof specialties !== 'undefined') ? Object.keys(specialties) : [];
        const scores = {};
        sKeys.forEach((key, i) => {
            scores[key] = scoreValues[i] || 0;
        });

        resultData = { name, age, scores };
    }
    // محاولة قراءة الرابط الطويل (القديم)
    else if (params.get('data')) {
        try {
            const dataStr = params.get('data');
            // فك التشفير عن Base64 مع دعم الحروف العربية
            const decodedStr = decodeURIComponent(escape(atob(dataStr)));
            resultData = JSON.parse(decodedStr);
        } catch (e) {
            console.error("Error parsing old data link", e);
        }
    }

    // إذا لم يوجد بيانات صالحة → رسالة خطأ
    if (!resultData) {
        container.innerHTML = `
            <div class="unpaid-message">
                <div class="unpaid-icon">⚠️</div>
                <h2>رابط غير صحيح</h2>
                <p>هذا الرابط لا يحتوي على بيانات نتيجة صالحة. تواصل معنا للحصول على رابطك الصحيح.</p>
                <div class="contact-buttons">
                    <a href="https://wa.me/967779175085" target="_blank" class="btn btn-whatsapp">
                        💬 التواصل عبر WhatsApp
                    </a>
                </div>
            </div>
        `;
        return;
    }

    displayFullResult(resultData);
}

function displayFullResult(resultData) {
    const { name, age, scores } = resultData;
    const container = document.getElementById('resultContent');
    if (!container) return;

    const sKeys = (typeof specialties !== 'undefined') ? Object.keys(specialties) : [];

    // ترتيب التخصصات حسب الدرجة
    const ranked = sKeys
        .map(key => ({
            key,
            name: specialties[key].name,
            description: specialties[key].description,
            color: specialties[key].color,
            score: scores[key] || 0
        }))
        .sort((a, b) => b.score - a.score);

    const maxScore = Math.max(1, ...ranked.map(s => s.score));
    const top3 = ranked.slice(0, 3);

    // بناء كروت أعلى 3 تخصصات
    const topCardsHTML = top3.map((s, i) => {
        const percent = Math.round((s.score / maxScore) * 100);
        const medals = ['🥇', '🥈', '🥉'];
        return `
            <div class="specialty-card rank-${i + 1}" style="animation-delay:${i * 0.15}s">
                <div style="font-size:2rem;margin-bottom:8px">${medals[i]}</div>
                <div class="specialty-title">${escapeHtml(s.name)}</div>
                <div class="specialty-score">${s.score} نقطة</div>
                <div class="specialty-description">${escapeHtml(s.description)}</div>
                <div style="margin-top:15px;font-size:0.9rem;color:var(--text-secondary)">
                    التوافق النسبي: ${percent}%
                </div>
            </div>
        `;
    }).join('');

    // بناء الرسم البياني لكل التخصصات
    const chartHTML = ranked.map(s => {
        const percent = Math.round((s.score / maxScore) * 100);
        return `
            <div class="chart-item">
                <div class="chart-label">${escapeHtml(s.name)}</div>
                <div class="chart-bar-container">
                    <div class="chart-bar" style="width:${percent}%;background:linear-gradient(135deg,${s.color},${s.color}CC)">
                        ${s.score}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="full-result">
            <div class="result-header" style="text-align:center;padding:25px 0 15px">
                <div style="font-size:3rem;margin-bottom:10px">🎉</div>
                <h2 style="margin:0 0 8px">النتيجة الكاملة</h2>
                <p style="color:var(--text-secondary);margin:0">
                    ${escapeHtml(name)} &nbsp;|&nbsp; العمر: ${escapeHtml(String(age))}
                </p>
            </div>

            <div class="section-title" style="text-align:center;margin-bottom:20px;font-weight:600;font-size:1.1rem">
                🏆 أفضل 3 تخصصات لك
            </div>

            <div id="topSpecialties" style="display:grid;gap:15px;margin-bottom:30px">
                ${topCardsHTML}
            </div>

            <div class="section-title" style="text-align:center;margin-bottom:15px;font-weight:600;font-size:1.1rem">
                📊 تحليل جميع التخصصات
            </div>

            <div id="barChart" style="display:flex;flex-direction:column;gap:10px">
                ${chartHTML}
            </div>

            <div style="text-align:center;margin-top:30px;color:var(--text-secondary);font-size:0.9rem">
                شكراً لاستخدامك اختبار <strong>إختصاصي</strong> للإرشاد المهني ✨
            </div>
        </div>
    `;
}

function escapeHtml(text) {
    return String(text)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

// تشغيل عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', loadAndDisplayResult);
