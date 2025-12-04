import logo from "../assets/white-logo-reeni.png";
import LightShade from "../assets/light.svg";
import hiImg from "../assets/hi.png";
import one from "../assets/01.svg";
import two from "../assets/02.svg";
import three from "../assets/03.svg";
import four from "../assets/04.svg";
import reeniMainDemo from "../assets/profile.png";
const About = () => {
  return (
    <div class="banner-area-one-main-demo tmp-section-gap shape-move" id="home">
      <div
        style={{
          zIndex: 1,
        }}
        class="slider-bg-light"
      >
        <img
          class="blocksync-scroll-trigger fade_in animation-order-8"
          src={LightShade}
          alt="Top Light Shape"
        />
      </div>
      <div
        style={{
          zIndex: 1,
        }}
        class="slider-bg-dot-shape"
      >
        <div
          style={{
            width: "650px",
          }}
          class="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16"
        >
          <div class="blocksync-stars"></div>
          <div class="blocksync-stars2"></div>
          <div class="blocksync-stars3"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="banner-main-demo-inner-content">
              <span class="top-intro">
                <img src={hiImg} alt="shape" />
                &nbsp;My name is Afaq Awan 👨‍💻 a freelancer
              </span>
              <div className="profile-shadow">
                <img
                  src={reeniMainDemo}
                  alt="banner"
                  class="about-us-card tmponhover single-animation active"
                />
              </div>

              <div class="absolute-designation shape-image">
                <h2
                  class="up shape"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform:
                      "translate(-50%, 0%) translate(-7.94px, -1.13px)",
                  }}
                >
                  &amp; Flutter Dev
                </h2>
                <p class="top-intro">
                  Experienced Mobile App Developer with a solid track record of
                  creating cutting-edge, high- performance applications for
                  Android and IOS platforms. Over three years of hands-on
                  expertise in developing robust, user-friendly mobile solutions
                  using native Java, Kotlin, and hybrid Flutter. Proven ability
                  to deliver scalable and visually appealing applications, while
                  consistently meeting project deadlines. Adept at collaborating
                  with cross-functional teams and staying up-to-date with
                  emerging technologies to drive innovation and optimize user
                  experiences.
                </p>
                {/* <h2
                  class="down shape"
                  data-speed="0.02"
                  style={{
                    zIndex: 1,
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(-50%, 0%) translate(6.96px, 2.42px)",
                  }}
                >
                  Photographer
                </h2> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tmp-banner-circle">
        <img class="tmp-banner-circle-1" src={one} alt="circle-image" />
        <img class="tmp-banner-circle-2" src={two} alt="circle-image" />
        <img class="tmp-banner-circle-3" src={three} alt="circle-image" />
        <img class="tmp-banner-circle-4" src={four} alt="circle-image" />
      </div>
      <div class="separator-animated-border border-top-footer animated-true"></div>
      <div class="slider-bg-light">
        <img
          class="blocksync-scroll-trigger fade_in animation-order-8"
          src="./Home 01 - Virtuo Personal Portfolio HTML Template_files/light.svg"
          alt="Top Light Shape"
        />
      </div>
      <div class="slider-bg-dot-shape">
        <div class="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
          <div class="blocksync-stars"></div>
          <div class="blocksync-stars2"></div>
          <div class="blocksync-stars3"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
