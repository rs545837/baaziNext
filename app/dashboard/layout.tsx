import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Providers } from "@/components/providers"
import { SiteBlob } from "@/components/site-blob"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs/app-beta"
import { SignInButton } from "@clerk/nextjs"
import { currentUser } from "@clerk/nextjs"




interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const user = await currentUser()
  return (
    <>
     {/* <ClerkProvider> */}

      <html lang="en" suppressHydrationWarning>
        <head />    
        
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >      
       
          <SignedIn>
          <Providers>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <SiteBlob />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
          </Providers>
          </SignedIn> 
           <SignedOut>
              <SignInButton/>
          </SignedOut>
          
        </body>
       
     </html>
      {/* </ClerkProvider>  */}

    </>
  )
}
