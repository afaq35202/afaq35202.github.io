const Services = ({ myServicesRef }) => {
  return (
    <div
      ref={myServicesRef}
      class="tmp-service-area tmp-section-gapBottom"
      id="service"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-head mb--50">
              <div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span class="subtitle theme-gradient">What I Do</span>
              </div>
              <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                What I Provide For You
              </h2>
            </div>
          </div>
        </div>
        <div class="about-us-section-card row g-5 animation-action-2">
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
            //     style="
            //   will-change: transform;
            //   transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            // "
          >
            <div
              class="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-4 tmp-control"
              // style="--x: 153px; --y: 11px"
            >
              <div class="card-head">
                <div class="logo-img">
                  <i class="fa-solid fa-code"></i>
                </div>
                <h3 class="card-title">Ui/Ux Design</h3>
              </div>
              <p class="card-para">
                Each one showcases my approach and dedication to detail,
                creativity Each one showcases my approach and dedication to
                detail, creativity.
              </p>
              <div class="tmp-light light-center"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
            <div
              class="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-5"
              // style="--x: 193px; --y: 152px"
            >
              <div class="card-head">
                <div class="logo-img">
                  <i class=" fa-solid fa-paint-brush"></i>
                </div>
                <h3 class="card-title">Web Development</h3>
              </div>
              <p class="card-para">
                Business consulting consul us to a provide expert advice
                businesses Each one showcases my approach and dedication to
                detail, creativity.
              </p>
              <div class="tmp-light light-center"></div>
            </div>
          </div>
          <div
            class="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image"
            //     style="
            //   will-change: transform;
            //   transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
            // "
          >
            <div
              class="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-4 active"
              // style="--x: 339px; --y: -1px"
            >
              <div class="card-head">
                <div class="logo-img">
                  <i class="fa-solid fa-print"></i>
                </div>
                <h3 class="card-title">Business Solutions</h3>
              </div>
              <p class="card-para">
                Business solutions refer to a set of strategies, tools, and
                services designed to help companies improve efficiency,
                productivity, and profitability.
              </p>
              <div class="tmp-light light-center"></div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 col-12 paralax-image">
            <div
              class="about-us-card tmp-scroll-trigger tmponhover single-animation tmp-fade-in animation-order-5"
              // style="--x: 15px; --y: 61px"
            >
              <div class="card-head">
                <div class="logo-img">
                  <i class="fa-solid fa-handshake"></i>
                </div>
                <h3 class="card-title">Profit Partners</h3>
              </div>
              <p class="card-para">
                At Profit Partners, we believe in the power of collaboration to
                maximize revenue, streamline operations, and drive long-term
                business success.
              </p>
              <div class="tmp-light light-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
