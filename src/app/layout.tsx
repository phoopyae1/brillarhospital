import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brillar Hospital | Napier Road, Singapore",
  description:
    "Private acute-care hospital in Singapore. Same-day specialist access and 24/7 Urgent Care Centre.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-50">
      <head>
        {/* Chat widget code injected here */}
        <Script
          id="chat-widget"
          strategy="beforeInteractive"
        >{`
          <iframe src="https://demo.atenxion.ai/chat-widget?chatbotId=68c11a6aac23300903b7d455"
            style="display:none"
            frameborder="0"
            allow="microphone; camera; geolocation; display-capture; encrypted-media">
          </iframe>
        `}</Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
