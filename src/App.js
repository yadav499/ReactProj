import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Syllabus from "./Component/Syllabus";
import Chatbot from "./Component/Chatbot";


/*import Radiobutton from "./Component/Radiobutton";
import questions from "./tst.json"*/

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Routes>
        <Contact />
        
       {/* <Radiobutton question="Whats your name" response={questions}/> */}
        <Chatbot/>
      </Router>
    </>
  );
}
export default App;
