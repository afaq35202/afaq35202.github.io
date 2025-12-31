import LightShade from "../assets/light.svg";
import one from "../assets/01.svg";
import two from "../assets/02.svg";
import three from "../assets/03.svg";
import four from "../assets/04.svg";
import ProfileImg from "../assets/profile.webp";
const About = () => {
  return (
    <div
      className="banner-area-one-main-demo tmp-section-gap shape-move"
      id="home"
    >
      <div
        style={{
          zIndex: 1,
        }}
        className="slider-bg-light"
      >
        <img
          className="blocksync-scroll-trigger fade_in animation-order-8"
          src={LightShade}
          alt="Top Light Shape"
        />
      </div>
      <div className="slider-bg-dot-shape">
        <div
          style={{
            width: "650px",
          }}
          className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16"
        >
          <div className="blocksync-stars"></div>
          <div className="blocksync-stars2"></div>
          <div className="blocksync-stars3"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner-main-demo-inner-content">
              <div className="profile-shadow">
                <img
                  loading="lazy"
                  src={ProfileImg}
                  alt="banner"
                  decoding="async"
                  className="about-us-card tmponhover  active"
                  width="476"
                  height="600"
                />
              </div>

              <div className="absolute-designation shape-image">
                <h2
                  className="up shape"
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
                <p className="top-intro">
                  Flutter & Android Mobile App Developer with expertise in Dart,
                  Java, and Kotlin, specializing in scalable, high-performance
                  mobile applications, Clean Architecture, and modern state
                  management.
                </p>
                {/* <h2
                  className="down shape"
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
      <div className="tmp-banner-circle">
        <img className="tmp-banner-circle-1" src={one} alt="circle-image" />
        <img className="tmp-banner-circle-2" src={two} alt="circle-image" />
        <img className="tmp-banner-circle-3" src={three} alt="circle-image" />
        <img className="tmp-banner-circle-4" src={four} alt="circle-image" />
      </div>
      <div className="separator-animated-border border-top-footer animated-true"></div>
      <div className="slider-bg-light">
        <img
          className="blocksync-scroll-trigger fade_in animation-order-8"
          src="./Home 01 - Virtuo Personal Portfolio HTML Template_files/light.svg"
          alt="Top Light Shape"
        />
      </div>
      <div className="slider-bg-dot-shape">
        <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
          <div className="blocksync-stars"></div>
          <div className="blocksync-stars2"></div>
          <div className="blocksync-stars3"></div>
        </div>
      </div>
    </div>
  );
};
export default About;
