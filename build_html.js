const fs = require('fs');
const dataAr = require('./data_ar.js');
const dataEn = require('./data_en.js');

const scriptLogic = `
const dataStore = {
  ar: ${JSON.stringify(dataAr)},
  en: ${JSON.stringify(dataEn)}
};

// Existing module data from Platform-Mockup
const portalData = {
  ar: {
    title: "بوابة المريض والمرافق",
    desc: "مساحة واحدة لمتابعة حالة الطلب والخطوة التالية والملفات والرسائل المصرح بها.",
    current: "الحالة الحالية",
    inReview: "استكمال ومراجعة الملف الطبي",
    next: "الخطوة التالية",
    nextVal: "تواصل المنسق الشخصي",
    nextDesc: "رفع المستندات عبر قناة آمنة بعد التواصل مع منسق الحالة.",
    companion: "المرافق أو ولي الأمر",
    companionDesc: "دعوة مرافق بصلاحيات مستقلة؛ الوصول للملف الطبي يتطلب موافقة مناسبة أو سندًا قانونيًا.",
    companionBtn: "معاينة دعوة مرافق",
    documents: "المستندات",
    docsVal: "بانتظار الاستكمال",
    messages: "رسائل المنسق",
    messagesVal: "1 جديدة",
    journeyBtn: "عرض جدول الرحلة"
  },
  en: {
    title: "Patient & Companion Portal",
    desc: "A centralized dashboard to monitor case review, quotation options, and accommodation confirmations.",
    current: "Current status",
    inReview: "Medical file under clinical review",
    next: "Next step",
    nextVal: "Coordinator contact",
    nextDesc: "Submit reports through an encrypted channel after your coordinator makes contact.",
    companion: "Companion or Guardian",
    companionDesc: "Invite a companion with independent permissions; medical access requires appropriate patient consent.",
    companionBtn: "Preview Companion Invite",
    documents: "Documents",
    docsVal: "Awaiting completion",
    messages: "Coordinator messages",
    messagesVal: "1 New message",
    journeyBtn: "View Journey Schedule"
  }
};

const opsData = {
  ar: {
    title: "النظام التشغيلي — مساحة الحالة الموحدة",
    desc: "تجربة موظف واحدة تربط ملخص المريض والطب والعروض والرحلة والمالية وسجل التدقيق.",
    case: "حالة تجريبية · لا توجد بيانات مريض حقيقية",
    caseId: "CASE-DEMO-001",
    status: "استكمال الملف",
    caseStageLabel: "مرحلة سير العمل",
    advance: "معاينة الانتقال للمرحلة التالية",
    reset: "إعادة ضبط",
    stageGuard: "يتطلب الانتقال اعتمادًا مناسبًا؛ هذه المعاينة لا تمنح اعتمادًا طبيًا أو تشغيليًا.",
    sections: ["ملخص الحالة", "الملف الطبي", "المستشفى والعرض", "الرحلة والإقامة", "المالية", "سجل التدقيق"],
    stages: ["طلب جديد", "استكمال الملف", "مراجعة طبية", "خطة وعرض", "تأكيد الرحلة", "العلاج والمتابعة"],
    coordinators: ["غير معيّن", "أ. نوران الألفي (منسق تجريبي)"],
    priorities: ["عادية", "عالية", "عاجلة"],
    reviewers: ["غير معيّن", "د. طارق رشدي (مراجع مخوّل تجريبي)"],
    reviewStatuses: ["معلق", "قيد المراجعة", "يحتاج معلومات إضافية"],
    fileStatuses: ["بانتظار المستندات", "مكتمل للمراجعة"],
    providerStatuses: ["لم يتم الاختيار", "بانتظار التحقق", "تم التحقق (تجريبي)"],
    quoteStatuses: ["لم يُنشأ عرض", "مسودة", "بانتظار الاعتماد"],
    bookingStatuses: ["غير محجوز", "قيد التنسيق", "مؤكد (تجريبي)"],
    stays: ["أجنحة النيل الفندقية (6 أكتوبر)", "شقق المعادي النيلية"],
    transfers: ["سيارة خاصة مجهزة", "إسعاف طبي مجهز من المطار"],
    readinessTitle: "قائمة جاهزية السفر والإقامة",
    checks: [
      "تأكيد المستندات الطبية وفحص Fit-to-fly",
      "تأكيد حجز الجناح الفندقي وتجهيز السرير للمريض والمرافق",
      "تأكيد موعد المستشفى واستقبال المطار"
    ],
    clinicalGate: "اعتماد الفريق الطبي مطلوب قبل السفر",
    auditTitle: "سجل الأحداث التجريبي",
    auditItems: ["إنشاء حالة تجريبية", "تعيين منسق (أ. نوران)", "لا يوجد اعتماد طبي مسجل بعد"],
    demoOnly: "بيانات توضيحية فقط — لا تحفظ ولا تُرسل."
  },
  en: {
    title: "Operations Hub — Unified Staff Workspace",
    desc: "A single coordinator workspace connecting patient triage, surgical approvals, recovery suites, and finance.",
    case: "Demo case · No real patient data",
    caseId: "CASE-DEMO-001",
    status: "Medical file review",
    caseStageLabel: "Workflow stage",
    advance: "Preview next stage",
    reset: "Reset demo",
    stageGuard: "Advancing stages requires clinical validation; this preview does not grant actual clinical approval.",
    sections: ["Case summary", "Medical file", "Provider & quote", "Journey & accommodation", "Finance", "Audit history"],
    stages: ["New request", "File review", "Clinical evaluation", "Plan & quotation", "Journey confirmed", "Treatment & follow-up"],
    coordinators: ["Unassigned", "Nouran Al-Alfy (Demo coordinator)"],
    priorities: ["Routine", "High", "Urgent"],
    reviewers: ["Unassigned", "Prof. Tarek Roushdy (Clinical Reviewer)"],
    reviewStatuses: ["Pending", "Under review", "More information needed"],
    fileStatuses: ["Awaiting documents", "Complete for review"],
    providerStatuses: ["Not selected", "Verification pending", "Verified (demo)"],
    quoteStatuses: ["No quote created", "Draft", "Awaiting approval"],
    bookingStatuses: ["Not booked", "Being coordinated", "Confirmed (demo)"],
    stays: ["Nile Medical Suites (6th October)", "Maadi River View Flats"],
    transfers: ["Private equipped sedan", "Airport medical ambulance"],
    readinessTitle: "Travel & accommodation readiness",
    checks: [
      "Fit-to-fly medical clearance verified",
      "Recovery suite and companion room pre-booked",
      "Hospital cath lab & airport greeting confirmed"
    ],
    clinicalGate: "Treating team approval required prior to travel",
    auditTitle: "Demo Event History",
    auditItems: ["Demo case created", "Coordinator assigned (Nouran)", "No clinical approval recorded yet"],
    demoOnly: "Illustrative data only — nothing is saved or sent."
  }
};

const financeData = {
  ar: {
    title: "المالية وتوزيع التكاليف والربحية",
    desc: "فصل إيرادات الشركة عن أموال الغير، ومقارنة المتوقع بالفعلي بعد تسجيل الحركات والتسويات.",
    revTitle: "إجمالي قيمة الحزمة المقدرة",
    directHosp: "المستشفى المباشر (خارج إيراد الشركة)",
    stayTransport: "الإقامة الفندقية والمواصلات",
    coordinationFee: "رسوم التنسيق والرعاية المباشرة",
    due: "مستحقات مفتوحة",
    empty: "—",
    note: "لا توجد أرقام مالية ملزمة في هذا الموكاب. الدفعات المباشرة للمستشفى لا تُسجل تلقائيًا كإيراد للشركة.",
    demoBtnShow: "عرض سيناريو مالي توضيحي",
    demoBtnHide: "إخفاء السيناريو التوضيحي",
    demoLabel: "سيناريو افتراضي للتجربة فقط",
    tableHead: ["البند والخدمة", "المسؤول عن الدفع", "القيمة المقدرة", "حالة التسجيل"],
    tableRows: [
      ["إجراء القسطرة واستبدال الصمام", "المستشفى الشريك مباشرة", 135000, "سداد مباشر للمستشفى"],
      ["أجنحة النيل الفندقية (7 ليالٍ)", "الفندق / عبر الباقة", 12950, "مؤكد مع الحجز"],
      ["الاستقبال والتنقلات الطبية", "خدمة اللوجستيات", 2500, "شامل الباقة"],
      ["رسوم التنسيق والمرافقة 24/7", "الشركة المشغلة", 18500, "أتعاب خدمة معتمدة"]
    ],
    currencyNotice: "تتوفر خيارات تسعير بعدة عملات (ج.م / $ / ر.س / د.إ)"
  },
  en: {
    title: "Journey Finance & Margin Transparency",
    desc: "Separate company revenue from third-party hospital pass-throughs, with clear reconciliations.",
    revTitle: "Estimated Package Total",
    directHosp: "Direct Hospital (Excluded from revenue)",
    stayTransport: "Accommodation & Transfers",
    coordinationFee: "Coordination & Concierge Service",
    due: "Open balances",
    empty: "—",
    note: "Figures in this mockup are illustrative. Direct hospital payments are never booked as company revenue.",
    demoBtnShow: "Show illustrative finance scenario",
    demoBtnHide: "Hide illustrative scenario",
    demoLabel: "Hypothetical scenario for demonstration only",
    tableHead: ["Line Item & Service", "Payment Recipient", "Estimated Amount", "Recording Status"],
    tableRows: [
      ["Cath & Valve Procedure", "Direct Partner Hospital", 135000, "Hospital Direct"],
      ["Nile Medical Suites (7 Nights)", "Hotel / In Package", 12950, "Confirmed with Booking"],
      ["Airport & Medical Transfers", "Logistics Service", 2500, "Included in Package"],
      ["Coordination & Care Service 24/7", "Operating Company", 18500, "Fixed Coordination Fee"]
    ],
    currencyNotice: "Pricing references available in EGP, USD, SAR, and AED"
  }
};

let lang = "ar";
let theme = "nile";
let activePage = "home";
let selectedSpecialtyId = "interventional";
let opsSection = 0;
let caseStage = 0;
let financeDemo = true;
let activeCurrency = "EGP";

const currencyRates = {
  EGP: { rate: 1, arSym: "ج.م", enSym: "EGP" },
  USD: { rate: 0.021, arSym: "$", enSym: "$" },
  SAR: { rate: 0.078, arSym: "ر.س", enSym: "SAR" },
  AED: { rate: 0.076, arSym: "د.إ", enSym: "AED" }
};

function d() { return dataStore[lang]; }

function toggleLang() {
  lang = (lang === "ar" ? "en" : "ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "ar" ? "rtl" : "ltr");
  render();
}

function setTheme(v) {
  theme = v;
  document.body.classList.toggle("editorial", v === "editorial");
  document.getElementById("nileBtn").classList.toggle("active", v === "nile");
  document.getElementById("editorialBtn").classList.toggle("active", v === "editorial");
}

function showPage(pageId, extraParam) {
  activePage = pageId;
  if (pageId === "specialty" && extraParam) {
    selectedSpecialtyId = extraParam;
  }
  // Close mobile nav if open
  const navLinks = document.getElementById("navLinksContainer");
  if (navLinks) navLinks.classList.remove("mobile-open");
  
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMobileNav() {
  const navLinks = document.getElementById("navLinksContainer");
  if (navLinks) navLinks.classList.toggle("mobile-open");
}

function toggleFaqItem(el) {
  const item = el.closest(".faq-item");
  if (item) item.classList.toggle("open");
}

function formatCurr(egpAmount) {
  const curr = currencyRates[activeCurrency];
  const val = Math.round(egpAmount * curr.rate);
  const sym = (lang === "ar" ? curr.arSym : curr.enSym);
  return val.toLocaleString() + " " + sym;
}

function setCurrency(c) {
  activeCurrency = c;
  render();
}

function toggleFinanceDemo() {
  financeDemo = !financeDemo;
  render();
}

function advanceCase() {
  if (caseStage >= 3) {
    const el = document.getElementById("opsNotice");
    if (el) el.textContent = opsData[lang].stageGuard;
    return;
  }
  caseStage++;
  render();
}

function resetCase() {
  caseStage = 0;
  opsSection = 0;
  render();
}

function selectOpsSide(idx) {
  opsSection = idx;
  render();
}

/* =========================================================
   PAGE RENDERING FUNCTIONS
   ========================================================= */

function renderHome() {
  const h = d().home;
  return [
    '<section class="hero">',
    '  <div>',
    '    <div class="eyebrow">' + h.eyebrow + '</div>',
    '    <h1>' + h.heroTitle + '</h1>',
    '    <p>' + h.heroDesc + '</p>',
    '    <div class="head-actions">',
    '      <button class="btn" onclick="showPage(\\'assessment\\')">' + h.ctaPrimary + '</button>',
    '      <button class="btn quiet" onclick="showPage(\\'specialties\\')">' + h.ctaSecondary + '</button>',
    '    </div>',
    '  </div>',
    '  <div class="hero-art">',
    '    <div class="eyebrow" style="color:#E6C5A4">' + h.heroArtBadge + '</div>',
    '    <div class="big">' + h.heroArtTitle + '</div>',
    '    <p style="color:#FFFFFF;margin:0;font-size:15px">' + h.heroArtSub + '</p>',
    '    <span class="small" style="color:#E6DED0">' + h.heroArtNote + '</span>',
    '  </div>',
    '</section>',
    
    '<hr class="rule">',

    // Section 1: Coordination Pillars
    '<section>',
    '  <div class="eyebrow">' + h.coordinationEyebrow + '</div>',
    '  <h2 class="section-title">' + h.coordinationTitle + '</h2>',
    '  <p class="section-intro">' + h.coordinationDesc + '</p>',
    '  <div class="grid">',
    h.coordinationPillars.map(p => 
      '    <div class="panel" style="margin-bottom:0">' +
      '      <span class="eyebrow" style="font-size:15px">' + p.num + '</span>' +
      '      <h3>' + p.title + '</h3>' +
      '      <p style="margin:0;font-size:14.5px;color:var(--muted);line-height:1.6">' + p.text + '</p>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</section>',

    '<hr class="rule">',

    // Section 2: Specialties preview
    '<section>',
    '  <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:18px;flex-wrap:wrap;gap:12px">',
    '    <div>',
    '      <div class="eyebrow">' + h.specialtiesEyebrow + '</div>',
    '      <h2 class="section-title" style="margin:0">' + h.specialtiesTitle + '</h2>',
    '    </div>',
    '    <button class="btn secondary" onclick="showPage(\\'specialties\\')">' + (lang === "ar" ? "عرض جميع التخصصات ←" : "View All Specialties →") + '</button>',
    '  </div>',
    '  <p class="section-intro">' + h.specialtiesIntro + '</p>',
    '  <div class="grid">',
    d().specialtiesList.slice(0, 6).map(sp => 
      '    <div class="card-link" onclick="showPage(\\'specialty\\', \\'' + sp.id + '\\')">' +
      '      <div>' +
      '        <span class="tag good" style="margin-bottom:10px">' + sp.enName + '</span>' +
      '        <h3 style="margin:6px 0 10px">' + sp.name + '</h3>' +
      '        <p style="margin:0 0 14px;font-size:14px;color:var(--muted);line-height:1.6">' + sp.desc + '</p>' +
      '      </div>' +
      '      <div style="border-top:1px solid var(--line);padding-top:10px;font-weight:600;font-size:13.5px;color:var(--primary)">' +
      (lang === "ar" ? "تفاصيل الإجراء والمستندات ←" : "Procedure & Document Details →") +
      '      </div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</section>',

    '<hr class="rule">',

    // Section 3: Hospitals Preview
    '<section>',
    '  <div class="eyebrow">' + h.hospitalsEyebrow + '</div>',
    '  <h2 class="section-title">' + h.hospitalsTitle + '</h2>',
    '  <p class="section-intro">' + h.hospitalsIntro + '</p>',
    '  <div class="grid">',
    d().hospitalsSection.hospitals.map(hosp => 
      '    <div class="panel">' +
      '      <span class="tag good" style="margin-bottom:8px">' + hosp.accreditation + '</span>' +
      '      <h3 style="margin:8px 0">' + hosp.name + '</h3>' +
      '      <p style="font-size:14px;color:var(--muted);margin:0 0 12px">' + hosp.highlights + '</p>' +
      '      <div class="small" style="color:var(--ink);border-top:1px solid var(--line);padding-top:8px">📍 ' + hosp.location + '</div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '  <div style="margin-top:16px"><button class="btn quiet" onclick="showPage(\\'hospitals\\')">' + (lang === "ar" ? "استكشف دليل المستشفيات والاعتمادات ←" : "Explore Hospital Directory & Accreditations →") + '</button></div>',
    '</section>',

    '<hr class="rule">',

    // Section 4: Technology Preview
    '<section>',
    '  <div class="eyebrow">' + h.techEyebrow + '</div>',
    '  <h2 class="section-title">' + h.techTitle + '</h2>',
    '  <p class="section-intro">' + h.techIntro + '</p>',
    '  <div class="grid-2">',
    d().technologySection.categories.slice(0, 2).map(cat => 
      '    <div class="panel">' +
      '      <span class="tag warn" style="margin-bottom:8px">' + cat.manufacturers + '</span>' +
      '      <h3>' + cat.title + '</h3>' +
      '      <p style="margin:0;font-size:14px;color:var(--muted);line-height:1.6">' + cat.details + '</p>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '  <div style="margin-top:16px"><button class="btn quiet" onclick="showPage(\\'technology\\')">' + (lang === "ar" ? "قراءة معايير التقنيات والأجهزة المعتمدة ←" : "Read Technology & Device Standards →") + '</button></div>',
    '</section>',

    '<hr class="rule">',

    // Section 5: Journey Roadmap (8 Steps preview)
    '<section>',
    '  <div class="eyebrow">' + h.journeyEyebrow + '</div>',
    '  <h2 class="section-title">' + h.journeyTitle + '</h2>',
    '  <p class="section-intro">' + h.journeyIntro + '</p>',
    '  <div class="grid-2">',
    d().journeySection.steps.map(st => 
      '    <div class="step-box">' +
      '      <div class="step-num">' + st.step + '</div>' +
      '      <div class="step-content">' +
      '        <strong>' + st.title + '</strong>' +
      '        <p>' + st.desc + '</p>' +
      '      </div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</section>',

    '<hr class="rule">',

    // Section 6: Accommodation Preview
    '<section>',
    '  <div class="eyebrow">' + h.stayEyebrow + '</div>',
    '  <h2 class="section-title">' + h.stayTitle + '</h2>',
    '  <p class="section-intro">' + h.stayIntro + '</p>',
    '  <div class="grid">',
    d().accommodationSection.stayItems.map(item => 
      '    <div class="panel" style="display:flex;flex-direction:column;justify-content:space-between">' +
      '      <div>' +
      '        <span class="tag good" style="margin-bottom:8px">' + item.distance + '</span>' +
      '        <h3 style="margin:6px 0 10px">' + item.title + '</h3>' +
      '        <p style="font-size:14px;color:var(--muted);margin:0 0 12px">' + item.details + '</p>' +
      '      </div>' +
      '      <div style="border-top:1px solid var(--line);padding-top:12px">' +
      '        <strong style="color:var(--primary);display:block;margin-bottom:8px">' + item.price + '</strong>' +
      '        <button class="btn quiet" style="padding:6px 12px;font-size:13px;width:100%" onclick="showPage(\\'accommodation\\')">' + (lang === "ar" ? "تفاصيل الإقامة والمرافق" : "Accommodation Details") + '</button>' +
      '      </div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</section>',

    '<hr class="rule">',

    // Section 7: FAQs
    '<section>',
    '  <div class="eyebrow">' + h.faqEyebrow + '</div>',
    '  <h2 class="section-title">' + h.faqTitle + '</h2>',
    '  <p class="section-intro">' + h.faqIntro + '</p>',
    '  <div>',
    d().faqsSection.faqs.slice(0, 4).map(f => 
      '    <div class="faq-item">' +
      '      <div class="faq-header" onclick="toggleFaqItem(this)">' +
      '        <span>' + f.q + '</span>' +
      '        <span class="faq-icon" style="transition:transform 0.2s">▼</span>' +
      '      </div>' +
      '      <div class="faq-body">' + f.a + '</div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</section>',

    '<hr class="rule">',

    // Final CTA
    '<section class="panel" style="background:var(--soft);text-align:center;padding:40px 24px">',
    '  <h2 style="font-size:28px;margin:0 0 12px;color:var(--primary)">' + h.finalCtaTitle + '</h2>',
    '  <p style="max-width:640px;margin:0 auto 24px;font-size:16px;color:var(--muted)">' + h.finalCtaDesc + '</p>',
    '  <button class="btn" onclick="showPage(\\'assessment\\')">' + h.finalCtaBtn + '</button>',
    '</section>',

    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderSpecialtiesIndex() {
  const list = d().specialtiesList;
  return [
    '<div class="eyebrow">' + d().nav.specialties + '</div>',
    '<h1 class="section-title">' + (lang === "ar" ? "تخصصات جراحة وقسطرة القلب" : "Cardiac & Cardiothoracic Specialties") + '</h1>',
    '<p class="section-intro">' + (lang === "ar" ? "نغطي التخصصات الدقيقة في أمراض وجراحة القلب بإشراف كبار الاستشاريين في مصر. اختر التخصص للاطلاع على التفاصيل الكاملة." : "Covering specialized cardiology and cardiothoracic surgery disciplines led by senior consultants in Egypt. Select a specialty to explore full clinical details.") + '</p>',
    '<div class="grid">',
    list.map(sp => 
      '  <div class="card-link" onclick="showPage(\\'specialty\\', \\'' + sp.id + '\\')">' +
      '    <div>' +
      '      <span class="tag good" style="margin-bottom:8px">' + sp.enName + '</span>' +
      '      <h3 style="margin:6px 0 10px">' + sp.name + '</h3>' +
      '      <p style="font-size:14px;color:var(--muted);margin:0 0 14px;line-height:1.6">' + sp.desc + '</p>' +
      '    </div>' +
      '    <div style="border-top:1px solid var(--line);padding-top:10px;font-weight:600;font-size:13.5px;color:var(--primary)">' +
      (lang === "ar" ? "قراءة الدليل السريري والمستندات ←" : "Read Clinical Guide & Documents →") +
      '    </div>' +
      '  </div>'
    ).join(''),
    '</div>',
    '<div class="alert" style="margin-top:32px">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderSpecialtyDetail() {
  const sp = d().specialtiesList.find(x => x.id === selectedSpecialtyId) || d().specialtiesList[0];
  return [
    '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap">',
    '  <button class="btn quiet" style="padding:4px 10px;font-size:12px" onclick="showPage(\\'specialties\\')">← ' + (lang === "ar" ? "جميع التخصصات" : "All Specialties") + '</button>',
    '  <span class="tag good">' + sp.enName + '</span>',
    '</div>',
    '<h1 class="section-title">' + sp.name + '</h1>',
    '<p class="section-intro">' + sp.overview + '</p>',

    '<div class="columns">',
    '  <div>',
    '    <div class="panel" style="margin-bottom:24px">',
    '      <h3>' + (lang === "ar" ? "دواعي الإجراء والحالات المستفيدة" : "Clinical Indications") + '</h3>',
    '      <ul style="margin:0;padding-inline-start:20px;font-size:14.5px;color:var(--ink);line-height:1.75">',
    sp.indications.map(ind => '<li>' + ind + '</li>').join(''),
    '      </ul>',
    '    </div>',

    '    <div class="panel">',
    '      <h3>' + (lang === "ar" ? "التقارير والمستندات المطلوبة للمراجعة" : "Required Medical Reports") + '</h3>',
    '      <p style="font-size:13.5px;color:var(--muted);margin-bottom:12px">' + (lang === "ar" ? "تساعد هذه المستندات الفريق الجراحي على تقييم الحالة وصياغة الرأي المكتوب:" : "These reports assist the surgical board in forming an objective clinical opinion:") + '</p>',
    '      <ul style="margin:0;padding-inline-start:20px;font-size:14.5px;color:var(--ink);line-height:1.75">',
    sp.documentsRequired.map(doc => '<li>' + doc + '</li>').join(''),
    '      </ul>',
    '    </div>',
    '  </div>',

    '  <div>',
    '    <div class="panel" style="margin-bottom:24px">',
    '      <h3>' + (lang === "ar" ? "خطة التنسيق وفترة المكوث المقترحة" : "Coordination & Hospital Stay") + '</h3>',
    '      <p style="font-size:14.5px;color:var(--ink);line-height:1.65;margin:0 0 16px">' + sp.journeySummary + '</p>',
    '      <div class="notice" style="margin:0 0 16px">' + (lang === "ar" ? "يحدد الجراح المعالج إذن الطيران النهائي (Fit-to-Fly) بعد فحص ما قبل الخروج." : "The final Fit-to-Fly certificate is issued by the lead surgeon following discharge examination.") + '</div>',
    '      <button class="btn" style="width:100%" onclick="showPage(\\'assessment\\')">' + (lang === "ar" ? "اطلب تقييمًا لحالتك في هذا التخصص" : "Request Assessment for this Specialty") + '</button>',
    '    </div>',

    '    <div class="panel">',
    '      <h3>' + (lang === "ar" ? "أسئلة شائعة حول التخصص" : "Specialty FAQs") + '</h3>',
    sp.faqs.map(f => 
      '      <div style="margin-bottom:14px">' +
      '        <strong style="display:block;font-size:14px;color:var(--primary);margin-bottom:4px">Q: ' + f.q + '</strong>' +
      '        <p style="margin:0;font-size:13.5px;color:var(--muted)">' + f.a + '</p>' +
      '      </div>'
    ).join(''),
    '    </div>',
    '  </div>',
    '</div>',

    '<div class="alert" style="margin-top:24px">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderHospitals() {
  const hs = d().hospitalsSection;
  return [
    '<div class="eyebrow">' + hs.eyebrow + '</div>',
    '<h1 class="section-title">' + hs.title + '</h1>',
    '<p class="section-intro">' + hs.desc + '</p>',
    '<div class="notice">' + hs.disclaimer + '</div>',

    '<div class="grid" style="margin:24px 0">',
    hs.hospitals.map(hosp => 
      '  <div class="panel" style="display:flex;flex-direction:column;justify-content:space-between">' +
      '    <div>' +
      '      <span class="tag good" style="margin-bottom:8px">' + hosp.accreditation + '</span>' +
      '      <h3 style="margin:6px 0 4px">' + hosp.name + '</h3>' +
      '      <span class="small muted" style="display:block;margin-bottom:12px">' + hosp.type + '</span>' +
      '      <p style="font-size:14px;color:var(--ink);margin:0 0 14px;line-height:1.6">' + hosp.highlights + '</p>' +
      '      <div style="border-top:1px solid var(--line);padding-top:10px;margin-bottom:12px">' +
      '        <span class="small muted" style="display:block;font-weight:600;margin-bottom:4px">' + (lang === "ar" ? "التخصصات البارزة:" : "Prominent Specialties:") + '</span>' +
      '        <ul style="margin:0;padding-inline-start:18px;font-size:13px;color:var(--muted)">' +
      hosp.specialties.map(s => '<li>' + s + '</li>').join('') +
      '        </ul>' +
      '      </div>' +
      '    </div>' +
      '    <div style="border-top:1px solid var(--line);padding-top:10px;font-size:12.5px;color:var(--muted)">' +
      '      📍 ' + hosp.location +
      '    </div>' +
      '  </div>'
    ).join(''),
    '</div>',

    '<div class="panel" style="background:var(--soft);margin-top:24px">',
    '  <h3>' + hs.doctorsStandardTitle + '</h3>',
    '  <ul style="margin:0;padding-inline-start:20px;font-size:14.5px;color:var(--ink);line-height:1.8">',
    hs.doctorsStandards.map(std => '<li>' + std + '</li>').join(''),
    '  </ul>',
    '</div>',

    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderTechnology() {
  const ts = d().technologySection;
  return [
    '<div class="eyebrow">' + ts.eyebrow + '</div>',
    '<h1 class="section-title">' + ts.title + '</h1>',
    '<p class="section-intro">' + ts.desc + '</p>',
    '<div class="notice">' + ts.notice + '</div>',

    '<div class="grid-2" style="margin:24px 0">',
    ts.categories.map(cat => 
      '  <div class="panel">' +
      '    <span class="tag warn" style="margin-bottom:8px">' + cat.manufacturers + '</span>' +
      '    <h3 style="margin:6px 0 10px">' + cat.title + '</h3>' +
      '    <p style="margin:0;font-size:14.5px;color:var(--ink);line-height:1.65">' + cat.details + '</p>' +
      '  </div>'
    ).join(''),
    '</div>',

    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderJourney() {
  const js = d().journeySection;
  return [
    '<div class="eyebrow">' + js.eyebrow + '</div>',
    '<h1 class="section-title">' + js.title + '</h1>',
    '<p class="section-intro">' + js.desc + '</p>',

    '<div class="panel" style="margin:24px 0">',
    '  <div class="grid-2">',
    js.steps.map(st => 
      '    <div class="step-box">' +
      '      <div class="step-num">' + st.step + '</div>' +
      '      <div class="step-content">' +
      '        <strong>' + st.title + '</strong>' +
      '        <p>' + st.desc + '</p>' +
      '      </div>' +
      '    </div>'
    ).join(''),
    '  </div>',
    '</div>',

    '<div style="text-align:center;margin:32px 0">',
    '  <button class="btn" onclick="showPage(\\'assessment\\')">' + (lang === "ar" ? "ابدأ خطوتك الأولى واطلب تقييمًا طبيًا" : "Begin Your First Step: Request Medical Assessment") + '</button>',
    '</div>',

    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderAccommodation() {
  const as = d().accommodationSection;
  return [
    '<div class="eyebrow">' + as.eyebrow + '</div>',
    '<h1 class="section-title">' + as.title + '</h1>',
    '<p class="section-intro">' + as.desc + '</p>',

    '<div class="grid" style="margin-bottom:32px">',
    as.services.map(srv => 
      '  <div class="panel" style="margin-bottom:0">' +
      '    <h3 style="font-size:17px">' + srv.title + '</h3>' +
      '    <p style="margin:0;font-size:14px;color:var(--muted);line-height:1.6">' + srv.desc + '</p>' +
      '  </div>'
    ).join(''),
    '</div>',

    '<h2 class="section-title">' + (lang === "ar" ? "أماكن الإقامة الفندقية المجهزة" : "Curated Recovery Residences") + '</h2>',
    '<div class="grid">',
    as.stayItems.map(item => 
      '  <div class="panel" style="display:flex;flex-direction:column;justify-content:space-between">' +
      '    <div>' +
      '      <span class="tag good" style="margin-bottom:8px">' + item.distance + '</span>' +
      '      <h3 style="margin:6px 0 10px">' + item.title + '</h3>' +
      '      <p style="font-size:14px;color:var(--ink);margin:0 0 12px;line-height:1.6">' + item.details + '</p>' +
      '      <div style="border-top:1px solid var(--line);padding-top:10px;margin-bottom:12px">' +
      '        <span class="small muted" style="display:block;font-weight:600;margin-bottom:4px">' + (lang === "ar" ? "المزايا والتجهيزات:" : "Inclusions:") + '</span>' +
      '        <span class="small" style="color:var(--muted)">' + item.amenities + '</span>' +
      '      </div>' +
      '    </div>' +
      '    <div style="border-top:1px solid var(--line);padding-top:10px">' +
      '      <strong style="color:var(--primary);display:block;margin-bottom:8px">' + item.price + '</strong>' +
      '      <button class="btn quiet" style="width:100%;font-size:13px" onclick="showPage(\\'assessment\\')">' + (lang === "ar" ? "طلب حجز ضمن الباقة (معاينة)" : "Request in Package (Preview)") + '</button>' +
      '    </div>' +
      '  </div>'
    ).join(''),
    '</div>',

    '<div class="notice" style="margin-top:20px">' + as.stayNotice + '</div>',
    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderAssessment() {
  const isAr = (lang === "ar");
  return [
    '<div class="columns">',
    '  <section>',
    '    <div class="eyebrow">' + (isAr ? "طلب تقييم مبدئي" : "Initial Assessment") + '</div>',
    '    <h1 class="section-title">' + (isAr ? "طلب تقييم طبي أولي ودراسة الملف" : "Request an Initial Medical Assessment") + '</h1>',
    '    <p class="section-intro">' + (isAr ? "شارك بيانات التواصل الأساسية. لا ترفع بيانات سريرية بالغة الحساسية عبر هذا النموذج الأولي. سيتواصل معك المنسق لترتيب القناة الآمنة." : "Start with basic contact details. Do not upload sensitive health data in this initial web form. Your dedicated coordinator will arrange an encrypted channel.") + '</p>',
    '    <div class="alert">' + d().emergency + '</div>',
    '    <div class="notice">' + (isAr ? "نموذج تجريبي فقط — لا يتم حفظ أو إرسال أي بيانات شخصية." : "Demonstration mockup only — no personal or medical data is submitted.") + '</div>',
    '  </section>',

    '  <form class="panel" onsubmit="event.preventDefault();document.getElementById(\\'demoMsg\\').classList.remove(\\'hidden\\')">',
    '    <div class="field">',
    '      <label>' + (isAr ? "الاسم الكامل للمريض" : "Patient Full Name") + ' *</label>',
    '      <input required placeholder="' + (isAr ? "مثال: عبد الله أحمد" : "e.g. John Smith") + '">',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "بلد الإقامة" : "Country of Residence") + ' *</label>',
    '      <select>',
    (isAr ? [
      "المملكة العربية السعودية",
      "الإمارات العربية المتحدة",
      "دولة الكويت",
      "سلطنة عُمان",
      "دولة قطر",
      "مملكة البحرين",
      "بلد آخر"
    ] : [
      "Saudi Arabia",
      "United Arab Emirates",
      "Kuwait",
      "Oman",
      "Qatar",
      "Bahrain",
      "Other Country"
    ]).map(c => '<option>' + c + '</option>').join(''),
    '      </select>',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "رقم الهاتف أو واتساب (مع مفتاح الدولة)" : "Phone / WhatsApp (with country code)") + ' *</label>',
    '      <input required placeholder="+966 50 123 4567">',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "التخصص أو الإجراء المطلوب" : "Requested Specialty or Procedure") + '</label>',
    '      <select>',
    d().specialtiesList.map(s => '<option>' + s.name + '</option>').join(''),
    '        <option>' + (isAr ? "غير متأكد — بناءً على دراسة التقرير" : "Not sure — based on clinical review") + '</option>',
    '      </select>',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "احتياجات المرافق والإقامة" : "Companion & Stay Requirements") + '</label>',
    '      <select>',
    (isAr ? [
      "مرافق واحد — جناح فندقي مجهز",
      "أكثر من مرافق — شقة فندقية عائلية",
      "المريض بمفرده — طلب مرافقة تمريضية"
    ] : [
      "1 Companion — Shared Recovery Suite",
      "Family (2+ companions) — Family Apartment",
      "Patient solo — Medical nurse escort requested"
    ]).map(o => '<option>' + o + '</option>').join(''),
    '      </select>',
    '    </div>',
    '    <label style="display:flex;gap:10px;align-items:flex-start;font-size:13.5px;margin:16px 0">',
    '      <input type="checkbox" required style="margin-top:4px"> ' + (isAr ? "أوافق على التواصل معي بشأن طلبي واطلعت على سياسة الخصوصية." : "I agree to be contacted regarding my case and have reviewed the privacy policy."),
    '    </label>',
    '    <button class="btn" type="submit">' + (isAr ? "معاينة إرسال الطلب" : "Preview Request Submission") + '</button>',
    '    <p id="demoMsg" class="alert hidden" style="margin-top:14px">' + (isAr ? "هذه معاينة تجريبية فقط: لم يتم حفظ أو نقل أي بيانات إلى أي خادم." : "This is a preview mockup only: no live case created and no data transmitted.") + '</p>',
    '  </form>',
    '</div>'
  ].join("\\n");
}

function renderFaqsPage() {
  const fs = d().faqsSection;
  return [
    '<div class="eyebrow">' + fs.eyebrow + '</div>',
    '<h1 class="section-title">' + fs.title + '</h1>',
    '<p class="section-intro">' + fs.intro + '</p>',

    '<div class="panel" style="margin:24px 0">',
    fs.faqs.map(f => 
      '    <div class="faq-item">' +
      '      <div class="faq-header" onclick="toggleFaqItem(this)">' +
      '        <span>' + f.q + '</span>' +
      '        <span class="faq-icon" style="transition:transform 0.2s">▼</span>' +
      '      </div>' +
      '      <div class="faq-body">' + f.a + '</div>' +
      '    </div>'
    ).join(''),
    '  </div>',

    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderAbout() {
  const ab = d().aboutPage;
  return [
    '<div class="eyebrow">' + ab.eyebrow + '</div>',
    '<h1 class="section-title">' + ab.title + '</h1>',
    '<p class="section-intro">' + ab.desc + '</p>',

    '<div class="panel" style="margin-bottom:24px">',
    '  <h3>' + ab.missionTitle + '</h3>',
    '  <p style="font-size:15px;color:var(--ink);line-height:1.75;margin:0">' + ab.mission + '</p>',
    '</div>',

    '<div class="grid">',
    ab.features.map(f => 
      '  <div class="panel" style="margin-bottom:0">' +
      '    <h3>' + f.title + '</h3>' +
      '    <p style="margin:0;font-size:14px;color:var(--muted);line-height:1.6">' + f.text + '</p>' +
      '  </div>'
    ).join(''),
    '</div>',

    '<div class="alert" style="margin-top:32px">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderContact() {
  const cp = d().contactPage;
  const isAr = (lang === "ar");
  return [
    '<div class="eyebrow">' + cp.eyebrow + '</div>',
    '<h1 class="section-title">' + cp.title + '</h1>',
    '<p class="section-intro">' + cp.desc + '</p>',

    '<div class="columns">',
    '  <div>',
    '    <div class="panel" style="margin-bottom:20px">',
    '      <span class="small muted" style="display:block;font-weight:600">' + cp.phoneLabel + '</span>',
    '      <strong style="font-size:18px;display:block;margin:4px 0" dir="ltr">' + cp.phone + '</strong>',
    '      <span class="small" style="color:var(--muted)">' + (isAr ? "متاح على مدار الساعة للمرضى والمرافقين" : "Available 24/7 for patient and companion inquiries") + '</span>',
    '    </div>',

    '    <div class="panel" style="margin-bottom:20px">',
    '      <span class="small muted" style="display:block;font-weight:600">' + cp.emailLabel + '</span>',
    '      <strong style="font-size:16px;display:block;margin:4px 0">' + cp.email + '</strong>',
    '      <span class="small" style="color:var(--muted)">' + (isAr ? "لاستقبال التقارير الطبية واستفسارات التنسيق" : "For medical file summaries and coordination queries") + '</span>',
    '    </div>',

    '    <div class="panel">',
    '      <span class="small muted" style="display:block;font-weight:600">' + cp.addressLabel + '</span>',
    '      <strong style="font-size:16px;display:block;margin:4px 0">' + cp.address + '</strong>',
    '      <span class="small" style="color:var(--muted)">' + (isAr ? "بالقرب من المستشفيات الشريكة" : "Strategically located near partner cardiac centers") + '</span>',
    '    </div>',
    '  </div>',

    '  <form class="panel" onsubmit="event.preventDefault();alert(\\'' + (isAr ? "هذه معاينة تجريبية فقط." : "Demonstration mockup only.") + '\\')">',
    '    <h3>' + cp.formTitle + '</h3>',
    '    <div class="field">',
    '      <label>' + (isAr ? "الاسم" : "Name") + '</label>',
    '      <input required placeholder="' + (isAr ? "الاسم الكامل" : "Full name") + '">',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "الهاتف أو البريد" : "Phone or Email") + '</label>',
    '      <input required placeholder="' + (isAr ? "رقم الاتصال" : "Contact details") + '">',
    '    </div>',
    '    <div class="field">',
    '      <label>' + (isAr ? "الرسالة أو الاستفسار" : "Message") + '</label>',
    '      <textarea required placeholder="' + (isAr ? "اكتب تفاصيل استفسارك هنا..." : "Type your query here...") + '"></textarea>',
    '    </div>',
    '    <button class="btn" type="submit">' + cp.sendBtn + '</button>',
    '  </form>',
    '</div>',

    '<div class="alert" style="margin-top:24px">' + d().emergency + '</div>'
  ].join("\\n");
}

function renderPrivacy() {
  const pp = d().privacyPage;
  return [
    '<div class="eyebrow">' + pp.eyebrow + '</div>',
    '<h1 class="section-title">' + pp.title + '</h1>',
    '<p class="section-intro">' + pp.intro + '</p>',
    '<div class="panel">',
    pp.sections.map(s => 
      '  <div style="margin-bottom:20px">' +
      '    <h3 style="font-size:17px;margin:0 0 6px">' + s.title + '</h3>' +
      '    <p style="margin:0;font-size:14.5px;color:var(--muted);line-height:1.7">' + s.body + '</p>' +
      '  </div>'
    ).join(''),
    '</div>'
  ].join("\\n");
}

function renderTerms() {
  const tp = d().termsPage;
  return [
    '<div class="eyebrow">' + tp.eyebrow + '</div>',
    '<h1 class="section-title">' + tp.title + '</h1>',
    '<p class="section-intro">' + tp.intro + '</p>',
    '<div class="panel">',
    tp.sections.map(s => 
      '  <div style="margin-bottom:20px">' +
      '    <h3 style="font-size:17px;margin:0 0 6px">' + s.title + '</h3>' +
      '    <p style="margin:0;font-size:14.5px;color:var(--muted);line-height:1.7">' + s.body + '</p>' +
      '  </div>'
    ).join(''),
    '</div>'
  ].join("\\n");
}

function renderPortal() {
  const p = portalData[lang];
  return [
    '<div class="eyebrow">' + p.title + '</div>',
    '<h1 class="section-title">' + p.title + '</h1>',
    '<p class="section-intro">' + p.desc + '</p>',
    
    '<div class="statrow">',
    '  <div class="stat"><span>' + p.current + '</span><b>' + p.inReview + '</b></div>',
    '  <div class="stat"><span>' + p.next + '</span><b>' + p.nextVal + '</b></div>',
    '  <div class="stat"><span>' + p.documents + '</span><b>' + p.docsVal + '</b></div>',
    '  <div class="stat"><span>' + p.messages + '</span><b>' + p.messagesVal + '</b></div>',
    '</div>',
    
    '<div class="columns">',
    '  <div class="panel">',
    '    <h3>' + p.next + '</h3>',
    '    <p style="line-height:1.6;font-size:14.5px;color:var(--ink)">' + p.nextDesc + '</p>',
    '    <button class="btn secondary" onclick="showPage(\\'journey\\')">' + p.journeyBtn + '</button>',
    '  </div>',
    '  <div class="panel">',
    '    <h3>' + p.companion + '</h3>',
    '    <p style="line-height:1.6;font-size:14.5px;color:var(--ink)">' + p.companionDesc + '</p>',
    '    <button class="btn quiet" onclick="alert(\\'' + (lang === "ar" ? "معاينة دعوة مرافق — بدون اتصال بخادم." : "Preview companion invite — mockup only.") + '\\')">' + p.companionBtn + '</button>',
    '  </div>',
    '</div>'
  ].join("\\n");
}

function renderOps() {
  const o = opsData[lang];
  const section = o.sections[opsSection];
  let detail = '';

  if (opsSection === 0) {
    detail = [
      '<h3>' + o.case + '</h3>',
      '<div class="mini-grid">',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "معرّف الحالة" : "Case ID") + '</label><input value="' + o.caseId + '" readonly></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "منسق الحالة" : "Coordinator") + '</label><select>' + o.coordinators.map(c => '<option>' + c + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "الأولوية" : "Priority") + '</label><select>' + o.priorities.map(p => '<option>' + p + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "آخر تحديث" : "Last Updated") + '</label><input value="—" readonly></div>',
      '</div>',
      '<hr class="rule">',
      '<h3>' + o.caseStageLabel + '</h3>',
      '<p><span class="tag warn">' + o.stages[caseStage] + '</span></p>',
      '<div class="progress"><span style="width:' + Math.round((caseStage + 1) / o.stages.length * 100) + '%"></span></div>',
      '<div class="workspace-actions">',
      '  <button class="btn" onclick="advanceCase()">' + o.advance + '</button>',
      '  <button onclick="resetCase()">' + o.reset + '</button>',
      '</div>',
      '<div id="opsNotice" class="notice">' + o.stageGuard + '</div>'
    ].join("\\n");
  } else if (opsSection === 1) {
    detail = [
      '<h3>' + section + '</h3>',
      '<div class="mini-grid">',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "حالة المستندات" : "Document Completeness") + '</label><select>' + o.fileStatuses.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "المراجع المخوّل" : "Authorized Reviewer") + '</label><select>' + o.reviewers.map(r => '<option>' + r + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "حالة المراجعة" : "Review Status") + '</label><select>' + o.reviewStatuses.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "الملفات المرفقة" : "Attached Files") + '</label><input value="' + (lang === "ar" ? "لا توجد ملفات مرفقة" : "No files attached") + '" readonly></div>',
      '</div>',
      '<div class="alert">' + o.clinicalGate + '</div>',
      '<div class="notice">' + o.demoOnly + '</div>'
    ].join("\\n");
  } else if (opsSection === 2) {
    detail = [
      '<h3>' + section + '</h3>',
      '<div class="mini-grid">',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "حالة مقدم الخدمة" : "Provider Status") + '</label><select>' + o.providerStatuses.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "حالة العرض" : "Quotation Status") + '</label><select>' + o.quoteStatuses.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "العملة" : "Currency") + '</label><select><option>EGP</option><option>USD</option><option>SAR</option><option>AED</option></select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "صلاحية العرض" : "Quote Expiry") + '</label><input type="date"></div>',
      '</div>',
      '<div class="notice">' + (lang === "ar" ? "يجب الإفصاح عن علاقة الشركة بالمستشفى وتوضيح ما يُدفع لكل جهة." : "Commercial relationships must be disclosed.") + '</div>'
    ].join("\\n");
  } else if (opsSection === 3) {
    detail = [
      '<h3>' + section + '</h3>',
      '<div class="mini-grid">',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "حالة الحجز" : "Booking Status") + '</label><select>' + o.bookingStatuses.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "تاريخ الوصول" : "Arrival Date") + '</label><input type="date"></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "الإقامة الفندقية" : "Accommodation") + '</label><select>' + o.stays.map(s => '<option>' + s + '</option>').join('') + '</select></div>',
      '  <div class="mini-field"><label>' + (lang === "ar" ? "الانتقالات الطبية" : "Medical Transfers") + '</label><select>' + o.transfers.map(t => '<option>' + t + '</option>').join('') + '</select></div>',
      '</div>',
      '<h4 style="margin:16px 0 8px">' + o.readinessTitle + '</h4>',
      o.checks.map(chk => '<label style="display:block;margin-bottom:6px"><input type="checkbox"> ' + chk + '</label>').join(''),
      '<div class="alert">' + o.clinicalGate + '</div>'
    ].join("\\n");
  } else if (opsSection === 4) {
    detail = [
      '<h3>' + section + '</h3>',
      '<p>' + financeData[lang].desc + '</p>',
      '<button class="btn secondary" onclick="showPage(\\'finance\\')">' + financeData[lang].title + '</button>',
      '<div class="notice">' + (lang === "ar" ? "تُسجل مدفوعات المستشفى وتسويات الموردين بشكل منفصل." : "Hospital payments and supplier settlements are recorded separately.") + '</div>'
    ].join("\\n");
  } else {
    detail = [
      '<h3>' + o.auditTitle + '</h3>',
      '<div class="timeline">' + o.auditItems.map((x, i) => 
        '<div class="event ' + (i ? 'pending' : '') + '"><h4>' + x + '</h4><p>' + (lang === "ar" ? "سجل توضيحي غير قابل للاعتماد" : "Illustrative, non-authoritative entry") + '</p></div>'
      ).join('') + '</div>',
      '<div class="notice">' + o.demoOnly + '</div>'
    ].join("\\n");
  }

  return [
    '<div class="eyebrow">' + o.title + '</div>',
    '<h1 class="section-title">' + o.title + '</h1>',
    '<p class="section-intro">' + o.desc + '</p>',
    '<div class="layout">',
    '  <aside class="side">',
    o.sections.map((x, i) => 
      '    <button class="' + (i === opsSection ? 'active' : '') + '" onclick="selectOpsSide(' + i + ')">' + x + '</button>'
    ).join(''),
    '  </aside>',
    '  <section>',
    '    <div class="panel">',
    '      <div class="head" style="padding-top:0">',
    '        <div>',
    '          <div class="eyebrow">' + section + '</div>',
    '          <span class="muted small">' + o.caseId + '</span>',
    '        </div>',
    '        <span class="tag warn">' + o.status + '</span>',
    '      </div>',
    detail,
    '      <div class="workspace-actions">',
    '        <button onclick="showPage(\\'finance\\')">' + financeData[lang].title + '</button>',
    '        <button onclick="showPage(\\'journey\\')">' + d().nav.journey + '</button>',
    '      </div>',
    '    </div>',
    '  </section>',
    '</div>'
  ].join("\\n");
}

function renderFinance() {
  const f = financeData[lang];
  const isAr = (lang === "ar");
  const total = f.tableRows.reduce((acc, r) => acc + r[2], 0);

  return [
    '<div class="eyebrow">' + f.title + '</div>',
    '<h1 class="section-title">' + f.title + '</h1>',
    '<p class="section-intro">' + f.desc + '</p>',

    // Currency Switcher
    '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px">',
    '  <div style="display:flex;align-items:center;gap:6px">',
    '    <span style="font-size:13px;font-weight:600">' + (isAr ? "العملة المعروضة:" : "Display Currency:") + '</span>',
    Object.keys(currencyRates).map(c => 
      '    <button class="themebtn ' + (activeCurrency === c ? 'active' : '') + '" onclick="setCurrency(\\'' + c + '\\')">' + c + '</button>'
    ).join(''),
    '  </div>',
    '  <button class="btn quiet" style="padding:6px 14px;font-size:13px" onclick="toggleFinanceDemo()">' + (financeDemo ? f.demoBtnHide : f.demoBtnShow) + '</button>',
    '</div>',

    financeDemo ? [
      '<div class="statrow">',
      '  <div class="stat"><span>' + f.revTitle + '</span><b>' + formatCurr(total) + '</b></div>',
      '  <div class="stat"><span>' + f.directHosp + '</span><b>' + formatCurr(135000) + '</b></div>',
      '  <div class="stat"><span>' + f.stayTransport + '</span><b>' + formatCurr(15450) + '</b></div>',
      '  <div class="stat"><span>' + f.coordinationFee + '</span><b>' + formatCurr(18500) + '</b></div>',
      '</div>',

      '<div class="table-wrap">',
      '  <table>',
      '    <thead><tr>' + f.tableHead.map(h => '<th>' + h + '</th>').join('') + '</tr></thead>',
      '    <tbody>',
      f.tableRows.map(row => 
        '      <tr>' +
        '        <td><strong>' + row[0] + '</strong></td>' +
        '        <td>' + row[1] + '</td>' +
        '        <td><strong style="color:var(--primary)">' + formatCurr(row[2]) + '</strong></td>' +
        '        <td><span class="tag ' + (row[3].includes("مباشر") || row[3].includes("Direct") ? "good" : "warn") + '">' + row[3] + '</span></td>' +
        '      </tr>'
      ).join(''),
      '    </tbody>',
      '  </table>',
      '</div>'
    ].join("\\n") : '<div class="notice">' + f.note + '</div>',

    '<div class="notice" style="margin-top:16px">' + f.currencyNotice + ' · ' + f.demoLabel + '</div>',
    '<div class="alert">' + d().emergency + '</div>'
  ].join("\\n");
}

/* Master Nav & Header Render */
function renderNav() {
  const n = d().nav;
  const isAr = (lang === "ar");

  const navHtml = [
    '<button class="nav-btn ' + (activePage === "home" ? "active" : "") + '" onclick="showPage(\\'home\\')">' + n.home + '</button>',

    // Dropdown for specialties
    '<div class="dropdown-wrap">',
    '  <button class="nav-btn ' + (activePage.startsWith("specialt") ? "active" : "") + '" onclick="this.nextElementSibling.classList.toggle(\\'show\\')">',
    n.specialties + ' ▾',
    '  </button>',
    '  <div class="dropdown-menu">',
    '    <a href="javascript:void(0)" class="dropdown-item" onclick="showPage(\\'specialties\\')"><strong>' + (isAr ? "فهرس جميع التخصصات" : "All Specialties Overview") + '</strong></a>',
    d().specialtiesList.map(s => 
      '    <a href="javascript:void(0)" class="dropdown-item" onclick="showPage(\\'specialty\\', \\'' + s.id + '\\')">' + s.name + '</a>'
    ).join(''),
    '  </div>',
    '</div>',

    '<button class="nav-btn ' + (activePage === "hospitals" ? "active" : "") + '" onclick="showPage(\\'hospitals\\')">' + n.hospitals + '</button>',
    '<button class="nav-btn ' + (activePage === "technology" ? "active" : "") + '" onclick="showPage(\\'technology\\')">' + n.technology + '</button>',
    '<button class="nav-btn ' + (activePage === "journey" ? "active" : "") + '" onclick="showPage(\\'journey\\')">' + n.journey + '</button>',
    '<button class="nav-btn ' + (activePage === "accommodation" ? "active" : "") + '" onclick="showPage(\\'accommodation\\')">' + n.accommodation + '</button>',
    '<button class="nav-btn ' + (activePage === "assessment" ? "active" : "") + '" onclick="showPage(\\'assessment\\')">' + n.assessment + '</button>',
    '<button class="nav-btn ' + (activePage === "portal" ? "active" : "") + '" onclick="showPage(\\'portal\\')">' + n.portal + '</button>',
    '<button class="nav-btn ' + (activePage === "ops" ? "active" : "") + '" onclick="showPage(\\'ops\\')">' + n.ops + '</button>',
    '<button class="nav-btn ' + (activePage === "finance" ? "active" : "") + '" onclick="showPage(\\'finance\\')">' + n.finance + '</button>'
  ].join('');

  document.getElementById("navLinksContainer").innerHTML = navHtml;
  document.getElementById("mobileMenuBtn").textContent = (isAr ? "القائمة الرئيسية ☰" : "Main Navigation ☰");
}

/* Master Footer Render */
function renderFooter() {
  const n = d().nav;
  const isAr = (lang === "ar");

  const footerHtml = [
    '<div class="footer-grid">',
    '  <div class="footer-col">',
    '    <h5>' + d().brandName + '</h5>',
    '    <p style="margin:0 0 12px;line-height:1.6">' + (isAr ? "منصة تنسيق متخصصة في جراحات وقسطرة القلب في مصر، تربط المرضى الدوليين بأبرز المستشفيات المعتمدة وتقدم خدمات الضيافة والنقل المتكاملة." : "Specialized coordination platform for cardiac surgery and cardiology in Egypt, bridging international patients with accredited hospitals, recovery suites, and comprehensive travel logistics.") + '</p>',
    '    <span class="small muted">© 2026 ' + d().brandName + '. ' + (isAr ? "جميع الحقوق محفوظة." : "All rights reserved.") + '</span>',
    '  </div>',

    '  <div class="footer-col">',
    '    <h5>' + (isAr ? "التخصصات الجراحية" : "Cardiac Specialties") + '</h5>',
    d().specialtiesList.map(s => 
      '    <a href="javascript:void(0)" onclick="showPage(\\'specialty\\', \\'' + s.id + '\\')">' + s.name + '</a>'
    ).join(''),
    '  </div>',

    '  <div class="footer-col">',
    '    <h5>' + (isAr ? "الخدمات والرحلة" : "Services & Journey") + '</h5>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'hospitals\\')">' + n.hospitals + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'technology\\')">' + n.technology + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'journey\\')">' + n.journey + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'accommodation\\')">' + n.accommodation + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'assessment\\')">' + n.assessment + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'portal\\')">' + n.portal + '</a>',
    '  </div>',

    '  <div class="footer-col">',
    '    <h5>' + (isAr ? "معلومات والسياسات" : "Information & Legal") + '</h5>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'about\\')">' + n.about + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'contact\\')">' + n.contact + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'faqs\\')">' + n.faqs + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'privacy\\')">' + n.privacy + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'terms\\')">' + n.terms + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'ops\\')">' + n.ops + '</a>',
    '    <a href="javascript:void(0)" onclick="showPage(\\'finance\\')">' + n.finance + '</a>',
    '  </div>',
    '</div>',

    '<div class="footer-bottom">',
    '  <span>' + d().footerNote + '</span>',
    '  <span>' + (isAr ? "IBM Plex Sans Arabic · Readex Pro · Noto Kufi Arabic" : "IBM Plex Sans · Editorial System Typography") + '</span>',
    '</div>'
  ].join('');

  document.getElementById("mainFooter").innerHTML = footerHtml;
}

/* Main Master Render */
function render() {
  const cur = d();
  document.getElementById("topLabel").textContent = cur.topLabel;
  document.getElementById("brandName").textContent = cur.brandName;
  document.getElementById("brandSub").textContent = cur.brandSub;
  document.getElementById("modeTag").textContent = cur.modeTag;
  document.getElementById("headerCta").textContent = cur.headerCta;
  document.getElementById("langBtn").textContent = (lang === "ar" ? "English" : "العربية");
  document.getElementById("nileBtn").textContent = (lang === "ar" ? "أخضر النيل" : "Nile Green");
  document.getElementById("editorialBtn").textContent = (lang === "ar" ? "تحريري طبي" : "Medical Editorial");

  renderNav();
  renderFooter();

  const views = {
    home: renderHome,
    specialties: renderSpecialtiesIndex,
    specialty: renderSpecialtyDetail,
    hospitals: renderHospitals,
    technology: renderTechnology,
    journey: renderJourney,
    accommodation: renderAccommodation,
    assessment: renderAssessment,
    about: renderAbout,
    contact: renderContact,
    faqs: renderFaqsPage,
    privacy: renderPrivacy,
    terms: renderTerms,
    portal: renderPortal,
    ops: renderOps,
    finance: renderFinance
  };

  const renderFn = views[activePage] || renderHome;
  document.getElementById("content").innerHTML = renderFn();
}

// Initial render
render();
`;

// Now let's assemble the final self-contained Platform-Mockup.html
let htmlTemplate = fs.readFileSync('Platform-Mockup.html', 'utf8');
// Replace the external script tag with inline script using replacer function
htmlTemplate = htmlTemplate.replace('<script src="./support_mockup.js"></script>', () => '<script>\n' + scriptLogic + '\n</script>');

fs.writeFileSync('Platform-Mockup.html', htmlTemplate, 'utf8');
console.log('Platform-Mockup.html successfully generated and self-contained!');
