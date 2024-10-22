'use client'

import React from 'react'

import { Footer } from '@/app/components/footer'
import { Logo } from '@/app/components/logo'
import { PresetQuery } from '@/app/components/preset-query'
import { Search } from '@/app/components/search'

export default function Home() {
  return (
    <div className="absolute inset-0 min-h-[500px] flex items-center justify-center">
      <div className="relative flex flex-col gap-8 px-4 -mt-24">
        <h1 className="text-4xl text-center">OptiFix.ai</h1>
        <Search></Search>
        <div className="flex gap-2 flex-wrap justify-center">
          <PresetQuery query="How to manage code dependencies?"></PresetQuery>
          <PresetQuery query="Generate and share smart code snippets"></PresetQuery>
          <PresetQuery query="Scanning detects and resolves security vulnerabilities in code"></PresetQuery>
        </div>
        <Footer></Footer>
      </div>
    </div>
  )
}
