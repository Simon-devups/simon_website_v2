import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  weight: [
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
  display: "swap",
});


export const metadata = {
  title: ' تیم سایمون | Simon Team',
  description: 'سایمون یک تیم متخصص در طراحی سایت و هویت دیجیتال است؛ از قالب اختصاصی تا فروشگاه آنلاین، همه‌چیز را برایتان می‌سازیم تا کسب‌وکارتان همیشه در دسترس مشتری باشد.'
};


export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirmatn.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}