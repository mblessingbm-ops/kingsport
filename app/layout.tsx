import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/NavbarRed';
import QuoteDrawer from '@/components/QuoteDrawer';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';

export const metadata: Metadata = {
  title: 'Kingsport Investments — PPE, Corporate Wear & Promotional Solutions',
  description: 'Kingsport Investments: 28+ years manufacturing PPE, corporate uniforms & branded promotional products in Zimbabwe.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const years = new Date().getFullYear() - 1998;
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-slate-900 font-sans">
        <Navbar />
        {children}
        <QuoteDrawer />
        <FloatingQuoteButton />
        <footer className="bg-zinc-950 text-white py-12 mt-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Kingsport Investments (Pvt) Ltd. {years} Years of Excellence in Manufacturing.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
