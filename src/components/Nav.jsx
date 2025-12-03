import React from "react";
const Nav = ({
  onServicesClick,
  onAboutClick,
  onSkillClick,
  onProjectsClick,
}) => {
  const [showSideNav, setShowSideNav] = React.useState(false);
  console.log("showSideNav", showSideNav);
  return (
    <>
      <header class="tmp-header-area-start header-one header--sticky header--transparent sticky">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="header-content">
                <div class="tmp-mainmenu-nav d-none d-xl-block">
                  <nav class="navbar-example2 onepagenav">
                    <ul class="tmp-mainmenu nav nav-pills">
                      <li class="nav-item">
                        <a class="smoth-animation" href="/">
                          Portfolio
                        </a>
                      </li>
                      <li class="nav-item ">
                        <a
                          class="smoth-animation"
                          onClick={() => onServicesClick && onServicesClick()}
                        >
                          Services
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          onClick={() => onAboutClick && onAboutClick()}
                          class="smoth-animation"
                        >
                          About
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          onClick={() => onSkillClick && onSkillClick()}
                          class="smoth-animation"
                        >
                          Skills
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          onClick={() => onProjectsClick && onProjectsClick()}
                          class="smoth-animation"
                        >
                          Projects
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="smoth-animation"
                          href="https://drive.google.com/file/d/1G-tsUYkJeDgJ_j9vui49RkPaurKkE-Sx/view"
                        >
                          Resume
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div class="tmp-header-right">
                  <div class="social-share-wrapper d-none d-md-block">
                    <div class="social-link">
                      <a href="linkedin.com/in/afaq-awan-162b10215">
                        <i class="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="https://github.com/afaq35202">
                        <i class="fa-brands fa-github"></i>
                      </a>
                      <a
                        href="https://wa.me/923224022942"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa-brands fa-whatsapp"></i>
                      </a>

                      <a
                        href="mailto:afaqawan35202@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i class="fa-regular fa-envelope"></i>
                      </a>
                      {/* <a href="https://inversweb.com/product/html/virtuo/index.html#">
                        <i class="fa-brands fa-twitter"></i>
                      </a>
                      <a href="https://inversweb.com/product/html/virtuo/index.html#">
                        <i class="fa-brands fa-facebook-f"></i>
                      </a> */}

                      {/* <a href="https://inversweb.com/product/html/virtuo/index.html#">
                        <i class="fa-brands fa-instagram"></i>
                      </a> */}
                    </div>
                  </div>

                  <div class="tmp-side-collups-area d-block d-xl-none">
                    <button
                      onClick={() => {
                        setShowSideNav(!showSideNav);
                      }}
                      class="hamberger-menu humberger_menu_active"
                    >
                      <i
                        id="menuBtn"
                        class="fa-solid fa-bars humberger-menu"
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class={`${showSideNav ? "d-block d-xl-block sidenav" : "d-none"}`}>
        <div class={`${showSideNav ? "tmp-side-nav-active" : ""}`}>
          <div class="sidenav-inner">
            <div class="header-top">
              <div class="logo">
                {/* <a href="/" class="logo-area">
                  <img
                    class="logo-dark"
                    src="./assets/white-logo-reeni.png"
                    alt="logo"
                  />
                  <img
                    class="logo-white"
                    src="./assets/white-logo-reeni.png"
                    alt="logo"
                  />
                </a> */}
              </div>
              <div class="close-menu">
                <button class="close-button tmp-round-action-btn">
                  <i class="fa-sharp fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>

            <ul class="tmp-mainmenu onepagenav-click">
              <li>
                <a class="smoth-animation" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#service"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#resume"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="smoth-animation"
                  href="https://inversweb.com/product/html/virtuo/index.html#contacts"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div class="social-wrapper mt--40">
              <span class="subtitle">find with me</span>
              <div class="social-link">
                <a href="https://inversweb.com/product/html/virtuo/index.html#">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="https://inversweb.com/product/html/virtuo/index.html#">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://inversweb.com/product/html/virtuo/index.html#">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="https://inversweb.com/product/html/virtuo/index.html#">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
