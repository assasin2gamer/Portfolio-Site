import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import "./Button.css";

const routes = [
  { to: "/", text: "Home" },
  { to: "/About", text: "About" },
  { to: "/design", text: "Design" },
  { to: "/Robotics", text: "Robotics" },
  { to: "/Competition", text: "Competition" },
  { to: "/Software", text: "Software" }
];


export default function Nav() {
  return (
    <div className="Nav" style = {{height:'10%', backgroundColor:'white', paddingTop: '1px'}}>
      <div className="head">
        <div id="title">

          <div id="bar" />
        </div>
        <div className="headlist">
          <ul id = "buttons" style ={{ listStyleType: "none"}} display= "inline-flex">
            {routes.map(route => (
              <b key={route.text}>
                <NavLink
                  exact
                  to={route.to}
                  style={{ color: "blue" }}
                  activeStyle={{ color: "red" }}
                  
                >
                  <button style = {{fontFamily:"Helvetica", }} className="btnfos btnfos-1">
                    {route.text}
                  </button>
                  
                </NavLink>
              </b>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

