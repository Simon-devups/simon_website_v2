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
  title: "Simon",
  description: "Simon website",
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