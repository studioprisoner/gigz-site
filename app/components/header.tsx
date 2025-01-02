import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/app/components/ui/button'
import { getAppStoreLink } from '../utils/app-store'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-0 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-32">
          <Link href="/" className="h-16">
            <Image 
              src="/images/gigz-logo-white-web.png" 
              alt="Gigz"
              height={400}
              width={910}
              priority
              className="h-full w-auto"
            />
          </Link>
          <nav className="hidden md:flex">
            <Button variant="outline" asChild>
              <a href={getAppStoreLink()}>Download</a>
            </Button>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

