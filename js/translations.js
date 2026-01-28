const translations = {
    zh: {
        hero_texts: [
            "Moodex: 你的情绪第二大脑",
            "Moodex: 听懂你，更记得住你",
            "Moodex: 把声音转化为人生洞察"
        ],
        nav_waitlist: "申请成为种子用户",
        nav_agreement: "用户协议",
        nav_privacy: "隐私政策",
        nav_changelog: "版本更新介绍",
        home_title: "Moodex - 听懂你，更记得住你",
        hero_h1: "Moodex：听懂你，更记得住你",
        hero_p: "不再对着虚空倾诉。一款能听懂弦外之音、并能从你的一生记忆中寻找答案的 AI 语音日记。",
        hero_cta: "申请成为种子用户",
        features_title: "核心功能展示",
        features_subtitle: "结合最前沿的 AI 技术，为你提供全方位的情绪洞察与管理。",
        f0_title: "AI 情绪对话",
        f0_desc: "基于你的记录，利用 RAG+LLM 提供个性化对话，杜绝幻觉，比任何人都更懂你。",
        f1_title: "开口即记，释放双手",
        f1_desc: "像给老朋友发语音一样简单。Moodex 会捕捉你语调中的每一次停顿与起伏，将碎片化的碎碎念瞬间转化为结构化的生活志。",
        f2_title: "听懂你的弦外之音",
        f2_desc: "只有 AI 能读懂的“读心术”。透过文字表面，精准识别潜意识里的焦虑、期待或平静，比你自己更懂你的情绪。",
        f3_title: "连接当下的感受与过去的记忆",
        f3_desc: "你的一生不再是散落的碎片。当你感到“今天很累”时，Moodex 会告诉你：“上次你有这种感觉是在半年前，那时你刚完成一个大项目。”",
        f4_title: "看见你的人生命运节律",
        f4_desc: "情绪不是随机的，它是你生命的波浪。用直观的 K 线图可视化你的心理能量，发现你的低谷周期与高光时刻，掌握生活的节奏。",
        f5_title: "绘制你的快乐地图",
        f5_desc: "哪座城市让你感到孤独？哪个街角藏着最多的欢笑？在地图上点亮你的情绪足迹，发现环境与心境的隐秘联系。",
        f6_title: "一目了然的内心焦点",
        f6_desc: "当局者迷。通过词云，你会惊讶地发现这一年里占据你大脑最多的词汇是什么。也许是“忙碌”，也许是“自由”，这是最真实的自我镜像。",
        f7_title: "声音的专属明信片",
        f7_desc: "不仅是冷冰冰的文字，你的每一次倾诉都会被生成一张精美的情绪卡片。让声音有迹可循，让回忆触手可及。",
        f8_title: "你的秘密，只能属于你",
        f8_desc: "我们深知日记是灵魂的私密角落。采用本地优先架构 + iCloud 个人云端加密。没有广告商，没有后台窥探，就连我们也无法查看你的任何一条记录。",
        waitlist_title: "准备好遇见你的第二大脑了吗？",
        waitlist_desc: "Moodex 正在寻找首批 100 位种子用户。如果你也厌倦了没有回应的记录，欢迎加入 TestFlight，与我们共同定义下一代日记应用。",
        waitlist_btn: "立即申请内测",
        chart_explicit: "显性表达",
        chart_implicit: "潜意识信号",
        chart_mood_index: "情绪指数",
        chart_volume: "音量",
        chart_current: "当前日记",
        chart_linked: "关联记忆",
        chart_happy_index: "快乐指数",
        chart_freq: "出现频率",
        chart_protected: "已保护",
        chart_processing: "进行中",
        mood_happy: "快乐",
        mood_anxious: "焦虑",
        mood_calm: "平静",
        mood_energetic: "活力",
        mood_thinking: "思考",
        mood_stress: "压力",
        days: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
        cities: ["北京", "深圳", "新加坡", "雅加达", "东京", "曼谷"],
        keywords: ["充实", "期待", "疲惫", "感动", "焦虑"],
        categories: ["生活记录", "工作灵感", "情感宣泄", "其他"],

        // docs.html 翻译
        docs_title: "Moodex 文档中心 - 版本更新与介绍",
        docs_nav_intro: "Moodex 简介",
        docs_nav_faq: "常见问题",
        docs_nav_roadmap: "产品路线图",
        docs_nav_changelog: "更新记录",
        docs_nav_home: "返回主页",
        docs_intro_title: "Moodex 简介",
        docs_intro_p1: "Moodex 不仅仅是一个日记本。它是你的<b>情绪第二大脑</b>。",
        docs_intro_p2: "在这个信息过载的时代，我们每天都在产生海量的情绪和想法，但它们往往随风而逝。Moodex 利用最前沿的 AI 技术，捕捉你声音中的细微情感，并将其与你的一生记忆相连接。我们相信，最好的答案往往就藏在你过去的经历中，而 Moodex 负责帮你找到它。",
        docs_faq_title: "常见问题",
        docs_faq_q1: "Moodex 是如何保护我的隐私的？",
        docs_faq_a1: "我们采用本地优先架构，所有的语音转文字和情绪评分都在你的设备上完成（或通过加密通道）。你的数据存储在你自己的 iCloud 中，我们无法窥探。你的秘密，只能属于你。",
        docs_faq_q2: "我需要一直联网吗？",
        docs_faq_a2: "核心记录功能支持离线使用。AI 深度分析和跨设备同步功能需要连接网络。",
        docs_faq_q3: "AI 分析会出错吗？",
        docs_faq_a3: "AI 的建议基于你的历史记录，旨在提供启发而非诊断。请将其视为一个非常了解你的“理性朋友”。",
        docs_roadmap_title: "产品路线图",
        docs_roadmap_p1: "我们正在不断进化，以下是即将到来的功能：",
        docs_roadmap_q1: "<b>2026 Q1：</b> 推出 Apple Watch 快捷录音功能。",
        docs_roadmap_q2: "<b>2026 Q2：</b> 增强版 RAG 搜索，支持多模态（图片+声音）联想。",
        docs_roadmap_q3: "<b>2026 Q3：</b> 情绪节律预警，提前发现可能的心理压力期。",
        docs_changelog_title: "更新记录",
        docs_changelog_v01_date: "V0.1 - 2026-01-23",
        docs_changelog_v01_title: "首次内测发布 (Testing Beta)",
        docs_changelog_v01_li1: "<b>开口即记</b>：支持流畅的语音转文字记录，释放双手。",
        docs_changelog_v01_li2: "<b>情绪分析</b>：AI 实时分析文字背后的情绪倾向。",
        docs_changelog_v01_li3: "<b>数据导出</b>：支持全量导出你的记录，数据主权归你。",
        docs_changelog_v01_li4: "<b>多语言</b>：完整支持中、英、印尼三语。",
        docs_changelog_v01_li5: "<b>隐私防护</b>：集成 iCloud 加密同步。"
    },
    en: {
        hero_texts: [
            "Moodex: Your Emotional Second Brain",
            "Moodex: Understands You, Remembers You Better",
            "Moodex: Turning Voice into Life Insights"
        ],
        nav_waitlist: "Apply to be a Seed User",
        nav_agreement: "Terms",
        nav_privacy: "Privacy",
        nav_changelog: "Releases",
        home_title: "Moodex - Understands You, Remembers You Better",
        hero_h1: "Moodex: Understands You, Remembers You Better",
        hero_p: "No more talking into the void. An AI voice diary that hears between the lines and finds answers from your lifetime of memories.",
        hero_cta: "Apply to be a Seed User",
        features_title: "Core Features",
        features_subtitle: "Combining cutting-edge AI technology to provide you with comprehensive emotional insight and management.",
        f0_title: "AI Emotional Dialogue",
        f0_desc: "Personalized dialogue based on your records using RAG+LLM. Eliminates hallucinations, understanding you better than anyone else.",
        f1_title: "Speak to Record, Free Your Hands",
        f1_desc: "As simple as sending a voice message to an old friend. Moodex captures every pause and fluctuation in your tone, instantly transforming fragmented mumblings into a structured life journal.",
        f2_title: "Hear the Unspoken",
        f2_desc: "\"Mind-reading\" only AI can do. Beyond the surface words, it accurately identifies subconscious anxiety, expectation, or peace—knowing your emotions better than you do.",
        f3_title: "Connect Today's Feelings with Yesterday's Memories",
        f3_desc: "Your life is no longer scattered fragments. When you feel \"tired today,\" Moodex tells you: \"Last time you felt this way was six months ago, right after finishing that big project.\"",
        f4_title: "See Your Life's Rhythm",
        f4_desc: "Emotions aren't random; they are waves of your life. Visualize your mental energy with intuitive K-line charts, discover your cycles of lows and highs, and master the rhythm of living.",
        f5_title: "Map Your Happiness",
        f5_desc: "Which city makes you feel lonely? Which corner hides the most laughter? Light up your emotional footprints on the map and discover the hidden connection between environment and mindset.",
        f6_title: "Your Inner Focus at a Glance",
        f6_desc: "The observer often misses the obvious. Through word clouds, you'll be surprised to find which words occupied your mind most this year. Be it \"busy\" or \"free,\" it's the truest mirror of your self.",
        f7_title: "Voice Postcards",
        f7_desc: "Not just cold text—every sharing of yours generates an exquisite emotional card. Keep your voice traceable and your memories within reach.",
        f8_title: "Your Secrets Belong Only to You",
        f8_desc: "We know a diary is a private corner of the soul. Built on a local-first architecture with iCloud personal encryption. No advertisers, no backend prying—even we cannot access any of your records.",
        waitlist_title: "Ready to Meet Your Second Brain?",
        waitlist_desc: "Moodex is looking for its first 100 seed users. If you're tired of recording with no response, join our TestFlight and help us define the next generation of diary apps.",
        waitlist_btn: "Apply for Beta Now",
        chart_explicit: "Explicit",
        chart_implicit: "Subconscious",
        chart_mood_index: "Mood Index",
        chart_volume: "Volume",
        chart_current: "Current Entry",
        chart_linked: "Linked Memory",
        chart_happy_index: "Happiness Index",
        chart_freq: "Frequency",
        chart_protected: "Protected",
        chart_processing: "In Progress",
        mood_happy: "Happy",
        mood_anxious: "Anxious",
        mood_calm: "Calm",
        mood_energetic: "Energetic",
        mood_thinking: "Thinking",
        mood_stress: "Stress",
        days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        cities: ["Beijing", "Shenzhen", "Singapore", "Jakarta", "Tokyo", "Bangkok"],
        keywords: ["Full", "Expectant", "Exhausted", "Moved", "Anxious"],
        categories: ["Life", "Work", "Vent", "Others"],

        // docs.html translations
        docs_title: "Moodex Documentation - Releases and Introduction",
        docs_nav_intro: "Introduction to Moodex",
        docs_nav_faq: "FAQ",
        docs_nav_roadmap: "Product Roadmap",
        docs_nav_changelog: "Update Log",
        docs_nav_home: "Back to Homepage",
        docs_intro_title: "Introduction to Moodex",
        docs_intro_p1: "Moodex is more than just a diary. It's your <b>emotional second brain</b>.",
        docs_intro_p2: "In this age of information overload, we generate a massive amount of emotions and thoughts every day, but they often vanish with the wind. Moodex leverages cutting-edge AI technology to capture the subtle emotions in your voice and connect them with your lifetime memories. We believe that the best answers are often hidden in your past experiences, and Moodex is here to help you find them.",
        docs_faq_title: "Frequently Asked Questions",
        docs_faq_q1: "How does Moodex protect my privacy?",
        docs_faq_a1: "We use a local-first architecture, where all speech-to-text and emotion scoring are done on your device (or via encrypted channels). Your data is stored in your own iCloud, inaccessible to us. Your secrets belong only to you.",
        docs_faq_q2: "Do I need to be online all the time?",
        docs_faq_a2: "Core recording functions support offline use. AI deep analysis and cross-device synchronization require an internet connection.",
        docs_faq_q3: "Can AI analysis be wrong?",
        docs_faq_a3: "AI's suggestions are based on your historical records and are intended to inspire, not diagnose. Please consider it a \"rational friend\" who knows you very well.",
        docs_roadmap_title: "Product Roadmap",
        docs_roadmap_p1: "We are constantly evolving, and here are the upcoming features:",
        docs_roadmap_q1: "<b>2026 Q1:</b> Launch Apple Watch quick recording function.",
        docs_roadmap_q2: "<b>2026 Q2:</b> Enhanced RAG search, supporting multi-modal (image + voice) associations.",
        docs_roadmap_q3: "<b>2026 Q3:</b> Emotional rhythm early warning, proactively identifying potential psychological stress periods.",
        docs_changelog_title: "Update Log",
        docs_changelog_v01_date: "V0.1 - 2026-01-23",
        docs_changelog_v01_title: "First Internal Beta Release (Testing Beta)",
        docs_changelog_v01_li1: "<b>Speak to Record</b>: Supports smooth speech-to-text recording, freeing your hands.",
        docs_changelog_v01_li2: "<b>Emotion Analysis</b>: AI real-time analysis of emotional tendencies behind text.",
        docs_changelog_v01_li3: "<b>Data Export</b>: Supports full export of your records, data sovereignty belongs to you.",
        docs_changelog_v01_li4: "<b>Multi-language</b>: Full support for Chinese, English, and Indonesian.",
        docs_changelog_v01_li5: "<b>Privacy Protection</b>: Integrated iCloud encrypted synchronization."
    },
    id: {
        hero_texts: [
            "Moodex: Otak Kedua Emosional Anda",
            "Moodex: Memahami Anda, Mengingat Anda Lebih Baik",
            "Moodex: Mengubah Suara menjadi Wawasan Hidup"
        ],
        nav_waitlist: "Daftar Jadi Pengguna Benih",
        nav_agreement: "Perjanjian Pengguna",
        nav_privacy: "Kebijakan Privasi",
        nav_changelog: "Pembaruan Versi",
        home_title: "Moodex - Memahami Anda, Mengingat Anda Lebih Baik",
        hero_h1: "Moodex: Memahami Anda, Mengingat Anda Lebih Baik",
        hero_p: "Tidak lagi berbicara ke ruang hampa. Buku harian suara AI yang memahami makna tersirat dan menemukan jawaban dari ingatan seumur hidup Anda.",
        hero_cta: "Daftar Jadi Pengguna Benih",
        features_title: "Fitur Utama",
        features_subtitle: "Menggabungkan teknologi AI tercanggih untuk memberikan wawasan dan manajemen emosional yang komprehensif.",
        f0_title: "Dialog Emosional AI",
        f0_desc: "Dialog personal berdasarkan catatan Anda menggunakan RAG+LLM. Menghilangkan halusinasi, memahami Anda lebih baik daripada siapa pun.",
        f1_title: "Bicara untuk Mencatat, Bebaskan Tangan",
        f1_desc: "Semudah mengirim pesan suara ke teman lama. Moodex menangkap setiap jeda dan naik-turun nada bicara Anda, seketika mengubah celotehan menjadi catatan hidup yang terstruktur.",
        f2_title: "Memahami Makna Tersirat",
        f2_desc: "\"Membaca pikiran\" yang hanya bisa dilakukan AI. Di balik kata-kata, ia mengenali kecemasan, harapan, atau ketenangan alam bawah sadar—memahami emosi Anda lebih baik dari diri sendiri.",
        f3_title: "Hubungkan Perasaan Hari Ini dengan Kenangan Masa Lalu",
        f3_desc: "Hidup Anda bukan lagi potongan-potongan yang berserakan. Saat Anda merasa \"lelah hari ini,\" Moodex akan memberitahu: \"Terakhir kali Anda merasa seperti ini adalah enam bulan lalu, tepat setelah menyelesaikan proyek besar itu.\"",
        f4_title: "Lihat Irama Nasib Hidup Anda",
        f4_desc: "Emosi tidak acak; itu adalah gelombang hidup Anda. Visualisasikan energi mental dengan grafik K-line yang intuitif, temukan siklus naik-turun Anda, dan kuasai irama kehidupan.",
        f5_title: "Gambar Peta Kebahagiaan Anda",
        f5_desc: "Kota mana yang membuat Anda merasa kesepian? Sudut mana yang menyimpan tawa paling banyak? Terangi jejak emosional Anda di peta dan temukan hubungan tersembunyi antara lingkungan dan suasana hati.",
        f6_title: "Fokus Batin Anda dalam Sekejap",
        f6_desc: "Seringkali kita tidak menyadari diri sendiri. Melalui awan kata, Anda akan terkejut menemukan kata apa yang paling banyak mengisi pikiran Anda tahun ini. Mungkin \"sibuk\", mungkin \"bebas\"—inilah cermin diri yang paling nyata.",
        f7_title: "Kartu Pos Suara yang Eksklusif",
        f7_desc: "Bukan sekadar teks dingin, setiap curahan hati Anda akan diubah menjadi kartu emosi yang indah. Biarkan suara memiliki jejak, biarkan kenangan mudah dijangkau.",
        f8_title: "Rahasia Anda, Hanya Milik Anda",
        f8_desc: "Kami tahu buku harian adalah sudut pribadi jiwa. Menggunakan arsitektur prioritas lokal + enkripsi iCloud pribadi. Tanpa pengiklan, tanpa pengintaian backend, bahkan kami pun tidak bisa melihat catatan Anda.",
        waitlist_title: "Siap Bertemu Otak Kedua Anda?",
        waitlist_desc: "Moodex sedang mencari 100 pengguna benih pertama. Jika Anda bosan dengan catatan tanpa respon, bergabunglah di TestFlight dan bantu kami mendefinisikan aplikasi buku harian generasi berikutnya.",
        waitlist_btn: "Daftar Beta Sekarang",
        chart_explicit: "Eksplisit",
        chart_implicit: "Bawah Sadar",
        chart_mood_index: "Indeks Suasana",
        chart_volume: "Volume",
        chart_current: "Entri Saat Ini",
        chart_linked: "Memori Terkait",
        chart_happy_index: "Indeks Kebahagiaan",
        chart_freq: "Frekuensi",
        chart_protected: "Dilindungi",
        chart_processing: "Berjalan",
        mood_happy: "Bahagia",
        mood_anxious: "Cemas",
        mood_calm: "Tenang",
        mood_energetic: "Energetik",
        mood_thinking: "Berpikir",
        mood_stress: "Stres",
        days: ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"],
        cities: ["Beijing", "Shenzhen", "Singapura", "Jakarta", "Tokyo", "Bangkok"],
        keywords: ["Penuh", "Harapan", "Lelah", "Terharu", "Cemas"],
        categories: ["Hidup", "Kerja", "Curhat", "Lainnya"],

        // docs.html translations
        docs_title: "Pusat Dokumentasi Moodex - Rilis dan Pengantar",
        docs_nav_intro: "Pengantar Moodex",
        docs_nav_faq: "FAQ",
        docs_nav_roadmap: "Peta Jalan Produk",
        docs_nav_changelog: "Log Pembaruan",
        docs_nav_home: "Kembali ke Beranda",
        docs_intro_title: "Pengantar Moodex",
        docs_intro_p1: "Moodex lebih dari sekadar buku harian. Ini adalah <b>otak kedua emosional</b> Anda.",
        docs_intro_p2: "Di era informasi yang berlebihan ini, kita menghasilkan banyak emosi dan pikiran setiap hari, tetapi seringkali menghilang begitu saja. Moodex memanfaatkan teknologi AI mutakhir untuk menangkap emosi halus dalam suara Anda dan menghubungkannya dengan ingatan seumur hidup Anda. Kami percaya bahwa jawaban terbaik seringkali tersembunyi dalam pengalaman masa lalu Anda, dan Moodex ada di sini untuk membantu Anda menemukannya.",
        docs_faq_title: "Pertanyaan yang Sering Diajukan",
        docs_faq_q1: "Bagaimana Moodex melindungi privasi saya?",
        docs_faq_a1: "Kami menggunakan arsitektur local-first, di mana semua pengenalan suara ke teks dan penilaian emosi dilakukan di perangkat Anda (atau melalui saluran terenkripsi). Data Anda disimpan di iCloud Anda sendiri, tidak dapat diakses oleh kami. Rahasia Anda hanya milik Anda.",
        docs_faq_q2: "Apakah saya perlu online setiap saat?",
        docs_faq_a2: "Fungsi perekaman inti mendukung penggunaan offline. Analisis mendalam AI dan fungsi sinkronisasi lintas perangkat memerlukan koneksi internet.",
        docs_faq_q3: "Bisakah analisis AI salah?",
        docs_faq_a3: "Saran AI didasarkan pada catatan historis Anda dan dimaksudkan untuk menginspirasi, bukan mendiagnosis. Harap anggap itu sebagai \"teman rasional\" yang sangat mengenal Anda.",
        docs_roadmap_title: "Peta Jalan Produk",
        docs_roadmap_p1: "Kami terus berkembang, dan berikut adalah fitur-fitur yang akan datang:",
        docs_roadmap_q1: "<b>2026 Q1:</b> Peluncuran fungsi perekaman cepat Apple Watch.",
        docs_roadmap_q2: "<b>2026 Q2:</b> Pencarian RAG yang ditingkatkan, mendukung asosiasi multi-modal (gambar + suara).",
        docs_roadmap_q3: "<b>2026 Q3:</b> Peringatan dini ritme emosional, secara proaktif mengidentifikasi periode stres psikologis potensial.",
        docs_changelog_title: "Log Pembaruan",
        docs_changelog_v01_date: "V0.1 - 2026-01-23",
        docs_changelog_v01_title: "Rilis Beta Internal Pertama (Beta Pengujian)",
        docs_changelog_v01_li1: "<b>Bicara untuk Merekam</b>: Mendukung perekaman suara-ke-teks yang lancar, membebaskan tangan Anda.",
        docs_changelog_v01_li2: "<b>Analisis Emosi</b>: Analisis real-time AI tentang kecenderungan emosional di balik teks.",
        docs_changelog_v01_li3: "<b>Ekspor Data</b>: Mendukung ekspor penuh catatan Anda, kedaulatan data milik Anda.",
        docs_changelog_v01_li4: "<b>Multi-bahasa</b>: Dukungan penuh untuk bahasa Mandarin, Inggris, dan Indonesia.",
        docs_changelog_v01_li5: "<b>Perlindungan Privasi</b>: Sinkronisasi terenkripsi iCloud terintegrasi."
    }
};

