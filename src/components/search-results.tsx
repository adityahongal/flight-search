'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/buttons'

// Function to generate a random flight
const generateRandomFlight = (from: string, to: string) => {
  const airlines = ["Air India", "IndiGo", "SpiceJet", "Vistara", "GoAir"]
  const flightNumber = `${airlines[Math.floor(Math.random() * airlines.length)].substring(0, 2)}${Math.floor(Math.random() * 1000)}`
  const departureTime = `${Math.floor(Math.random() * 24).toString().padStart(2, '0')}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
  const duration = `${Math.floor(Math.random() * 5) + 1}h ${Math.floor(Math.random() * 60)}m`
  
  // Convert duration parts to numbers
  const durationHours = parseInt(duration.split('h')[0], 10);
  const durationMinutes = parseInt(duration.split('h')[1].split('m')[0], 10);
  
  const arrivalTime = new Date(new Date(`2023-01-01T${departureTime}`).getTime() + durationHours * 3600000 + durationMinutes * 60000).toTimeString().slice(0, 5)
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    airline: airlines[Math.floor(Math.random() * airlines.length)],
    flightNumber,
    departure: {
      airport: from,
      time: departureTime
    },
    arrival: {
      airport: to,
      time: arrivalTime
    },
    duration,
    price: Math.floor(Math.random() * 10000) + 2000
  }
}

export function SearchResults({ from, to, date }: { from: string; to: string; date: string }) {
  const [flights, setFlights] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (from && to && date) {
      // Simulate API call
      setTimeout(() => {
        const numberOfFlights = Math.floor(Math.random() * 5) + 1 // 1 to 5 flights
        const generatedFlights = Array.from({ length: numberOfFlights }, () => generateRandomFlight(from, to))
        setFlights(generatedFlights)
        setLoading(false)
      }, 1000)
    } else {
      setFlights([])
      setLoading(false)
    }
  }, [from, to, date])

  const handleNewSearch = () => {
    router.push('/')
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (!from || !to || !date) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">No Flight Search Parameters</h2>
        <p>Please return to the search page and enter your flight details.</p>
        <Button onClick={handleNewSearch}>New Search</Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Flight Results</h2>
      <p>
        Showing flights from {from} to {to} on {date}
      </p>
      {flights.length > 0 ? (
        flights.map((flight) => (
          <Card key={flight.id}>
            <CardHeader>
              <CardTitle>{flight.airline} - {flight.flightNumber}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Departure: {flight.departure.time}</p>
              <p>Arrival: {flight.arrival.time}</p>
              <p>Duration: {flight.duration}</p>
              <p>Price: ₹{flight.price}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <p>No flights found for the selected route and date.</p>
      )}
      <Button onClick={handleNewSearch}>New Search</Button>
    </div>
  )
}