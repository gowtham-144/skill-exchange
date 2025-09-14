import type { Metadata } from "next";
import '../styles/globals.css';


export const metadata: Metadata = {
  title: "Skill Link",
  description: "Connect and share your skills easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-100 to-blue-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
