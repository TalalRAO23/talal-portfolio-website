import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Switch from './components/Switch';
import './App.css';

function App() {
  return (<>

  {/* <Switch/> */}

    <Navbar />

    <section id="banner">
      <Banner />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </>);
}

export default App;