import './App.css'
import AboutUs from './components/AboutUs'
import ConnectSection from './components/ConnectSection'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PricingCardSection from './components/PricingCardSection'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection/>
      <ConnectSection/>
      <AboutUs/>
      <Services/>
      <PricingCardSection/>
      <ContactForm />
      <Footer/>
    </>
  )
}

export default App
