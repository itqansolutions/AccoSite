const fs = require('fs');

const fileData = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Cardiac Journey & Accommodation — Platform Mockup</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Noto+Kufi+Arabic:wght@500;700&family=Readex+Pro:wght@400;500;600;700&display=swap">
<style>
:root {
  --bg: #F3EDE2;
  --surface: #FBF8F1;
  --paper: #FBF8F2;
  --ink: #1A1F1D;
  --muted: #566058;
  --primary: #0F4C45;
  --accent: #B4532A;
  --line: #D6CCB8;
  --soft: #E7DFCF;
  --danger: #B42318;
  --warn: #9A6700;
  --good: #24704E;
  --fd: 'Readex Pro', 'IBM Plex Sans Arabic', sans-serif;
  --fb: 'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body.editorial {
  --bg: #FAF8F4;
  --surface: #FFFFFF;
  --paper: #FFFFFF;
  --ink: #14161A;
  --muted: #55585E;
  --primary: #14161A;
  --accent: #C23B2E;
  --line: #DAD5CA;
  --soft: #EFEBE2;
  --danger: #B42318;
  --warn: #9A6700;
  --good: #24704E;
  --fd: 'Noto Kufi Arabic', 'IBM Plex Sans Arabic', sans-serif;
  --fb: 'IBM Plex Sans Arabic', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

html[dir="ltr"] {
  --fd: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --fb: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
}

* { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: var(--fb);
  font-size: 16px;
  line-height: 1.7;
  transition: background-color 0.25s ease, color 0.25s ease;
}

h1, h2, h3, h4, .brand, .hero-art .big, .section-title {
  font-family: var(--fd);
  font-weight: 600;
  letter-spacing: -0.015em;
}

button, input, select, textarea {
  font-family: var(--fb);
  font-size: 15px;
}
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }

/* Top Notice & Global Controls */
.top {
  background: var(--ink);
  color: var(--bg);
  padding: 10px 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  font-size: 13px;
}
.switches {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.switches button, .themebtn {
  border: 1px solid currentColor;
  background: transparent;
  color: inherit;
  padding: 5px 12px;
  font-size: 12px;
  border-radius: 2px;
  transition: background 0.2s, color 0.2s;
}
.switches button.active {
  background: var(--bg);
  color: var(--ink);
  font-weight: 600;
}

/* Shell & Layout */
.shell {
  max-width: 1320px;
  margin: auto;
  padding: 20px 4vw 60px;
}

/* Header */
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 0 20px;
  border-bottom: 1px solid var(--line);
}
.brand {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.2;
  cursor: pointer;
}
.brand small {
  display: block;
  font-family: var(--fb);
  font-size: 11.5px;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0.08em;
  margin-top: 3px;
}
.head-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

