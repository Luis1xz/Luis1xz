import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Luis Alfonso Herrera — Systems Engineering, Robotics & AI',
  description: 'Systems Engineering & Biomedical Engineering student at Universidad del Norte. Building at the intersection of Robotics, AI, Software & STEM Education. Based in Barranquilla, Colombia.',
  keywords: ['Luis Alfonso Herrera', 'Robotics', 'Barranquilla', 'Systems Engineering', 'Biomedical Engineering', 'AI', 'Universidad del Norte', 'S3 Robotics', 'NASA Space Apps'],
  authors: [{ name: 'Luis Alfonso Herrera' }],
  openGraph: {
    title: 'Luis Alfonso Herrera — Systems Engineering, Robotics & AI',
    description: 'Systems Engineering & Biomedical Engineering student at Universidad del Norte.',
    url: 'https://luis1xz.vercel.app',
    siteName: 'Luis Alfonso Herrera',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Alfonso Herrera — Systems Engineering, Robotics & AI',
    description: 'Systems Engineering & Biomedical Engineering student at Universidad del Norte.',
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: 'any', type: 'image/png' },
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/icon.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
