// app/contact/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./contactUs.module.css";

export default function ContactPage() {
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
                            <li><Link href="/aboutUs">درباره ما</Link></li>
                            <li><Link href="/contactUs" className="active">تماس با ما</Link></li>
                        </ul>
                    </nav>
                    <div className="nav-cta">
                        <Link href="#form" className="btn btn-orange">درخواست مشاوره</Link>
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
                        <li><Link href="/about" onClick={closeMobile}>درباره ما</Link></li>
                        <li><Link href="/contact" className="active" onClick={closeMobile}>تماس با ما</Link></li>
                    </ul>
                    <div className="mobile-cta">
                        <Link href="#form" className="btn btn-orange" onClick={closeMobile}>درخواست مشاوره</Link>
                    </div>
                </div>
            </header> */}

            <main>
                {/* ===== PAGE HERO ===== */}
                <section className={styles.pageHero}>
                    <div className={`container ${styles.pageHeroGrid}`}>
                        <div>
                            <div className={styles.breadcrumb}>
                                <Link href="/">صفحه اصلی</Link> / <span>تماس با ما</span>
                            </div>
                            <span className="eyebrow">در تماس باشید</span>
                            <h1>با ما در ارتباط باشید</h1>
                            <p>
                                ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. اگر به راهنمایی نیاز دارید، درخواست همکاری دارید یا هر گونه پرسشی برایتان پیش آمده، می‌توانید از طریق فرم تماس، ایمیل یا شماره‌های درج‌شده با ما در ارتباط باشید. تیم ما در سریع‌ترین زمان ممکن پاسخگوی شما خواهد بود.
                            </p>
                            <div className={styles.heroActions}>
                                <a href="tel:+982112345678" className="btn btn-primary">📞 تماس با موبایل</a>
                                <a href="#form" className="btn btn-ghost">ارسال پیام</a>
                            </div>
                        </div>
                        <div className={styles.heroArtSm}>
                            <div className={styles.heroBlobSm}></div>
                            <div className={styles.heroOrangeDotSm}>💬</div>
                            <div className={`${styles.pingRing} ${styles.r1}`}></div>
                            <div className={`${styles.pingRing} ${styles.r2}`}></div>
                            <div className={`${styles.pingRing} ${styles.r3}`}></div>
                            <div className={styles.centerIcon}>✉️</div>
                            <div className={`${styles.floatCard} ${styles.fc1}`}>
                                <span className={styles.dot}>📱</span> پاسخگویی سریع
                            </div>
                            <div className={`${styles.floatCard} ${styles.fc2}`}>
                                <span className={styles.dot}>📍</span> تهران، ایران
                            </div>
                            <div className={`${styles.floatCard} ${styles.fc3}`}>
                                <span className={styles.dot}>⏱</span> شنبه تا پنجشنبه
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CONTACT INFO CARDS ===== */}
                <section className={styles.contactInfo}>
                    <div className="container">
                        <div className={styles.infoGrid}>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>📱</span>
                                <h3>تلفن همراه</h3>
                                <span className={styles.val}>0912 345 6789+</span>
                                <a href="tel:+989123456789" className={styles.miniBtn}>تماس بگیرید</a>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>☎️</span>
                                <h3>تلفن ثابت</h3>
                                <span className={styles.val}>021 - 1234 5678+</span>
                                <a href="tel:+982112345678" className={styles.miniBtn}>تماس بگیرید</a>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>✉️</span>
                                <h3>ایمیل</h3>
                                <span className={styles.val}>info@simon.ir</span>
                                <a href="mailto:info@simon.ir" className={styles.miniBtn}>ارسال ایمیل</a>
                            </div>
                            <div className={styles.infoCard}>
                                <span className={styles.infoIcon}>📍</span>
                                <h3>آدرس دفتر</h3>
                                <span className={`${styles.val} ${styles.rtl}`}>تهران، خیابان آزادی</span>
                                <a href="#" className={styles.miniBtn}>مسیریابی</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== FORM + SIDE PANEL ===== */}
                <section className={styles.contactMain} id="form">
                    <div className={`container ${styles.mainGrid}`}>
                        <div className={styles.formCard}>
                            <h2>فرم تماس با ما</h2>
                            <p className={styles.sub}>فرم زیر را پر کنید؛ تیم سایمون در سریع‌ترین زمان ممکن با شما تماس خواهد گرفت.</p>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className={styles.formRow}>
                                    <div className={styles.field}>
                                        <label>نام و نام خانوادگی</label>
                                        <input type="text" placeholder="مثلاً علیرضا احمدی" />
                                    </div>
                                    <div className={styles.field}>
                                        <label>شماره تماس</label>
                                        <input type="tel" placeholder="09XX XXX XXXX" />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={`${styles.field} ${styles.full}`}>
                                        <label>ایمیل</label>
                                        <input type="email" placeholder="you@example.com" />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={`${styles.field} ${styles.full}`}>
                                        <label>موضوع</label>
                                        <input type="text" placeholder="مثلاً درخواست همکاری، مشاوره طراحی سایت و..." />
                                    </div>
                                </div>
                                <div className={styles.formRow}>
                                    <div className={`${styles.field} ${styles.full}`}>
                                        <label>پیام شما</label>
                                        <textarea rows="5" placeholder="پیام خود را اینجا بنویسید..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" className={`btn btn-primary ${styles.btnBlock}`}>ارسال پیام</button>
                            </form>
                        </div>

                        <div className={styles.sidePanel}>
                            <h3>راه‌های ارتباطی سریع</h3>
                            <div className={styles.sideItem}>
                                <span className={styles.ic}>📱</span>
                                <div><strong>تلفن همراه</strong><span>0912 345 6789+</span></div>
                            </div>
                            <div className={styles.sideItem}>
                                <span className={styles.ic}>☎️</span>
                                <div><strong>تلفن ثابت</strong><span>021 - 1234 5678+</span></div>
                            </div>
                            <div className={styles.sideItem}>
                                <span className={styles.ic}>✉️</span>
                                <div><strong>ایمیل</strong><span>info@simon.ir</span></div>
                            </div>
                            <div className={styles.sideItem}>
                                <span className={styles.ic}>📍</span>
                                <div><strong>آدرس</strong><span className={styles.rtl}>تهران، خیابان آزادی، ساختمان سایمون</span></div>
                            </div>
                            <div className={styles.sideItem}>
                                <span className={styles.ic}>⏱</span>
                                <div><strong>ساعات پاسخگویی</strong><span className={styles.rtl}>شنبه تا پنجشنبه، ۹ الی ۱۸</span></div>
                            </div>
                            <div className={styles.sideMap}>نقشه موقعیت دفتر سایمون</div>
                        </div>
                    </div>
                </section>

                {/* ===== SOCIAL BAND ===== */}
                <section className={styles.socialBandWrap}>
                    <div className="container">
                        <div className={styles.socialBand}>
                            <span className={`eyebrow ${styles.socialEyebrow}`}>شبکه‌های اجتماعی</span>
                            <h3>ما را در شبکه‌های اجتماعی دنبال کنید</h3>
                            <p>برای دیدن آخرین پروژه‌ها، اخبار و پیشنهادهای ویژه سایمون، در شبکه‌های اجتماعی همراه ما باشید.</p>
                            <div className={styles.socialIcons}>
                                <a href="#" aria-label="اینستاگرام">📷</a>
                                <a href="#" aria-label="تلگرام">✈️</a>
                                <a href="#" aria-label="واتساپ">💬</a>
                                <a href="#" aria-label="لینکدین">in</a>
                                <a href="#" aria-label="توییتر">🐦</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== QUICK NOTE ===== */}
                <section className={styles.quickNote}>
                    <div className="container">
                        <div className={styles.noteBox}>
                            <div className={styles.txt}>
                                <span className={styles.ic}>⚡</span>
                                <div>
                                    <strong>پاسخگویی سریع تیم پشتیبانی</strong>
                                    <span>معمولاً کمتر از ۲۴ ساعت به پیام‌های شما پاسخ می‌دهیم.</span>
                                </div>
                            </div>
                            <a href="tel:+989123456789" className="btn btn-primary">📞 تماس فوری</a>
                        </div>
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