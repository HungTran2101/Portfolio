import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default App;
