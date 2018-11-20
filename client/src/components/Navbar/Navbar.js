import React from "react";
import './Navbar.css'



const Navbar = () =>(
  <div class="wrapper">
  <h2>Elastic Tabs</h2>
  <h6>Click on tabs to see them in action</h6>
  <nav class="tabs">
    <div class="selector"></div>
    <a href="#" class="active"><i class="fas fa-burn"></i>Avengers</a>
    <a href="#"><i class="fas fa-bomb"></i>Guardians of The Galaxy</a>
    <a href="#"><i class="fas fa-bolt"></i>Thor</a>
    <a href="#"><i class="fab fa-superpowers"></i>Black Panther</a>
  </nav>
</div>
 
);
export default Navbar;


