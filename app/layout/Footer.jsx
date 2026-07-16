// app/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <svg
        className="footer-wave"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        height="50"
      >
        <path
          d="M0,40 C300,0 900,0 1200,40 L1200,60 L0,60 Z"
          fill="var(--orange)"
        ></path>
      </svg>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="logo-mark">S</span> سایمون
          </Link>
          <p>
            کسب‌وکار شما را وارد دنیای دیجیتال ماندگار و تاثیرگذار می‌کند.
          </p>
          <div className="footer-social">
            <Link href="#"><img src="/Group 95.png" style={{width: "50%" }}/></Link>
            <Link href="#"><img src="/Group (3).svg" style={{width: "50%" }}/></Link>
            <Link href="#"><img src="/Vector (1).png" style={{width: "50%" }}/></Link>
            <Link href="#"><img src="/Vector (7).svg" style={{width: "50%" }}/></Link>
          </div>
        </div>
        <div className="footer-col">
          <h4>خدمات ما</h4>
          <ul>
            <li><Link href="/services">طراحی سایت شخصی</Link></li>
            <li><Link href="/services">طراحی سایت شرکتی</Link></li>
            <li><Link href="/services">طراحی سایت فروشگاهی</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>لینک‌های مرتبط</h4>
          <ul>
            <li><Link href="/">صفحه اصلی</Link></li>
            <li><Link href="/about">درباره ما</Link></li>
            <li><Link href="#"> خدمات ما</Link></li>
            <li><Link href="/contact">تماس با ما</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ارتباط با ما</h4>
          <ul className="footer-contact">
            <li>تبریز</li>
            <li>۰۹۳۹۲۱۷۱۳۶۶</li>
            <li>simonwebdevups@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© تمامی حقوق برای سایمون محفوظ است.</span>
        <span>طراحی و توسعه با ❤ توسط تیم سایمون</span>
      </div>
    </footer>
  );
}

