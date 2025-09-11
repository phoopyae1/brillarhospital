import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className={inter.className}>
        {children}

        {/* Chatbot Widget */}
        <iframe
          src="https://demo.atenxion.ai/chat-widget?agentchainId=68c28f44ac23300903b8199d"
          style={{
            bottom: "20px",
            right: "20px",
            width: "360px",
            height: "480px",
            position: "fixed",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
          frameBorder="0"
          allow="midi; geolocation; microphone; camera; display-capture; encrypted-media"
        ></iframe>
      </body>
    </html>
  );
}
