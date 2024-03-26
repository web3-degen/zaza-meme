import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";
import HowToBuy from "./components/HowToBuy";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Footer />
    </div>
  );
}

export default App;
