import "./App.css";

import { Home, AboutMe } from "./pages";

import Header from "./components/Header";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />

      <div className="centered flex w-full items-center justify-center">
        <div className="Items w-4/5">
          <AboutMe />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
