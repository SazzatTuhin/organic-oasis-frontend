import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RaectQueryClientProvider from "@/providers/RaectQueryClientProvider";
import { Toaster } from "react-hot-toast";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Organic-Oasis",
  description:
    "Organic Oasis is a e-commerce platfrom for all kinds of organic food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RaectQueryClientProvider>
      <html lang="en" data-theme="lemonade">
        <body className={cn(rubik.className, "antialiased")}>
          <div className="min-h-screen">
            <Toaster
              position="bottom-right"
              reverseOrder={false}
              toastOptions={{ duration: 5000 }}
            />
            <Navbar />
            {children}
          </div>
          <Footer />
        </body>
      </html>
    </RaectQueryClientProvider>
  );
}
