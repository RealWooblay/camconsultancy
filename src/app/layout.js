import { Inter } from "next/font/google";
import "./globals.css";

<form name="contact" method="POST" data-netlify="true" hidden>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
</form>

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Redbridge",
  description: "Our marketing automation platform empowers businesses to seamlessly scale their online engagement and drive top-of-funnel growth. By leveraging advanced automation tools and personalized outreach strategies, it enables efficient lead generation and nurturing. This results in a significant increase in high-quality prospects and accelerated business growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
