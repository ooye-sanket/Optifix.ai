import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import { ReactNode } from 'react'

import ConvexClientProvider from './ConvexClientProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OptiFix.ai',
  description:
    'Answer generated by large language models (LLMs). Double check for correctness.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  )
}