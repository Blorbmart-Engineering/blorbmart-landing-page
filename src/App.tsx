import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import SellerSection from './components/SellerSection'
import RiderSection from './components/RiderSection'
import Team from './components/Team'
import MobileApp from './components/MobileApp'
import Insights from './components/Insights'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <SellerSection />
      <RiderSection />
      <Team />
      <MobileApp />
      <Insights />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
