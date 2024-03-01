import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/utils/theme-provider";
import ScrollToTopButton from "@/components/utils/ScrollToTopButton";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Favicon from "/public/Logos/peacover_mini_logo.svg";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Peacover",
  description: "Peacover - Portfolio",
  icons: [{ rel: "icon", url: Favicon.src }],
};


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <TracingBeam>{children}</TracingBeam>
          <ScrollToTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
