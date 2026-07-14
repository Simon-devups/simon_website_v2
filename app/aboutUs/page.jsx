// app/about/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./aboutUs.module.css";

export default function AboutPage() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className={styles.page}>
            {/* ===== HEADER ===== */}
            {/* <header>
                <div className="container nav-wrap">
                    <Link href="/" className="logo">
                        <span className="logo-mark"><img src="/icon.jpg" style={{width: "100%", height: '100%' ,borderRadius: '9px'}}/></span>
                        سایمون 
                    </Link>
                    <nav>
                        <ul>
                            <li><Link href="/">صفحه اصلی</Link></li>
                            <li><Link href="/khadamat">خدمات ما</Link></li>
                            <li><Link href="/portfolios">نمونه کارها</Link></li>
                            <li><Link href="/abouUst" className="active">درباره ما</Link></li>
                            <li><Link href="/contactUs">تماس با ما</Link></li>
                        </ul>
                    </nav>
                    <div className="nav-cta">
                        <Link href="/#contact" className="btn btn-orange">درخواست مشاوره</Link>
                        <span
                            className={`burger ${mobileOpen ? "open" : ""}`}
                            onClick={toggleMobile}
                        >
                            {mobileOpen ? "✕" : "☰"}
                        </span>
                    </div>
                </div>
                <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
                    <ul>
                        <li><Link href="/" onClick={closeMobile}>صفحه اصلی</Link></li>
                        <li><Link href="/khadamat" onClick={closeMobile}>خدمات ما</Link></li>
                        <li><Link href="/portfolio" onClick={closeMobile}>نمونه کارها</Link></li>
                        <li><Link href="/about" className="active" onClick={closeMobile}>درباره ما</Link></li>
                        <li><Link href="/contact" onClick={closeMobile}>تماس با ما</Link></li>
                    </ul>
                    <div className="mobile-cta">
                        <Link href="/#contact" className="btn btn-orange" onClick={closeMobile}>درخواست مشاوره</Link>
                    </div>
                </div>
            </header> */}

            <main>
                {/* ===== PAGE BANNER ===== */}
                <section className={styles.pageBanner}>
                    <div className={styles.bannerBlobA}></div>
                    <div className={styles.bannerBlobB}></div>
                    <div className="container">
                        <span className="eyebrow">simon team</span>
                        <h1>با تیمی آشنا شوید که پشت هر پروژه‌ی سایمون ایستاده</h1>
                        <p className="section-sub center" style={{ marginTop: "18px" }}>
                            ترکیبی از خلاقیت، تخصص و نظم؛ داستان تیمی که دیجیتال را برای برند شما می‌سازد.
                        </p>
                        <div className={styles.breadcrumb}>
                            <Link href="/">صفحه اصلی</Link>
                            <span>/</span>
                            <span>درباره ما</span>
                        </div>
                    </div>
                </section>

                {/* ===== ABOUT INTRO ===== */}
                <section className={styles.aboutIntro}>
                    <div className={`container ${styles.aboutIntroGrid}`}>
                        <div className={styles.aboutArt}>
                            <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="blobOrangeAbout" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--orange)" />
                                        <stop offset="100%" stopColor="var(--orange-2)" />
                                    </linearGradient>
                                </defs>
                                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobOrangeAbout)" />
                                <rect x="90" y="95" width="500" height="330" rx="26" fill="#fff" stroke="var(--blue)" strokeWidth="6" />
                                <rect x="122" y="130" width="26" height="26" rx="7" fill="var(--blue)" />
                                <rect x="168" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="202" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="236" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="270" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <circle cx="440" cy="143" r="7" fill="var(--blue)" />
                                <circle cx="460" cy="143" r="7" fill="var(--blue)" />
                                <rect x="500" y="133" width="58" height="18" rx="9" fill="var(--blue)" />
                                <rect x="122" y="176" width="436" height="150" rx="16" fill="#AEC2F2" />
                                <rect x="152" y="215" width="180" height="16" rx="8" fill="#5F82DE" />
                                <rect x="152" y="242" width="105" height="12" rx="6" fill="#5F82DE" />
                                <rect x="122" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="268" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="414" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="40" y="210" width="5" height="26" rx="2.5" fill="var(--blue)" />
                                <rect x="40" y="250" width="5" height="18" rx="2.5" fill="var(--blue)" />
                            </svg>
                            <div className={`${styles.floatCard} ${styles.fc1}`}>
                                <span className={styles.dot}>💡</span> ایده‌های نو و خلاقانه
                            </div>
                            <div className={`${styles.floatCard} ${styles.fc2}`}>
                                <span className={`${styles.dot} ${styles.peach}`}>🤝</span> شناخت عمیق کاربران
                            </div>
                        </div>
                        <div className={styles.aboutIntroText}>
                            <span className="eyebrow" style={{ background: "#FFF3DD", color: "var(--orange-2)" }}>
                                درباره تیم سایمون
                            </span>
                            <h2 className="section-title">تیمی جوان، خلاق و متخصص</h2>
                            <p>
                                سایمون، نامی آشنا در عرصه‌ی طراحی دیجیتال، متشکل از تیمی جوان، خلاق و متخصص است. دفتر کار ما، فضایی پر از ایده‌های نو و نگاه‌های تازه به مقوله‌ی وب‌سایت و برندسازی است. هر یک از اعضای تیم، با تخصصی منحصربه‌فرد، پازلی را تکمیل می‌کند که نتیجه‌ی آن، آثاری ماندگار و کاربرپسند است. در سایمون، طراحی یک فرآیند خطی نیست؛ بلکه مسیری پویا، تعاملی و مبتنی بر شناخت عمیق از نیازهای واقعی کاربران است. ما به جای گفتن، با کارهایمان حرف می‌زنیم و کیفیت را فدای کمیت نمی‌کنیم.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== TEAM ===== */}
                <section className={styles.team}>
                    <div className="container">
                        <span className="eyebrow">اعضای تیم سایمون</span>
                        <h2 className="section-title">چهار نقش کلیدی، یک هدف مشترک</h2>
                        <p className="section-sub" style={{ marginTop: "14px" }}>
                            تیم سایمون متشکل از چهار متخصص با چهار نقش کلیدی و مکمل است. هر یک از اعضا، با بهره‌گیری از تخصص و مهارت منحصربه‌فرد خود، مسئولیت بخش مشخصی از فرآیند طراحی و توسعه را بر عهده دارد. ساختار منظم تیم، بر اساس هماهنگی دقیق وظایف و تعامل مستمر میان اعضا شکل گرفته است. جلسات منظم، تقسیم‌کار شفاف و بازخوردهای سازنده، پایه‌های همکاری ما را مستحکم ساخته است. هرچند تعدادمان محدود است، اما با نظم و انضباطی مثال‌زدنی، پروژه‌ها را در زمان‌بندی دقیق و با کیفیتی بی‌نقص به سرانجام می‌رسانیم.
                        </p>

                        <div className={styles.teamGrid}>
                            <div className={styles.teamCard}>
                                <div className={styles.teamPhoto}>
                                    👤<span className={styles.tag}>عکس عضو تیم</span>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>مدیر پروژه</h3>
                                    <span>هماهنگی و برنامه‌ریزی</span>
                                </div>
                            </div>
                            <div className={styles.teamCard}>
                                <div className={styles.teamPhoto}>
                                    👤<span className={styles.tag}>عکس عضو تیم</span>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>طراح رابط کاربری</h3>
                                    <span>UI / UX Design</span>
                                </div>
                            </div>
                            <div className={styles.teamCard}>
                                <div className={styles.teamPhoto}>
                                    👤<span className={styles.tag}>عکس عضو تیم</span>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>توسعه‌دهنده فرانت‌اند</h3>
                                    <span>Front-End Development</span>
                                </div>
                            </div>
                            <div className={styles.teamCard}>
                                <div className={styles.teamPhoto}>
                                    👤<span className={styles.tag}>عکس عضو تیم</span>
                                </div>
                                <div className={styles.teamInfo}>
                                    <h3>توسعه‌دهنده بک‌اند</h3>
                                    <span>Back-End Development</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== WHY STRATEGIC ===== */}
                <section className={styles.whyStrategic}>
                    <div className={`container ${styles.whyGrid}`}>
                        <div className={styles.whyStrategicText}>
                            <span className="eyebrow">چرا تیم سایمون</span>
                            <h2 className="section-title">همراه استراتژیک کسب‌وکار شما</h2>
                            <p>
                                چون ما فراتر از یک تیم طراحی، یک همراه استراتژیک برای کسب‌وکار شما هستیم. در تیم سایمون، هر پروژه با درکی عمیق از هویت، اهداف و مخاطبان برند شما آغاز می‌شود. ما باور داریم که هر کسب‌وکاری داستانی منحصربه‌فرد برای گفتن دارد و وظیفه‌ی ما، خلق بستری دیجیتال برای روایت آن داستان است. تخصص، تعهد و نگاه خلاقانه‌ی ما، تضمین‌کننده‌ی سایتی است که نه‌تنها چشم‌نواز است، بلکه کاربرپسند، سریع و بهینه برای موتورهای جستجو نیز می‌باشد. ما به جای تحویل پروژه، آغاز یک همراهی بلندمدت را رقم می‌زنیم.
                            </p>
                        </div>
                        <div className={styles.whyArt}>
                            <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg" className={styles.flip}>
                                <defs>
                                    <linearGradient id="blobBlueWhy" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--blue)" />
                                        <stop offset="100%" stopColor="var(--blue-dark)" />
                                    </linearGradient>
                                </defs>
                                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobBlueWhy)" />
                                <rect x="90" y="95" width="500" height="330" rx="26" fill="#fff" stroke="var(--blue)" strokeWidth="6" />
                                <rect x="122" y="130" width="26" height="26" rx="7" fill="var(--blue)" />
                                <rect x="168" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="202" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="236" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="270" y="138" width="26" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <circle cx="440" cy="143" r="7" fill="var(--blue)" />
                                <circle cx="460" cy="143" r="7" fill="var(--blue)" />
                                <rect x="500" y="133" width="58" height="18" rx="9" fill="var(--blue)" />
                                <rect x="122" y="176" width="436" height="150" rx="16" fill="#C9D6F7" />
                                <rect x="152" y="215" width="180" height="16" rx="8" fill="#6E8FE0" />
                                <rect x="152" y="242" width="105" height="12" rx="6" fill="#6E8FE0" />
                                <rect x="122" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="268" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="414" y="352" width="130" height="58" rx="16" fill="var(--orange)" />
                                <rect x="40" y="210" width="5" height="26" rx="2.5" fill="#fff" />
                                <rect x="40" y="250" width="5" height="18" rx="2.5" fill="#fff" />
                            </svg>
                            <div className={`${styles.floatCard} ${styles.wc1}`}>
                                <span className={styles.dot}>📈</span> رشد بلندمدت برند
                            </div>
                            <div className={`${styles.floatCard} ${styles.wc2}`}>
                                <span className={`${styles.dot} ${styles.peach}`}>⚡</span> سرعت و بهینگی سئو
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA LINK TO CONTACT ===== */}
                <section className={styles.ctaLink}>
                    <div className="container">
                        <Link href="/#contact" className={styles.box}>
                            <div>
                                <h3>آماده‌اید داستان برندتان را با ما شروع کنید؟</h3>
                                <p>همین حالا با تیم سایمون در ارتباط باشید تا مسیر همکاری را با هم طراحی کنیم.</p>
                            </div>
                            <span className={styles.arrow}>←</span>
                        </Link>
                    </div>
                </section>
            </main>

            {/* ===== FOOTER ===== */}
            {/* <footer>
                <svg className="footer-wave" viewBox="0 0 1200 60" preserveAspectRatio="none" height="50">
                    <path d="M0,40 C300,0 900,0 1200,40 L1200,60 L0,60 Z" fill="var(--orange)"></path>
                </svg>
                <div className="container footer-top">
                    <div className="footer-brand">
                        <Link href="/" className="logo"><span className="logo-mark"><img src="/icon.jpg" style={{width: "100%", height: '100%' ,borderRadius: '9px'}}/></span> سایمون</Link>
                        <p>کسب‌وکار شما را وارد دنیای دیجیتال ماندگار و تاثیرگذار می‌کند.</p>
                        <div className="footer-social">
                            <Link href="#">in</Link><Link href="#">ig</Link><Link href="#">tw</Link><Link href="#">tg</Link>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>خدمات ما</h4>
                        <ul>
                            <li><Link href="/khadamat">طراحی سایت</Link></li>
                            <li><Link href="/khadamat">طراحی محصول</Link></li>
                            <li><Link href="/khadamat">سئو</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>لینک‌های مرتبط</h4>
                        <ul>
                            <li><Link href="/">صفحه اصلی</Link></li>
                            <li><Link href="/about">درباره ما</Link></li>
                            <li><Link href="#">سوالات متداول</Link></li>
                            <li><Link href="/contact">تماس با ما</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>ارتباط با ما</h4>
                        <ul className="footer-contact">
                            <li>📍 تهران، خیابان آزادی</li>
                            <li>📞 ۰۲۱-۱۲۳۴۵۶۷۸</li>
                            <li>✉️ info@simon.ir</li>
                        </ul>
                    </div>
                </div>
                <div className="container footer-bottom">
                    <span>© تمامی حقوق برای سایمون محفوظ است.</span>
                    <span>طراحی و توسعه با ❤ توسط تیم سایمون</span>
                </div>
            </footer> */}
        </div>
    );
}