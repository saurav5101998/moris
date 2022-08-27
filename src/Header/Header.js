import React from 'react';
import "./Header.css";

import { ImFacebook } from "react-icons/im";

function Header() {
  return (
    // <div>
      <header>
  <nav class="container">
    <label for="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <input type="checkbox" id="hamburger" />
    <ul>
      <li><a href="#home">Celebrity Directory</a></li>
      <li><a href="#about">...</a></li>
      <li><a href="#timeline">Enroll as Celeb</a></li>
      
      
        <li>
        <ImFacebook />
            </li>
            </ul>
      
   
  </nav>
</header>
    // </div>
  )
}

export default Header
