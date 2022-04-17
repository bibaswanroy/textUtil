
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light'); //D mode enabled or not
  const [modeText, setModeText] = useState('Enable Dark Mode');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      setModeText('Disable Light Mode');
      document.body.style.backgroundColor = '#0a3240';
    }
    else{
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} info={modeText}/>
      {/* <Navbar/> */}
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
