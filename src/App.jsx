// import "./App.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// export default function App(){
// return (<div>
//     <a href="/">ALlen</a>| <a href="/neet/online-coaching-class11">CLass 11</a> |<a href="/neet/online-coaching-class12">Class12</a>
//     <BrowserRouter>
//     <Routes>
//     <Route path="/neet/online-coaching-class11"element ={<Class11Program/>}/>
//     <Route path="/neet/online-coaching-class12"element ={<Class12Program/>}/>
//     <Route path="/"element ={<Landing/>}/>//landing page
//     </Routes>
//     </BrowserRouter>
// </div>)
// }
// function Landing(){ 
//     return <div>
//         Hello folks!!!
//     </div>
// }


// function Class12Program(){
//     return <div>
// class 12    </div>
// }


// function Class11Program(){
//     return <div>
// class11    </div>
// }









// context API 



import React,{useState,createContext,useContext} from 'react';

const BulbCOntext=createContext();

 function BulbProvider({children}){
    const [bulbOn,setBulbOn]=useState(true);
  return (  <BulbCOntext.Provider value={{
        bulbOn:bulbOn,
        setBUlbOn:setBulbOn
    }}>
        {children}
    </BulbCOntext.Provider>
)}
 export default function App(){
    return (<BulbProvider>
        <Light/>
    </BulbProvider>)
}
function Light(){
    return (<><BulbSwitch></BulbSwitch>
        <Togglebutton></Togglebutton></>
    )
}
function BulbSwitch(){
    const {bulbOn}=useContext(BulbCOntext);
return <div>
    {bulbOn?"BulbOn":"Bulb off"}
</div>
}
function Togglebutton(){
    const {bulbOn,setBUlbOn}=useContext(BulbCOntext);
function Toggle(){
    setBUlbOn(!bulbOn);
}
    return(<div>
        <button onClick={Toggle}>
        Click me 
        </button>
    </div>)
}