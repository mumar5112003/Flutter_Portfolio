import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mr. Flutter - Muhammad Umar | Flutter Developer Portfolio',
  description: 'Flutter Developer with 2+ years of experience delivering scalable cross-platform apps. Specialized in Dart, Flutter, REST API integration, and app deployment.',
  keywords: 'Flutter Developer, Mobile App Developer, Dart, React Native, Portfolio, Mr. Flutter',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'Mr. Flutter - Muhammad Umar | Flutter Developer Portfolio',
    description: 'Flutter Developer with 2+ years of experience delivering scalable cross-platform apps.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Set viewport height variable immediately
                function setViewportHeight() {
                  const vh = window.innerHeight * 0.01;
                  document.documentElement.style.setProperty('--vh', vh + 'px');
                }
                setViewportHeight();
                
                // Lock navbar position on load
                function lockNavbar() {
                  const style = document.createElement('style');
                  style.textContent = \`
                    nav { position: fixed !important; top: 0 !important; transform: translate3d(0, 0, 0) !important; }
                  \`;
                  document.head.appendChild(style);
                }
                lockNavbar();
                
                // Update on resize and orientation change
                window.addEventListener('resize', setViewportHeight);
                window.addEventListener('orientationchange', function() {
                  setTimeout(setViewportHeight, 100);
                });
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
