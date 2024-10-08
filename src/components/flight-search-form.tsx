'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

const FlightSearchForm: React.FC = () => {
  const router = useRouter();
  const [from, setFrom] = React.useState('');
  const [to, setTo] = React.useState('');
  const [date, setDate] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to && date) {
      router.push(`/search?from=${from}&to=${to}&date=${date}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="from">
            From
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="from"
            type="text"
            placeholder="Departure City"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2 pl-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="to">
            To
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="to"
            type="text"
            placeholder="Arrival City"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Search Flights
        </button>
      </div>
    </form>
  );
};

export default FlightSearchForm;