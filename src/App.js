// import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [tempMode,setTempMode]=useState('Enable dark mode');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setTempMode('Disable dark mode');
      document.body.style.backgroundColor='black';
      document.title='TextUtils-Dark Mode';
    }
    else{
      setMode('light');
      setTempMode('Enable dark mode');
      document.body.style.backgroundColor='white';
      document.title='TextUtils-Light Mode';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Textify!" aboutText="About Us" mode={mode} toggleMode={toggleMode} t_mode={tempMode}/>
        <div className="container">
          <Routes>
            <Route path="/" element={<TextForm title="What do you want me to help you with?" mode={mode}  info="Enter ur shit to have operations"/>} />
            
            <Route path="/about" element={<About owner="Swapnil makwana" email="swapnilmakwana4@gmail.com" phone="8978933611" address="House no 5-97/23,Vrc Homes, Patelguda" mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
