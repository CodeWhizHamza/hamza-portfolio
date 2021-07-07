import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Work from './components/Work/Work'
import Socials from './components/Socials/Socials'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

import './reset.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Work />
      <Services />
      <Socials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
