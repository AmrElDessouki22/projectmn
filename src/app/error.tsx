'use client'

export default function Error({ error, reset }: { error: Error, reset: () => void }) {
  return (
    <div className="text-center">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} className="mt-4 text-blue-500">Try again</button>
    </div>
  )
}