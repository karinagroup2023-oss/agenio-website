import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useTelegram } from './hooks/useTelegram'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import Programs from './components/Programs'
import WhyUs from './components/WhyUs'
import Achievements from './components/Achievements'
import Teachers from './components/Teachers'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CtaSection from './components/CtaSection'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const { expand, ready } = useTelegram()

  useEffect(() => {
    expand()
    ready()
  }, [])

  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Programs />
        <WhyUs />
        <Achievements />
        <Teachers />
        <VideoSection />
        <Testimonials />
        <Pricing />
        <CtaSection />
        <Location />
      </main>
      <Footer />

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/77787981078"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-xl shadow-green-500/30 transition-colors"
        aria-label="Написать в WhatsApp"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <MessageCircle size={26} fill="white" />
        </motion.div>
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-green-400 animate-ping opacity-30" />
      </motion.a>
    </div>
  )
}

export default App
