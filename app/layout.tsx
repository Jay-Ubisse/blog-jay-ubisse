import { ReactQueryProvider } from "@/providers/react-query";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactHotToaster } from "@/providers/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog | Jay Ubisse",
  description: "Jay Ubisse's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <ReactHotToaster />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
