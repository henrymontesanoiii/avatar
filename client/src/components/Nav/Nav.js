import React from 'react';
import wallpaper from "../../wallpaper.json";


const Nav = (props) => (


  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
    <a className="navbar-brand" href="/">
      
    </a>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Change Wallpaper
  </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" key={wallpaper[1].id}
          id={wallpaper[1].id}
          name={wallpaper[1].name}
          image={wallpaper[1].image}
          onClick={()=> props.handleClicked(wallpaper[1].id)}>Winter</a>
        <a className="dropdown-item" key={wallpaper[2].id}
          id={wallpaper[2].id}
          name={wallpaper[2].name}
          image={wallpaper[2].image}
          onClick={()=> props.handleClicked(wallpaper[2].id)}>Summer</a>
        <a className="dropdown-item" key={wallpaper[3].id}
          id={wallpaper[3].id}
          name={wallpaper[3].name}
          image={wallpaper[3].image}
          onClick={()=> props.handleClicked(wallpaper[3].id)}>Autumn</a>
          <a className="dropdown-item" key={wallpaper[4].id}
          id={wallpaper[4].id}
          name={wallpaper[4].name}
          image={wallpaper[4].image}
          onClick={()=> props.handleClicked(wallpaper[4].id)}>Spring</a>
      </div>
    </div>
  </nav>
)


  ;

export default Nav;