/* Navigation Bar */
.main-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--line);
  position: relative;
  background: var(--bg);
}
.nav-links {
  display: flex;
  gap: 2px;
  overflow-x: auto;
  padding: 10px 0;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.nav-links::-webkit-scrollbar { display: none; }
.nav-btn {
  white-space: nowrap;
  border: 0;
  background: transparent;
  padding: 8px 14px;
  color: var(--muted);
  font-weight: 500;
  font-size: 14px;
  border-radius: 2px;
  transition: color 0.15s, background 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.nav-btn:hover {
  color: var(--ink);
  background: var(--soft);
}
.nav-btn.active {
  background: var(--ink);
  color: var(--paper);
  font-weight: 600;
}
body.editorial .nav-btn.active {
  background: var(--primary);
}

/* Mobile Hamburger Toggle */
.mobile-toggle {
  display: none;
  background: transparent;
  border: 1px solid var(--line);
  padding: 7px 12px;
  font-size: 14px;
  border-radius: 2px;
}

/* Dropdown Menu for Specialties */
.dropdown-wrap {
  position: relative;
  display: inline-block;
}
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  inset-inline-start: 0;
  background: var(--paper);
  border: 1px solid var(--line);
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  min-width: 280px;
  z-index: 100;
  padding: 6px 0;
}
.dropdown-wrap:hover .dropdown-menu,
.dropdown-menu.show {
  display: block;
}
.dropdown-item {
  display: block;
  padding: 9px 16px;
  font-size: 13.5px;
  color: var(--ink);
  text-decoration: none;
  border-bottom: 1px solid var(--line);
  transition: background 0.15s;
}
.dropdown-item:last-child { border-bottom: 0; }
.dropdown-item:hover { background: var(--soft); }

/* Buttons */
.btn {
  border: 1px solid var(--primary);
  background: var(--primary);
  color: #FFFFFF;
  padding: 11px 20px;
  font-weight: 600;
  font-size: 14.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 2px;
  transition: background 0.2s, border-color 0.2s, transform 0.1s;
  min-height: 44px;
}
.btn:hover {
  background: color-mix(in srgb, var(--primary) 85%, #000);
}
.btn:active {
  transform: translateY(1px);
}
.btn.secondary {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
}
.btn.secondary:hover {
  background: var(--soft);
}
.btn.quiet {
  border-color: var(--line);
  background: transparent;
  color: var(--ink);
}
.btn.quiet:hover {
  background: var(--soft);
}

body.editorial .btn:not(.quiet):not(.secondary) {
  background: var(--accent);
  border-color: var(--accent);
}
body.editorial .btn.secondary {
  color: var(--accent);
  border-color: var(--accent);
}

/* Content Area */
.page {
  padding: 28px 0 40px;
}

/* Typography elements */
.eyebrow {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--accent);
  font-weight: 700;
  margin-bottom: 8px;
}
.section-title {
  font-size: clamp(24px, 3.2vw, 38px);
  line-height: 1.25;
  margin: 0 0 10px;
  color: var(--primary);
}
.section-intro {
  color: var(--muted);
  max-width: 780px;
  margin: 0 0 28px;
  font-size: 16px;
  line-height: 1.7;
}
.rule {
  border: 0;
  border-top: 1px solid var(--line);
  margin: 32px 0;
}

/* Hero Section */
.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 36px;
  align-items: stretch;
  padding: 16px 0 36px;
}
.hero h1 {
  font-size: clamp(28px, 4vw, 50px);
  line-height: 1.2;
  margin: 12px 0 20px;
  max-width: 760px;
  color: var(--primary);
}
.hero p {
  font-size: 17px;
  max-width: 660px;
  color: var(--ink);
  margin: 0 0 28px;
  line-height: 1.7;
}
.hero-art {
  background: var(--primary);
  color: #FFFFFF;
  min-height: 320px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}
.hero-art:after {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  right: -80px;
  top: 50px;
  box-shadow: 0 0 0 40px rgba(255, 255, 255, 0.05), 0 0 0 85px rgba(255, 255, 255, 0.03);
}
html[dir="ltr"] .hero-art:after {
  right: auto;
  left: -80px;
}
.hero-art > * {
  position: relative;
  z-index: 1;
}
.hero-art .big {
  font-size: 28px;
  line-height: 1.35;
  max-width: 380px;
  font-weight: 600;
}
body.editorial .hero-art {
  background: var(--primary);
}

/* Grids and Columns */
.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}
.lineitem {
  padding: 16px 0;
  border-top: 1px solid var(--line);
}
.lineitem strong {
  display: block;
  font-size: 16.5px;
  font-family: var(--fd);
  margin-bottom: 4px;
}
.lineitem span {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.55;
}

/* Panels and Cards */
.panel {
  border: 1px solid var(--line);
  padding: 24px;
  background: var(--paper);
  border-radius: 2px;
}
.panel h3 {
  margin: 0 0 12px;
  font-size: 19px;
  color: var(--primary);
}

/* Card Links */
.card-link {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--line);
  padding: 22px;
  background: var(--paper);
  text-decoration: none;
  color: inherit;
  border-radius: 2px;
  transition: border-color 0.2s, background 0.2s;
}
.card-link:hover {
  border-color: var(--primary);
  background: var(--surface);
}

/* Forms */
.field {
  display: grid;
  gap: 6px;
  margin-bottom: 18px;
}
.field label {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--ink);
}
.field input, .field select, .field textarea {
  border: 1px solid var(--line);
  background: var(--paper);
  padding: 12px 14px;
  width: 100%;
  color: var(--ink);
  border-radius: 2px;
  font-size: 15.5px;
  transition: border-color 0.2s, outline 0.2s;
}
.field input:focus, .field select:focus, .field textarea:focus {
  outline: 2px solid var(--primary);
  outline-offset: -1px;
}
.field textarea {
  min-height: 100px;
  resize: vertical;
}

