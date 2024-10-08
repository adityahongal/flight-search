'use client'

import { useSearchParams } from 'next/navigation'
import { SearchResults } from '@/components/search-results'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const from = searchParams.get('from') || ''
  const to = searchParams.get('to') || ''
  const date = searchParams.get('date') || ''

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-4xl">
        <SearchResults from={from} to={to} date={date} />
      </div>
    </main>
  )
}