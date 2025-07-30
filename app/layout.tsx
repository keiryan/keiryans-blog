import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'UX Review Presentations | Untitled UI',
  description: 'How to create compelling presentations that wow your colleagues and impress your managers. Learn the best practices for UX presentations.',
  keywords: 'UX, presentations, design, user experience, review',
  authors: [{ name: 'Frankie Sullivan' }],
  openGraph: {
    title: 'UX Review Presentations | Untitled UI',
    description: 'How to create compelling presentations that wow your colleagues and impress your managers.',
    type: 'article',
    publishedTime: '2022-01-20T00:00:00.000Z',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}