import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SpreadSheet ",
  description: "SpreadSheet ",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <div className="text-white min-h-screen bg-[#000000] ">
        {children}
        </div>
        </body>
    </html>
  );
}
