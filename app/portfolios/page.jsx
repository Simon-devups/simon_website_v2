// app/portfolio/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
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
                            <li><Link href="/portfolios" className="active">نمونه کارها</Link></li>
                            <li><Link href="/aboutUs">درباره ما</Link></li>
                            <li><Link href="/contactUs">تماس با ما</Link></li>
                        </ul>
                    </nav>
                    <div className="nav-cta">
                        <Link href="/contact" className="btn btn-orange">درخواست مشاوره</Link>
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
                        <li><Link href="/portfolio" className="active" onClick={closeMobile}>نمونه کارها</Link></li>
                        <li><Link href="/about" onClick={closeMobile}>درباره ما</Link></li>
                        <li><Link href="/contact" onClick={closeMobile}>تماس با ما</Link></li>
                    </ul>
                    <div className="mobile-cta">
                        <Link href="/contact" className="btn btn-orange" onClick={closeMobile}>درخواست مشاوره</Link>
                    </div>
                </div>
            </header> */}

            <main>
                {/* ===== PAGE BANNER ===== */}
                <section className={styles.pageBanner}>
                    <div className={styles.bannerBlobA}></div>
                    <div className={styles.bannerBlobB}></div>
                    <div className="container">
                        <span className="eyebrow">نمونه‌کارهای سایمون</span>
                        <h1>روایت پروژه‌هایی که با افتخار طراحی و اجرا کرده‌ایم</h1>
                        <p className="section-sub center" style={{ marginTop: "18px" }}>
                            هر پروژه برای ما یک داستان است؛ در ادامه با جزئیات کامل، سه نمونه از پروژه‌هایی را مرور می‌کنیم که تیم سایمون از ایده تا اجرا همراه صاحبان کسب‌وکار بوده است.
                        </p>
                        <div className={styles.breadcrumb}>
                            <Link href="/">صفحه اصلی</Link>
                            <span>/</span>
                            <span>نمونه کارها</span>
                        </div>
                    </div>
                </section>

                {/* ===== STATS STRIP ===== */}
                <section className={styles.portfolioStats}>
                    <div className="container">
                        <div className={styles.statsBar}>
                            <div className={styles.statItem}><strong>۳</strong><span>پروژه شاخص</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>۳</strong><span>صنعت متفاوت</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>۹۸٪</strong><span>رضایت مشتری</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>۱۰۰٪</strong><span>تحویل به‌موقع</span></div>
                        </div>
                    </div>
                </section>

                {/* ===== CASE STUDY 1 : E-COMMERCE ===== */}
                <section className={styles.caseStudy}>
                    <div className={`container ${styles.caseGrid}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۱</span>
                            <span className="eyebrow">فروشگاه اینترنتی</span>
                            <h2 className={styles.caseTitle}>فروشگاه اینترنتی نگین؛ از یک ایده ساده تا یک برند فروش آنلاین</h2>
                            <p className={styles.caseDesc}>
                                نگین با یک فروشگاه کوچک لوازم خانگی نزد ما آمد و به دنبال راهی بود تا فروش خود را از فضای فیزیکی به دنیای آنلاین گسترش دهد. تیم سایمون با طراحی یک فروشگاه اینترنتی مدرن، سریع و کاملاً ریسپانسیو، تجربه‌ی خرید ساده و مطمئنی را برای مشتریان نگین فراهم کرد؛ از دسته‌بندی هوشمند محصولات و درگاه پرداخت امن گرفته تا پنل مدیریت اختصاصی برای ثبت و ویرایش سریع محصولات.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>چالش پروژه</h4>
                                    <p>نبود بستری آنلاین برای معرفی و فروش محصولات و از دست رفتن مشتریانی که به دنبال خرید اینترنتی بودند.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>طراحی فروشگاهی سبک و سریع با تمرکز بر تجربه‌ی کاربری، پرداخت امن و مدیریت آسان محصولات.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>٪۶۵+</strong><span>افزایش فروش آنلاین</span></div>
                                <div><strong>۴ هفته</strong><span>زمان طراحی و اجرا</span></div>
                                <div><strong>۱۲۰+</strong><span>محصول راه‌اندازی‌شده</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>طراحی ریسپانسیو</span>
                                <span>درگاه پرداخت آنلاین</span>
                                <span>پنل مدیریت محصولات</span>
                                <span>بهینه‌سازی سرعت</span>
                            </div>

                            <div className={styles.caseDone}>✅ پروژه تکمیل‌شده و در حال بهره‌برداری</div>
                        </div>

                        <div className={styles.caseVisual}>
                            <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="blobBlue1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--blue)" />
                                        <stop offset="100%" stopColor="var(--blue-dark)" />
                                    </linearGradient>
                                </defs>
                                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobBlue1)" />
                                <rect x="90" y="95" width="500" height="330" rx="26" fill="#fff" stroke="var(--blue)" strokeWidth="6" />
                                <rect x="122" y="130" width="26" height="26" rx="7" fill="var(--blue)" />
                                <rect x="168" y="138" width="80" height="9" rx="4.5" fill="var(--ph-dark)" />
                                <rect x="470" y="128" width="88" height="26" rx="8" fill="var(--orange)" />
                                <rect x="122" y="176" width="140" height="110" rx="14" fill="var(--bg-soft)" />
                                <rect x="138" y="256" width="90" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="138" y="272" width="55" height="12" rx="6" fill="var(--blue)" />
                                <rect x="278" y="176" width="140" height="110" rx="14" fill="var(--bg-soft)" />
                                <rect x="294" y="256" width="90" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="294" y="272" width="55" height="12" rx="6" fill="var(--blue)" />
                                <rect x="434" y="176" width="124" height="110" rx="14" fill="var(--bg-soft)" />
                                <rect x="450" y="256" width="90" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="450" y="272" width="55" height="12" rx="6" fill="var(--blue)" />
                                <rect x="122" y="312" width="280" height="16" rx="8" fill="var(--ph)" />
                                <rect x="122" y="336" width="180" height="12" rx="6" fill="var(--ph)" />
                                <rect x="452" y="308" width="106" height="44" rx="12" fill="var(--blue)" />
                            </svg>
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>🛒</span> سبد خرید هوشمند</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>⚡</span> بارگذاری زیر ۲ ثانیه</div>
                        </div>
                    </div>
                </section>

                {/* ===== CASE STUDY 2 : DENTAL CLINIC ===== */}
                <section className={`${styles.caseStudy} ${styles.alt}`}>
                    <div className={`container ${styles.caseGrid} ${styles.reverse}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۲</span>
                            <span className="eyebrow" style={{ background: "#FFF3DD", color: "var(--orange-2)" }}>پزشکی و سلامت</span>
                            <h2 className={styles.caseTitle}>کلینیک دندانپزشکی درخشان؛ نوبت‌دهی آنلاین و اعتمادسازی دیجیتال</h2>
                            <p className={styles.caseDesc}>
                                کلینیک درخشان با وجود کیفیت بالای خدمات، حضور دیجیتالی قابل توجهی نداشت و بخش زیادی از تماس‌های تلفنی صرف هماهنگی نوبت می‌شد. سایمون با طراحی وب‌سایتی حرفه‌ای و آرام‌بخش، معرفی پزشکان، خدمات و نظرات بیماران را در کنار یک سیستم نوبت‌دهی آنلاین ساده قرار داد تا هم اعتماد بیماران جلب شود و هم زمان کارکنان کلینیک آزاد شود.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>چالش پروژه</h4>
                                    <p>حجم بالای تماس تلفنی برای رزرو نوبت و نبود رتبه‌ی مناسب در جست‌وجوی محلی گوگل.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>سیستم نوبت‌دهی آنلاین، سئوی محلی هدفمند و طراحی رابطی آرام و قابل‌اعتماد برای بیماران.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>٪۸۰+</strong><span>افزایش رزرو آنلاین</span></div>
                                <div><strong>رتبه ۱</strong><span>در جست‌وجوی محلی گوگل</span></div>
                                <div><strong>۳ هفته</strong><span>زمان طراحی و راه‌اندازی</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>سئوی محلی</span>
                                <span>نوبت‌دهی آنلاین</span>
                                <span>طراحی مدرن و آرام</span>
                                <span>بهینه برای موبایل</span>
                            </div>

                            <div className={styles.caseDone}>✅ پروژه تکمیل‌شده و در حال بهره‌برداری</div>
                        </div>

                        <div className={styles.caseVisual}>
                            <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="blobOrange2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--orange)" />
                                        <stop offset="100%" stopColor="var(--orange-2)" />
                                    </linearGradient>
                                </defs>
                                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobOrange2)" />
                                <rect x="90" y="95" width="500" height="330" rx="26" fill="#fff" stroke="var(--orange-2)" strokeWidth="6" />
                                <circle cx="150" cy="150" r="26" fill="var(--bg-soft)" />
                                <path d="M150,138 a12,12 0 1,1 0,24 a12,12 0 1,1 0,-24" fill="var(--blue)" />
                                <rect x="188" y="140" width="120" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="188" y="158" width="80" height="9" rx="4.5" fill="var(--ph)" />
                                <rect x="450" y="128" width="98" height="30" rx="15" fill="var(--blue)" />
                                <rect x="122" y="196" width="456" height="1" fill="var(--line)" />
                                <rect x="122" y="222" width="98" height="80" rx="12" fill="var(--bg-soft)" />
                                <rect x="234" y="222" width="98" height="80" rx="12" fill="var(--bg-soft)" />
                                <rect x="346" y="222" width="98" height="80" rx="12" fill="var(--orange)" />
                                <rect x="458" y="222" width="98" height="80" rx="12" fill="var(--bg-soft)" />
                                <rect x="122" y="326" width="200" height="14" rx="7" fill="var(--ph-dark)" />
                                <rect x="122" y="350" width="320" height="10" rx="5" fill="var(--ph)" />
                                <rect x="122" y="368" width="260" height="10" rx="5" fill="var(--ph)" />
                            </svg>
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>📅</span> رزرو آنلاین نوبت</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>⭐</span> رضایت ۹۶٪ بیماران</div>
                        </div>
                    </div>
                </section>

                {/* ===== CASE STUDY 3 : REAL ESTATE ===== */}
                <section className={styles.caseStudy}>
                    <div className={`container ${styles.caseGrid}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۳</span>
                            <span className="eyebrow">املاک و مستغلات</span>
                            <h2 className={styles.caseTitle}>آژانس املاک ونداد؛ جست‌وجوی هوشمند ملک روی نقشه</h2>
                            <p className={styles.caseDesc}>
                                ونداد با آرشیوی بزرگ از فایل‌های ملکی، به پلتفرمی نیاز داشت که مشتریان بتوانند به‌سادگی و بر اساس موقعیت جغرافیایی، بودجه و متراژ، ملک مورد نظرشان را پیدا کنند. سایمون با طراحی یک وب‌سایت مبتنی بر نقشه‌ی تعاملی، فیلترهای پیشرفته‌ی جست‌وجو و گالری تصاویر باکیفیت، تجربه‌ای شبیه پلتفرم‌های بزرگ املاک را برای ونداد فراهم کرد.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>چالش پروژه</h4>
                                    <p>پراکندگی اطلاعات فایل‌های ملکی و دشواری مشتریان در جست‌وجوی ملک مناسب بر اساس منطقه.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>نقشه‌ی تعاملی، فیلتر پیشرفته‌ی جست‌وجو و فرم آنلاین درخواست بازدید از ملک.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>۲۰۰+</strong><span>فایل ملکی ثبت‌شده</span></div>
                                <div><strong>٪۵۰+</strong><span>افزایش تماس مشتریان</span></div>
                                <div><strong>۵ هفته</strong><span>زمان طراحی و اجرا</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>نقشه تعاملی</span>
                                <span>فیلتر پیشرفته جست‌وجو</span>
                                <span>گالری تصاویر</span>
                                <span>فرم درخواست بازدید</span>
                            </div>

                            <div className={styles.caseDone}>✅ پروژه تکمیل‌شده و در حال بهره‌برداری</div>
                        </div>

                        <div className={styles.caseVisual}>
                            <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="blobBlue3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="var(--blue)" />
                                        <stop offset="100%" stopColor="var(--blue-dark)" />
                                    </linearGradient>
                                </defs>
                                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobBlue3)" />
                                <rect x="90" y="95" width="500" height="330" rx="26" fill="#fff" stroke="var(--blue)" strokeWidth="6" />
                                <rect x="112" y="115" width="480" height="200" rx="14" fill="#DCE7FF" />
                                <path d="M180,270 L230,210 L280,250 L340,180 L400,240 L470,190 L530,260" fill="none" stroke="var(--blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="230" cy="210" r="10" fill="var(--orange)" />
                                <circle cx="340" cy="180" r="10" fill="var(--blue-dark)" />
                                <circle cx="470" cy="190" r="10" fill="var(--orange)" />
                                <rect x="122" y="336" width="150" height="66" rx="14" fill="var(--bg-soft)" />
                                <rect x="138" y="352" width="90" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="138" y="370" width="60" height="12" rx="6" fill="var(--blue)" />
                                <rect x="290" y="336" width="150" height="66" rx="14" fill="var(--bg-soft)" />
                                <rect x="306" y="352" width="90" height="10" rx="5" fill="var(--ph-dark)" />
                                <rect x="306" y="370" width="60" height="12" rx="6" fill="var(--blue)" />
                                <rect x="458" y="336" width="98" height="66" rx="14" fill="var(--orange)" />
                            </svg>
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>📍</span> نقشه تعاملی ملک</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>🏠</span> +۲۰۰ فایل ملکی</div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA LINK TO CONTACT ===== */}
                <section className={styles.ctaLink}>
                    <div className="container">
                        <Link href="/contact" className={styles.box}>
                            <div>
                                <h3>پروژه بعدی، داستان کسب‌وکار شماست</h3>
                                <p>اگر ایده‌ای در ذهن دارید، تیم سایمون آماده است تا مثل این نمونه‌کارها، آن را به یک محصول دیجیتال حرفه‌ای تبدیل کند.</p>
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
                            <li><Link href="/portfolio">نمونه کارها</Link></li>
                            <li><Link href="/about">درباره ما</Link></li>
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