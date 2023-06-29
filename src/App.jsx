import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Projects from './Components/Projects/Projects'
import Skills from './Components/Skills'

function App() {

  return (
    <div className=''>
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
