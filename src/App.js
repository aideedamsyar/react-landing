import { useColorMode } from "@chakra-ui/color-mode";




import { useColorModeValue } from "@chakra-ui/color-mode";
import Home from './components/Home'
import About from './components/About';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Thanks from "./components/Thanks";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const bg = useColorModeValue('#E5E5E5', 'dark')

  
  return (
    <Router>
      <Navbar/>   
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/about" element={<About />}></Route>
        <Route  path="/resume" element={<Resume />}></Route>        
        <Route  path="/contact" element={<Contact />}></Route>        
        <Route  path="/thanks" element={<Thanks />}></Route>        
      </Routes>

    </Router>  
  );
}

export default App;
