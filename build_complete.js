const fs = require('fs');

const arData = {
  brandName: "رعاية القلب · مصر",
  brandSub: "CARDIAC CARE & ACCOMMODATION",
  top: "معاينة تفاعلية — بيانات توضيحية فقط",
  mode: "نسخة تجريبية",
  cta: "اطلب تقييمًا طبيًا أوليًا",
  footerNote: "موكاب للتصميم واختبار سير العمل؛ لا يرسل بيانات ولا يمثل نظامًا طبيًا حقيقيًا.",
  emergency: "إذا كنت تعاني من ألم حاد في الصدر أو أعراض طارئة، اتصل بخدمات الطوارئ المحلية فورًا.",
  nav: {
    home: "الموقع العام",
    specialties: "التخصصات الجراحية",
    hospitals: "المستشفيات والأطباء",
    technology: "التقنيات الطبية",
    journey: "مسار الرحلة",
    accommodation: "الإقامة والسفر",
    assessment: "طلب تقييم طبي",
    portal: "بوابة المريض",
    ops: "النظام التشغيلي",
    finance: "المالية والتكاليف",
    about: "عن المنصة",
    contact: "تواصل معنا",
    faqs: "الأسئلة الشائعة",
    privacy: "سياسة الخصوصية",
    terms: "الشروط والأحكام"
  }
};

const enData = {
  brandName: "CARDIAC CARE EGYPT",
  brandSub: "CARDIAC CARE & ACCOMMODATION",
  top: "Interactive preview — illustrative data only",
  mode: "Prototype",
  cta: "Request an Initial Medical Assessment",
  footerNote: "Design and workflow mockup only; it does not submit data or represent a live medical system.",
  emergency: "If you have severe chest pain or other emergency symptoms, contact local emergency services immediately.",
  nav: {
    home: "Public Website",
    specialties: "Surgical Specialties",
    hospitals: "Hospitals & Doctors",
    technology: "Medical Technology",
    journey: "Patient Journey",
    accommodation: "Travel & Stay",
    assessment: "Medical Assessment",
    portal: "Patient Portal",
    ops: "Operations Hub",
    finance: "Finance & Margin",
    about: "About Us",
    contact: "Contact",
    faqs: "FAQs",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  }
};

console.log('Building full script...');
