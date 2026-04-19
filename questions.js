const specialties = {
    medicine: {
        name: "الطب والعلوم الصحية",
        description: "تخصص مناسب للأشخاص الذين يهتمون بمساعدة الآخرين، لديهم القدرة على تحمل المسؤولية، ويرغبون في العمل في مجال الرعاية الصحية. يشمل الطب البشري، طب الأسنان، الصيدلة، التمريض، والعلاج الطبيعي.",
        color: "#ef4444"
    },
    engineering: {
        name: "الهندسة",
        description: "مثالي للأشخاص الذين يتمتعون بمهارات تحليلية قوية، اهتمام بالرياضيات والفيزياء، ورغبة في حل المشكلات العملية. يشمل الهندسة المدنية، الميكانيكية، الكهربائية، والمعمارية.",
        color: "#f59e0b"
    },
    computer: {
        name: "علوم الحاسوب وتقنية المعلومات",
        description: "مناسب للمهتمين بالتكنولوجيا، البرمجة، والابتكار الرقمي. يتطلب التفكير المنطقي، القدرة على التعلم المستمر، والإبداع في حل المشكلات التقنية.",
        color: "#06b6d4"
    },
    business: {
        name: "إدارة الأعمال",
        description: "للأشخاص ذوي المياز الريادي، المهارات القيادية، والرغبة في فهم كيفية عمل المؤسسات. يشمل المحاسبة، التسويق، إدارة الموارد البشرية، وريادة الأعمال.",
        color: "#8b5cf6"
    },
    education: {
        name: "التعليم",
        description: "لمن يتمتعون بالصبر، القدرة على التواصل، والرغبة في تأثير إيجابي على حياة الآخرين من خلال نقل المعرفة. يشمل تدريس المواد العلمية والأدبية والفنية.",
        color: "#10b981"
    },
    arts: {
        name: "الفنون والتصميم",
        description: "للأشخاص الإبداعيين الذين يتمتعون بالخيال، الحساسية الفنية، والرغبة في التعبير عن أنفسهم من خلال الأعمال الفنية. يشمل التصميم الجرافيكي، الفنون التشكيلية، والموسيقى.",
        color: "#ec4899"
    },
    law: {
        name: "القانون والعلوم السياسية",
        description: "مناسب لمن لديهم مهارات منطقية، القدرة على الجدال والإقناع، والاهتمام بالعدالة والنظم القانونية. يشمل القانون، العلوم السياسية، والعلاقات الدولية.",
        color: "#1e40af"
    },
    media: {
        name: "الإعلام والاتصال",
        description: "للأشخاص الاجتماعيين، المتمتعين بمهارات التواصل، والرغبة في العمل في مجال الإعلام والصحافة. يشمل الصحافة، الإذاعة والتلفزيون، والعلاقات العامة.",
        color: "#f97316"
    },
    science: {
        name: "العلوم الأساسية",
        description: "للمهتمين بالبحث العلمي، الاكتشاف، وفهم القوانين الطبيعية. يشمل الفيزياء، الكيمياء، الأحياء، والرياضيات. مثالي لمن يسعون للعمل في البحث العلمي أو الأكاديمية.",
        color: "#14b8a6"
    },
    agriculture: {
        name: "الزراعة والبيئة",
        description: "للأشخاص الذين يحبون العمل في الطبيعة، المهتمين بالبيئة والاستدامة، والراغبين في تطوير قطاع الزراعة. يشمل الهندسة الزراعية، علوم البيئة، وإدارة الموارد الطبيعية.",
        color: "#65a30d"
    }
};

