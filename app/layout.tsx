import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'


import './globals.css'
import Script from 'next/script'

const font = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },

}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en" suppressHydrationWarning>
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-8WWSXJRK1T'/>
        <Script id='google-analytics' strategy='afeterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8WWSXJRK1T');
          `}
        </Script>
        <body className={font.className}>
        
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}