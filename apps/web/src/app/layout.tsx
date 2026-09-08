import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SermonSlide',
  description: 'AI sermon to visual-story presentation platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
