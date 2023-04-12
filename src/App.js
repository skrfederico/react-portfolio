import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
// import { Contact } from './components/Contact'
import { Contact } from './components/ContactFromVideo'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
