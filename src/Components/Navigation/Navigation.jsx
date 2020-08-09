import React, {useEffect} from "react";
import "./style.css";
import Header from "../Header/Header";
const Navigation = (props) => {


  useEffect(() => {
    let navbar = document.querySelector('.navbar');
    console.log(navbar)
    document.addEventListener('scroll', () => {
      if(document.scrollingElement.scrollTop > 40) {
        navbar.classList.add('bg-info', 'shadow')
      } else navbar.classList.remove('bg-info', 'shadow')
    })
    return () => {
      document.removeEventListener('scroll')
    }
  }, [])
  const sections = ["home", "about", "services", "portfolio", "contact"];

  const NavLinks = () => {
    return sections.map((section, index) => {
      return (
        <li key={index} className="nav-item">
          <a className="nav-link" href={`#${section}`}>
            {section}
          </a>
        </li>
      );
    });
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            {props.LogoTitle}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">{<NavLinks />}</ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
