// app/components/Footer.jsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* <svg
        className="footer-wave"
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        height="50"
      >
        <path
          d="M0,40 C300,0 900,0 1200,40 L1200,60 L0,60 Z"
          fill="var(--orange)"
        ></path>
      </svg> */}
      <div style={{ backgroundColor: '#f7b733', width: '100%', minHeight: '2rem', marginBottom: '1.2rem' }}></div>
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="logo">
            <span className="logo-mark" style={{backgroundColor: 'white' , padding: '2px'}}>
              <img src="/icon.jpg" style={{ width: "100%", height: '100%', borderRadius: '9px' }} />
            </span>
            سایمون
          </Link>
          <p>
            کسب‌وکار شما را وارد دنیای دیجیتال ماندگار و تاثیرگذار می‌کند.
          </p>
          <div className="footer-social">
            <Link href="#">in</Link>
            <Link href="#">ig</Link>
            <Link href="#">tw</Link>
            <Link href="#">tg</Link>
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
            <li><Link href="/aboutUs">درباره ما</Link></li>
            <li><Link href="#">سوالات متداول</Link></li>
            <li><Link href="/contactUs">تماس با ما</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ارتباط با ما</h4>
          <ul className="footer-contact">
            <li style={{direction: 'ltr' , justifySelf: 'self-end'}}>0992 058 7634</li>
            <li>✉️ info@simon.ir</li>
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

