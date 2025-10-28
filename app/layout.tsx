import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Guardio',
  description: 'Your Personal Safety Companion App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <ClerkProvider>
    <html lang="en">
      <body>
        <Navbar />
        
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  )
}
