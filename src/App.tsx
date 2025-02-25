import { useRef } from "react";
import './App.css'
import ContactForm from './components/contactForm'
import Footer from './components/footer'
import VehicleShowcase  from './components/VehicleShowcase '
import Intro from './components/Intro'
import Navbar from './components/navbar'

function App() {
  const contactFormRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Navbar contactFormRef={contactFormRef} />
      <Intro />
      <VehicleShowcase  />
      <div ref={contactFormRef}>
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

export default App
