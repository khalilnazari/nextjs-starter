import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "@/components/Auth/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home page",
  description: "Home page description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
