// app/khadamat/page.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./khadamat.module.css";

export default function ServicesPage() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMobile = () => setMobileOpen(!mobileOpen);
    const closeMobile = () => setMobileOpen(false);

    return (
        <div className={styles.page}>
            {/* ===== HEADER ===== */}
            {/* <header>
                <div className="container nav-wrap">
                    <Link href="/" className="logo">
                        <span className="logo-mark"><img src="/icon.jpg" style={{ width: "100%", height: '100%', borderRadius: '9px' }} /></span>
                        سایمون
                    </Link>
                    <nav>
                        <ul>
                            <li><Link href="/">صفحه اصلی</Link></li>
                            <li><Link href="/khadamat" className="active">خدمات ما</Link></li>
                            <li><Link href="/portfolios">نمونه کارها</Link></li>
                            <li><Link href="/aboutUs">درباره ما</Link></li>
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
                        <li><Link href="/khadamat" className="active" onClick={closeMobile}>خدمات ما</Link></li>
                        <li><Link href="/portfolio" onClick={closeMobile}>نمونه کارها</Link></li>
                        <li><Link href="/about" onClick={closeMobile}>درباره ما</Link></li>
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
                        <span className="eyebrow">simon services</span>
                        <h1>
                            خدماتی که کسب‌وکار شما را{" "}
                            <em style={{ color: "var(--blue)" }}>آنلاین و حرفه‌ای</em> می‌کند
                        </h1>
                        <p className="section-sub center" style={{ marginTop: "18px" }}>
                            از سایت شرکتی تا فروشگاه اینترنتی؛ تیم سایمون هر بخش از حضور دیجیتال
                            کسب‌وکار شما را با استراتژی، طراحی و توسعه‌ی اختصاصی می‌سازد.
                        </p>
                        <div className={styles.breadcrumb}>
                            <Link href="/">صفحه اصلی</Link>
                            <span>/</span>
                            <span>خدمات سایمون</span>
                        </div>
                    </div>
                </section>

                {/* ===== SERVICES FULL GRID ===== */}
                <section className={styles.servicesFull}>
                    <div className="container">
                        <span className="eyebrow">خدمات ما</span>
                        <h2 className="section-title">همه‌ی خدمات سایمون</h2>
                        <p className="section-sub" style={{ marginTop: "14px" }}>
                            هر خدمت با تیم تخصصی خودش اجرا می‌شود؛ نتیجه، حضور دیجیتالی یکپارچه و حرفه‌ای برای برند شماست.
                        </p>
                        <div className={styles.servicesFullGrid}>
                            {/* 1 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">🏢</span>
                                <h3>سایت شرکتی</h3>
                                <p>هویت دیجیتال حرفه‌ای برای معرفی کسب‌وکار، خدمات و اعتبار برند شما.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> طراحی اختصاصی متناسب با برند</li>
                                    <li><b>✓</b> بهینه‌سازی سرعت و سئو پایه</li>
                                    <li><b>✓</b> پنل مدیریت محتوای آسان</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>

                            {/* 2 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">🛒</span>
                                <h3>سایت فروشگاهی</h3>
                                <p>راه‌اندازی فروشگاه آنلاین امن و کاربردی برای فروش در هر زمان و مکان.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> درگاه پرداخت و مدیریت سفارش</li>
                                    <li><b>✓</b> مدیریت انبار و موجودی کالا</li>
                                    <li><b>✓</b> تجربه خرید سریع و مطمئن</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>

                            {/* 3 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">📱</span>
                                <h3>اپلیکیشن موبایل</h3>
                                <p>طراحی و توسعه اپلیکیشن اندروید و iOS برای دسترسی راحت‌تر مشتریان.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> رابط کاربری ساده و روان</li>
                                    <li><b>✓</b> اعلان‌ها و ارتباط مستقیم با کاربر</li>
                                    <li><b>✓</b> هماهنگی کامل با نسخه وب</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>

                            {/* 4 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">🎨</span>
                                <h3>برندینگ و هویت بصری</h3>
                                <p>طراحی لوگو، پالت رنگی و اصول بصری برای برندی متمایز و به‌یادماندنی.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> طراحی لوگو و ست اداری</li>
                                    <li><b>✓</b> راهنمای هویت بصری برند</li>
                                    <li><b>✓</b> طراحی محتوای شبکه‌های اجتماعی</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>

                            {/* 5 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">🚀</span>
                                <h3>لندینگ‌پیج اختصاصی</h3>
                                <p>صفحه فرود متمرکز بر تبدیل مخاطب به مشتری، مناسب کمپین‌های تبلیغاتی.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> طراحی مبتنی بر نرخ تبدیل</li>
                                    <li><b>✓</b> فرم‌ها و مسیر خرید بهینه</li>
                                    <li><b>✓</b> تحویل سریع در کمترین زمان</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>

                            {/* 6 */}
                            <div className={styles.serviceDetailCard}>
                                <span className="service-icon">📈</span>
                                <h3>سئو و پشتیبانی</h3>
                                <p>بهبود رتبه سایت در گوگل و پشتیبانی فنی مستمر پس از تحویل پروژه.</p>
                                <ul className={styles.serviceFeats}>
                                    <li><b>✓</b> سئوی فنی و محتوایی</li>
                                    <li><b>✓</b> گزارش ماهانه عملکرد سایت</li>
                                    <li><b>✓</b> پشتیبانی و رفع مشکلات فنی</li>
                                </ul>
                                <span className="link">بیشتر بدانید ←</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PROCESS ===== */}
                <section className={styles.process}>
                    <div className="container">
                        <div className={styles.processHead}>
                            <span className="eyebrow">مسیر همکاری</span>
                            <h2 className="section-title center">چطور با سایمون شروع کنیم؟</h2>
                        </div>
                        <div className={styles.processGrid}>
                            <div className={styles.processCard}>
                                <span className={styles.num}>1</span>
                                <h3>ثبت درخواست و مشاوره</h3>
                                <p>نیاز کسب‌وکارتان را با ما در میان بگذارید تا مسیر مناسب پیشنهاد شود.</p>
                            </div>
                            <div className={styles.processCard}>
                                <span className={styles.num}>2</span>
                                <h3>طراحی و اجرا</h3>
                                <p>تیم طراحی و توسعه سایمون پروژه را با دقت و شفافیت کامل اجرا می‌کند.</p>
                            </div>
                            <div className={styles.processCard}>
                                <span className={styles.num}>3</span>
                                <h3>تحویل و پشتیبانی</h3>
                                <p>پروژه تحویل داده می‌شود و پشتیبانی فنی پس از تحویل ادامه دارد.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== PRICING ===== */}
                <section className={styles.pricing}>
                    <div className="container">
                        <span className="eyebrow">پکیج‌های همکاری</span>
                        <h2 className="section-title">پکیجی متناسب با نیاز خودتان انتخاب کنید</h2>
                        <p className="section-sub" style={{ marginTop: "14px" }}>
                            قیمت نهایی بسته به نیاز دقیق پروژه در جلسه مشاوره تعیین می‌شود؛ اعداد زیر نقطه شروع هستند.
                        </p>
                        <div className={styles.pricingGrid}>
                            {/* Basic */}
                            <div className={styles.priceCard}>
                                <h3>شرکتی</h3>
                                <div className={styles.amount}>۱۴ <span>میلیون تومان از</span></div>
                                <ul className={styles.priceFeats}>
                                    <li><b>✓</b> سایت شرکتی تا ۵ صفحه</li>
                                    <li><b>✓</b> طراحی واکنش‌گرا</li>
                                    <li><b>✓</b> سئوی پایه</li>
                                </ul>
                                <Link href="/#contact" className="btn btn-ghost">درخواست مشاوره</Link>
                            </div>

                            {/* Featured */}
                            <div className={`${styles.priceCard} ${styles.featured}`}>
                                <span className={styles.priceBadge}>پیشنهاد سایمون</span>
                                <h3>فروشگاهی</h3>
                                <div className={styles.amount}>۲۴ <span>میلیون تومان از</span></div>
                                <ul className={styles.priceFeats}>
                                    <li><b>✓</b> سایت فروشگاهی کامل</li>
                                    <li><b>✓</b> درگاه پرداخت و مدیریت سفارش</li>
                                    <li><b>✓</b> سئوی فنی و محتوایی</li>
                                    <li><b>✓</b> سه ماه پشتیبانی رایگان</li>
                                </ul>
                                <Link href="/#contact" className="btn btn-primary">درخواست مشاوره</Link>
                            </div>

                            {/* Enterprise */}
                            <div className={styles.priceCard}>
                                <h3>شخصی</h3>
                                <div className={styles.amount}>۸ <span>میلیون تومان از</span></div>
                                <ul className={styles.priceFeats}>
                                    <li><b>✓</b> وب‌سایت اختصاصی</li>
                                    <li><b>✓</b> برندینگ کامل</li>
                                    <li><b>✓</b> پشتیبانی مستمر</li>
                                </ul>
                                <Link href="/#contact" className="btn btn-ghost">درخواست مشاوره</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== CTA GROWTH ===== */}
                <section className="cta-grow">
                    <div className="container">
                        <div className="box">
                            <div>
                                <h3>هنوز مطمئن نیستید کدام خدمت را نیاز دارید؟</h3>
                                <p>کافیست با تیم سایمون تماس بگیرید؛ در یک مشاوره رایگان مسیر درست را با هم مشخص می‌کنیم.</p>
                            </div>
                            <Link href="/#contact" className="btn btn-primary">مشاوره رایگان</Link>
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
                        <Link href="/" className="logo"><span className="logo-mark"><img src="/icon.jpg" style={{ width: "100%", height: '100%', borderRadius: '9px' }} /></span> سایمون</Link>
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