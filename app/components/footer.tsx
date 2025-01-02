import Link from 'next/link'
import { Instagram, Twitter, Share2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-gigzpurple text-white">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center py-6 gap-4 px-4">
        <div className="text-sm">
          © {new Date().getFullYear()} Gigz. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-gigzpink transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-gigzpink transition">
            Terms & Conditions
          </Link>
        </div>

        <div className="flex gap-4">
          <a 
            href="https://twitter.com/gigz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://instagram.com/gigz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://threads.net/gigz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            <Share2 size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

