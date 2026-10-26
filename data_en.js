module.exports = {
  langCode: "en",
  dir: "ltr",
  brandName: "CARDIAC CARE EGYPT",
  brandSub: "CARDIAC CARE & ACCOMMODATION",
  topLabel: "Interactive preview — illustrative data only",
  modeTag: "Prototype",
  headerCta: "Request an Initial Medical Assessment",
  footerNote: "Design and workflow mockup only; it does not submit data or represent a live medical system.",
  emergency: "Medical emergency? If you have severe chest pain or shortness of breath, contact local emergency services immediately and do not wait for this website.",
  
  nav: {
    home: "Public Website",
    specialties: "Cardiac Specialties",
    hospitals: "Hospitals & Doctors",
    technology: "Medical Technology",
    journey: "Patient Journey",
    accommodation: "Travel & Stay",
    assessment: "Assessment Request",
    portal: "Patient Portal",
    ops: "Operations Hub",
    finance: "Finance & Margin",
    about: "About Us",
    contact: "Contact",
    faqs: "FAQs",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions"
  },

  home: {
    eyebrow: "An initial medical review, with no commitment to travel",
    heroTitle: "Share your medical reports and understand your options before deciding to travel",
    heroDesc: "A specialized cardiac team in Egypt reviews your file and provides written preliminary feedback and clear treatment options. There is no fee for this step. If you choose to proceed, our team coordinates clinical care, hospital-adjacent recovery suites, and transport through your safe return.",
    ctaPrimary: "Request an Initial Medical Assessment",
    ctaSecondary: "Explore Specialties & Options",
    heroArtBadge: "CARDIAC CARE · EGYPT",
    heroArtTitle: "A clearer journey, starting with thorough clinical review.",
    heroArtSub: "Coordinating clinical care, recovery suites and travel around each patient's individual needs.",
    heroArtNote: "01 / 05 — Clinical review before any financial commitment",
    
    coordinationEyebrow: "Our Role in Your Journey",
    coordinationTitle: "Dedicated Coordination Centered on Safety and Transparency",
    coordinationDesc: "We are a specialized coordination team for cardiac medical travel and recovery in Egypt. We do not make independent medical decisions; instead, we connect you with verified senior cardiac surgeons, accredited hospitals, and seamless travel logistics.",
    coordinationPillars: [
      { num: "01", title: "Thorough File Review", text: "We verify document completeness and forward your diagnostic reports to our surgical review board with zero preliminary assessment fees." },
      { num: "02", title: "Transparent Pricing", text: "Clear written quotations detailing hospital inpatient fees separately from accommodation and coordination services, with no hidden margins." },
      { num: "03", title: "Recovery Hospitality", text: "Hospital-adjacent hotel suites and serviced residences equipped for post-procedure cardiac recovery, with companion rooms and nursing support." },
      { num: "04", title: "Dedicated Personal Care", text: "A named coordinator greets you at the airport, assists with hospital administration, and remains your point of contact through your safe return home." }
    ],

    specialtiesEyebrow: "Surgical Disciplines",
    specialtiesTitle: "Seven Specialized Cardiac Disciplines",
    specialtiesIntro: "Select the specialty closest to your clinical diagnosis to review procedure details, required reports, and coordination milestones.",

    hospitalsEyebrow: "Hospitals & Medical Professionals",
    hospitalsTitle: "Accredited Heart Centers and Leading Cardiac Surgeons",
    hospitalsIntro: "We work exclusively with internationally accredited hospitals (JCI and GAHAR certified) and surgeons holding verified UK, US, or European fellowships.",

    techEyebrow: "Clinical Infrastructure",
    techTitle: "Advanced Cardiac Technology & Global Device Manufacturers",
    techIntro: "Our partner centers utilize state-of-the-art hybrid operating rooms, advanced catheterization laboratories, and certified medical devices from established global manufacturers.",

    journeyEyebrow: "How the Journey Works",
    journeyTitle: "An 8-Stage Pathway from Initial Inquiry Through Safe Return",
    journeyIntro: "Every milestone is clearly defined with clinical reviews and dedicated logistical oversight to ensure complete safety and peace of mind.",

    stayEyebrow: "Logistics & Hospitality",
    stayTitle: "Where You and Your Companion Will Stay in Cairo",
    stayIntro: "Curated recovery suites and serviced residences minutes away from partner hospitals in 6th of October, Maadi, and New Cairo.",

    faqEyebrow: "Common Concerns Answered",
    faqTitle: "Common Patient Concerns, Answered with Total Clarity",
    faqIntro: "Traveling abroad for cardiac treatment is a major decision. We provide upfront, transparent answers before you commit.",

    finalCtaTitle: "Ready to Understand Your Treatment Options?",
    finalCtaDesc: "Submit your basic contact information and existing reports. Our case coordinator will reach out promptly to outline next steps with zero obligation.",
    finalCtaBtn: "Request an Initial Medical Assessment Now"
  },

  specialtiesList: [
    {
      id: "interventional",
      name: "Interventional Cardiology & Stents",
      enName: "Interventional Cardiology",
      desc: "Coronary angiography, balloon angioplasty, and drug-eluting stent placement with rapid recovery and minimal hospital stay.",
      overview: "Interventional cardiology provides catheter-based evaluation and revascularization of narrowed or blocked coronary arteries without the need for open-chest surgery. Performed predominantly via transradial (wrist) access, offering rapid ambulation and short hospitalization.",
      indications: ["Stable and unstable angina pectoris", "Acute coronary syndromes & myocardial infarction", "Multivessel coronary artery disease", "Restenosis assessment of prior stents"],
      documentsRequired: ["Prior coronary angiogram report and imaging disc (DICOM CD)", "Recent resting echocardiogram (Echo) report", "12-lead ECG, recent kidney function (Creatinine/eGFR), and blood glucose"],
      journeySummary: "Single-night hospital inpatient stay in most cases, followed by 2 to 3 days in our quiet recovery suite prior to flight clearance.",
      faqs: [
        { q: "How long is the procedure and post-procedure recovery?", a: "The procedure typically takes 45 to 90 minutes. Patients usually walk within hours and are cleared for return air travel within 4 to 5 days." },
        { q: "What types of stents are utilized?", a: "Partner hospitals utilize latest-generation drug-eluting stents (Everolimus/Zotarolimus-eluting) with proven clinical efficacy and minimal restenosis rates." }
      ]
    },
    {
      id: "cabg",
      name: "Coronary Artery Bypass Grafting (CABG)",
      enName: "Coronary Artery Bypass Grafting",
      desc: "Surgical revascularization for complex, multivessel coronary disease performed by fellowship-trained cardiac surgeons.",
      overview: "Coronary Artery Bypass Grafting (CABG) restores adequate myocardial blood perfusion by grafting healthy arteries or veins (such as internal mammary arteries or saphenous veins) to bypass severe coronary blockages. Performed with on-pump or beating-heart (off-pump) techniques.",
      indications: ["Left main coronary artery stenosis", "Triple vessel disease with diminished left ventricular function", "Complex diabetic coronary artery disease"],
      documentsRequired: ["Coronary angiography disc (DICOM CD)", "Comprehensive echocardiogram assessing ejection fraction (LVEF)", "Multislice coronary CT scan (if available)", "Detailed medical summary of comorbidities and current medication regimen"],
      journeySummary: "5 to 7 days inpatient stay (including ICU step-down), followed by 7 to 10 days in an equipped recovery suite before fit-to-fly certification.",
      faqs: [
        { q: "When is it safe to fly home after bypass surgery?", a: "The operating surgical team evaluates sternal stability, hemoglobin levels, and rhythm stability, typically clearing patients for flight between 10 and 14 days post-op." },
        { q: "Is home nursing available at our recovery residence?", a: "Yes, we arrange scheduled nursing visits to check vitals, manage wound dressings, and guide respiratory physiotherapy at your suite." }
      ]
    },
    {
      id: "valves",
      name: "Heart Valve Surgery (TAVI / SAVR)",
      enName: "Heart Valve Surgery",
      desc: "Surgical valve repair and replacement or transcatheter aortic valve implantation (TAVI) for high-risk and elderly patients.",
      overview: "Comprehensive treatment for severe aortic and mitral valve stenosis or regurgitation. Delivered either via transcatheter aortic valve implantation (TAVI) without median sternotomy, or through surgical repair or replacement using advanced bioprosthetic or mechanical valves.",
      indications: ["Severe calcific aortic stenosis in elderly or frail patients", "Severe symptomatic mitral regurgitation", "Prosthetic valve deterioration or chronic endocarditis"],
      documentsRequired: ["Dedicated TAVI protocol contrast CT angiogram", "Transesophageal echocardiogram (TEE) or 3D transthoracic echo", "Full laboratory panel including renal, hepatic, and coagulation profiles"],
      journeySummary: "TAVI involves 48 hours of inpatient observation with rapid recovery, whereas surgical valve replacement involves 5 to 7 days hospital stay followed by structured recovery.",
      faqs: [
        { q: "What is the key advantage of TAVI over conventional valve surgery?", a: "TAVI avoids open-heart surgery and cardiopulmonary bypass, accessing the valve transfemorally through the groin, resulting in drastically reduced recovery time." },
        { q: "How long do modern biological heart valves last?", a: "Contemporary anti-calcification treated pericardial tissue valves typically provide durability of 15 to 20 years without lifelong anticoagulation requirements." }
      ]
    },
    {
      id: "mics",
      name: "Minimally Invasive Cardiac Surgery (MICS)",
      enName: "Minimally Invasive Cardiac Surgery",
      desc: "Valve surgery and single-vessel bypass performed through small lateral intercostal mini-thoracotomies.",
      overview: "Minimally Invasive Cardiac Surgery achieves surgical valve repairs, replacements, and coronary grafts through small 5-6 cm intercostal incisions between the ribs, avoiding full sternotomy, minimizing operative blood loss, and expediting functional recovery.",
      indications: ["Mitral and tricuspid valve repair or replacement", "Single-vessel bypass (LIMA to LAD)", "Atrial septal defect (ASD) closure and benign cardiac tumor resection"],
      documentsRequired: ["High-definition echocardiogram report", "Contrast chest CT angiogram evaluating intercostal anatomy and femoral vessel caliber", "Coronary angiography for patients over 40"],
      journeySummary: "3 to 4 days hospital stay followed by 5 days in our recovery suite, with significantly reduced pain and barely visible cosmetic scarring.",
      faqs: [
        { q: "Is every cardiac patient a candidate for MICS?", a: "Suitability depends on thoracic anatomy, vascular access, and cardiac pathology. The surgical board evaluates CT scans to determine whether minimally invasive access is safe." }
      ]
    },
    {
      id: "pediatric",
      name: "Pediatric & Congenital Heart Surgery",
      enName: "Pediatric & Congenital Heart Surgery",
      desc: "Specialized pediatric surgical correction for infants and children with complex structural and congenital heart defects.",
      overview: "Corrective and palliative surgical treatment for congenital heart defects in infants and pediatric patients, supported by dedicated pediatric cardiac intensive care units (PICU) and multidisciplinary pediatric cardiologists and intensivists.",
      indications: ["Tetralogy of Fallot", "Transposition of the Great Arteries (TGA)", "Ventricular and atrial septal defects (VSD / ASD)", "Coarctation of the aorta"],
      documentsRequired: ["Color Doppler pediatric echocardiogram report", "Cardiac MRI or multidetector CT (if available)", "Pediatrician growth chart, birth history, and current clinical summary"],
      journeySummary: "Parental rooming-in during inpatient recovery, followed by spacious family accommodation in quiet residential districts in Cairo.",
      faqs: [
        { q: "Can parents stay with the child throughout hospitalization?", a: "Yes, partner hospitals provide parental rooming-in within inpatient pediatric suites, and structured daily visiting protocols in the pediatric ICU." }
      ]
    },
    {
      id: "ep",
      name: "Electrophysiology & Pacemaker Therapy",
      enName: "Electrophysiology & Pacemakers",
      desc: "Arrhythmia mapping, catheter radiofrequency/cryoablation, and advanced pacemaker/ICD/CRT device implantation.",
      overview: "Diagnostic electrophysiology studies and curative catheter ablation of rhythm disturbances using advanced 3D anatomical mapping, alongside surgical implantation of permanent pacemakers, implantable cardioverter-defibrillators (ICD), and biventricular devices (CRT).",
      indications: ["Paroxysmal and persistent atrial fibrillation", "Supraventricular tachycardias (SVT, WPW syndrome)", "Symptomatic sick sinus syndrome and high-grade AV block", "Severe congestive heart failure requiring cardiac resynchronization (CRT-D)"],
      documentsRequired: ["12-lead ECG during rhythm episodes", "24-hour or 48-hour Holter monitoring report", "Transthoracic echocardiogram assessing ventricular chamber dimensions and ejection fraction"],
      journeySummary: "Minimally invasive catheter procedure requiring 24 to 48 hours hospital stay, followed by 2 days for device programming and baseline stability testing.",
      faqs: [
        { q: "Can I travel by air with an implanted pacemaker or defibrillator?", a: "Yes. Patients receive an international device identification card for airport security, and air travel is completely safe 48 to 72 hours post-implantation." }
      ]
    },
    {
      id: "aortic",
      name: "Aortic Arch & Aneurysm Surgery",
      enName: "Aortic Surgery",
      desc: "Surgical and endovascular repair (TEVAR / EVAR) for thoracic and abdominal aortic aneurysms and dissections.",
      overview: "Surgical and catheter-based reconstruction of the aorta—the body's primary arterial vessel—treating aneurysmal dilation or chronic dissection through open graft replacement or stent-graft endovascular exclusion (TEVAR/EVAR) to avert rupture.",
      indications: ["Thoracic aortic aneurysm exceeding 5.0 to 5.5 cm", "Chronic type B aortic dissection with aneurysmal degeneration", "Marfan syndrome and connective tissue aortic root dilation"],
      documentsRequired: ["Full arterial contrast CT aortogram from skull base through iliac bifurcations", "Echocardiogram detailing aortic root dimensions and aortic regurgitation", "Comprehensive renal function panel and coagulation profile"],
      journeySummary: "5 to 7 days specialized inpatient observation with strict blood pressure optimization prior to fit-to-fly clearance.",
      faqs: [
        { q: "What is TEVAR endovascular repair?", a: "TEVAR involves deploying a fabric-covered stent graft through the femoral artery in the groin into the diseased aortic segment without opening the chest cavity." }
      ]
    }
  ],

  hospitalsSection: {
    eyebrow: "Hospitals & Partners",
    title: "Internationally Accredited Cardiac Centers in Egypt",
    desc: "We connect you exclusively with verified cardiac hospitals in Cairo and Giza recognized for clinical excellence, patient safety, and advanced technology.",
    disclaimer: "Credibility Note: All listed hospital facilities and clinical consultants undergo rigorous license and credential verification prior to formal proposal issuance. We never publish unverified doctor counts or invented partnerships.",
    hospitals: [
      {
        name: "Dar Al Fouad Hospital — 6th of October",
        type: "Specialized Cardiac Center of Excellence",
        accreditation: "JCI Accredited (Joint Commission International, USA) for five consecutive terms",
        highlights: "24/7 dedicated cardiac catheterization suites, hybrid operating rooms, distinguished cardiothoracic surgical theater, and specialized cardiac intensive care units.",
        location: "6th of October City — Giza (5 minutes to Nile Medical Suites)",
        specialties: ["Interventional Cardiology & Stents", "Coronary Bypass Grafting (CABG)", "Transcatheter Aortic Valve (TAVI)", "Congenital Pediatric Surgery"]
      },
      {
        name: "As-Salam International Hospital — Maadi",
        type: "Multispecialty International Medical Center",
        accreditation: "JCI Accredited & Canadian Healthcare Quality Partner",
        highlights: "Direct Nile waterfront views, dedicated electrophysiology laboratory with 3D mapping, minimally invasive valve repair units, and VIP international patient wing.",
        location: "Nile Corniche — Maadi, Cairo (7 minutes to Maadi Luxury Flats)",
        specialties: ["Electrophysiology & CRT/ICD Devices", "Minimally Invasive Valve Repair", "Peripheral & Aortic Endovascular Surgery", "Advanced Cardiac Diagnostics"]
      },
      {
        name: "New Cairo Specialized Heart Center",
        type: "Advanced Cardiothoracic Surgical Facility",
        accreditation: "Accredited by Egyptian General Authority for Healthcare Accreditation (GAHAR)",
        highlights: "Ultra-clean positive-pressure cardiac operating suites, serene gated suburban setting, and dedicated suites for international patients and companions.",
        location: "5th Settlement — New Cairo (10 minutes to Royal Residence Suites)",
        specialties: ["Minimally Invasive Cardiac Surgery (MICS)", "Pediatric Septal Defect Repairs", "Thoracic Aortic Aneurysm Stenting (TEVAR)"]
      }
    ],
    doctorsStandardTitle: "Consultant Selection & Credibility Standards",
    doctorsStandards: [
      "Board certification, British Fellowship (FRCS), or equivalent international credentials with active clinical practice licenses.",
      "Documented procedural volume and clinical safety benchmarks conforming with European Society of Cardiology (ESC) and American College of Cardiology (ACC) standards.",
      "Written pledge of objective clinical disclosure without commercial bias or unnecessary interventions.",
      "Availability of formal pre-travel video consultations to review diagnostic findings directly with the patient."
    ]
  },

  technologySection: {
    eyebrow: "Clinical Standards",
    title: "Certified Medical Devices & Technology Manufacturers",
    desc: "We ensure all medical devices utilized in your procedure—including drug-eluting stents, heart valves, and pacemakers—originate from world-renowned, regulated manufacturers.",
    notice: "Transparency Disclosure: Manufacturer and product references illustrate the clinical and technical standards upheld in our partner cardiac centers. They do not constitute commercial endorsement or exclusive brand relationships. Exact device specifications are confirmed in writing within each patient proposal.",
    categories: [
      {
        title: "Heart Valves & Transcatheter Systems",
        manufacturers: "Edwards Lifesciences · Medtronic · Abbott Vascular",
        details: "Advanced bioprosthetic transcatheter aortic valves (TAVI) featuring anti-calcification tissue preservation, alongside contemporary cobalt-chromium drug-eluting stents releasing antiproliferative agents."
      },
      {
        title: "Cardiac Rhythm Management & Pacemakers",
        manufacturers: "Medtronic · Boston Scientific · Biotronik",
        details: "MRI-conditional CRT-D and ICD pacemakers equipped with secure wireless home telemetry, enabling ongoing post-discharge rhythm monitoring after patients return home."
      },
      {
        title: "Catheterization Imaging & 3D Mapping Systems",
        manufacturers: "Siemens Healthineers · Philips Healthcare · Biosense Webster",
        details: "Low-dose digital biplane fluoroscopy angiography suites paired with CARTO 3 electro-anatomical 3D mapping systems for millimeter-precise catheter ablation."
      },
      {
        title: "Extracorporeal Life Support & Surgical ICU",
        manufacturers: "Getinge / Maquet · Abbott (CentriMag) · Terumo",
        details: "Advanced extracorporeal membrane oxygenation (ECMO) and intra-aortic balloon counterpulsation systems ensuring maximum safety during complex surgical operations."
      }
    ]
  },

  journeySection: {
    eyebrow: "Clinical Pathway",
    title: "Your 8-Stage Medical Journey from Inquiry to Safe Return",
    desc: "A milestone-driven pathway guaranteeing independent medical validation and supportive hospitality at every point.",
    steps: [
      {
        step: "01",
        title: "Initial Inquiry",
        desc: "You connect with our team and share your primary concerns. A personal coordinator is assigned to explain the process with zero financial commitment."
      },
      {
        step: "02",
        title: "Medical Information Collection",
        desc: "Guidance on gathering recent echocardiograms, angiograms, and blood work, securely transferred through our verified intake channel."
      },
      {
        step: "03",
        title: "Preliminary Medical Review",
        desc: "Verification of document completeness and preparation of an initial clinical summary submitted to our consultant board in Egypt."
      },
      {
        step: "04",
        title: "Treating Provider Review",
        desc: "A named cardiac surgical consultant reviews your file and formulates a written diagnostic opinion and recommended procedure."
      },
      {
        step: "05",
        title: "Treatment Proposal & Itemized Quote",
        desc: "A transparent written proposal separating hospital inpatient costs from accommodation and coordination fees, with clear inclusions."
      },
      {
        step: "06",
        title: "Travel & Accommodation Coordination",
        desc: "Electronic medical visa support, reservation of hospital-adjacent recovery suites for patient and companion, and hospital schedule confirmation."
      },
      {
        step: "07",
        title: "Arrival, Hospital Admission & Inpatient Care",
        desc: "Airport tarmac or terminal greeting, transfer to your residence, in-person clinical consultations, and successful procedure completion."
      },
      {
        step: "08",
        title: "Suite Recovery & Post-Return Follow-up",
        desc: "Restful stay in your recovery suite with nursing check-ins, formal discharge summary issuance, and scheduled remote telehealth follow-up."
      }
    ]
  },

  accommodationSection: {
    eyebrow: "Hospitality & Stay",
    title: "Travel Logistics, Accommodation, and Comprehensive Patient Support",
    desc: "We coordinate all logistical arrangements surrounding your medical care so you and your companion can focus entirely on rest and recovery.",
    services: [
      {
        title: "Equipped Recovery Suites",
        desc: "Serviced hotel apartments selected for comfort and wheelchair accessibility, minutes from cardiac centers, featuring equipped kitchens and quiet recovery environments."
      },
      {
        title: "Airport & Medical Transfers",
        desc: "Private executive vehicle greeting upon Cairo arrival, scheduled transfers between suite and hospital, and fully equipped medical ambulances when required."
      },
      {
        title: "Companion & Family Arrangements",
        desc: "Dedicated companion bedrooms, family suites, and arrangements for dietary-friendly meals tailored for cardiac recovery diets."
      },
      {
        title: "Dedicated Personal Coordinator",
        desc: "An assigned care coordinator escorts you to clinical appointments, manages hospital paperwork, and provides on-call support throughout your stay."
      },
      {
        title: "Remote Telehealth Follow-up",
        desc: "Post-departure video consultations with your treating cardiac surgeon to review local lab reports and ensure ongoing stability."
      }
    ],
    stayItems: [
      {
        title: "Nile Medical Suites & Residences — 6th of October",
        distance: "5 minutes from Dar Al Fouad Hospital",
        details: "Furnished hotel suites engineered for cardiac recovery, equipped with adjustable medical beds and full wheelchair accessibility.",
        amenities: "Adjustable medical bed · Companion bedroom · On-call nursing · Daily hospital shuttle",
        price: "EGP 1,850 / night (indicative)"
      },
      {
        title: "Maadi River View Luxury Flats — Nile Corniche",
        distance: "7 minutes from As-Salam International Hospital",
        details: "Spacious waterfront serviced residences providing a tranquil, clean Nile environment for patients and their families.",
        amenities: "2-bedroom apartment · Fully equipped kitchen · VIP airport greeting · 24/7 care concierge",
        price: "EGP 2,400 / night (indicative)"
      },
      {
        title: "Royal Residence Suites — New Cairo",
        distance: "10 minutes from East Cairo Cardiac Centers",
        details: "Quiet gated residential apartments offering patient privacy, gentle walking gardens, and restful recovery prior to your flight home.",
        amenities: "Peaceful recovery setting · Private walking path · Daily sanitization · High-speed Wi-Fi",
        price: "EGP 2,100 / night (indicative)"
      }
    ],
    stayNotice: "Accommodation bookings are confirmed in alignment with your medical admission dates approved by the treating hospital."
  },

  faqsSection: {
    eyebrow: "Frequently Asked Questions",
    title: "Answers to Common Questions on Medical Travel to Egypt",
    intro: "Clear, verified details regarding clinical reviews, pricing structures, recovery accommodation, and entry visas.",
    faqs: [
      {
        q: "Are the hospital partners and doctors authentic, and how can I verify them?",
        a: "Every doctor and hospital in our network has a verified official profile with verified accreditation numbers (JCI / GAHAR). We verify medical licenses, procedural volume, and academic credentials before publishing."
      },
      {
        q: "Do commercial interests influence the medical plan?",
        a: "Never. Your treating medical consultant determines the clinical plan exclusively based on medical evidence. We maintain complete transparency by itemizing coordination service fees separately from direct hospital invoices."
      },
      {
        q: "What occurs if my medical plan changes or my stay is extended?",
        a: "Every quotation is accompanied by written terms detailing extension rates and protocol variations. No additional procedure is performed without prior patient consultation and consent."
      },
      {
        q: "How are payments handled?",
        a: "Hospital surgical fees are paid directly to the hospital according to authorized medical bills. Accommodation and concierge packages are settled with our coordination office per your chosen package."
      },
      {
        q: "Do patients and companions require a visa for Egypt?",
        a: "Citizens of the GCC and numerous countries receive visas upon arrival or via standard e-visa portals. For other nationalities, we issue an official medical invitation letter to expedite medical visa issuance."
      },
      {
        q: "Who do I contact if I require support while in Cairo?",
        a: "Your dedicated personal care coordinator is available around the clock throughout your stay in Egypt, backed by direct communication lines with hospital emergency departments."
      }
    ]
  },

  aboutPage: {
    eyebrow: "About Our Platform",
    title: "Specialized Cardiac Medical Travel Coordination in Egypt",
    desc: "Established to bridge international patients with Egypt's premier cardiac surgeons and accredited medical centers, delivering an end-to-end journey that combines clinical excellence with serene recovery hospitality.",
    missionTitle: "Our Mission & Ethical Standards",
    mission: "Empowering cardiac patients and their families to make well-informed healthcare decisions supported by impartial preliminary reviews, absolute pricing transparency, and dedicated hospitality.",
    features: [
      { title: "Pure Cardiac Specialization", text: "We focus exclusively on cardiology and cardiothoracic surgery to ensure depth of clinical knowledge and procedural familiarity." },
      { title: "Complete Financial Transparency", text: "Zero hidden markups. We clarify exactly what is paid to the hospital versus accommodation and logistical services." },
      { title: "Patient Safety First", text: "Every case is vetted by our clinical review board to verify fit-to-fly suitability before confirming travel arrangements." }
    ]
  },

  contactPage: {
    eyebrow: "Get in Touch",
    title: "We Are Here to Guide and Support Your Healthcare Journey",
    desc: "Reach out to our case coordination team for initial guidance or inquiries regarding cardiac specialists and accommodation options in Egypt.",
    phoneLabel: "Phone & WhatsApp",
    phone: "+20 11 2739 2979",
    emailLabel: "Email Contact",
    email: "coordination@cardiac-egypt.com",
    addressLabel: "Head Coordination Office",
    address: "Cairo & Giza — Arab Republic of Egypt",
    formTitle: "Send an Inquiry or Message",
    sendBtn: "Send Inquiry (Preview)"
  },

  privacyPage: {
    eyebrow: "Privacy & Data Protection",
    title: "Patient Confidentiality and Medical Data Privacy Policy",
    intro: "We uphold strict confidentiality regarding all personal and medical records shared with our coordination platform.",
    sections: [
      { title: "1. Medical Data Collection & Purpose", body: "Health records, diagnostic scans, and clinical notes are used exclusively to facilitate preliminary medical reviews by authorized cardiac consultants and partner hospitals." },
      { title: "2. Confidential Transmission", body: "Reports are transferred via encrypted channels and are never disclosed or sold to third parties outside your direct care coordination team." },
      { title: "3. Patient Rights & Data Deletion", body: "Patients maintain the right to request deletion of their submitted files or revoke preliminary assessment consent at any time prior to travel confirmation." }
    ]
  },

  termsPage: {
    eyebrow: "Terms & Conditions",
    title: "Platform Terms of Service and Coordination Agreement",
    intro: "These terms govern the relationship between the patient and our coordination team regarding medical travel facilitation.",
    sections: [
      { title: "1. Scope of Coordination Services", body: "Our platform provides non-clinical administrative, logistical, and hospitality coordination. Clinical evaluations, surgical decisions, and treatment outcomes remain the exclusive responsibility of licensed hospitals and treating physicians." },
      { title: "2. Quotations and Validity", body: "Preliminary cost estimates are prepared based on uploaded reports and remain indicative until an in-person clinical examination confirms the definitive plan at the hospital." },
      { title: "3. Cancellation and Schedule Adjustments", body: "Cancellation and refund terms are subject to the policies of the selected hospital and accommodation provider, detailed in writing before formal booking confirmation." }
    ]
  }
};
