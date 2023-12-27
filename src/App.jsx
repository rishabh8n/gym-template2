import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Pricing from "./components/pricing/pricing";
import Services from "./components/services/services";
import Trainers from "./components/trainers/trainers";
import Contact from "./components/contact/contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Trainers />
        <Contact />
      </div>
    </>
  );
}

export default App;
