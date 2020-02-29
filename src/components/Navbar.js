import React, { Fragment } from 'react'

const Navbar = ({ titulo }) => {


  const navSildes = () => {

    const nav = document.querySelector('#nav1');
    const nav_link = document.querySelectorAll('.nav_links li')

   
      nav.classList.add('nav_active')

      nav_link.forEach((link, index) => {
        if (link) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinksFrame 0.5s ease forwards ${index / 7 + 1}s`;
        }
      })
  }

  const navClose = () => {

 
    const nav = document.querySelector('#nav1');
    nav.classList.remove('nav_active')
  }

  return (
    <Fragment>
      <header>
        <div className="burger" onClick={navSildes}  >
          <span className="bar" ></span>
          <span className="bar" ></span>
          <span className="bar" ></span>
        </div>
        <nav id="nav1">
            <div className="cerrar" onClick={navClose} >
              <span className="linea1"></span>
              <span className="linea2"></span>
            </div>
          <ul className="nav_links">
            <li>Perfil</li>
            <li>Configuración</li>
          </ul>
        </nav>
        <nav id="nav2">
          <ul className="nav_bar" >
            <li>
              {titulo}
            </li>
            <div>
              <li>
                Login
             </li>
              <li>
                Registro
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </Fragment>
  )
}

export default Navbar
