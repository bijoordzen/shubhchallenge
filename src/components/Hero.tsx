import React from 'react'
import heroImg from '../assets/bread-hero.png'

export default function Hero() {
  return (
    <section className="relative p-10 min-h-screen flex items-center">
      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        <div className="max-w-xl">
          <h1 className="text-5xl font-heading uppercase mb-4">
            Little Red Hen Website Concept
          </h1>
          <p className="font-body text-gray-300">
            Finding digital solutions to increase brand recognition, gain the loyalty of customers and create a simplified ordering system.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <img
            src={heroImg}
            alt="Bread"
            className="w-100 rounded-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
