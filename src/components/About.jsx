import reeniMainDemo from "../assets/profile.png";
import BusinessImg from "../assets/logo-1.svg";
import PartnerImg from "../assets/logo-2.svg";
import Btg from "../assets/btg-bg.svg";
import Btg2 from "../assets/btg-bg-2.svg";
const About = ({ myAboutRef }) => {
  return (
    <section
      ref={myAboutRef}
      class="about-us-area tmp-section-gapBottom"
      id="about"
    >
      <div class="container">
        <section class="about-us-area">
          <div class="container">
            <div class="row align-items-center animation-action-3">
              <div class="col-lg-6 pr--50 pr_lg--10 pr_md--10 pr_sm--10">
                <div class="about-us-left-content-wrap paralax-image">
                  <div class="about-thumbnail-large-style-two about-us-card tmponhover single-animation active">
                    <img src={reeniMainDemo} alt="about" />
                    <div class="tmp-light light-center"></div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="about-us-right-content-wrap">
                  <div class="section-head text-align-left mb--50">
                    <div class="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span class="subtitle theme-gradient">About Me</span>
                    </div>
                    <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Boost Business Strategic <br />
                      Solutions with Us
                    </h2>
                    <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Business consulting consultants provide expert advice and
                      guida businesses to help them improve their performance,
                      efficiency, and organizational
                    </p>
                  </div>
                  <div class="about-us-section-card row g-5">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                        <div class="card-head with-flex">
                          <div class="logo-img">
                            <img src={BusinessImg} alt="logo" />
                          </div>
                          <h3 class="card-title">Business</h3>
                        </div>
                        <p class="card-para">Each one showcases my approach</p>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                        <div class="card-head with-flex">
                          <div class="logo-img">
                            <img src={PartnerImg} alt="logo" />
                          </div>
                          <h3 class="card-title">Partners</h3>
                        </div>
                        <p class="card-para">
                          Business consulting consul us to a provide
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6 ">
                    <a
                      class="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon"
                      href=""
                    >
                      <div class="icon-reverse-wrapper">
                        <span class="btn-text">Read More About Me</span>
                        <div class="btn-hack"></div>
                        <img src={Btg} alt="" class="btn-bg" />
                        <img src={Btg2} alt="" class="btn-bg-hover" />
                        <span class="btn-icon">
                          <i class="fa-solid fa-arrow-down"></i>
                        </span>
                        <span class="btn-icon">
                          <i class="fa-solid fa-arrow-down"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default About;
