// app/portfolio/page.js
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./portfolio.module.css";

// داده‌های پروژه‌ها (تصاویر در پوشه public/assets قرار دارند)
const projectsData = [
    {
        id: "arian",
        index: "۰۱",
        client: "گروه بازرگانی آرین",
        category: "حمل‌ونقل و بازرگانی بین‌المللی",
        title: "وب‌سایتی که اعتبار یک شرکت تجاری بین‌المللی را در نگاه اول نشان می‌دهد",
        description:
            "گروه بازرگانی آرین در حوزه حمل‌ونقل دریایی، هوایی و زمینی و ترخیص کالا با بیش از یک دهه سابقه فعالیت می‌کند، اما وب‌سایت قدیمی‌شان نه اعتبار شرکت را منتقل می‌کرد و نه اطلاعات کافی برای مشتریان تازه ارائه می‌داد. سایمون با طراحی وب‌سایتی حرفه‌ای بر پایه تصاویر از کشتی‌ها و بنادر، هویت بصری سرمه‌ای و طلایی شرکت را در قالبی مدرن و قابل‌اعتماد بازتعریف کرد.",
        challenge:
            "ایجاد هویت بصری برای یک شرکت و هولدینگ با برندی به یاد ماندنی.",
        solution:
            "هیرویی تاثیرگذار با عکس از عملیات دریایی، معرفی دفاتر ایران، امارات و چین، و بخش «چرا آرین را انتخاب کنید» برای جلب اعتماد.",
        stats: [
            { label: "صفحه اصلی طراحی‌شده", value: "۵" },
            { label: "دفتر بین‌المللی معرفی‌شده", value: "۳" },
            { label: "ریسپانسیو موبایل", value: "۱۰۰٪" },
        ],
        tags: ["طراحی اختصاصی هیرو", "فرم استعلام قیمت", "معرفی تیم و فرآیند کار", "سوالات متداول"],
        images: [
            { src: "/portfolio1/aryan1.png", alt: "صفحه اصلی گروه بازرگانی آرین", label: "صفحه اصلی" },
            { src: "/portfolio1/aryan2.png", alt: "بخش درباره ما آرین", label: "درباره ما" },
            { src: "/portfolio1/aryan3.png", alt: "بخش چرا آرین را انتخاب کنید", label: "چرا ما" },
            { src: "/portfolio1/aryan4.png", alt: "بخش تماس با ما آرین", label: "تماس با ما" },
        ],
    },
    {
        id: "deedar",
        index: "۰۲",
        client: "استودیو دیدار",
        category: "معماری و دکوراسیون داخلی",
        title: "وب‌سایتی که مثل یک نمایشگاه معماری، فضاها را به تصویر می‌کشد",
        description:
            "دیدار، استودیوی معماری و دکوراسیون داخلی با رویکردی مینیمال، به دنبال وب‌سایتی بود که بتواند احساس فضاهایی را که طراحی می‌کند منتقل کند، نه فقط لیستی از پروژه‌ها. سایمون با پالتی از رنگ‌های کِرم و طلایی، تایپوگرافی وسیع، و گالری بزرگ از پروژه‌ها (از آشپزخانه مدرن تا ویلای شمال)، تجربه‌ای شبیه ورق‌زدن یک مجله معماری برای بازدیدکنندگان ساخت.",
        challenge:
            "نمایش درست کیفیت بصری پروژه‌ها در کنار ایجاد حس اعتماد برای مشتریانی که می‌خواهند خانه یا فضای کاری خود را بازسازی کنند.",
        solution:
            "گالری پروژه با برچسب دسته‌بندی (ویلا، آپارتمان، فضای تجاری)، بخش داستان تأسیس استودیو، و فرم اختصاصی درخواست مشاوره پروژه.",
        stats: [
            { label: "دسته پروژه در گالری", value: "۴" },
            { label: "پالت رنگی متفاوت (روز/شب)", value: "۲" },
            { label: "ریسپانسیو موبایل", value: "۱۰۰٪" },
        ],
        tags: ["گالری پروژه با فیلتر", "تایپوگرافی اختصاصی", "بخش تیم و تاریخچه", "فرم درخواست مشاوره"],
        images: [
            { src: "/portfolio2/didar1.png", alt: "صفحه اصلی استودیو دیدار", label: "صفحه اصلی" },
            { src: "/portfolio2/didar2.png", alt: "گالری نمونه‌کارهای دیدار", label: "نمونه‌کارها" },
            { src: "/portfolio2/didar3.png", alt: "بخش درباره ما دیدار", label: "درباره ما" },
            { src: "/portfolio2/didar4.png", alt: "بخش سوالات متداول دیدار", label: "سوالات متداول" },
            { src: "/portfolio2/didar5.png", alt: "بخش تماس با ما دیدار", label: "تماس با ما" },
        ],
    },
    {
        id: "solarno",
        index: "۰۳",
        client: "سولارنو (SolarNo Energy)",
        category: "انرژی خورشیدی و پروژه‌های صنعتی",
        title: "وب‌سایتی که فناوری انرژی خورشیدی را قابل‌لمس و قابل‌اعتماد نشان می‌دهد",
        description:
            "سولارنو به عنوان یک شرکت فعال در نصب و راه‌اندازی نیروگاه‌های خورشیدی، به وب‌سایتی نیاز داشت که هم فناوری پیشرفته را به نمایش بگذارد و هم اعداد و نتایج (مثل درصد کاهش هزینه) را به‌وضوح نشان دهد. سایمون با طراحی تمی تیره و پرانرژی، برجسته‌سازی آمار کلیدی روی خود عکس پنل‌های خورشیدی، و گالری پروژه‌های اجراشده، حس نوآوری و اعتبار فنی سولارنو را به مخاطب منتقل کرد.",
        challenge:
            "نیاز به نمایش هم‌زمان داده‌های فنی (کاهش هزینه، تولید انرژی) و اعتمادسازی برای مشتریان خانگی و صنعتی در یک صفحه.",
        solution:
            "بج‌های آماری روی تصویر هیرو، گالری پروژه‌های نصب‌شده، معرفی تیم فنی و مدیریتی، و اسلایدر نظرات مشتریان.",
        stats: [
            { label: "پروژه در گالری نمونه‌کار", value: "۶" },
            { label: "عضو تیم معرفی‌شده", value: "۴" },
            { label: "ریسپانسیو موبایل", value: "۱۰۰٪" },
        ],
        tags: ["هیروی داده‌محور", "گالری پروژه صنعتی", "اسلایدر نظرات مشتری", "فرم مشاوره رایگان"],
        images: [
            { src: "/portfolio3/solarno1.png", alt: "صفحه اصلی سولارنو", label: "صفحه اصلی" },
            { src: "/portfolio3/solarno2.png", alt: "گالری پروژه‌های سولارنو", label: "پروژه‌ها" },
            { src: "/portfolio3/solarno3.png", alt: "بخش تیم سولارنو", label: "تیم ما" },
            { src: "/portfolio3/solarno4.png", alt: "بخش نظرات مشتریان سولارنو", label: "نظرات مشتریان" },
            { src: "/portfolio3/solarno5.png", alt: "بخش تماس با ما سولارنو", label: "تماس با ما" },
        ],
    },
];

