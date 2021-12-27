import React from "react";
import Typist from 'react-typist';
import "./Button.css";
import placer from './placer.png';
import Button from '@material-ui/core/Button';

export default function Main() {
  return (
    <div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <div style={{width:'30%'}}>
        <Typist styldelay={200} avgTypingDelay = {50}>
          <h1 style={{textAlign:'left', paddingLeft:'2%', color:'black'}}>
            This is a website coded from scratch using ReactJS
          </h1>
        </Typist>
        </div>

        <img  style={{textAlign:'left', width:'25%'}} src={require('./placer.png')} />

        
        
      </div>
      <button className="btnfos btnfos-2" onClick={() => window.open( 'https://github.com/assasin2gamer/Portfolio-Site')} >The code </button>
    </div>



  );
}
