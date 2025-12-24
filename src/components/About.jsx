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
              {/* <div class="col-lg-6 pr--50 pr_lg--10 pr_md--10 pr_sm--10">
                <div class="about-us-left-content-wrap paralax-image">
                  <div class="about-thumbnail-large-style-two about-us-card tmponhover single-animation active">
                    <img src={reeniMainDemo} alt="about" />
                    <div class="tmp-light light-center"></div>
                  </div>
                </div>
              </div> */}
              <div class="col-lg-12">
                <div class="about-us-right-content-wrap">
                  <div class="section-head text-align-left mb--50">
                    <div class="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span class="subtitle theme-gradient">About Me</span>
                    </div>
                    <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Boost Business Strategic <br />
                      with Mobile Solutions
                    </h2>
                    <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Results-driven Mobile Application Developer with strong
                      expertise in Flutter and Native Android development (Java
                      & Kotlin). I specialize in building high-performance,
                      scalable, and user-centric mobile applications for Android
                      and cross-platform environments. I focus on writing clean,
                      maintainable, and testable code while ensuring smooth user
                      experiences and optimal performance.
                    </p>
                    <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Worked on large-scale production apps, including
                      role-based systems, white-label applications, eCommerce
                      platforms, and Firebase-powered solutions. As a developer,
                      I value code quality, performance optimization, and
                      scalable system design. I collaborate effectively with
                      cross-functional teams and translate business requirements
                      into robust mobile solutions. I am passionate about
                      continuous learning and staying updated with the latest
                      mobile technologies and best practices.
                    </p>
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
