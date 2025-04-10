import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-gigzpurple text-white">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center py-6 gap-4 px-4">
        <div className="text-sm">
          © {new Date().getFullYear()} Gigz. All rights reserved.
        </div>
        
        <div className="flex gap-6 text-sm">
          <Link href="/privacy" className="hover:text-gigzpink transition">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-gigzpink transition">
            Terms
          </Link>
          <Link href="/security" className="hover:text-gigzpink transition">
            Security
          </Link>
        </div>

        <div className="flex gap-4 text-sm">
          <a 
            href="https://x.com/gigz_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            X
          </a>
          <a 
            href="https://www.instagram.com/gigz_app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            Instagram
          </a>
          <a 
            href="https://www.threads.net/@gigz_app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-gigzpink transition"
          >
            Threads
          </a>
        </div>
      </div>
    </footer>
  )
}

