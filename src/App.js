import './index.css';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";
function App() {
   const [mode,setmode]=useState('light');
   const[alert,setalert]=useState(null);
  //  const[colour1,setcolour1]=useState('red')
  //  const[colour2,setcolour2]=useState('blue')
  //  const[colour3,setcolour3]=useState('pink')

   const showAlert=(message,type)=>{
    setalert(
      {
        msg:message,  
        type:type
      }
    )
    setTimeout(()=>{
    setalert(null);
    },1500
    );
   } 
   const toggleMode=()=>{
    if (mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#393a3e';
   showAlert("dark mode enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled","success");
    }
   } 
//    const colourMode1=()=>{
// setcolour1('red')
//    }
//    const colourMode2=()=>{
//     setcolour2('yellow')
//        }
//        const colourMode3=()=>{
//         setcolour3('pink')
//            }

  return (
    <>
  {/* <Router> */}
   <Navbar title="Textutils" about="about textutils  " mode={mode} toggleMode={toggleMode}/>    
     <Alert alert= {alert}/>
     <div className='container'>
     {/* <Switch>
          <Route path="/About">
            <About />
          </Route>
         
          <Route path="/">
          <TextForm alert={showAlert}heading="enter the text to analyze"/> 

          
          </Route>
        </Switch> */}
      
      <TextForm alert={showAlert}heading="enter the text to analyze"/> 

     </div>
     {/* </Router> */}
</> 
  );
}

export default App;
