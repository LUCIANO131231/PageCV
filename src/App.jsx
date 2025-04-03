import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
// import Project from './components/Project'
import Certificates from './components/Certificates'

function App() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-[#85A98F]'>
      <Header />
      <Banner />
      <About />
      <Experience />
      <Skills />
      {/* <Project /> */}
      <Certificates />
      <Footer />
    </main>
  )
}

export default App
