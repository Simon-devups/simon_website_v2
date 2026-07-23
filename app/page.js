import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <header>
        <div className="container nav-wrap">
          <Link href="#" className="logo">
            <span className="logo-mark"><img src="/icon.jpg" style={{width: "100%", height: '100%' ,borderRadius: '9px'}}/></span>
            سایمون 
          </Link>
          <nav>
            <ul>
              <li><Link href="/" className="active">صفحه اصلی</Link></li>
              <li><Link href="/khadamat">خدمات ما</Link></li>
              <li><Link href="/portfolios">نمونه کارها</Link></li>
              <li><Link href="/aboutUs">درباره ما</Link></li>
              <li><Link href="/contactUs">تماس با ما</Link></li>
            </ul>
          </nav>
          <div className="nav-cta">
            <Link href="#contact" className="btn btn-orange">درخواست مشاوره</Link>
            <span className="burger" id="burgerBtn">☰</span>
          </div>
        </div>
        <div className="mobile-nav" id="mobileNav">
          <ul>
            <li><Link href="#home" className="active">صفحه اصلی</Link></li>
            <li><Link href="#services">خدمات ما</Link></li>
            <li><Link href="#portfolio">نمونه کارها</Link></li>
            <li><Link href="simon-about.html">درباره ما</Link></li>
            <li><Link href="#contact">تماس با ما</Link></li>
          </ul>
          <div className="mobile-cta">
            <Link href="#contact" className="btn btn-orange">درخواست مشاوره</Link>
          </div>
        </div>
      </header> */}

      <main>

        {/* <!-- HERO --> */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">طراحی و توسعه سایت حرفه‌ای</span>
              <h1>با تیم <em>سایمون</em>،<br />کسب‌وکار خودت رو آنلاین کن</h1>
              <p>سایمون یک تیم متخصص در طراحی سایت و هویت دیجیتال است؛ از قالب اختصاصی تا فروشگاه آنلاین، همه‌چیز را برایتان می‌سازیم تا کسب‌وکارتان همیشه در دسترس مشتری باشد.</p>
              <div className="hero-actions">
                <Link href="#contact" className="btn btn-primary">کسب و کارت رو آنلاین کن</Link>
                <Link href="#contact" className="btn btn-ghost">مشاوره رایگان</Link>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-blob"></div>
              <div className="hero-orange-dot"><img src="/Group 25 (1).svg" style={{ width: "60%", borderRadius: '9px' }} /></div>
              <div className="device-frame">
                <div className="bar"><i></i><i></i><i></i></div>
                <div className="body">
                  <svg className="mockup-illustration" viewBox="0 0 260 190" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="118" height="72" rx="12" fill="var(--bg-soft)" />
                    <circle cx="24" cy="24" r="12" fill="var(--blue)" />
                    <rect x="44" y="17" width="58" height="8" rx="4" fill="var(--ph-dark)" />
                    <rect x="44" y="31" width="38" height="7" rx="3.5" fill="var(--ph)" />
                    <rect x="14" y="46" width="90" height="16" rx="8" fill="#fff" />
                    <rect x="126" y="0" width="134" height="72" rx="12" fill="var(--bg-soft)" />
                    <polyline points="136,50 156,32 176,42 196,20 216,30 236,14 250,22" fill="none" stroke="var(--blue)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="250" cy="22" r="5" fill="var(--orange)" />
                    <rect x="0" y="82" width="260" height="108" rx="12" fill="var(--bg-soft)" />
                    <rect x="18" y="150" width="26" height="26" rx="6" fill="var(--blue)" opacity=".55" />
                    <rect x="54" y="130" width="26" height="46" rx="6" fill="var(--blue)" opacity=".7" />
                    <rect x="90" y="112" width="26" height="64" rx="6" fill="var(--blue)" />
                    <rect x="126" y="138" width="26" height="38" rx="6" fill="var(--orange)" opacity=".7" />
                    <rect x="162" y="100" width="26" height="76" rx="6" fill="var(--orange)" />
                    <rect x="198" y="122" width="26" height="54" rx="6" fill="var(--blue)" opacity=".85" />
                    <rect x="196" y="98" width="48" height="22" rx="11" fill="#fff" />
                    <text x="220" y="113" fontFamily="Vazirmatn, sans-serif" fontSize="12" fontWeight="700" fill="var(--blue)" textAnchor="middle">‎+24%</text>
                  </svg>
                </div>
              </div>
              <div className="hero-card hc1"><span className="dot">✓</span> تحویل به‌موقع</div>
              <div className="hero-card hc2"><span className="dot">★</span> رضایت مشتری ۹۸٪</div>
            </div>
          </div>
        </section>

        {/* <!-- STATS --> */}
        <section>
          <div className="container">
            <div className="stats">
              <div className="stat-item"><strong>تعهد</strong><span>در زمان تحویل</span></div>
              <div className="stat-sep"></div>
              <div className="stat-item"><strong>رایگان</strong><span>مشاوره اولیه</span></div>
              <div className="stat-sep"></div>
              <div className="stat-item"><strong>۲۴/۷</strong><span>پشتیبانی</span></div>
              <div className="stat-sep"></div>
              <div className="stat-item"><strong>تضمینی</strong><span>کیفیت و سرعت</span></div>
            </div>
          </div>
        </section>

        {/* <!-- WHY --> */}
        <section className="why">
          <div className="container">
            <div className="why-head">
              <span className="eyebrow">چرا سایمون؟</span>
              <h2 className="section-title">کسب و کار شما چه نیازی به سایت دارد؟</h2>
              <p className="section-sub center" style={{ marginTop: "14px" }}>سایت، ویترین همیشگی کسب‌وکار شماست؛ جایی که مشتری بدون محدودیت زمان و مکان، ۲۴ ساعته به شما دسترسی دارد و فروش بدون مرز جغرافیایی انجام می‌شود.</p>
            </div>
            <div className="orbit-wrap">
              <div className="orbit-center">
                <img src="/icon.jpg" style={{ width: "100%", height: '100%', borderRadius: '500px' }} />
              </div>
              <div className="why-card"><span className="ic">↗</span><div><h3>بهینه‌سازی سرعت</h3><p>بارگذاری سریع در همه دستگاه‌ها</p></div></div>
              <div className="why-card"><span className="ic">⏱</span><div><h3>دسترسی ۲۴ ساعته</h3><p>همیشه در دسترس مشتریان شما</p></div></div>
              <div className="why-card"><span className="ic">🌐</span><div><h3>فروش بدون مرز</h3><p>فروش فراتر از مرزهای جغرافیایی</p></div></div>
              <div className="why-card"><span className="ic">◆</span><div><h3>اعتبار برند</h3><p>افزایش اعتماد و اعتبار کسب‌وکار</p></div></div>
              <div className="why-card"><span className="ic">✎</span><div><h3>تعامل بهتر</h3><p>ارتباط مستقیم‌تر با مشتریان</p></div></div>
              <div className="why-card"><span className="ic">▤</span><div><h3>تحلیل و گزارش</h3><p>رصد دقیق عملکرد کسب‌وکار</p></div></div>
            </div>
          </div>
        </section>

        {/* <!-- SERVICES --> */}
        <section className="services" id="services">
          <div className="container">
            <span className="eyebrow">simon services</span>
            <h2 className="section-title">خدمات سایمون</h2>
            <div className="services-grid">
              <div className="service-card">
                <span className="service-icon">🏢</span>
                <h3>سایت شرکتی</h3>
                <p>تیم سایمون برندها را با خلاقیت و استراتژی‌های به‌روز همراهی می‌کند و هویت دیجیتال حرفه‌ای برایشان می‌سازد.</p>
                <Link href={'/portfolios'} className="link">بیشتر بدانید ←</Link>
              </div>
              <div className="service-card">
                <span className="service-icon">🛒</span>
                <h3>سایت فروشگاهی</h3>
                <p>راه‌اندازی فروشگاه آنلاین امن و کاربردی برای فروش محصولات شما در هر زمان و هر مکان.</p>
                <Link href={'/portfolios'} className="link">بیشتر بدانید ←</Link>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- PORTFOLIO --> */}
        <section className="portfolio" id="portfolio">
          <div className="container">
            <span className="eyebrow">نمونه کارها</span>
            <h2 className="section-title">نمونه‌ای از پروژه‌های سایمون</h2>
            <div className="portfolio-grid">
              <div className="p-item p1" data-tag="سایت شرکتی"></div>
              <div className="p-item p2" data-tag="فروشگاهی"></div>
              <div className="p-item p3" data-tag="شرکتی"></div>
              <div className="p-item p4" data-tag="برندینگ"></div>
              <div className="p-item p5" data-tag="لندینگ‌پیج"></div>
            </div>
          </div>
        </section>

        {/* <!-- DEVICE SHOWCASE --> */}
        <section className="showcase">
          <div className="container">
            <div className="showcase-blob">
              <div className="showcase-badge">    <img src="/Group 25.svg" style={{ width: "60%", borderRadius: '9px' }} /></div>
              <div className="devices">
                <div className="tablet"><div className="screen"><div className="ph-line" style={{ width: '70%' }}></div><div className="ph-block"></div></div></div>
                <div className="laptop">
                  <div className="screen">
                    <div className="ph-line" style={{ width: '50%' }}></div>
                    <div className="ph-block"></div>
                  </div>
                  <div className="stand"></div>
                </div>
                <div className="phone"><div className="screen"><div className="ph-line" style={{ width: '60%' }}></div><div className="ph-block"></div></div></div>
              </div>
              <div className="showcase-caption">
                <h3>خدمات سایمون در همه دستگاه‌ها</h3>
                <p>طراحی واکنش‌گرا و هماهنگ در دسکتاپ، تبلت و موبایل؛ تجربه‌ای یکپارچه برای همه مشتریان شما.</p>
                <div className="showcase-tags">
                  <span>طراحی سایت</span>
                  <span>طراحی محصول</span>
                  <span>سئو</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- WEBSITE DESIGN STEPS --> */}
        <section className="why" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div className="why-head">
              <span className="eyebrow">Website design steps</span>
              <h2 className="section-title">مراحل طراحی سایت</h2>
            </div>
            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3,1fr' }} >
              <div className="service-card">
                <span className="service-icon">1</span>
                <h3>ارسال درخواست</h3>
                <p>درخواست خود را ثبت کنید؛ تیم ما خیلی زود با شما تماس می‌گیرد.</p>
              </div>
              <div className="service-card">
                <span className="service-icon">2</span>
                <h3>تماس کارشناسان</h3>
                <p>انجام بررسی‌های فنی تا سایت شما بهینه، سریع و کاملاً سازگار با نیازهایتان باشد.</p>
              </div>
              <div className="service-card">
                <span className="service-icon">3</span>
                <h3>جلسه و عقد قرارداد</h3>
                <p>جلسه با کارفرما و عقد قرارداد برای شروع رسمی همکاری.</p>
              </div>
              <div className="service-card">
                <span className="service-icon">4</span>
                <h3>طراحی قالب سایت</h3>
                <p>طراحی کاربردی که به‌طور کامل هویت برند شما را نشان دهد.</p>
              </div>
              <div className="service-card">
                <span className="service-icon">5</span>
                <h3>شروع طراحی سایت</h3>
                <p>دقت بالا در اجرا تا نتیجه‌ای حرفه‌ای و بی‌نقص به دست آید.</p>
              </div>
              <div className="service-card">
                <span className="service-icon">6</span>
                <h3>تحویل سایت</h3>
                <p>تحویل نهایی سایت به کارفرما و پشتیبانی پس از تحویل.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-grow">
          <div className="container">
            <div className="box">
              <div>
                <h3>کسب و کار شما آماده رشد است؟</h3>
                <p>همین حالا با تیم سایمون شروع کنید و اولین قدم را برای حضور آنلاین حرفه‌ای بردارید.</p>
              </div>
              <Link href="#contact" className="btn btn-primary">شروع رایگان</Link>
            </div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="container about-grid">
            <div className="about-art">
              <svg viewBox="0 0 700 520" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="blobOrangeLanding" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--orange)" />
                    <stop offset="100%" stopColor="var(--orange-2)" />
                  </linearGradient>
                </defs>
                <path d="M340,35 C470,15 610,70 655,195 C695,310 630,440 495,480 C355,520 175,505 90,400 C10,300 30,150 150,80 C205,48 275,48 340,35 Z" fill="url(#blobOrangeLanding)" />
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
              <div className="float-chip ac1"><span className="dot">👥</span> تیم متخصص و حرفه‌ای</div>
              <div className="float-chip ac2"><span className="dot peach">🚀</span> +۵ سال تجربه اجرایی</div>
            </div>
            <div className="about-text">
              <span className="eyebrow">درباره سایمون</span>
              <h2 className="section-title">تیمی که دغدغه‌ی رشد کسب‌وکار شماست</h2>
              <p className="section-sub" style={{ maxWidth: "100%", marginTop: '16px' }}>سایمون از یک تیم کوچک طراحی وب شروع شد و امروز با ترکیبی از طراحان، توسعه‌دهندگان و کارشناسان تجربه‌ی کاربری، همراه ده‌ها کسب‌وکار در مسیر حضور آنلاین حرفه‌ای است. ما باور داریم هر برند، داستان خودش را دارد؛ به همین دلیل هر پروژه را با استراتژی و طراحی اختصاصی جلو می‌بریم، نه با قالب‌های آماده و تکراری.</p>
              <ul className="about-list">
                <li><b>✓</b> تیم داخلی طراحی، توسعه و سئو زیر یک سقف</li>
                <li><b>✓</b> پشتیبانی فنی مستمر پس از تحویل پروژه</li>
                <li><b>✓</b> رعایت زمان‌بندی و شفافیت کامل در قرارداد</li>
              </ul>

            </div>
          </div>
        </section>

        <section className="testi">
          <div className="container">
            <span className="eyebrow center" style={{ display: 'table', marginInline: 'auto' }}>نظرات مشتریان</span>
            <h2 className="section-title center">نظرات مشتریان ما</h2>
            <div className="testi-grid">
              <div className="testi-card">
                <span className="stars">★★★★★</span>
                <p className="testi-quote">سلام، نکته‌ای که بیش از همه برایمان ارزشمند بود، توجه تیم به جزئیات برندینگ و هماهنگی کامل با اهداف کلان سازمان بود</p>
                <div className="testi-person"><span className="avatar"></span><div><strong>امیر سلیمان زاده</strong><span>مدیر فروشگاه آنلاین</span></div></div>
              </div>
              <div className="testi-card">
                <span className="stars">★★★★★</span>
                <p className="testi-quote">سلام، من  طی پروژه از عملکرد تیم سایمون به شدت راضی بودم و همکاری بسیار حرفه‌ای بود.</p>
                <div className="testi-person"><span className="avatar"></span><div><strong>علیرضا رحمانی</strong><span>مدیر برند شرکتی</span></div></div>
              </div>
              <div className="testi-card">
                <span className="stars">★★★★★</span>
                <p className="testi-quote">پروژه را کامل و طبق برنامه و قرارداد گرفتم</p>
                <div className="testi-person"><span className="avatar"></span><div><strong>علیرضا احمدی</strong><span>برند شخصی</span></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="container">
            <span className="eyebrow">تماس با ما</span>
            <h2 className="section-title">همین حالا با ما در ارتباط باشید</h2>
            <p className="section-sub" style={{ marginTop: '14px' }}>سوالی درباره پروژه‌تان دارید یا می‌خواهید مشاوره رایگان بگیرید؟ فرم زیر را پر کنید تا کارشناسان سایمون در کوتاه‌ترین زمان با شما تماس بگیرند.</p>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-card">
                  <span className="ic">💬</span>
                  <div>
                    <h4>ارتباط آنلاین</h4>
                    <p>پاسخگویی ۲۴ ساعته از طریق تلگرام ، بله و . . .</p>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="ic">📞</span>
                  <div>
                    <h4>شماره تماس</h4>
                    <a href="tel:+989301288166" dir="ltr" style={{ color: 'inherit', textDecoration: 'none' }}>
                      0930 128 8166
                    </a>
                  </div>
                </div>
                <div className="contact-card">
                  <span className="ic">✉️</span>
                  <div>
                    <h4>ایمیل</h4>
                    <p>simonwebdevups@gmail.com</p>
                  </div>
                </div>
                {/* <div className="contact-map">نقشه موقعیت دفتر سایمون</div> */}
              </div>
              {/* <form className="contact-form">
                <h3>فرم درخواست مشاوره</h3>
                <p>اطلاعات‌تان را وارد کنید؛ ظرف کمتر از ۲۴ ساعت پاسخگوی شما هستیم.</p>
                <div className="form-row">
                  <div className="form-group">
                    <label for="fullname">نام و نام‌خانوادگی</label>
                    <input type="text" id="fullname" placeholder="مثلاً علیرضا احمدی" />
                  </div>
                  <div className="form-group">
                    <label for="phone">شماره تماس</label>
                    <input type="tel" id="phone" placeholder="۰۹۱۲xxxxxxx" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="email">ایمیل</label>
                  <input type="email" id="email" placeholder="you@email.com" />
                </div>
                <div className="form-group">
                  <label for="message">توضیح پروژه</label>
                  <textarea id="message" placeholder="کمی درباره کسب‌وکار و نیازتان بنویسید..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary">ارسال درخواست</button>
              </form> */}
            </div>
          </div>
        </section>

        <section className="articles" id="articles">
          <div className="container">
            <span className="eyebrow">وبلاگ سایمون</span>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h2 className="section-title">آخرین مقالات</h2>
              <Link href={"/articles"} style={{ padding: '.5rem 2rem', borderRadius: '10rem', backgroundColor: '#f3f6fe', color: '#2b63e0', border: '1px solid #2b63e0', fontWeight: '600', fontSize: '1.1rem' }}>مقالات بیشتر <span ></span>←</Link>
            </div>
            <p className="section-sub" style={{ marginTop: '14px' }}>نکات و تجربه‌های تیم سایمون درباره طراحی سایت، برندینگ و رشد کسب‌وکار آنلاین.</p>
            <div className="articles-grid">
              <div className="article-card">
                <div className="article-cover">
                  <span className="article-tag">طراحی سایت</span>
                  📝
                </div>
                <div className="article-body">
                  <div className="article-meta"><span>۱۲ تیر ۱۴۰۴</span><span className="dot-sep"></span><span>۵ دقیقه مطالعه</span></div>
                  <h3>۷ اصل طراحی سایتی که مشتری را به خرید ترغیب می‌کند</h3>
                  <p>بررسی اصولی که باعث می‌شود بازدیدکننده سایت شما، به مشتری واقعی تبدیل شود.</p>
                  <Link href={'/articles'} className="article-link">ادامه مطلب ←</Link>
                </div>
              </div>
              <div className="article-card">
                <div className="article-cover">
                  <span className="article-tag">سئو</span>
                  📈
                </div>
                <div className="article-body">
                  <div className="article-meta"><span>۳ تیر ۱۴۰۴</span><span className="dot-sep"></span><span>۷ دقیقه مطالعه</span></div>
                  <h3>راهنمای سئو برای کسب‌وکارهای کوچک در سال جدید</h3>
                  <p>ساده‌ترین راه‌ها برای بهبود رتبه سایت شما در نتایج جست‌وجوی گوگل.</p>
                  <Link href={'/articles'} className="article-link">ادامه مطلب ←</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* <footer>
        <svg className="footer-wave" viewBox="0 0 1200 60" preserveAspectRatio="none" height="50">
          <path d="M0,40 C300,0 900,0 1200,40 L1200,60 L0,60 Z" fill="var(--orange)"></path>
        </svg>
        <div className="container footer-top">
          <div className="footer-brand">
            <Link href="#" className="logo"><span className="logo-mark"><img src="/icon.jpg" style={{width: "100%", height: '100%' ,borderRadius: '9px'}}/></span> سایمون</Link>
            <p>کسب‌وکار شما را وارد دنیای دیجیتال ماندگار و تاثیرگذار می‌کند.</p>
            <div className="footer-social">
              <Link href="#">in</Link><Link href="#">ig</Link><Link href="#">tw</Link><Link href="#">tg</Link>
            </div>
          </div>
          <div className="footer-col">
            <h4>خدمات ما</h4>
            <ul>
              <li><Link href="#">طراحی سایت</Link></li>
              <li><Link href="#">طراحی محصول</Link></li>
              <li><Link href="#">سئو</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>لینک‌های مرتبط</h4>
            <ul>
              <li><Link href="#home">صفحه اصلی</Link></li>
              <li><Link href="simon-about.html">درباره ما</Link></li>
              <li><Link href="#">سوالات متداول</Link></li>
              <li><Link href="#contact">تماس با ما</Link></li>
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
