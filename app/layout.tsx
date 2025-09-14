import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Skill Exchange",
  description: "Connect and share skills with others",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-blue-50 to-green-50 min-h-screen font-sans text-gray-800">
        {/* Navbar */}
        <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            SkillExchange
          </Link>
          <div className="space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-6">
          © {new Date().getFullYear()} SkillExchange. All rights reserved.
        </footer>
      </body>
    </html>
  );
}

