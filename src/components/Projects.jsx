import mp3Converter from "../assets/mp3Converter.webp";
import Dobby from "../assets/dobbyImg.png";
import PortfoliImg3 from "../assets/portfoli-img-3.webp";
import ZoombookImg from "../assets/ZoombookImg.webp";
import tourguide from "../assets/tourguide.webp";
import Btg from "../assets/btg-bg.svg";
import Btg2 from "../assets/btg-bg-2.svg";
const Projects = ({ myProjectsRef }) => {
  const projectsData = [
    {
      id: 0,
      title:
        "Powering Global Coffee & Vending Brands Through White-Label Mobile Solutions",
      tags: ["Coffee Industry", "Wide Label Mobile Apps"],
      image: Dobby,
      playStoreLink: "",
      AppStoreLink: "",
      url: "https://dobby.io/",
      description:
        "As part of the Dobby team, I contribute to building and scaling white-label mobile applications that power leading coffee and vending brands like  Selecta, Yellowbeard, Yellowrock, Dankoff, Hillewaert, and Hermelin. Dobby delivers a unified, intelligent platform that replaces manual processes and fragmented systems with automation, real-time service tracking, IoT-ready workflows, and seamless technician management—all customized per brand under a single, scalable architecture.",
    },
    {
      id: 1,
      isCustomStyle: true,
      title: "MP3 Converter - Video to MP3",
      tags: ["Android Native", "Editor"],
      image: mp3Converter,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=mp3converter.convertvideotomp3.audioconverter",
      AppStoreLink: "",
      description:
        "In this project used FFMPEG to perform different operations on audio and video.",
    },
    {
      id: 2,
      title: "Sound Surprise Cam",
      tags: ["Sounds & Video", "Entertainment"],
      image: PortfoliImg3,
      AppStoreLink:
        "https://apps.apple.com/pk/app/sound-surprise-cam/id6470270945",
      description:
        "In this app, users can record videos by playing prank sounds to capture the reactions of people.",
    },
    {
      id: 3,
      title: "Zoombooks - Expense Tracker",
      isCustomStyle: true,
      tags: ["Finance", "Productivity"],
      image: ZoombookImg,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=co.technolyte.zoombooks&hl=en&gl=US",
      AppStoreLink: "https://apps.apple.com/pk/app/zoombooks/id1602817407",
      description:
        "This app makes expense organizing and bookkeeping simple and easy. Also receipt scanner will record the receipt, categorize the expense and provide useful income and expense reports.",
    },

    {
      id: 5,
      title: "Tour Guide",
      isCustomStyle: true,
      tags: ["Travel", "Services", "Community"],
      image: tourguide,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.technolyte.tourguide&hl=en&gl=US",
      AppStoreLink:
        "https://apps.apple.com/pk/app/tour-guide-pakistan/id1631533463",

      description:
        "In this app tourists can find local people willing to help them discover the most interesting parts. Also Provide the facility of vehicles Users can book a vehicle.",
    },
  ];
  return (
    <section
      ref={myProjectsRef}
      className="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1    ">
            <span className="subtitle theme-gradient">Latest Projects</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2    ">
            Transforming Ideas into Exceptional
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3    ">
            Business consulting consultants provide expert advice and guida
            businesses to help them improve their performance, efficiency, and
            organizational
          </p>
        </div>
        <div className="latest-portfolio-tabs-area">
          {/* <nav>
                <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                  <li>
                    <button
                      className="nav-link active"
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
                      className="nav-link"
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
                      className="nav-link"
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
                      className="nav-link"
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
                      className="nav-link"
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
          <div className="tab-content bg-blur-style-one" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-all"
              role="tabpanel"
              aria-labelledby="nav-all-tab"
              tabindex="0"
            >
              <div className="row animation-action-3">
                {projectsData.map((project, index) => (
                  <div
                    key={index}
                    className={`paralax-image ${
                      index === 0 ? "col-lg-12 col-md-12" : "col-lg-6 col-md-6"
                    }`}
                  >
                    <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2    ">
                      <div className="portfoli-card-img">
                        <div
                          style={{
                            backgroundColor: "#f5f5f5",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "3rem",
                          }}
                          className="img-box v2"
                        >
                          <a
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1    "
                            href=""
                          >
                            <img
                              style={{
                                height: project?.isCustomStyle
                                  ? "400px"
                                  : "auto",
                                borderRadius: project?.isCustomStyle
                                  ? "8rem"
                                  : "0",
                              }}
                              className="w-100"
                              src={project?.image}
                              alt="Thumbnail"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="content-left portfolio-card-title content-left">
                            <a>{project?.title}</a>
                          </h3>
                          <div className="tag-items">
                            <ul>
                              {project?.tags.map((tag, index) => (
                                <li key={index}>
                                  <a aria-label={tag} className="tag-item">
                                    {tag}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <p className="description content-left">
                          {project?.description}
                        </p>

                        <div className="store-buttons">
                          {project?.playStoreLink && (
                            <a
                              onClick={() => window.open(project.playStoreLink)}
                              className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div className="icon-reverse-wrapper">
                                <span className="btn-text">Google Play</span>
                                <div className="btn-hack"></div>
                                <img src={Btg} alt="" className="btn-bg" />
                                <img
                                  src={Btg2}
                                  alt=""
                                  className="btn-bg-hover"
                                />
                                <span className="btn-icon">
                                  <i className="fa-brands fa-google-play"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-brands fa-google-play"></i>
                                </span>
                              </div>
                            </a>
                          )}

                          {project?.AppStoreLink && (
                            <a
                              onClick={() => window.open(project.AppStoreLink)}
                              className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div className="icon-reverse-wrapper">
                                <span className="btn-text">App Store</span>
                                <div className="btn-hack"></div>
                                <img src={Btg} alt="" className="btn-bg" />
                                <img
                                  src={Btg2}
                                  alt=""
                                  className="btn-bg-hover"
                                />
                                <span className="btn-icon">
                                  <i className="fa-brands fa-apple"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-brands fa-apple"></i>
                                </span>
                              </div>
                            </a>
                          )}
                          {project?.url && (
                            <a
                              onClick={() => window.open(project.url)}
                              className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div className="icon-reverse-wrapper">
                                <span className="btn-text">Website</span>
                                <div className="btn-hack"></div>
                                <img src={Btg} alt="" className="btn-bg" />
                                <img
                                  src={Btg2}
                                  alt=""
                                  className="btn-bg-hover"
                                />
                                <span className="btn-icon">
                                  <i className="fa-solid fa-globe"></i>
                                </span>
                                <span className="btn-icon">
                                  <i className="fa-solid fa-globe"></i>
                                </span>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="tmp-light light-center"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
