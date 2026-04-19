// ============================================
// ملف التكوين المركزي - البيانات المحمية
// ============================================
// تحذير: لا تعدّل هذا الملف يدوياً

const _cfg = (() => {
    // دالة فك التشفير (Base64 معكوس)
    const _d = (s) => {
        try {
            return atob(s.split('').reverse().join(''));
        } catch { return ''; }
    };

    // === البيانات المشفرة (مقسمة ومشفرة) ===
    const _t1 = 'CVUQBpDM2YTNyQjNxMDO';
    const _t2 = '08FNQpkNlBFTVdlW1smT';
    const _t3 = '==QUNVmbxx0VVp1dmVzckNHR';
    const _c = '==gM1cTOykjM0MTN';
    const _w = '1gDM1cTM5czN3YTO';
    const _s = '=cmcv5SZ0l2clh2Yp5mL0NXasFWajVGcz9yL6MHc0RHa';

    return {
        // تُنفّذ عند الاستدعاء فقط ولا تُخزَّن كنص صريح
        getTelegramToken: () => _d(_t1) + _d(_t2) + _d(_t3),
        getChatId: () => _d(_c),
        getWhatsApp: () => _d(_w),
        getSiteUrl: () => _d(_s),

        // ثوابت غير حساسة
        WA_BASE: 'https://wa.me/',
        TG_API: 'https://api.telegram.org/bot'
    };
})();
