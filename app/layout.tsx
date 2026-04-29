import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', display: 'swap' });

export const metadata: Metadata = {
  title: 'Giovanny Designer | Identidade Visual Premium para Marcas',
  description:
    'Design estratégico que posiciona marcas no nível certo. Logos e identidades visuais que transmitem valor, autoridade e confiança.',
  keywords: ['designer', 'identidade visual', 'logo', 'branding', 'Giovanny Designer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased">{children}</body>
    </html>
  );
}
