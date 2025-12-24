import LightShade from "../assets/light.svg";
import one from "../assets/01.svg";
import two from "../assets/02.svg";
import three from "../assets/03.svg";
import four from "../assets/04.svg";
import ProfileImg from "../assets/profile.png";
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
              {/* <span class="top-intro">
                <img src={hiImg} alt="shape" />
                &nbsp;My name is Afaq Awan 👨‍💻 a freelancer
              </span> */}
              <div className="profile-shadow">
                <img
                  src={ProfileImg}
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
                  Mobile App Developer
                </h2>
                <p class="top-intro">
                  Flutter & Android Mobile App Developer with expertise in Dart,
                  Java, and Kotlin, specializing in scalable, high-performance
                  mobile applications, Clean Architecture, and modern state
                  management.
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
