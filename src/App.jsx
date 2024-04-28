import React, { useState, useRef, useCallback, useEffect } from "react"

// Assets
import ScrollToTop from "Images/to_top.png"
import MyHeader from "Images/MyHead.jpg"

import Liseret2 from "Images/background_liseret3_v2.jpg"
import Liseret4 from "Images/background_liseret4.jpeg"
import MainBckgr from "Images/main_background.png"

import Videos2 from "./components/Videos2"
import Videos3 from "./components/Videos3"

function App() {
  const MAIN_REF = useRef(null)
  const HEADER_REF = useRef(null)
  const HOME_REF = useRef(null)
  const INFO_SCROLL_REF = useRef(null)
  const CERCLE_INFO_SCROLL_REF = useRef(null)
  const H1_REF = useRef(null)

  const handleScroll = () => {
    if (MAIN_REF.current) {
      const top = MAIN_REF.current.scrollTop
      console.log("top", top)

      if (top > 0) {
        HOME_REF.current.style.backgroundPosition = "0% 100%"
        HOME_REF.current.style.transition = "7.5s ease"
        CERCLE_INFO_SCROLL_REF.current.style.transition = "1s ease"
        CERCLE_INFO_SCROLL_REF.current.style.opacity = "0"
        INFO_SCROLL_REF.current.style.transition = "1s ease"
        INFO_SCROLL_REF.current.style.opacity = "0"
        HEADER_REF.current.style.margin = "0 0 0 0"
        HEADER_REF.current.style.opacity = "1"
        HEADER_REF.current.style.transition = "1s ease"
        HEADER_REF.current.style.boxShadow = "1px 1px 5px #666"
        H1_REF.current.style.opacity = "1"
        H1_REF.current.style.transition = "1s ease"
        H1_REF.current.style.color = "#FFF"
      } else {
        HOME_REF.current.style.backgroundPosition = "0% 0%"
        HOME_REF.current.style.transition = "7.5s ease"
        CERCLE_INFO_SCROLL_REF.current.style.transition = "1s ease"
        CERCLE_INFO_SCROLL_REF.current.style.opacity = "1"
        INFO_SCROLL_REF.current.style.transition = "1s ease"
        INFO_SCROLL_REF.current.style.opacity = "1"
        HEADER_REF.current.style.margin = "40px 0 0 0"
        HEADER_REF.current.style.opacity = "0.5"
        HEADER_REF.current.style.transition = "1s ease"
        HEADER_REF.current.style.boxShadow = "none"
        H1_REF.current.style.opacity = "0"
        H1_REF.current.style.transition = "1s ease"
        H1_REF.current.style.color = "#FFF"
      }
    }
  }

  /** Life-cycle */
  useEffect(() => {
    MAIN_REF?.current.addEventListener("wheel", handleScroll)
  }, [])

  const handleNavClick = event => {
    const page = event.target.getAttribute("href")

    HOME_REF.current.style.backgroundPosition = "0% 100%"
    HOME_REF.current.style.transition = "7.5s ease"
    CERCLE_INFO_SCROLL_REF.current.style.transition = "1s ease"
    CERCLE_INFO_SCROLL_REF.current.style.opacity = "0"
    INFO_SCROLL_REF.current.style.transition = "1s ease"
    INFO_SCROLL_REF.current.style.opacity = "0"
    HEADER_REF.current.style.margin = "0 0 0 0"
    HEADER_REF.current.style.opacity = "1"
    HEADER_REF.current.style.transition = "1s ease"
    HEADER_REF.current.style.boxShadow = "1px 1px 5px #666"
    H1_REF.current.style.opacity = "1"
    H1_REF.current.style.transition = "1s ease"
    H1_REF.current.style.color = "#FFF"

    window.scrollTo({
      top: document.querySelector(page).offsetTop - 80,
      behavior: "smooth",
    })
  }

  return (
    <div
      id="main_container"
      ref={MAIN_REF}
      style={{ backgroundImage: `url(${MainBckgr})` }}
    >
      <header ref={HEADER_REF}>
        <a href="index.html">
          <img
            src={MyHeader}
            alt="Timothe Debois icon"
            title="Timothe Debois icon"
            width="55px"
            height="70px"
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="index.html" onClick={handleNavClick}>
                <i className="fas fa-home"></i>
              </a>
            </li>
            <li>
              <a href="#propos" onClick={handleNavClick}>
                À Propos
              </a>
            </li>
            <li>
              <a href="#projet1" onClick={handleNavClick}>
                Projets 2D
              </a>
            </li>
            <li>
              <a href="#projet2" onClick={handleNavClick}>
                Projets 3D
              </a>
            </li>
            <li>
              <a href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="home" ref={HOME_REF} style={{ backgroundImage: `url(${MainBckgr})` }}>
        <p id="telHome">
          <i className="fas fa-phone-volume"></i> : 06 93 63 95 94
        </p>
        <p id="mailHome">
          <i className="fas fa-envelope"></i> : timothe.debois@gmail.com
        </p>
        <h1 ref={H1_REF}>
          Timothe Debois
          <br />
          Animateur 2D - 3D
        </h1>
        <p id="infoScroll" ref={INFO_SCROLL_REF}>
          Scrollez
        </p>
        <div id="cercleInfoScroll" ref={CERCLE_INFO_SCROLL_REF}>
          <i className="fas fa-angle-down"></i>
        </div>
      </section>
      <section id="propos">
        <h2 style={{ textAlign: "center" }}>Bonjour, je suis Timothé,</h2>
        <h3 style={{ textAlign: "center" }}>
          Un animateur 2D-3D passionné par le mouvement et les personnages rocambolesques.
        </h3>
        <p style={{ textAlign: "center" }}>
          Avec mes années de cours en école d'animation, j'ai appris les techniques de
          base de l'animation et quelques logiciels.
        </p>
        <p style={{ textAlign: "center" }}>
          Je suis à la recherche d'un stage en animation pour parfaire mon apprentissage.
          Je suis à l'aise avec les techniques d'animation numériques, ainsi qu'avec les
          logiciels d'animation 2D et 3D les plus courants tels que Adobe Animate, Toon
          Boom Harmony, Autodesk Maya.
        </p>
        <p style={{ textAlign: "center" }}>
          Je suis passionné par l'animation et espère pouvoir travailler dans le domaine
          avec de plus ou moins grandes équipes, avec lesquelles j'apprendrai à me
          surpasser.
        </p>
        <p style={{ textAlign: "center" }} className="marginBotSectionPropos">
          Je vous invite à découvrir mon portfolio, qui reflète mes 2 années de projets
          personnels en matière d'animation. N'hésitez pas à me contacter pour toute
          demande de collaboration ou pour en savoir plus sur mon travail.{" "}
        </p>
      </section>
      <section id="liseret1">
        {/* <h2 className="details">
          Des sites web adaptés pour mobile, tablette et PC.
        </h2>
        <hr />
        <p className="details2">Un développement responsive</p> */}
      </section>
      <section id="projet1">
        <h2>Projets 2D</h2>
        <div className="row">
          <Videos2 />
        </div>
      </section>

      <section id="liseret2" style={{ backgroundImage: `url(${Liseret2})` }}>
        <h2 className="details">
          {/* Des sites web adaptés pour mobile, tablette et PC. */}
        </h2>
      </section>
      <section id="projet2">
        <h2>Projets 3D</h2>
        <div className="row">
          <Videos3 />
        </div>
      </section>

      <section id="liseret3" style={{ backgroundImage: `url(${Liseret4})` }}>
        <h2 className="details">
          {/* Des sites web adaptés pour mobile, tablette et PC. */}
        </h2>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <div id="contactProjet">
          <p>
            Un besoin, une idée, un projet ? <span>Contactez</span> moi !
          </p>
        </div>
        <div id="containerInfoContact">
          <div id="infoContact">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <p className="intitulerContact">Adresse Email</p>
                <p className="detailsContact">timothe.debois@gmail.com</p>
              </li>
              <li>
                <i className="fas fa-phone-volume"></i>
                <p className="intitulerContact"> Numéro de téléphone</p>
                <p className="detailsContact"> (+33) 6.93.63.95.94</p>
              </li>
            </ul>
          </div>
          <div id="googleMap">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40407.06320476136!2d1.5711144874483571!3d50.73030070567368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc2c40b157a363%3A0x40af13e8163fb30!2s62200+Boulogne-sur-Mer!5e0!3m2!1sfr!2sfr!4v1542375142415"
              width="500"
              height="400"
              style={{ border: "none" }}
              allowfullscreen
            ></iframe> */}
            <img
              src={MyHeader}
              alt="Timothe Debois icon"
              title="Timothe Debois icon"
              width="auto"
              height="100%"
            />
          </div>
        </div>
      </section>

      <footer>
        <p>Edited by Timothe Debois, ©2024</p>
      </footer>

      <div id="scrollUp">
        <a href="index.html">
          <img
            src={ScrollToTop}
            alt="Bouton remonter en haut"
            title="Bouton remonter en haut"
          />
        </a>
      </div>
    </div>
  )
}

export default App
