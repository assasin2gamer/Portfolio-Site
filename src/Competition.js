import React from "react";
import Typist from 'react-typist';
import "./Button.css";
import placer from './placer.png';
import Button from '@material-ui/core/Button';

export default function Competition() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{width:'30%'}}>
        <Typist styldelay={200} avgTypingDelay = {50}>
          <h1 style={{textAlign:'left', paddingLeft:'2%', color:'black'}}>
            Competitions:<br/><br/>UCI rescue robotics<br/><br/>Cyber Patriots<br/><br/>NCL<br/><br/>Vex Robotics<br/><br/>OC Mayor's Cup<br/><br/>RedPwn
          </h1>
        </Typist>
        </div>

        <p style={{color:'black', width:'25%', textAlign:'left'}}>Competitions include cryptography, enumeration and exploitation, image proccessing, AI image recognition, reverse engineering, password cracking</p>

        
        
      </div>
      <button className="btnfos btnfos-2" onClick={() => window.open( 'https://github.com/assasin2gamer/Portfolio-Site')} >The code </button>
    </div>



  );
}
