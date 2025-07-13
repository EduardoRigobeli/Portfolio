import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Criado por mim, feito usando Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} antialiased`}>
        <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full object-cover"
          >
            <source src="video/FundoTerra.mp4" type="video/mp4" />
          </video>
        </div>

        <Header />

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
