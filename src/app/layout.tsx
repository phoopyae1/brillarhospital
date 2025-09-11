import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brillar Hospital | Napier Road, Singapore",
  description: "Private acute-care hospital in Singapore. Same-day specialist access and 24/7 Urgent Care.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-slate-50">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
