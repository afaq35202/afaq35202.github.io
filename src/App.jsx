import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/swiper.css";
import "./App.css";
import "./assets/odometer.css";
import "./assets/animate.min.css";
import "./assets/bootstrap.min.css";
import "./assets/style.css";

import HomePage from "./pages/index.jsx";
function App() {
  return (
    <>
      <div className="spybody">
        <HomePage />
        <div class="tmp-footer-area footer-style-4 tmp-section-gapTop pb--50">
          <div class="plr--150 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15">
            <div
              style={{
                margin: "0 85px",
              }}
              class="row"
            >
              <div class="col-lg-12">
                <div class="for-animation-inner">
                  <div class="cta__line-wrap-1">
                    <img
                      src="./assets/6732fb6df497a3fa7a857752_Vector 7.svg"
                      loading="lazy"
                      alt=""
                      height="118"
                      class="cta__line-1"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate3d(270.18px, 0px, 0px)",
                      }}
                    />
                  </div>
                  <div class="cta__line-wrap-2">
                    <img
                      class="cta__line-2"
                      src="./assets/6732fb6df497a3fa7a857752_Vector 7.svg"
                      loading="lazy"
                      alt=""
                      height="118"
                      style={{
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        opacity: 1,
                        transform: "translate3d(-270.18px, 0px, 0px)",
                      }}
                    />
                  </div>
                  <div class="footer-area text-center">
                    <div class="logo">
                      <a href="">
                        <img src="./assets/white-logo-reeni.png" alt="" />
                      </a>
                    </div>
                    <p class="description mt--30">
                      ©
                      <script>document.write(new Date().getFullYear());</script>
                      2025 . All rights reserved by
                      <a
                        target="_blank"
                        href="https://themeforest.net/user/inversweb/portfolio"
                      >
                        &nbsp; InversWeb.
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