// الأسئلة - 80 سؤال
const questions = [
    // ====== الأسئلة العامة (1-30) ======
    // المنطق والتحليل
    {
        id: 1,
        text: "عند مواجهة مشكلة معقدة، ما هو أسلوبك المعتاد؟",
        category: "general",
        options: [
            { text: "أحلل المشكلة إلى أجزاء صغيرة وأدرس كل جزء على حدة", scores: { engineering: 3, computer: 2, science: 2 } },
            { text: "أسأل الآخرين عن آرائهم ونصائحهم", scores: { education: 2, media: 2, business: 1 } },
            { text: "أبحث عن حلول إبداعية غير تقليدية", scores: { arts: 3, media: 2, computer: 1 } },
            { text: "أتبع خطوات منهجية واضحة للوصول للحل", scores: { medicine: 2, law: 2, agriculture: 1 } }
        ]
    },
    {
        id: 2,
        text: "كيف تفضل قضاء وقت فراغك؟",
        category: "general",
        options: [
            { text: "قراءة كتب علمية أو حل الألغاز المنطقية", scores: { science: 3, computer: 2, engineering: 2 } },
            { text: "ممارسة هواية فنية أو إبداعية", scores: { arts: 3, media: 2 } },
            { text: "الخروج مع الأصدقاء والتعرف على أشخاص جدد", scores: { business: 2, media: 2, education: 1 } },
            { text: "ممارسة رياضة أو نشاط بدني", scores: { medicine: 2, agriculture: 2 } }
        ]
    },
    {
        id: 3,
        text: "ما نوع الأفلام أو الكتب التي تفضلها؟",
        category: "general",
        options: [
            { text: "أفلام وثائقية علمية أو كتب تعليمية", scores: { science: 3, medicine: 2, agriculture: 2 } },
            { text: "قصص الجرائم والتحقيقات والقانون", scores: { law: 3, media: 1 } },
            { text: "أعمال فنية وإبداعية وخيالية", scores: { arts: 3, media: 2 } },
            { text: "سير ذاتية لرجال الأعمال والقادة", scores: { business: 3, law: 1 } }
        ]
    },
    {
        id: 4,
        text: "في مجموعة عمل، ما الدور الذي تميل إليه عادةً؟",
        category: "general",
        options: [
            { text: "المخطط والمنظم الذي يضع الخطط والاستراتيجيات", scores: { business: 3, engineering: 2, law: 1 } },
            { text: "المبدع الذي يقترح أفكاراً جديدة", scores: { arts: 3, computer: 2, media: 2 } },
            { text: "المحلل الذي يدرس البيانات والأرقام", scores: { science: 3, computer: 3, engineering: 2 } },
            { text: "المتوسط والمحفز الذي يراعي مشاعر الجميع", scores: { education: 3, medicine: 2, business: 1 } }
        ]
    },
    {
        id: 5,
        text: "كيف تتعامل مع الضغوط والمواعيد النهائية؟",
        category: "general",
        options: [
            { text: "أضع خطة زمنية دقيقة وألتزم بها", scores: { engineering: 3, law: 2, business: 2 } },
            { text: "أطلب المساعدة من زملائي", scores: { education: 2, medicine: 2, business: 1 } },
            { text: "أعمل لساعات طويلة حتى أنجز المهمة", scores: { computer: 2, medicine: 3, science: 2 } },
            { text: "أحاول إيجاد طريقة أسرع وأكثر كفاءة", scores: { computer: 3, engineering: 2, business: 2 } }
        ]
    },
    // {
    //     id: 6,
    //     text: "ما الذي يحفزك أكثر في العمل؟",
    //     category: "general",
    //     options: [
    //         { text: "حل مشكلات معقدة وتحديات تقنية", scores: { engineering: 3, computer: 3, science: 2 } },
    //         { text: "مساعدة الآخرين وتحسين حياتهم", scores: { medicine: 3, education: 3, agriculture: 1 } },
    //         { text: "الإبداع والتعبير عن الذات", scores: { arts: 3, media: 2, computer: 1 } },
    //         { text: "النجاح المالي والتقدم الوظيفي", scores: { business: 3, law: 2, media: 1 } }
    //     ]
    // },
    // {
    //     id: 7,
    //     text: "كيف تصف أسلوب تفكيرك؟",
    //     category: "general",
    //     options: [
    //         { text: "منطقي وتحليلي، أحب التعامل مع الأرقام والبيانات", scores: { science: 3, computer: 3, engineering: 2 } },
    //         { text: "إبداعي وخيالي، أرى الصور الكبيرة", scores: { arts: 3, media: 2, computer: 1 } },
    //         { text: "عملي وواقعي، أركز على الحلول الملموسة", scores: { agriculture: 3, engineering: 2, medicine: 1 } },
    //         { text: "اجتماعي وعاطفي، أهتم بمشاعر الآخرين", scores: { education: 3, medicine: 2, business: 1 } }
    //     ]
    // },
    // {
    //     id: 8,
    //     text: "ما هو أكبر إنجاز تفتخر به؟",
    //     category: "general",
    //     options: [
    //         { text: "حل مشكلة تقنية معقدة أو بناء شيء بنفسي", scores: { engineering: 3, computer: 3, science: 1 } },
    //         { text: "مساعدة شخص في أزمة أو تحسين حياته", scores: { medicine: 3, education: 2, law: 1 } },
    //         { text: "إنشاء عمل فني أو مشروع إبداعي", scores: { arts: 3, media: 2 } },
    //         { text: "تحقيق هدف مالي أو إداري كبير", scores: { business: 3, law: 2 } }
    //     ]
    // },
    // {
    //     id: 9,
    //     text: "كيف تفضل التعلم؟",
    //     category: "general",
    //     options: [
    //         { text: "من خلال التجربة العملية والممارسة", scores: { agriculture: 3, engineering: 2, medicine: 2 } },
    //         { text: "من خلال القراءة والبحث النظري", scores: { science: 3, law: 2, computer: 1 } },
    //         { text: "من خلال المناقشة والحوار مع الآخرين", scores: { education: 3, media: 2, business: 2 } },
    //         { text: "من خلال المشاهدة والتقليد", scores: { arts: 3, media: 2 } }
    //     ]
    // },
    // {
    //     id: 10,
    //     text: "ما هي بيئة العمل المثالية بالنسبة لك؟",
    //     category: "general",
    //     options: [
    //         { text: "مكتب منظم مع أدوات تقنية حديثة", scores: { computer: 3, engineering: 2, business: 1 } },
    //         { text: "مختبر أو مكان للبحث والتجربة", scores: { science: 3, medicine: 2, agriculture: 1 } },
    //         { text: "مكان مفتوح وأخضر في الطبيعة", scores: { agriculture: 3, medicine: 1 } },
    //         { text: "استوديو أو مكان للإبداع والفن", scores: { arts: 3, media: 2 } }
    //     ]
    // },
    // {
    //     id: 11,
    //     text: "كيف تتعامل مع النقد؟",
    //     category: "general",
    //     options: [
    //         { text: "أحلله منطقياً وأستخلص الدروس المفيدة", scores: { law: 3, business: 2, science: 2 } },
    //         { text: "أشعر بالحزن لكني أحاول التحسن", scores: { arts: 2, education: 2, medicine: 1 } },
    //         { text: "أدافع عن رأيي وأشرح وجهة نظري", scores: { law: 3, media: 2, business: 2 } },
    //         { text: "أطلب المزيد من التوضيح لتحسين أدائي", scores: { engineering: 3, computer: 2, education: 2 } }
    //     ]
    // },
    // {
    //     id: 12,
    //     text: "ما هو أسلوبك في اتخاذ القرارات؟",
    //     category: "general",
    //     options: [
    //         { text: "أعتمد على البيانات والحقائق الموضوعية", scores: { science: 3, engineering: 3, computer: 2 } },
    //         { text: "أستشير أشخاصاً أثق بهم ثم أقرر", scores: { business: 2, education: 2, medicine: 1 } },
    //         { text: "أتبع حدسي وقرائتي للموقف", scores: { arts: 3, media: 2, law: 1 } },
    //         { text: "أحلل المخاطر والفوائد بعناية", scores: { business: 3, law: 2, engineering: 2 } }
    //     ]
    // },
    // {
    //     id: 13,
    //     text: "ما الذي تبحث عنه في وظيفتك المستقبلية؟",
    //     category: "general",
    //     options: [
    //         { text: "الاستقرار الوظيفي والأمان المهني", scores: { medicine: 3, education: 2, law: 2 } },
    //         { text: "التحديات المستمرة وتطوير المهارات", scores: { computer: 3, engineering: 2, science: 2 } },
    //         { text: "الحرية والمرونة في العمل", scores: { arts: 3, media: 2, agriculture: 1 } },
    //         { text: "القدرة على التأثير في المجتمع", scores: { education: 3, medicine: 2, law: 2 } }
    //     ]
    // },
    // {
    //     id: 14,
    //     text: "كيف تفضل التواصل مع الآخرين؟",
    //     category: "general",
    //     options: [
    //         { text: "من خلال الرسائل والبريد الإلكتروني", scores: { computer: 3, science: 2, engineering: 1 } },
    //         { text: "من خلال الاجتماعات والمناقشات المباشرة", scores: { business: 3, media: 2, education: 2 } },
    //         { text: "من خلال العروض التقديمية والخطابات", scores: { media: 3, law: 2, education: 1 } },
    //         { text: "أفضل العمل بشكل فردي", scores: { arts: 2, computer: 2, science: 2 } }
    //     ]
    // },
    // {
    //     id: 15,
    //     text: "ما هو مستوى راحتك مع الرياضيات؟",
    //     category: "general",
    //     options: [
    //         { text: "أحب الرياضيات وأستمتع بحل المسائل المعقدة", scores: { engineering: 3, computer: 3, science: 2 } },
    //         { text: "أتعامل معها عند الضرورة", scores: { business: 2, medicine: 2, agriculture: 1 } },
    //         { text: "أفضل المواد الأدبية والفنية", scores: { arts: 3, law: 2, media: 2 } },
    //         { text: "أستخدمها في سياقات عملية", scores: { agriculture: 2, engineering: 2, medicine: 1 } }
    //     ]
    // },
    // {
    //     id: 16,
    //     text: "كيف تتعامل مع المعلومات الجديدة؟",
    //     category: "general",
    //     options: [
    //         { text: "أبحث عن المصادر وأتحقق من صحة المعلومات", scores: { science: 3, law: 2, medicine: 2 } },
    //         { text: "أجربها عملياً لأرى النتائج", scores: { engineering: 3, agriculture: 2, computer: 1 } },
    //         { text: "أناقشها مع الآخرين لفهمها بعمق", scores: { education: 3, business: 2, media: 2 } },
    //         { text: "أربطها بأفكاري وإبداعاتي", scores: { arts: 3, computer: 2, media: 1 } }
    //     ]
    // },
    // {
    //     id: 17,
    //     text: "ما هي قدرتك على العمل تحت الضغط؟",
    //     category: "general",
    //     options: [
    //         { text: "أزدهر تحت الضغط وأعمل بكفاءة عالية", scores: { medicine: 3, media: 2, business: 2 } },
    //         { text: "أحتاج للتخطيط الجيد للتعامل مع الضغط", scores: { engineering: 3, law: 2, computer: 1 } },
    //         { text: "أفضل العمل بوتيرة منتظمة", scores: { education: 2, agriculture: 2, science: 1 } },
    //         { text: "أعتمد على الفريق لتوزيع الضغط", scores: { business: 2, education: 2, medicine: 1 } }
    //     ]
    // },
    // {
    //     id: 18,
    //     text: "ما الذي يميزك عن الآخرين؟",
    //     category: "general",
    //     options: [
    //         { text: "قدرتي على التفكير التحليلي العميق", scores: { science: 3, computer: 2, engineering: 2 } },
    //         { text: "إبداعي وخيالي الواسع", scores: { arts: 3, media: 2, computer: 1 } },
    //         { text: "مهاراتي الاجتماعية والتواصلية", scores: { business: 3, media: 2, education: 2 } },
    //         { text: "اهتمامي بالتفاصيل والدقة", scores: { medicine: 3, law: 2, engineering: 2 } }
    //     ]
    // },
    // {
    //     id: 19,
    //     text: "كيف ترى مستقبلك المهني؟",
    //     category: "general",
    //     options: [
    //         { text: "باحث أو عالم في مجال متخصص", scores: { science: 3, medicine: 2, agriculture: 1 } },
    //         { text: "رائد أعمال أو مدير تنفيذي", scores: { business: 3, law: 1, computer: 1 } },
    //         { text: "خبير تقني أو مهندس", scores: { engineering: 3, computer: 3, science: 1 } },
    //         { text: "معلم أو مرشد للآخرين", scores: { education: 3, medicine: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 20,
    //     text: "ما هو موقفك من القواعد والأنظمة؟",
    //     category: "general",
    //     options: [
    //         { text: "أحترمها وأرى أنها ضرورية للتنظيم", scores: { law: 3, business: 2, medicine: 2 } },
    //         { text: "أتبعها لكني أبحث عن ثغرات للتحسين", scores: { engineering: 3, computer: 2, science: 1 } },
    //         { text: "أرى أنها تقيد الإبداع أحياناً", scores: { arts: 3, media: 2, computer: 1 } },
    //         { text: "أحاول فهم الغرض منها ثم أطبقها", scores: { education: 2, medicine: 2, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 21,
    //     text: "كيف تفضل حل النزاعات؟",
    //     category: "general",
    //     options: [
    //         { text: "من خلال النقاش المنطقي والحوار", scores: { law: 3, education: 2, business: 2 } },
    //         { text: "من خلال إيجاد حل وسط يرضي الجميع", scores: { business: 3, education: 3, medicine: 1 } },
    //         { text: "من خلال التحكيم الموضوعي", scores: { law: 3, engineering: 2, science: 1 } },
    //         { text: "تجنب النزاعات قدر الإمكان", scores: { arts: 2, science: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 22,
    //     text: "ما هو أسلوبك في إدارة الوقت؟",
    //     category: "general",
    //     options: [
    //         { text: "أضع جدولاً دقيقاً وألتزم به", scores: { engineering: 3, law: 2, business: 2 } },
    //         { text: "أركز على الأولويات وأؤجل الأقل أهمية", scores: { business: 3, computer: 2, medicine: 1 } },
    //         { text: "أعمل حسب المزاج والإلهام", scores: { arts: 3, media: 2 } },
    //         { text: "أستعين بتطبيقات وأدوات تنظيمية", scores: { computer: 3, engineering: 2, science: 1 } }
    //     ]
    // },
    // {
    //     id: 23,
    //     text: "ما الذي يجعلك تشعر بالإنجاز؟",
    //     category: "general",
    //     options: [
    //         { text: "إكمال مشروع معقد بنجاح", scores: { engineering: 3, computer: 3, science: 2 } },
    //         { text: "رؤية تأثير إيجابي على حياة الآخرين", scores: { medicine: 3, education: 3, law: 1 } },
    //         { text: "إنشاء شيء جميل أو مبتكر", scores: { arts: 3, media: 2, computer: 1 } },
    //         { text: "تحقيق أهداف مالية أو مهنية", scores: { business: 3, law: 2 } }
    //     ]
    // },
    // {
    //     id: 24,
    //     text: "كيف تتعامل مع التكنولوجيا الجديدة؟",
    //     category: "general",
    //     options: [
    //         { text: "أتعلمها بسرعة وأستمتع باستخدامها", scores: { computer: 3, engineering: 2, media: 2 } },
    //         { text: "أتعلمها عند الحاجة فقط", scores: { business: 2, law: 2, education: 1 } },
    //         { text: "أفضل التقنيات البسيطة والمباشرة", scores: { agriculture: 2, education: 2, arts: 1 } },
    //         { text: "أحب فهم آلية عملها من الداخل", scores: { engineering: 3, computer: 3, science: 2 } }
    //     ]
    // },
    // {
    //     id: 25,
    //     text: "ما هو موقفك من العمل الجماعي؟",
    //     category: "general",
    //     options: [
    //         { text: "أفضل العمل الفردي لأنه أكثر إنتاجية", scores: { arts: 2, computer: 2, science: 2 } },
    //         { text: "أحب العمل الجماعي والتعاون مع الآخرين", scores: { business: 3, education: 3, medicine: 2 } },
    //         { text: "أعمل بشكل فردي لكني أتواصل عند الحاجة", scores: { engineering: 2, law: 2, computer: 1 } },
    //         { text: "أحب قيادة الفريق وتنسيق العمل", scores: { business: 3, law: 2, media: 1 } }
    //     ]
    // },
    // {
    //     id: 26,
    //     text: "ما هي طريقتك في التعامل مع الأخطاء؟",
    //     category: "general",
    //     options: [
    //         { text: "أحلل الخطأ لأتعلم منه وأتجنب تكراره", scores: { science: 3, engineering: 3, computer: 2 } },
    //         { text: "أعتذر وأصلح الضرر فوراً", scores: { medicine: 3, education: 2, business: 1 } },
    //         { text: "أبحث عن حلول بديلة سريعة", scores: { computer: 3, media: 2, arts: 1 } },
    //         { text: "أستشير الخبراء لتجنب الأخطاء مستقبلاً", scores: { law: 2, medicine: 2, engineering: 1 } }
    //     ]
    // },
    // {
    //     id: 27,
    //     text: "ما الذي تبحث عنه في علاقاتك المهنية؟",
    //     category: "general",
    //     options: [
    //         { text: "الاحترام المتبادل والتقدير المهني", scores: { law: 3, medicine: 2, business: 2 } },
    //         { text: "التعاون والعمل المشترك", scores: { education: 3, business: 2, media: 2 } },
    //         { text: "الاستقلالية والحرية في العمل", scores: { arts: 3, computer: 2, agriculture: 1 } },
    //         { text: "التعلم المستمر وتبادل الخبرات", scores: { science: 3, medicine: 2, computer: 2 } }
    //     ]
    // },
    // {
    //     id: 28,
    //     text: "كيف ت��ى أهمية التعلم المستمر؟",
    //     category: "general",
    //     options: [
    //         { text: "ضرورة حتمية للبقاء في المنافسة", scores: { business: 3, computer: 3, law: 2 } },
    //         { text: "مهم لكن بشكل معتدل", scores: { education: 2, medicine: 2, engineering: 1 } },
    //         { text: "أستمتع بالتعلم المستمر والاكتشاف", scores: { science: 3, computer: 2, arts: 1 } },
    //         { text: "أركز على تعلم ما يلزم فقط", scores: { agriculture: 2, arts: 1, business: 1 } }
    //     ]
    // },
    // {
    //     id: 29,
    //     text: "ما هو أسلوبك في التعامل مع التفاصيل؟",
    //     category: "general",
    //     options: [
    //         { text: "أهتم بالتفاصيل الدقيقة جداً", scores: { medicine: 3, law: 3, engineering: 2 } },
    //         { text: "أركز على الصورة الكبيرة", scores: { business: 3, arts: 2, media: 2 } },
    //         { text: "أوازن بين التفاصيل والشكل العام", scores: { engineering: 2, computer: 2, education: 1 } },
    //         { text: "أهتم بالتفاصيل الجمالية والإبداعية", scores: { arts: 3, media: 2, computer: 1 } }
    //     ]
    // },
    // {
    //     id: 30,
    //     text: "ما الذي يمثل لك التحدي الأكبر؟",
    //     category: "general",
    //     options: [
    //         { text: "حل مشكلة تقنية معقدة", scores: { engineering: 3, computer: 3, science: 2 } },
    //         { text: "إقناع الآخرين بفكرة جديدة", scores: { business: 3, media: 2, law: 2 } },
    //         { text: "التعامل مع موقف إنساني صعب", scores: { medicine: 3, education: 2, law: 1 } },
    //         { text: "إنشاء عمل فني مميز", scores: { arts: 3, media: 2, computer: 1 } }
    //     ]
    // },

    // // ====== الأسئلة التخصصية (31-80) ======
    
    // // الطب (5 أسئلة)
    // {
    //     id: 31,
    //     text: "كيف تشعر عندما يسألك شخص عن صحته؟",
    //     category: "medicine",
    //     options: [
    //         { text: "أشعر بالرغبة في مساعدته وإعطائه نصائح مفيدة", scores: { medicine: 4 } },
    //         { text: "أحيله لأهل الاختصاص", scores: { law: 2, business: 1 } },
    //         { text: "أستمع إليه باهتمام", scores: { education: 2 } },
    //         { text: "أبحث عن معلومات تهمنا جميعاً", scores: { science: 2 } }
    //     ]
    // },
    // {
    //     id: 32,
    //     text: "ما رأيك في العمل في المستشفيات؟",
    //     category: "medicine",
    //     options: [
    //         { text: "أراه بيئة عمل مثيرة ومهمة", scores: { medicine: 4 } },
    //         { text: "أفضل العمل في مختبر", scores: { science: 3 } },
    //         { text: "أجدها بيئة صعبة", scores: { arts: 1, computer: 1 } },
    //         { text: "أرى أنها تحتاج تحسين إداري", scores: { business: 2 } }
    //     ]
    // },
    // {
    //     id: 33,
    //     text: "كيف تتعامل مع مشاهدة الدم أو الجروح؟",
    //     category: "medicine",
    //     options: [
    //         { text: "لا أتأثر وأستطيع التعامل معها بهدوء", scores: { medicine: 4, agriculture: 1 } },
    //         { text: "أشعر بعدم الراحة لكني أتعامل", scores: { science: 2, engineering: 1 } },
    //         { text: "أفضل تجنب مثل هذه المواقف", scores: { arts: 2, computer: 2 } },
    //         { text: "أساعد في تقديم الإسعافات الأولية", scores: { medicine: 3, education: 1 } }
    //     ]
    // },
    // {
    //     id: 34,
    //     text: "ما اهتمامك بعلم الأحياء والجسم البشري؟",
    //     category: "medicine",
    //     options: [
    //         { text: "أهتم بهما كثيراً وأقرأ عنهما", scores: { medicine: 4, science: 3 } },
    //         { text: "أهتم بشكل معتدل", scores: { agriculture: 2, science: 2 } },
    //         { text: "أفضل العلوم الأخرى", scores: { engineering: 2, computer: 2 } },
    //         { text: "لا أهتم كثيراً", scores: { arts: 2, law: 1 } }
    //     ]
    // },
    // {
    //     id: 35,
    //     text: "هل تستطيع العمل في نوبات ليلية أو ساعات غير منتظمة؟",
    //     category: "medicine",
    //     options: [
    //         { text: "نعم، أستطيع التكيف مع أي نظام عمل", scores: { medicine: 4, media: 2 } },
    //         { text: "أفضل ساعات عمل منتظمة", scores: { education: 2, business: 2 } },
    //         { text: "أستطيع لكن بصعوبة", scores: { engineering: 1, computer: 1 } },
    //         { text: "أفضل العمل النهاري فقط", scores: { agriculture: 2, arts: 1 } }
    //     ]
    // },

    // // الهندسة (5 أسئلة)
    // {
    //     id: 36,
    //     text: "ما رأيك في بناء الجسور والمباني؟",
    //     category: "engineering",
    //     options: [
    //         { text: "أراه شيئاً مذهلاً وأحب فهم آلية بنائه", scores: { engineering: 4 } },
    //         { text: "أقدر جمال التصميم المعماري", scores: { arts: 3, engineering: 2 } },
    //         { text: "أهتم بالجانب الاقتصادي أكثر", scores: { business: 3 } },
    //         { text: "أراه ضرورة عملية", scores: { agriculture: 2 } }
    //     ]
    // },
    // {
    //     id: 37,
    //     text: "كيف تشعر عندما ترى آلة معقدة؟",
    //     category: "engineering",
    //     options: [
    //         { text: "أشعر بالفضول لفهم كيفية عملها", scores: { engineering: 4, computer: 2 } },
    //         { text: "أهتم باستخدامها فقط", scores: { business: 2, medicine: 1 } },
    //         { text: "أبحث عن طريقة لتحسينها", scores: { engineering: 3, computer: 2 } },
    //         { text: "لا أهتم كثيراً", scores: { arts: 2, law: 1 } }
    //     ]
    // },
    // {
    //     id: 38,
    //     text: "ما اهتمامك بالفيزياء والرياضيات؟",
    //     category: "engineering",
    //     options: [
    //         { text: "أستمتع بهما كثيراً", scores: { engineering: 4, science: 3, computer: 2 } },
    //         { text: "أتعامل معهما عند الضرورة", scores: { medicine: 2, agriculture: 2 } },
    //         { text: "أفضل المواد الأدبية", scores: { arts: 3, law: 2 } },
    //         { text: "أجدها صعبة نوعاً ما", scores: { education: 1, media: 1 } }
    //     ]
    // },
    // {
    //     id: 39,
    //     text: "هل تستمتع بأعمال الصيانة والإصلاح؟",
    //     category: "engineering",
    //     options: [
    //         { text: "نعم، أحب إصلاح الأشياء بنفسي", scores: { engineering: 4, agriculture: 2 } },
    //         { text: "أحاول أحياناً", scores: { computer: 2, science: 1 } },
    //         { text: "أفضل الاستعانة بأخصائي", scores: { business: 2, medicine: 1 } },
    //         { text: "لا أهتم بهذه الأمور", scores: { arts: 2, law: 1 } }
    //     ]
    // },
    // {
    //     id: 40,
    //     text: "ما رأيك في مشاريع البنية التحتية الكبرى؟",
    //     category: "engineering",
    //     options: [
    //         { text: "أراها إنجازات حضارية مهمة", scores: { engineering: 4, business: 2 } },
    //         { text: "��هتم بالتأثير البيئي لها", scores: { agriculture: 3, science: 2 } },
    //         { text: "أراها مكلفة مالياً", scores: { business: 3, law: 1 } },
    //         { text: "لا أهتم كثيراً", scores: { arts: 2, computer: 1 } }
    //     ]
    // },

    // // علوم الحاسوب (5 أسئلة)
    // {
    //     id: 41,
    //     text: "ما رأيك في البرمجة وتطوير التطبيقات؟",
    //     category: "computer",
    //     options: [
    //         { text: "أحب البرمجة وأستمتع بها", scores: { computer: 4 } },
    //         { text: "أستخدم التطبيقات لكني لا أبرمج", scores: { business: 2, media: 2 } },
    //         { text: "أحب فكرة إنشاء تطبيقات مفيدة", scores: { computer: 3, engineering: 1 } },
    //         { text: "أجدها معقدة", scores: { arts: 2, education: 1 } }
    //     ]
    // },
    // {
    //     id: 42,
    //     text: "كيف تقضي وقتك على الإنترنت؟",
    //     category: "computer",
    //     options: [
    //         { text: "أتعلم تقنيات جديدة وأبرمج", scores: { computer: 4, engineering: 2 } },
    //         { text: "أتواصل اجتماعياً", scores: { media: 3, business: 2 } },
    //         { text: "أبحث عن معلومات ومعلومات", scores: { science: 3, medicine: 2 } },
    //         { text: "أستمتع بالمحتوى الفني", scores: { arts: 3, media: 2 } }
    //     ]
    // },
    // {
    //     id: 43,
    //     text: "ما اهتمامك بالذكاء الاصطناعي والتقنيات الحديثة؟",
    //     category: "computer",
    //     options: [
    //         { text: "أهتم كثيراً وأتابع التطورات", scores: { computer: 4, science: 2 } },
    //         { text: "أهتم بشكل معتدل", scores: { engineering: 2, business: 2 } },
    //         { text: "أخشى من تأثيراتها السلبية", scores: { law: 2, education: 1 } },
    //         { text: "لا أهتم كثيراً", scores: { agriculture: 2, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 44,
    //     text: "هل تستمتع بحل المشكلات التقنية؟",
    //     category: "computer",
    //     options: [
    //         { text: "نعم، أشعر بالإنجاز عند حلها", scores: { computer: 4, engineering: 3 } },
    //         { text: "أحاول حلها بنفسي أولاً", scores: { science: 2, engineering: 2 } },
    //         { text: "أطلب المساعدة فوراً", scores: { education: 2, business: 1 } },
    //         { text: "أتجنب المشكلات التقنية", scores: { arts: 2, law: 1 } }
    //     ]
    // },
    // {
    //     id: 45,
    //     text: "ما رأيك في العمل عن بُعد (Remote Work)؟",
    //     category: "computer",
    //     options: [
    //         { text: "أفضله وأراه المستقبل", scores: { computer: 4, media: 2 } },
    //         { text: "أراه خياراً جيداً", scores: { business: 2, arts: 1 } },
    //         { text: "أفضل العمل في مكتب", scores: { medicine: 2, education: 2 } },
    //         { text: "أحب العمل الميداني", scores: { agriculture: 3, engineering: 2 } }
    //     ]
    // },

    // // إدارة الأعمال (5 أسئلة)
    // {
    //     id: 46,
    //     text: "هل تستمتع بمتابعة أخبار الاقتصاد والأسواق؟",
    //     category: "business",
    //     options: [
    //         { text: "نعم، أتابعها يومياً", scores: { business: 4 } },
    //         { text: "أتابعها أحياناً", scores: { law: 2, computer: 1 } },
    //         { text: "أهتم بأخبار قطاعي فقط", scores: { medicine: 1, engineering: 1 } },
    //         { text: "لا أهتم كثيراً", scores: { arts: 2, education: 1 } }
    //     ]
    // },
    // {
    //     id: 47,
    //     text: "ما رأيك في إدارة مشروع تجاري؟",
    //     category: "business",
    //     options: [
    //         { text: "أحلم بإدارة عملي الخاص", scores: { business: 4 } },
    //         { text: "أراه تحدياً مثيراً", scores: { business: 3, law: 2 } },
    //         { text: "أفضل العمل كموظف", scores: { medicine: 2, education: 2 } },
    //         { text: "أجد الإدارة مرهقة", scores: { arts: 2, science: 1 } }
    //     ]
    // },
    // {
    //     id: 48,
    //     text: "كيف تتعامل مع المال والميزانيات؟",
    //     category: "business",
    //     options: [
    //         { text: "أخطط مالياً بعناية", scores: { business: 4, law: 2 } },
    //         { text: "أدير أموري بشكل معتدل", scores: { education: 2, engineering: 1 } },
    //         { text: "أستعين بخبراء مالية", scores: { law: 2, medicine: 1 } },
    //         { text: "لا أفكر في المال كثيراً", scores: { arts: 3, science: 1 } }
    //     ]
    // },
    // {
    //     id: 49,
    //     text: "هل تستمتع بالتفاوض والمبيعات؟",
    //     category: "business",
    //     options: [
    //         { text: "نعم، أحب إقناع الآخرين", scores: { business: 4, media: 3 } },
    //         { text: "أستطيع التفاوض عند الحاجة", scores: { law: 3, engineering: 1 } },
    //         { text: "أفضل شراء ما أحتاج دون تفاوض", scores: { computer: 2, medicine: 1 } },
    //         { text: "أشعر بعدم الارتياح في المفاوضات", scores: { science: 2, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 50,
    //     text: "ما رأيك في قيادة فريق عمل؟",
    //     category: "business",
    //     options: [
    //         { text: "أحب القيادة وإلهام الآخرين", scores: { business: 4, education: 2 } },
    //         { text: "أستطيع القيادة عند الضرورة", scores: { law: 2, engineering: 2 } },
    //         { text: "أفضل العمل ضمن فريق", scores: { medicine: 2, computer: 2 } },
    //         { text: "أفضل العمل الفردي", scores: { arts: 3, science: 2 } }
    //     ]
    // },


    // // التعليم (5 أسئلة)
    // {
    //     id: 51,
    //     text: "هل تستمتع بشرح المواد لزملائك؟",
    //     category: "education",
    //     options: [
    //         { text: "نعم، أحب أن أشرح للآخرين", scores: { education: 4, media: 1 } },
    //         { text: "أشرح فقط عند الحاجة", scores: { business: 2, law: 1 } },
    //         { text: "أفضل أن أستمع أولاً", scores: { science: 2, arts: 1 } },
    //         { text: "لا أحب الشرح كثيراً", scores: { computer: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 52,
    //     text: "كيف تتعامل مع من يتعلم ببطء؟",
    //     category: "education",
    //     options: [
    //         { text: "أتحلى بالصبر وأكرر الشرح بطرق مختلفة", scores: { education: 4, medicine: 2 } },
    //         { text: "أحاول مساعدته قدر الإمكان", scores: { medicine: 3, business: 1 } },
    //         { text: "أشعر بالإحباط أحياناً", scores: { engineering: 1, computer: 1 } },
    //         { text: "أفضل أن يتعلم وحده", scores: { science: 1, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 53,
    //     text: "ما اهتمامك بطرق التدريس والتربية؟",
    //     category: "education",
    //     options: [
    //         { text: "أهتم بها كثيراً وأحب تطويرها", scores: { education: 4, law: 1 } },
    //         { text: "أهتم بها بشكل عام", scores: { medicine: 2, business: 1 } },
    //         { text: "أفضل مجالات أخرى", scores: { computer: 2, engineering: 1 } },
    //         { text: "لا أتابعها كثيراً", scores: { arts: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 54,
    //     text: "كيف تشعر عند التعامل مع الأطفال أو المراهقين؟",
    //     category: "education",
    //     options: [
    //         { text: "أشعر بالراحة وأستمتع بالتعامل معهم", scores: { education: 4, medicine: 2 } },
    //         { text: "أتعامل معهم بشكل طبيعي", scores: { business: 2, law: 1 } },
    //         { text: "أحتاج إلى وقت للتأقلم", scores: { science: 1, engineering: 1 } },
    //         { text: "أفضل التعامل مع البالغين", scores: { computer: 1, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 55,
    //     text: "هل تفكر في العمل في مدرسة أو مركز تدريب؟",
    //     category: "education",
    //     options: [
    //         { text: "نعم، أرى نفسي في هذا المجال", scores: { education: 4 } },
    //         { text: "ربما في المستقبل", scores: { business: 2, media: 1 } },
    //         { text: "أفضل العمل الأكاديمي", scores: { science: 3 } },
    //         { text: "لا أظن ذلك", scores: { engineering: 1, computer: 1 } }
    //     ]
    // },

    // // الفنون والتصميم (5 أسئلة)
    // {
    //     id: 56,
    //     text: "ما مدى استمتاعك بالرسم أو التصميم؟",
    //     category: "arts",
    //     options: [
    //         { text: "أستمتع به كثيراً وأمارسه بانتظام", scores: { arts: 4 } },
    //         { text: "أحبه كهواية بسيطة", scores: { media: 2, computer: 1 } },
    //         { text: "أقدره لكني لا أمارسه", scores: { business: 1, education: 1 } },
    //         { text: "لا أهتم به كثيراً", scores: { science: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 57,
    //     text: "كيف تصف خيالك وإبداعك؟",
    //     category: "arts",
    //     options: [
    //         { text: "واسع جداً وأبتكر أفكاراً بسهولة", scores: { arts: 4, media: 2 } },
    //         { text: "جيد إلى حد ما", scores: { computer: 2, education: 1 } },
    //         { text: "عملي أكثر من كوني خيالياً", scores: { engineering: 2, business: 1 } },
    //         { text: "أعتمد على الواقع المباشر", scores: { science: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 58,
    //     text: "هل تستمتع بالموسيقى أو المسرح أو الفنون الأدائية؟",
    //     category: "arts",
    //     options: [
    //         { text: "نعم، أحبها وأتابعها كثيراً", scores: { arts: 4, media: 2 } },
    //         { text: "أستمتع بها أحياناً", scores: { education: 2, business: 1 } },
    //         { text: "أفضل الفنون البصرية فقط", scores: { arts: 3 } },
    //         { text: "لا أهتم كثيراً", scores: { science: 1, engineering: 1 } }
    //     ]
    // },
    // {
    //     id: 59,
    //     text: "ما رأيك في الجماليات والديكور والألوان؟",
    //     category: "arts",
    //     options: [
    //         { text: "أهتم بها جداً وألاحظ التفاصيل فوراً", scores: { arts: 4, media: 2 } },
    //         { text: "أهتم بها بشكل معتدل", scores: { education: 2, business: 1 } },
    //         { text: "أركز على الوظيفة أكثر من الشكل", scores: { engineering: 2, science: 1 } },
    //         { text: "لا ألاحظها كثيراً", scores: { law: 1, computer: 1 } }
    //     ]
    // },
    // {
    //     id: 60,
    //     text: "كيف تتعامل مع النقد الفني أو الإبداعي؟",
    //     category: "arts",
    //     options: [
    //         { text: "أستفيد منه لتحسين عملي", scores: { arts: 4, media: 2 } },
    //         { text: "أتقبله إذا كان بنّاءً", scores: { education: 2, business: 1 } },
    //         { text: "أشعر بالحساسية أحياناً", scores: { arts: 2 } },
    //         { text: "لا يهمني كثيراً", scores: { science: 1, engineering: 1 } }
    //     ]
    // },

    // // القانون والعلوم السياسية (5 أسئلة)
    // {
    //     id: 61,
    //     text: "ما مدى اهتمامك بالعدالة والحقوق؟",
    //     category: "law",
    //     options: [
    //         { text: "اهتمام كبير جداً", scores: { law: 4 } },
    //         { text: "أهتم بها عندما تؤثر علي أو على الآخرين", scores: { education: 2, medicine: 1 } },
    //         { text: "أتابعها بشكل عام", scores: { business: 2, media: 1 } },
    //         { text: "لا أفكر بها كثيراً", scores: { arts: 1, computer: 1 } }
    //     ]
    // },
    // {
    //     id: 62,
    //     text: "كيف تشعر تجاه قراءة القوانين والعقود؟",
    //     category: "law",
    //     options: [
    //         { text: "أحب التدقيق فيها وفهمها", scores: { law: 4, business: 2 } },
    //         { text: "أتحمل قراءتها عند الحاجة", scores: { engineering: 1, science: 1 } },
    //         { text: "أفضل أن يراجعها مختص", scores: { medicine: 1, education: 1 } },
    //         { text: "أشعر بالملل منها", scores: { arts: 1, media: 1 } }
    //     ]
    // },
    // {
    //     id: 63,
    //     text: "هل تستمتع بالنقاش والمناظرة؟",
    //     category: "law",
    //     options: [
    //         { text: "نعم، وأحب الدفاع عن رأيي بالحجة", scores: { law: 4, media: 2 } },
    //         { text: "أستمتع إذا كان النقاش محترماً", scores: { education: 2, business: 1 } },
    //         { text: "أفضل الاستماع أكثر من النقاش", scores: { science: 1, computer: 1 } },
    //         { text: "أتجنب النقاشات الطويلة", scores: { arts: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 64,
    //     text: "ما اهتمامك بالشؤون السياسية أو الاجتماعية؟",
    //     category: "law",
    //     options: [
    //         { text: "أتابعها وأحللها بعمق", scores: { law: 4, media: 2 } },
    //         { text: "أتابع الأخبار الأساسية", scores: { business: 2, education: 1 } },
    //         { text: "أهتم ببعض القضايا فقط", scores: { science: 1, medicine: 1 } },
    //         { text: "لا أتابعها كثيراً", scores: { computer: 1, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 65,
    //     text: "كيف تتعامل مع الأدلة والتفاصيل الصغيرة؟",
    //     category: "law",
    //     options: [
    //         { text: "أدقق فيها بشدة لأنها مهمة جداً", scores: { law: 4, science: 2 } },
    //         { text: "أتحقق منها إذا كانت مؤثرة", scores: { business: 2, engineering: 1 } },
    //         { text: "أعتمد على الانطباع العام أحياناً", scores: { media: 1, arts: 1 } },
    //         { text: "لا أحب هذا النوع من التدقيق", scores: { education: 1, computer: 1 } }
    //     ]
    // },

    // // الإعلام والاتصال (5 أسئلة)
    // {
    //     id: 66,
    //     text: "هل تستمتع بالتحدث أمام الناس؟",
    //     category: "media",
    //     options: [
    //         { text: "نعم، وأشعر ب��لحماس", scores: { media: 4, education: 2 } },
    //         { text: "أستطيع ذلك عند الحاجة", scores: { business: 2, law: 2 } },
    //         { text: "أفضل الكتابة على الحديث", scores: { computer: 2, arts: 1 } },
    //         { text: "أشعر بالتوتر الشديد", scores: { science: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 67,
    //     text: "ما مدى استمتاعك بالكتابة أو صناعة المحتوى؟",
    //     category: "media",
    //     options: [
    //         { text: "أستمتع بها جداً", scores: { media: 4, arts: 2 } },
    //         { text: "أمارسها أحياناً", scores: { business: 1, education: 1 } },
    //         { text: "أفضل القراءة فقط", scores: { science: 2, law: 1 } },
    //         { text: "لا أهتم بها", scores: { engineering: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 68,
    //     text: "كيف ترى التواصل عبر وسائل التواصل الاجتماعي؟",
    //     category: "media",
    //     options: [
    //         { text: "أراه مساحة مهمة للتأثير والتواصل", scores: { media: 4, business: 2 } },
    //         { text: "أستخدمه بشكل معتدل", scores: { education: 1, computer: 1 } },
    //         { text: "أستخدمه فقط للضرورة", scores: { law: 1, science: 1 } },
    //         { text: "أفضل التواصل المباشر", scores: { medicine: 1, arts: 1 } }
    //     ]
    // },
    // {
    //     id: 69,
    //     text: "هل تشعر بالراحة أمام الكاميرا أو الميكروفون؟",
    //     category: "media",
    //     options: [
    //         { text: "نعم، وأحب الظهور والتقديم", scores: { media: 4, business: 2 } },
    //         { text: "أتعامل معه عند الحاجة", scores: { education: 2, law: 1 } },
    //         { text: "أحتاج إلى تدريب أولاً", scores: { engineering: 1, science: 1 } },
    //         { text: "لا أفضل ذلك", scores: { arts: 1, agriculture: 1 } }
    //     ]
    // },
    // {
    //     id: 70,
    //     text: "ما رأيك في الحملات الإعلانية والعلاقات العامة؟",
    //     category: "media",
    //     options: [
    //         { text: "أراها مجالاً ممتعاً ومؤثراً", scores: { media: 4, business: 2 } },
    //         { text: "أهتم بها من جانب الجمهور فقط", scores: { law: 1, education: 1 } },
    //         { text: "أعجبني بعض جوانبها", scores: { arts: 2, computer: 1 } },
    //         { text: "لا أهتم بها", scores: { science: 1, agriculture: 1 } }
    //     ]
    // },

    // // العلوم الأساسية (5 أسئلة)
    // {
    //     id: 71,
    //     text: "هل تستمتع بالتجارب المخبرية؟",
    //     category: "science",
    //     options: [
    //         { text: "نعم جداً، أستمتع بالتجربة والاكتشاف", scores: { science: 4, medicine: 2 } },
    //         { text: "أحبها إذا كانت منظمة", scores: { engineering: 2, computer: 1 } },
    //         { text: "أفضل القراءة عنها فقط", scores: { law: 1, education: 1 } },
    //         { text: "لا أحب العمل المخبري", scores: { arts: 1, business: 1 } }
    //     ]
    // },
    // {
    //     id: 72,
    //     text: "ما مدى فضولك حول الظواهر الطبيعية؟",
    //     category: "science",
    //     options: [
    //         { text: "فضول كبير جداً", scores: { science: 4, agriculture: 2 } },
    //         { text: "أهتم ببعض الظواهر", scores: { engineering: 2, medicine: 1 } },
    //         { text: "أهتم عند ظهور تفسير واضح", scores: { law: 1, media: 1 } },
    //         { text: "لا أفكر فيها كثيراً", scores: { arts: 1, business: 1 } }
    //     ]
    // },
    // {
    //     id: 73,
    //     text: "هل تستمتع بقراءة الأبحاث والدراسات العلمية؟",
    //     category: "science",
    //     options: [
    //         { text: "نعم، وأجدها ممتعة", scores: { science: 4, medicine: 2 } },
    //         { text: "أقرأ الملخصات فقط", scores: { engineering: 2, computer: 1 } },
    //         { text: "أفهمها إذا كانت بسيطة", scores: { education: 1, business: 1 } },
    //         { text: "أشعر أنها مرهقة", scores: { arts: 1, media: 1 } }
    //     ]
    // },
    // {
    //     id: 74,
    //     text: "كيف تتعامل مع المسائل الطويلة التي تحتاج صبراً؟",
    //     category: "science",
    //     options: [
    //         { text: "أتحملها وأستمتع بتحليلها", scores: { science: 4, engineering: 2 } },
    //         { text: "أتعامل معها إذا كانت مهمة", scores: { medicine: 2, law: 1 } },
    //         { text: "أفضل الحلول السريعة", scores: { business: 2, computer: 1 } },
    //         { text: "أفقد الاهتمام بسرعة", scores: { arts: 1, media: 1 } }
    //     ]
    // },
    // {
    //     id: 75,
    //     text: "ما مدى حبك لمواد الكيمياء والفيزياء والأحياء؟",
    //     category: "science",
    //     options: [
    //         { text: "أحبها كثيراً", scores: { science: 4, engineering: 2 } },
    //         { text: "أحب بعضها فقط", scores: { medicine: 2, agriculture: 1 } },
    //         { text: "أتعامل معها دراسياً", scores: { computer: 1, business: 1 } },
    //         { text: "أفضل مواد أخرى", scores: { arts: 2, education: 1 } }
    //     ]
    // },

    // // الزراعة والبيئة (5 أسئلة)
    // {
    //     id: 76,
    //     text: "هل تستمتع بالعمل مع النباتات أو في الطبيعة؟",
    //     category: "agriculture",
    //     options: [
    //         { text: "نعم جداً، أشعر بالراحة فيها", scores: { agriculture: 4, science: 2 } },
    //         { text: "أحبها من وقت لآخر", scores: { medicine: 1, education: 1 } },
    //         { text: "أفضل الأماكن الداخلية", scores: { computer: 1, business: 1 } },
    //         { text: "لا أهتم كثيراً", scores: { arts: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 77,
    //     text: "ما مدى اهتمامك بالبيئة والاستدامة؟",
    //     category: "agriculture",
    //     options: [
    //         { text: "اهتمام كبير جداً", scores: { agriculture: 4, science: 2 } },
    //         { text: "أهتم بها بشكل عام", scores: { education: 1, medicine: 1 } },
    //         { text: "أتابع الأخبار البيئية فقط", scores: { business: 1, media: 1 } },
    //         { text: "لا أفكر بها كثيراً", scores: { engineering: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 78,
    //     text: "كيف تشعر تجاه العمل الميداني والخارجي؟",
    //     category: "agriculture",
    //     options: [
    //         { text: "أحبه جداً وأفضله على المكتب", scores: { agriculture: 4, medicine: 1 } },
    //         { text: "أستمتع به أحياناً", scores: { engineering: 2, science: 1 } },
    //         { text: "أفضل الأعمال المكتبية", scores: { computer: 2, business: 1 } },
    //         { text: "لا أفضله", scores: { arts: 1, law: 1 } }
    //     ]
    // },
    // {
    //     id: 79,
    //     text: "هل تهتم بالزراعة الذكية والتقنيات الحديثة فيها؟",
    //     category: "agriculture",
    //     options: [
    //         { text: "نعم، وأراها مستقبلية جداً", scores: { agriculture: 4, engineering: 2 } },
    //         { text: "أهتم بها بشكل معتدل", scores: { science: 2, business: 1 } },
    //         { text: "أفضل الزراعة التقليدية", scores: { agriculture: 3 } },
    //         { text: "لا أهتم بهذا المجال", scores: { computer: 1, media: 1 } }
    //     ]
    // },
    // {
    //     id: 80,
    //     text: "ما رأيك في إدارة الموارد الطبيعية والمياه؟",
    //     category: "agriculture",
    //     options: [
    //         { text: "موضوع مهم جداً وأحب فهمه", scores: { agriculture: 4, science: 2 } },
    //         { text: "أهتم به عند الحاجة", scores: { engineering: 2, medicine: 1 } },
    //         { text: "أفكر فيه بشكل عام فقط", scores: { business: 1, law: 1 } },
    //         { text: "لا أتابعه كثيراً", scores: { arts: 1, media: 1 } }
    //     ]
    // }
];
