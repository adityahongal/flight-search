'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from './ui/buttons'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const airports = [
  { name: "Indira Gandhi International Airport", code: "DEL", city: "New Delhi", country: "India" },
  { name: "Chhatrapati Shivaji Maharaj International Airport", code: "BOM", city: "Mumbai", country: "India" },
  { name: "John F. Kennedy International Airport", code: "JFK", city: "New York", country: "United States" },
  { name: "Dubai International Airport", code: "DXB", city: "Dubai", country: "United Arab Emirates" },
  { name: "Heathrow Airport", code: "LHR", city: "London", country: "United Kingdom" },
  { name: "Singapore Changi Airport", code: "SIN", city: "Singapore", country: "Singapore" },
  { name: "Los Angeles International Airport", code: "LAX", city: "Los Angeles", country: "United States" },
  { name: "Beijing Capital International Airport", code: "PEK", city: "Beijing", country: "China" },
  { name: "Sydney Kingsford Smith International Airport", code: "SYD", city: "Sydney", country: "Australia" },
  { name: "Tokyo Haneda Airport", code: "HND", city: "Tokyo", country: "Japan" }
]

export function FlightSearchForm() {
  const router = useRouter()
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (from && to && date) {
      router.push(`/search?from=${from}&to=${to}&date=${date}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="from">From</label>
        <Select onValueChange={setFrom} required>
          <SelectTrigger id="from">
            <SelectValue placeholder="Select departure airport" />
          </SelectTrigger>
          <SelectContent>
            {airports.map((airport) => (
              <SelectItem key={airport.code} value={airport.code}>
                {airport.name} ({airport.code})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="to">To</label>
        <Select onValueChange={setTo} required>
          <SelectTrigger id="to">
            <SelectValue placeholder="Select arrival airport" />
          </SelectTrigger>
          <SelectContent>
            {airports.map((airport) => (
              <SelectItem key={airport.code} value={airport.code}>
                {airport.name} ({airport.code})
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="date">Date</label>
        <Input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">Search Flights</Button>
    </form>
  )
}