/* Tags and Badges */
.tag {
  display: inline-block;
  border: 1px solid var(--line);
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 2px;
}
.tag.good {
  color: var(--good);
  border-color: color-mix(in srgb, var(--good) 40%, var(--line));
  background: color-mix(in srgb, var(--good) 8%, transparent);
}
.tag.warn {
  color: var(--warn);
  border-color: color-mix(in srgb, var(--warn) 40%, var(--line));
  background: color-mix(in srgb, var(--warn) 8%, transparent);
}
.tag.danger {
  color: var(--danger);
  border-color: color-mix(in srgb, var(--danger) 40%, var(--line));
  background: color-mix(in srgb, var(--danger) 8%, transparent);
}

/* Statistics row */
.statrow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 20px 0;
}
.stat {
  border-top: 2px solid var(--primary);
  padding: 12px 0;
}
.stat b {
  font-size: 24px;
  display: block;
  font-family: var(--fd);
  margin-top: 4px;
  color: var(--primary);
}
.stat span {
  font-size: 12px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Tables */
.table-wrap {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin: 16px 0;
  border: 1px solid var(--line);
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 14px;
  background: var(--paper);
}
th, td {
  text-align: start;
  padding: 12px 14px;
  border-bottom: 1px solid var(--line);
  vertical-align: top;
}
th {
  font-size: 12px;
  color: var(--muted);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: var(--soft);
}
tr:last-child td { border-bottom: 0; }

/* Timeline */
.timeline {
  border-inline-start: 2px solid var(--line);
  margin: 20px 8px;
  padding-inline-start: 24px;
}
.event {
  position: relative;
  padding: 0 0 24px;
}
.event:before {
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--primary);
  inset-inline-start: -30px;
  top: 7px;
}
.event.pending:before {
  background: var(--bg);
  border: 2px solid var(--accent);
}
.event h4 {
  margin: 0 0 4px;
  font-size: 16px;
}
.event p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.55;
}

/* Step Sequence Card */
.step-box {
  display: flex;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}
.step-num {
  font-family: var(--fd);
  font-weight: 700;
  font-size: 20px;
  color: var(--accent);
  flex-shrink: 0;
  width: 32px;
}
.step-content strong {
  display: block;
  font-size: 16px;
  margin-bottom: 4px;
}
.step-content p {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

/* Accordion / FAQs */
.faq-item {
  border-bottom: 1px solid var(--line);
  padding: 14px 0;
}
.faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 4px 0;
  color: var(--primary);
}
.faq-body {
  padding: 10px 0 6px;
  color: var(--muted);
  font-size: 14.5px;
  line-height: 1.65;
  display: none;
}
.faq-item.open .faq-body {
  display: block;
}
.faq-item.open .faq-icon {
  transform: rotate(180deg);
}

/* Operations Layout */
.layout {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 28px;
}
.side {
  border-inline-end: 1px solid var(--line);
  padding-inline-end: 18px;
}
.side button {
  display: block;
  width: 100%;
  text-align: start;
  border: 0;
  background: transparent;
  padding: 12px 14px;
  color: var(--muted);
  font-size: 14px;
  border-radius: 2px;
  margin-bottom: 4px;
  transition: all 0.15s;
}
.side button:hover {
  color: var(--ink);
  background: var(--soft);
}
.side button.active {
  background: var(--soft);
  color: var(--ink);
  font-weight: 700;
}

/* Alerts and Notices */
.alert {
  border-inline-start: 3px solid var(--accent);
  padding: 14px 18px;
  background: var(--soft);
  font-size: 14px;
  margin: 20px 0;
  line-height: 1.6;
}
.notice {
  padding: 12px 16px;
  border: 1px dashed var(--line);
  margin: 16px 0;
  font-size: 13.5px;
  color: var(--muted);
  background: var(--paper);
}
.metric-note {
  font-size: 11.5px;
  color: var(--muted);
  font-weight: 400;
  display: block;
  margin-top: 2px;
}
.progress {
  height: 6px;
  background: var(--soft);
  margin: 12px 0 18px;
  border-radius: 3px;
  overflow: hidden;
}
.progress span {
  display: block;
  height: 100%;
  background: var(--primary);
  transition: width 0.3s ease;
}

.workspace-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 18px;
}
.workspace-actions button {
  padding: 9px 15px;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  font-size: 13.5px;
  border-radius: 2px;
  transition: all 0.2s;
}
.workspace-actions button:hover {
  background: var(--soft);
}
.workspace-actions button.active {
  background: var(--primary);
  color: #fff;
  border-color: var(--primary);
}

