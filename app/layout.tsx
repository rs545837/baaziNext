import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'


import './globals.css'

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
   
        <body className={font.className}>
        
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}