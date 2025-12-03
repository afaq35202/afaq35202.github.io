import PortfoliImg2 from "../assets/portfoli-img-1.jpg";
import PortfoliImg3 from "../assets/portfoli-img-3.jpg";
import Btg from "../assets/btg-bg.svg";
import Btg2 from "../assets/btg-bg-2.svg";
const Projects = ({ myProjectsRef }) => {
  return (
    <section
      ref={myProjectsRef}
      class="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div class="container">
        <div class="section-head mb--60">
          <div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1    ">
            <span class="subtitle theme-gradient">Latest Portfolio</span>
          </div>
          <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2    ">
            Transforming Ideas into Exceptional
          </h2>
          <p class="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3    ">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div class="latest-portfolio-tabs-area">
          {/* <nav>
                <ul class="nav nav-tabs" id="nav-tab" role="tablist">
                  <li>
                    <button
                      class="nav-link active"
                      id="nav-all-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-all"
                      type="button"
                      role="tab"
                      aria-controls="nav-all"
                      aria-selected="true"
                    >
                      All
                    </button>
                  </li>
                  <li>
                    <button
                      class="nav-link"
                      id="nav-branding-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-branding"
                      type="button"
                      role="tab"
                      aria-controls="nav-branding"
                      aria-selected="false"
                    >
                      Branding
                    </button>
                  </li>
                  <li>
                    <button
                      class="nav-link"
                      id="nav-design-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-design"
                      type="button"
                      role="tab"
                      aria-controls="nav-design"
                      aria-selected="false"
                    >
                      Design
                    </button>
                  </li>
                  <li>
                    <button
                      class="nav-link"
                      id="nav-content-writing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-content-writing"
                      type="button"
                      role="tab"
                      aria-controls="nav-content-writing"
                      aria-selected="false"
                    >
                      Content writing
                    </button>
                  </li>
                  <li>
                    <button
                      class="nav-link"
                      id="nav-marketing-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-marketing"
                      type="button"
                      role="tab"
                      aria-controls="nav-marketing"
                      aria-selected="false"
                    >
                      Marketing
                    </button>
                  </li>
                </ul>
              </nav> */}
          <div class="tab-content bg-blur-style-one" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
              tabindex="0"
            >
              <div class="row animation-action-3">
                <div class="col-lg-6 col-md-6 paralax-image">
                  <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-1     tmp-control">
                    <div class="portfoli-card-img">
                      <div class="img-box v2">
                        <a class="tmp-scroll-trigger">
                          <img
                            class="w-100"
                            src={PortfoliImg2}
                            alt="Thumbnail"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="portfolio-card-content-wrap">
                      <div class="content-left">
                        <h3 class="portfolio-card-title">
                          <a>SAAS website design</a>
                        </h3>
                        <div class="tag-items">
                          <ul>
                            <li>
                              <a href="" class="tag-item">
                                JavaScript
                              </a>
                            </li>
                            <li>
                              <a href="" class="tag-item">
                                Figma
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a
                        class="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                        href=""
                      >
                        <div class="icon-reverse-wrapper">
                          <span class="btn-text">View Details</span>
                          <div class="btn-hack"></div>
                          <img src={Btg} alt="" class="btn-bg" />
                          <img src={Btg2} alt="" class="btn-bg-hover" />
                          <span class="btn-icon">
                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                          </span>
                          <span class="btn-icon">
                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div class="tmp-light light-center"></div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 paralax-image">
                  <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2    ">
                    <div class="portfoli-card-img">
                      <div class="img-box v2">
                        <a
                          class="tmp-scroll-trigger tmp-zoom-in animation-order-1    "
                          href=""
                        >
                          <img
                            class="w-100"
                            src={PortfoliImg3}
                            alt="Thumbnail"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="portfolio-card-content-wrap">
                      <div class="content-left">
                        <h3 class="portfolio-card-title">
                          <a href="">Workout App design</a>
                        </h3>
                        <div class="tag-items">
                          <ul>
                            <li>
                              <a class="tag-item">Adobe</a>
                            </li>
                            <li>
                              <a class="tag-item">Webflow</a>
                            </li>
                            <li>
                              <a class="tag-item">Ai</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <a
                        class="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                        href=""
                      >
                        <div class="icon-reverse-wrapper">
                          <span class="btn-text">View Details</span>
                          <div class="btn-hack"></div>
                          <img src={Btg} alt="" class="btn-bg" />
                          <img src={Btg2} alt="" class="btn-bg-hover" />
                          <span class="btn-icon">
                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                          </span>
                          <span class="btn-icon">
                            <i class="fa-sharp fa-solid fa-arrow-right"></i>
                          </span>
                        </div>
                      </a>
                    </div>
                    <div class="tmp-light light-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
