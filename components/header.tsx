"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">Sahayak</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-foreground hover:text-primary transition">
              Features
            </Link>
            <Link href="#how-it-works" className="text-foreground hover:text-primary transition">
              How it Works
            </Link>
            <Link href="#" className="text-foreground hover:text-primary transition">
              For Workers
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground">
              Log In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign Up</Button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="#features" className="block text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#how-it-works" className="block text-foreground hover:text-primary">
              How it Works
            </Link>
            <Link href="#" className="block text-foreground hover:text-primary">
              For Workers
            </Link>
            <div className="flex gap-3 pt-2">
              <Button variant="ghost" className="text-foreground flex-1">
                Log In
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 flex-1">Sign Up</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
