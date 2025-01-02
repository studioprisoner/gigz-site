import Image from 'next/image'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Button } from './components/ui/button'
import { getAppStoreLink } from '@/app/utils/app-store'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-gigzpink to-gigzpurple text-white">
        <div className="container mx-auto px-4 py-16 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-montserrat tracking-tighter antialiased leading-normal">Keep track of every concert you attend with Gigz</h1>
              <p className="text-xl md:text-2xl mb-8 font-sans font-normal leading-3">Your personal live music diary. Whether you&apos;re a casual concert-goer or a dedicated live music enthusiast, Gigz helps you preserve and celebrate your live music experiences.</p>
              <Button size="lg" asChild className="text-lg px-8 py-4 font-sans">
                <a href={getAppStoreLink()}>Download on the App Store</a>
              </Button>
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

