import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "700", "900"] });

export const metadata: Metadata = {
  title: "Evius",
  description: "New way to Plan Events!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" className=" bg-[#222439]" style={{scrollBehavior:'smooth'}}>
      <body className={poppins.className}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
