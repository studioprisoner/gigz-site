import Image from 'next/image'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Button } from './components/ui/button'
import Link from 'next/link'

const getAppStoreLink = () => {
  return 'https://apps.apple.com/us/app/gigz-app/id6670392747?itscg=30200&itsct=apps_box_link&mttnsubad=6670392747'
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-gigzpink to-gigzpurple text-white">
        <div className="container mx-auto px-4 py-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat tracking-normal md:tracking-tighter antialiased leading-normal">Keep track of every concert you attend with Gigz</h1>
              <p className="text-xl md:text-2xl mb-8 font-sans font-normal leading-normal">Your personal live music diary. Whether you&apos;re a casual concert-goer or a dedicated live music enthusiast, Gigz helps you preserve and celebrate your live music experiences.</p>
              <p className="md:text-2xl mb-4 font-sans font-bold leading-normal">Now available in the Apple App Store</p>
              <Link href={getAppStoreLink()} className="text-lg px-8 py-4 font-sans opacity-75">
                <Image
                  src="/images/black.svg"
                  alt="App Store Badge"
                  width={175}
                  height={50}
                />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                <Image
                  src="/images/gigz-mockup.png"
                  alt="App Screenshot"
                  width={915}
                  height={1217}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