export default function PortfolioPage() {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState("");
    const [modalAlt, setModalAlt] = useState("");
    // state برای هر پروژه – ایندکس تصویر فعال
    const [activeIndexes, setActiveIndexes] = useState(
        projectsData.map(() => 0)
    );

    const handleTabClick = (projectIdx, imgIdx) => {
        const newIndexes = [...activeIndexes];
        newIndexes[projectIdx] = imgIdx;
        setActiveIndexes(newIndexes);
    };

    const openModal = (src, alt) => {
        setModalSrc(src);
        setModalAlt(alt);
        setModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setModalOpen(false);
        document.body.style.overflow = "auto";
    };
    return (
        <main>
            {/* ===== BANNER ===== */}
            <section className={styles.pageBanner}>
                <div className={styles.bannerBlobA}></div>
                <div className={styles.bannerBlobB}></div>
                <div className={`container ${styles.bannerContainer}`}>
                    <span className="eyebrow">نمونه‌کارهای سایمون</span>
                    <h1>سه پروژه، سه صنعت متفاوت، یک استاندارد کیفیت</h1>
                    <p className="section-sub center" style={{ marginTop: "18px" }}>
                        در ادامه سه وب‌سایتی را می‌بینید که تیم سایمون از صفر تا اجرا برای
                        مشتریان خود طراحی کرده است؛ هرکدام با هویت بصری، هدف و داستان مخصوص
                        به خودشان.
                    </p>
                    <div className={styles.breadcrumb}>
                        <Link href="/">صفحه اصلی</Link>
                        <span>/</span>
                        <span>نمونه کارها</span>
                    </div>
                </div>
            </section>

            {/* ===== STATS ===== */}
            <section className={styles.portfolioStats}>
                <div className="container">
                    <div className={styles.statsBar}>
                        <div className={styles.statItem}>
                            <strong>۳</strong>
                            <span>پروژه اجراشده</span>
                        </div>
                        <div className={styles.statSep}></div>
                        <div className={styles.statItem}>
                            <strong>۳</strong>
                            <span>صنعت متفاوت</span>
                        </div>
                        <div className={styles.statSep}></div>
                        <div className={styles.statItem}>
                            <strong>۱۰۰٪</strong>
                            <span>طراحی اختصاصی</span>
                        </div>
                        <div className={styles.statSep}></div>
                        <div className={styles.statItem}>
                            <strong>۱۰۰٪</strong>
                            <span>تحویل به‌موقع</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== PROJECTS ===== */}
            {projectsData.map((project, idx) => {
                const activeImgIdx = activeIndexes[idx] || 0;
                const isEven = idx % 2 === 0;
                const bgClass = isEven ? "" : styles.bgSoft;

                return (
                    <section
                        key={project.id}
                        className={`${styles.caseStudy} ${bgClass}`}
                    >
                        <div className={`container ${styles.caseGrid} ${!isEven ? styles.reverse : ""}`}>
                            {/* متن */}
                            <div className={styles.caseText}>
                                <div className={styles.caseIndexRow}>
                                    <span className={styles.caseIndex}>{project.index}</span>
                                    <span className={styles.caseClient}>{project.client}</span>
                                </div>
                                <span className={`eyebrow ${styles.categoryBadge}`}>
                                    {project.category}
                                </span>
                                <h2 className={styles.caseTitle}>{project.title}</h2>
                                <p className={styles.caseDesc}>{project.description}</p>

                                <div className={styles.caseCsGrid}>
                                    <div className={styles.box}>
                                        <h4>چالش پروژه</h4>
                                        <p>{project.challenge}</p>
                                    </div>
                                    <div className={styles.box}>
                                        <h4>راهکار سایمون</h4>
                                        <p>{project.solution}</p>
                                    </div>
                                </div>

                                <div className={styles.caseStats}>
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <strong>{stat.value}</strong>
                                            <span>{stat.label}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className={styles.caseTags}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            {/* تصاویر + تب‌ها */}
                            <div className={styles.caseVisual}>
                                <div className={styles.browserFrame}>
                                    <div className={styles.browserTopbar}>
                                        <span style={{ background: "#F16057" }}></span>
                                        <span style={{ background: "#F6BE4F" }}></span>
                                        <span style={{ background: "#3FC96B" }}></span>
                                        <div className={styles.browserUrl}>
                                            {project.id === "arian" && "ariantrading.co"}
                                            {project.id === "deedar" && "deedar.design"}
                                            {project.id === "solarno" && "solarno.energy"}
                                        </div>
                                    </div>
                                    <div className={styles.browserBody}>
                                        {project.images.map((img, imgIdx) => (
                                            <img
                                                onClick={() => {
                                                    if (imgIdx === activeImgIdx) {
                                                        openModal(img.src, img.alt);
                                                    }
                                                }}
                                                style={{ cursor: imgIdx === activeImgIdx ? "pointer" : "default" }}
                                                key={imgIdx}
                                                src={img.src}
                                                alt={img.alt}
                                                className={imgIdx === activeImgIdx ? styles.active : ""}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.pageTabs}>
                                    {project.images.map((img, imgIdx) => (
                                        <button
                                            key={imgIdx}
                                            className={imgIdx === activeImgIdx ? styles.active : ""}
                                            onClick={() => handleTabClick(idx, imgIdx)}
                                        >
                                            {img.label}
                                        </button>
                                    ))}
                                </div>
                                <div className={styles.pageTabsCaption}>
                                    چند بخش از وب‌سایت طراحی‌شده برای {project.client}؛ برای دیدن
                                    هر بخش روی دکمه‌ها کلیک کنید.
                                </div>
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* ===== CTA ===== */}
            <section className={styles.ctaLink}>
                <div className="container">
                    <Link href="/contactUs" className={styles.ctaBox}>
                        <div>
                            <h3>پروژه بعدی، داستان کسب‌وکار شماست</h3>
                            <p>
                                اگر ایده‌ای در ذهن دارید، تیم سایمون آماده است تا مثل این
                                نمونه‌کارها، آن را به یک وب‌سایت حرفه‌ای و اثرگذار تبدیل کند.
                            </p>
                        </div>
                        <span className={styles.arrow}>←</span>
                    </Link>
                </div>
            </section>


            {modalOpen && (
                <div className={styles.modalOverlay} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal}>
                            ✕
                        </button>
                        <img src={modalSrc} alt={modalAlt} />
                    </div>
                </div>
            )}
        </main>
    );
}