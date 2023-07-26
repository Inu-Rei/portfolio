import React, { useState } from "react";
import "../../StyleSheet/NavBar.css"; // Importa el archivo CSS correctamente

const NavBar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);

  const clickItemNav = (item) => {
    console.log(item);
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="ContainerNavBar">
      <div className="ContainerLogo">
        {/* Usa la imagen del logo desde la carpeta "public" */}
        <img src="/Logo.png" alt="Logo Ronald" className="ImageLogo" />
        <div>
          <h1>Ronald Ramos</h1>
          <h2>Front-End Developer</h2>
        </div>
      </div>
      <div
        className="ContainerBurguer"
        onClick={() => setShowMenuBurguer(!showMenuBurguer)}
      >
        <div className="BurguerMenu" />
        <div className="BurguerMenu" />
        <div className="BurguerMenu" />
      </div>

      <div className={`ContainerItems ${showMenuBurguer ? "show-menu" : ""}`}>
        <p onClick={() => clickItemNav("about-me")}>About Me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <button onClick={() => clickItemNav("contact")}>📞 Contact me</button>
      </div>
    </div>
  );
};

export default NavBar;
