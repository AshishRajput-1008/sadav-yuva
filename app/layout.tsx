import "./globals.css";
import {
  Plus_Jakarta_Sans,
  Nunito_Sans,
  JetBrains_Mono,
} from "next/font/google";
import SiteHeader from "@/app/components/Header";
import LayoutFooter from "@/app/components/LayoutFooter";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ui",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${nunitoSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col">
        <SiteHeader />

        <main className="flex-1 pt-[var(--header-h)]">
          {children}
        </main>

<LayoutFooter />
      </body>
    </html>
  );
}