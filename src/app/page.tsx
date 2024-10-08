import HomePage from '@/components/HomePage'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Flight Search</h1>
      <div className="w-full max-w-md">
        <HomePage />
      </div>
    </main>
  )
}