.mini-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
.mini-field {
  display: grid;
  gap: 5px;
}
.mini-field label {
  font-size: 12.5px;
  color: var(--muted);
  font-weight: 600;
}
.mini-field input, .mini-field select, .mini-field textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink);
  border-radius: 2px;
}

/* Footer */
.footer {
  padding: 36px 0 24px;
  border-top: 1px solid var(--line);
  font-size: 13px;
  color: var(--muted);
}
.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 30px;
}
.footer-col h5 {
  margin: 0 0 12px;
  font-size: 14px;
  font-family: var(--fd);
  color: var(--primary);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.footer-col a {
  display: block;
  margin-bottom: 8px;
  color: var(--muted);
  text-decoration: none;
  font-size: 13.5px;
}
.footer-col a:hover {
  color: var(--ink);
}
.footer-bottom {
  border-top: 1px solid var(--line);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12px;
}

.hidden { display: none !important; }
.muted { color: var(--muted); }
.small { font-size: 12.5px; }

/* Responsive adjustments */
@media (max-width: 1024px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .columns, .layout {
    grid-template-columns: 1fr;
  }
  .grid {
    grid-template-columns: 1fr 1fr;
  }
  .side {
    border-inline-end: 0;
    border-bottom: 1px solid var(--line);
    padding: 0 0 12px;
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  .side button {
    white-space: nowrap;
    width: auto;
    margin-bottom: 0;
    margin-inline-end: 6px;
  }
  .statrow {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
  .hero-art {
    min-height: 260px;
  }
}

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    padding: 8px 0;
  }
  .nav-links.mobile-open {
    display: flex;
  }
  .main-nav {
    flex-direction: column;
    align-items: stretch;
  }
  .dropdown-menu {
    position: static;
    box-shadow: none;
    border: 0;
    padding-inline-start: 16px;
    background: transparent;
  }
  .dropdown-wrap:hover .dropdown-menu {
    display: none;
  }
  .dropdown-menu.show {
    display: block;
  }
}

@media (max-width: 680px) {
  .grid, .grid-2, .grid-4 {
    grid-template-columns: 1fr;
  }
  .mini-grid {
    grid-template-columns: 1fr;
  }
  .head {
    align-items: flex-start;
    flex-direction: column;
    padding: 14px 0 16px;
  }
  .head-actions {
    width: 100%;
    justify-content: space-between;
  }
  .top {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 4vw;
  }
  .switches {
    width: 100%;
    justify-content: flex-start;
  }
  .statrow {
    grid-template-columns: 1fr 1fr;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .btn {
    width: 100%;
  }
  .head-actions .btn {
    width: auto;
  }
}

@media (max-width: 375px) {
  .statrow {
    grid-template-columns: 1fr;
  }
}
</style>
</head>
<body>

<div class="top">
  <span id="topLabel">معاينة تفاعلية — بيانات توضيحية فقط</span>
  <div class="switches">
    <button id="langBtn" onclick="toggleLang()">English</button>
    <button id="nileBtn" class="active" onclick="setTheme('nile')">أخضر النيل</button>
    <button id="editorialBtn" onclick="setTheme('editorial')">تحريري طبي</button>
  </div>
</div>

<div class="shell">
  <header class="head">
    <div class="brand" onclick="showPage('home')">
      <span id="brandName">اسم الشركة</span>
      <small id="brandSub">رعاية القلب · مصر</small>
    </div>
    <div class="head-actions">
      <span class="tag" id="modeTag">نسخة تجريبية</span>
      <button class="btn secondary" onclick="showPage('assessment')" id="headerCta">اطلب تقييمًا طبيًا أوليًا</button>
    </div>
  </header>

  <nav class="main-nav">
    <button class="mobile-toggle" onclick="toggleMobileNav()" id="mobileMenuBtn">القائمة الرئيسية ☰</button>
    <div class="nav-links" id="navLinksContainer">
      <!-- Injected by renderNav() -->
    </div>
  </nav>

  <main id="content" class="page"></main>

  <footer class="footer" id="mainFooter">
    <!-- Injected by renderFooter() -->
  </footer>
</div>

<script src="./support_mockup.js"></script>
</body>
</html>
`;

fs.writeFileSync('Platform-Mockup.html', fileData, 'utf8');
console.log('Wrote Platform-Mockup.html base structure.');
