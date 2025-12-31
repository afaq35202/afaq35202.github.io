const About = ({ myAboutRef }) => {
  return (
    <section
      ref={myAboutRef}
      className="about-us-area tmp-section-gapBottom"
      id="about"
    >
      <div className="container">
        <section className="about-us-area">
          <div className="container">
            <div className="row align-items-center animation-action-3">
              <div className="col-lg-12">
                <div className="about-us-right-content-wrap">
                  <div className="section-head text-align-left mb--50">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle theme-gradient">About Me</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Boost Business Strategic <br />
                      with Mobile Solutions
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Results-driven Mobile Application Developer with strong
                      expertise in Flutter and Native Android development (Java
                      & Kotlin). I specialize in building high-performance,
                      scalable, and user-centric mobile applications for Android
                      and cross-platform environments. I focus on writing clean,
                      maintainable, and testable code while ensuring smooth user
                      experiences and optimal performance.
                    </p>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
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
