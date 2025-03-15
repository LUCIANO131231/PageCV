import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Project from './components/Project'

function App() {
  return (
    <main className='min-h-screen'>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Project />
      <Footer />
    </main>
  )
}

export default App
