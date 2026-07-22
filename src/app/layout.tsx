import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({ weight: ['600', '700', '800'], subsets: ['latin'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'BLACK COMMUNITY | Comunidade Privada Exclusiva',
  description: 'Acesso imediato à biblioteca digital com cursos, ferramentas IA, templates e recursos exclusivos. Comunidade privada no Discord.',
  keywords: 'comunidade digital, cursos online, ferramentas IA, marketing, automação, templates',
  openGraph: {
    title: 'BLACK COMMUNITY | Comunidade Privada Exclusiva',
    description: 'Acesso imediato à biblioteca digital com cursos, ferramentas IA, templates e recursos exclusivos.',
    url: 'https://blackcommunity.com',
    siteName: 'BLACK COMMUNITY',
    images: [
      {
        url: 'https://blackcommunity.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BLACK COMMUNITY | Comunidade Privada Exclusiva',
    description: 'Acesso imediato à biblioteca digital com cursos, ferramentas IA, templates e recursos exclusivos.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#05070D" />
      </head>
      <body className="bg-dark-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}