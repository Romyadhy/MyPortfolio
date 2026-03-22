import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Navbar } from "@/components/navbar";
// import { Navbar2 } from "@/components/navbar2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/logo.svg",
  },
  title: {
    default: "R0myadhy | Portfolio",
    template: "%s | R0myadhy",
  },
  description:
    "Personal portfolio of I Putu Romyadhy Mahaputra — Software Developer, showcasing projects, experience, and certifications.",
  keywords: ["portfolio", "developer", "software engineer", "next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {/* <ThemeProvider> */}
        {/* <Navbar /> */}
        <Navbar />
        <main className="min-h-screen">
          <div>{children}</div>
        </main>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
