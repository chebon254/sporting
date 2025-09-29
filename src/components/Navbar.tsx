'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isScrolled = scrollY > 50

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className={`bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-lg ${
              !isScrolled ? 'from-white to-gray-200' : ''
            }`}>
              <Dumbbell className={`h-6 w-6 ${isScrolled ? 'text-white' : 'text-white'}`} />
            </div>
            <span className={`text-xl lg:text-2xl font-bold ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Peak Elite Running
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className={`font-semibold ${
              isScrolled ? 'text-blue-900' : 'text-white hover:text-gray-200'
            }`}>
              Home
            </Link>
            <Link href="/about" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'
            }`}>
              About
            </Link>
            <Link href="/achievements" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'
            }`}>
              Achievements
            </Link>
            <Link href="/contact" className={`font-medium transition-colors ${
              isScrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-gray-200'
            }`}>
              Contact
            </Link>
            <Button className="bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
              Get Started
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? 'text-gray-700 hover:text-blue-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-blue-900 bg-blue-50 rounded-md font-semibold">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors font-medium">
                About
              </Link>
              <Link href="/achievements" className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors font-medium">
                Achievements
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-900 hover:bg-gray-50 rounded-md transition-colors font-medium">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}