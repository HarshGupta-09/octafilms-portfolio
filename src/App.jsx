

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {


  return (
 <>
  <Navbar/>

  <Hero/>

  <section id="about">
    <About/>
  </section>

  <section id="services">
    <Services/>
  </section>

  <section id="portfolio">
    <Portfolio/>
  </section>

  <section id="projects">
    <Projects/>
  </section>

  <section id="clients">
    <Clients/>
  </section>

  <section id="testimonials">
    <Testimonials/>
  </section>

  <section id="process">
    <Process/>
  </section>

  <section id="team">
    <Team/>
  </section>

  <section id="contact">
    <Contact/>
  </section>

  <Footer/>
</>
  )
}

export default App
