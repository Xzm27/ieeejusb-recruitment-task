import './App.css';

import Home from "./components/Home"
import Nav from "./components/Nav"
import About from "./components/About"
import Teams from "./components/Teams"
import Contact from "./components/Contact"
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav/>
      <Home />
      <About />
      <Teams />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