function detectLanguage() {
    const savedLang = localStorage.getItem('moodex_lang');
    if (savedLang) return savedLang;

    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('id')) return 'id';
    return 'en'; // 默认英文
}

let currentLang = detectLanguage();

function toggleLangDropdown(event) {
    event.stopPropagation();
    document.querySelector('.lang-dropdown').classList.toggle('active');
}

document.addEventListener('click', () => {
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
});

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('moodex_lang', lang);
    updateContent();
    // 重新初始化图表以应用新语言
    if (typeof initCharts === 'function') {
        initCharts();
    }
    // 切换后关闭下拉框
    const dropdown = document.querySelector('.lang-dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

let typewriterInterval;
let typewriterTimeout;

function startTypewriter(texts) {
    const textEl = document.getElementById('typewriter-text');
    if (!textEl) return;

    // 清除之前的定时器
    if (typewriterInterval) clearInterval(typewriterInterval);
    if (typewriterTimeout) clearTimeout(typewriterTimeout);

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            textEl.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // 删除速度快
        } else {
            textEl.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // 打字速度正常
        }

        if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            typeSpeed = 3000; // 停留 3 秒
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // 切换下一句前暂停
        }

        typewriterTimeout = setTimeout(type, typeSpeed);
    }

    type();
}

function updateContent() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-t]').forEach(el => {
        const key = el.getAttribute('data-t');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // Determine current page
    const pathname = window.location.pathname;
    const isHomePage = pathname === '/' || pathname === '/index.html';
    const isDocsPage = pathname === '/docs.html';

    // Update page title based on current page
    if (isHomePage) {
        document.title = t.home_title;
    } else if (isDocsPage) {
        document.title = t.docs_title;
    } else {
        // Fallback title for other pages if necessary
        document.title = t.home_title || 'Moodex';
    }

    // Set document language
    if (currentLang === 'en') {
        document.documentElement.lang = 'en';
    } else if (currentLang === 'id') {
        document.documentElement.lang = 'id';
    } else {
        document.documentElement.lang = 'zh-CN';
    }

    // Start typewriter effect only on the home page
    const typewriterElement = document.getElementById('typewriter-text');
    if (isHomePage && typewriterElement && t.hero_texts) {
        startTypewriter(t.hero_texts);
    } else if (!isHomePage && typewriterElement) {
        // Clear typewriter if not on home page
        typewriterElement.textContent = '';
        if (typewriterInterval) clearInterval(typewriterInterval);
        if (typewriterTimeout) clearTimeout(typewriterTimeout);
    }

    // Update navigation bar status (Dropdown)
    const langLabels = {
        'zh': 'ZH',
        'en': 'EN',
        'id': 'ID'
    };
    const currentLangBtn = document.getElementById('current-lang-btn');
    if (currentLangBtn) {
        currentLangBtn.querySelector('span').innerText = langLabels[currentLang];
    }
    
    document.querySelectorAll('.lang-dropdown-content span').forEach(span => {
        span.classList.toggle('active', span.id === 'lang-' + currentLang);
    });

    // Update legal document links
    let suffix = '.html';
    if (currentLang === 'en') suffix = '_en.html';
    else if (currentLang === 'id') suffix = '_id.html';
    const agreementLink = document.getElementById('footer-agreement-link');
    const privacyLink = document.getElementById('footer-privacy-link');
    if (agreementLink) agreementLink.href = 'user-agreement' + suffix;
    if (privacyLink) privacyLink.href = 'privacy' + suffix;
}