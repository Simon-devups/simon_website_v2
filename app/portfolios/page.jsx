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
                        <span className="eyebrow">پکیج‌های طراحی سایت سایمون</span>
                        <h1>سه پکیج حرفه‌ای برای هر نوع کسب‌وکار</h1>
                        <p className="section-sub center" style={{ marginTop: "18px" }}>
                            چه یک برند شرکتی باشید، چه فردی خلاق یا صاحب فروشگاه اینترنتی؛ ما پکیج‌های طراحی اختصاصی را آماده کرده‌ایم که متناسب با نیاز شما، بهترین حضور دیجیتال را بسازیم.
                        </p>
                        <div className={styles.breadcrumb}>
                            <Link href="/">صفحه اصلی</Link>
                            <span>/</span>
                            <span>پکیج‌های طراحی</span>
                        </div>
                    </div>
                </section>

                {/* ===== STATS STRIP ===== */}
                <section className={styles.portfolioStats}>
                    <div className="container">
                        <div className={styles.statsBar}>
                            <div className={styles.statItem}><strong>۳</strong><span>پکیج تخصصی</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>۱۰۰٪</strong><span>طراحی اختصاصی</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>پشتیبانی</strong><span>۲۴/۷</span></div>
                            <div className={styles.statSep}></div>
                            <div className={styles.statItem}><strong>سئو</strong><span>بهینه‌سازی شده</span></div>
                        </div>
                    </div>
                </section>

                {/* ===== PACKAGE 1 : CORPORATE ===== */}
                <section className={styles.caseStudy}>
                    <div className={`container ${styles.caseGrid}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۱</span>
                            <span className="eyebrow">پکیج شرکتی</span>
                            <h2 className={styles.caseTitle}>پکیج شرکتی؛ هویت دیجیتال حرفه‌ای برای برند شما</h2>
                            <p className={styles.caseDesc}>
                                این پکیج برای سازمان‌ها، شرکت‌ها و برندهایی طراحی شده که به دنبال یک وب‌سایت جامع، شکیل و قابل اعتماد هستند. از صفحه‌ی معرفی برند و تیم گرفته تا بخش خدمات، نمونه‌کارها، وبلاگ و فرم تماس؛ همه چیز برای نمایش حرفه‌ای کسب‌وکار شما آماده است. طراحی مدرن، ریسپانسیو و بهینه‌سازی شده برای موتورهای جستجو، همراه با پنل مدیریت آسان برای به‌روزرسانی محتوا.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>نیاز کسب‌وکار</h4>
                                    <p>داشتن یک وب‌سایت رسمی برای معرفی برند، جلب اعتماد مشتریان و ارائه اطلاعات کامل به مخاطبان.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>طراحی سایت شرکتی با معماری اطلاعات منظم، رابط کاربری شیک، سرعت بالا و قابلیت مدیریت آسان محتوا.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>تا ۱۰</strong><span>صفحه تخصصی</span></div>
                                <div><strong>۲ هفته</strong><span>زمان تحویل</span></div>
                                <div><strong>سئو</strong><span>داخلی و فنی</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>طراحی اختصاصی</span>
                                <span>ریسپانسیو</span>
                                <span>پنل مدیریت</span>
                                <span>بهینه‌سازی سرعت</span>
                            </div>

                            <div className={styles.caseDone}>✅ پکیج آماده ارائه – مناسب برای شرکت‌ها و برندها</div>
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
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>🏢</span> صفحه برند و تیم</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>⚡</span> سرعت بارگذاری بالا</div>
                        </div>
                    </div>
                </section>

                {/* ===== PACKAGE 2 : PERSONAL ===== */}
                <section className={`${styles.caseStudy} ${styles.alt}`}>
                    <div className={`container ${styles.caseGrid} ${styles.reverse}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۲</span>
                            <span className="eyebrow" style={{ background: "#FFF3DD", color: "var(--orange-2)" }}>پکیج شخصی</span>
                            <h2 className={styles.caseTitle}>پکیج شخصی؛ حضور آنلاین برای افراد، مشاغل کوچک و فریلنسرها</h2>
                            <p className={styles.caseDesc}>
                                این پکیج ویژه افرادی است که می‌خواهند با هزینه‌ای مقرون‌به‌صرفه، یک وب‌سایت شخصی، نمونه‌کارهای خلاقانه یا صفحه‌ی معرفی خدمات خود داشته باشند. از رزومه و گالری آثار گرفته تا فرم تماس و بخش وبلاگ؛ همه چیز برای نمایش توانمندی‌های شما در فضای دیجیتال. طراحی مینیمال، زیبا و کاملاً ریسپانسیو، مناسب برای موبایل و دسکتاپ.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>نیاز کسب‌وکار</h4>
                                    <p>داشتن یک وب‌سایت شخصی برای معرفی خود، جذب مشتری یا کارفرما و نمایش نمونه‌کارها.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>طراحی سایت شخصی با تأکید بر هویت فردی، گالری آثار، رزومه آنلاین و فرم ارتباطی ساده.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>تا ۵</strong><span>صفحه اختصاصی</span></div>
                                <div><strong>۱۰ روز</strong><span>زمان تحویل</span></div>
                                <div><strong>گالری</strong><span>آثار و تصاویر</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>طراحی مینیمال</span>
                                <span>ریسپانسیو</span>
                                <span>رزومه آنلاین</span>
                                <span>فرم تماس</span>
                            </div>

                            <div className={styles.caseDone}>✅ پکیج آماده ارائه – مناسب برای افراد، فریلنسرها و مشاغل کوچک</div>
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
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>🧑‍💻</span> رزومه و نمونه‌کار</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>📱</span> طراحی موبایل‌فرندلی</div>
                        </div>
                    </div>
                </section>

                {/* ===== PACKAGE 3 : E-COMMERCE ===== */}
                <section className={styles.caseStudy}>
                    <div className={`container ${styles.caseGrid}`}>
                        <div className={styles.caseText}>
                            <span className={styles.caseIndex}>۰۳</span>
                            <span className="eyebrow">پکیج فروشگاهی</span>
                            <h2 className={styles.caseTitle}>پکیج فروشگاهی؛ فروشگاه اینترنتی کامل و قدرتمند</h2>
                            <p className={styles.caseDesc}>
                                این پکیج برای کسب‌وکارهایی طراحی شده که می‌خواهند محصولات خود را به صورت آنلاین بفروشند. یک فروشگاه اینترنتی حرفه‌با دسته‌بندی محصولات، فیلترهای پیشرفته، سبد خرید، درگاه پرداخت امن، مدیریت سفارشات و پنل جامع برای مدیریت محصولات و تخفیف‌ها. همچنین قابلیت اتصال به سیستم‌های انبارداری و ارسال خودکار پیامک و ایمیل.
                            </p>

                            <div className={styles.caseCsGrid}>
                                <div className={styles.box}>
                                    <h4>نیاز کسب‌وکار</h4>
                                    <p>داشتن یک فروشگاه اینترنتی با امکان مدیریت آسان محصولات، پرداخت آنلاین و پیگیری سفارشات.</p>
                                </div>
                                <div className={styles.box}>
                                    <h4>راهکار سایمون</h4>
                                    <p>طراحی فروشگاهی با معماری پیشرفته، درگاه پرداخت، پنل مدیریت، و امکانات بازاریابی مثل کد تخفیف.</p>
                                </div>
                            </div>

                            <div className={styles.caseStats}>
                                <div><strong>نامحدود</strong><span>محصول</span></div>
                                <div><strong>۴ هفته</strong><span>زمان تحویل</span></div>
                                <div><strong>پرداخت</strong><span>امن و سریع</span></div>
                            </div>

                            <div className={styles.caseTags}>
                                <span>دسته‌بندی پیشرفته</span>
                                <span>درگاه پرداخت</span>
                                <span>مدیریت سفارشات</span>
                                <span>بازاریابی آنلاین</span>
                            </div>

                            <div className={styles.caseDone}>✅ پکیج آماده ارائه – مناسب برای فروشگاه‌های آنلاین و خرده‌فروشی‌ها</div>
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
                            <div className={`${styles.caseChip} ${styles.cc1}`}><span className={styles.dot}>🛒</span> سبد خرید هوشمند</div>
                            <div className={`${styles.caseChip} ${styles.cc2}`}><span className={`${styles.dot} ${styles.peach}`}>💳</span> درگاه پرداخت امن</div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA LINK TO CONTACT ===== */}
                <section className={styles.ctaLink}>
                    <div className="container">
                        <Link href="/contactUs" className={styles.box}>
                            <div>
                                <h3>همین حالا پکیج مناسب خود را انتخاب کنید</h3>
                                <p>اگر می‌خواهید وب‌سایت خود را با یکی از این سه پکیج حرفه‌ای راه‌اندازی کنید، تیم سایمون آماده مشاوره و اجراست.</p>
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
                            <li>0930 128 8166</li>
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