import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
// import { Contact } from './components/ContactFromVideo'
import { Footer } from './components/Footer'
import { Test } from './components/Test'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Test />
    </div>
  )
}

export default App
