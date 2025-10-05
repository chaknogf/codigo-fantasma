import { Hero } from "@/components/hero"
import { SpaceJourney } from "@/components/space-journey"
import { Services } from "@/components/services"
import { Console } from "@/components/console"
import { Contact } from "@/components/contact"
import { FloatingGhosts } from "@/components/floating-ghosts"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <FloatingGhosts />
      <Hero />
      <SpaceJourney />
      <Services />
      <Console />
      <Contact />
    </main>
  )
}
