import PortfoliImg2 from "../assets/portfoli-img-1.webp";
import PortfoliImg3 from "../assets/portfoli-img-3.webp";
import PortfoliImg4 from "../assets/portfoli-img-4.webp";
import PortfoliImg5 from "../assets/portfoli-img-5.webp";
import Btg from "../assets/btg-bg.svg";
import Btg2 from "../assets/btg-bg-2.svg";
const Projects = ({ myProjectsRef }) => {
  const projectsData = [
    {
      id: 1,
      title: "MP3 Converter - Video to MP3",
      tags: ["React Native", "Audio"],
      image: PortfoliImg2,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=mp3converter.convertvideotomp3.audioconverter",
      AppStoreLink: "",
      descrptions:
        "Are you tired of limited audio formats and restrictions on your favorite music? Do you want to convert mp4 to mp3 and enjoy your songs on the device without issues? MP3 video converter is here, which takes your music editor experience to the highest level and is perfect for video to mp3.MP3 converter is more than just a converter. Video to mp3 works as an audio extractor. MP3 cutter is a complete audio transformation toolkit. It allows users to extract MP3 and convert video and audio formats into others like FLAC, WAV, AAC, and many more.",
    },
    {
      id: 2,
      title: "Sound Surprise Cam",
      tags: ["Photo & Video", "Entertainment"],
      image: PortfoliImg3,
      AppStoreLink:
        "https://apps.apple.com/pk/app/sound-surprise-cam/id6470270945",
      descrptions:
        "Introducing Sounhttps://extramartapps.blogspot.com/2023/10/privacy-policy.htmld Surprise Cam – the ultimate companion for your video adventures! Capture hilarious moments with your friends as you record videos and add surprise sounds like laughter, airhorns, and more. Elevate the fun quotient and watch your friends' reactions as your videos come to life with unexpected twists. It's the perfect tool for injecting laughter into your memories. Download Sound Surprise Cam now and turn ordinary videos into extraordinary, side-splitting experiences!",
    },
    {
      id: 3,
      title: "Zoombooks - Expense Tracker",
      tags: ["Finance", "Productivity"],
      image: PortfoliImg4,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=co.technolyte.zoombooks&hl=en&gl=US",
      AppStoreLink: "https://apps.apple.com/pk/app/zoombooks/id1602817407",
      descrptions:
        "Zoombooks app is built by accountants for self-employed, sole proprietors and small business owners. It makes expense organizing and bookkeeping simple and easy. Just take photos of the receipts and submit, that's all. Zoombooks receipt scanner will record the receipt, categorize the expense and provide useful income and expense reports.- Save taxes and avoid tax audit by not losing any more receipts.- Track and manage your business expenses better.- and the app is FREE.",
    },

    {
      id: 5,
      title: "Tour Guide",
      tags: ["Travel", "Services", "Community"],
      image: PortfoliImg5,
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.technolyte.tourguide&hl=en&gl=US",
      AppStoreLink:
        "https://apps.apple.com/pk/app/tour-guide-pakistan/id1631533463",

      descrptions: `
TourGuide is a complete travel companion app designed to help you explore destinations beyond ordinary tourist spots. Whether you want to meet locals, discover hidden places, learn new cultures, or plan your trip efficiently — TourGuide brings everything into one platform.

Key Features:

• Tour Guide Services  
  Find or book local tour guides, or register yourself as one.

• Vehicle Booking  
  Book vehicles with drivers to enjoy a safe and comfortable journey.

• Room & Accommodation  
  Users can list rooms or book places to stay.

• Local Business Marketplace  
  Buy and sell local products with location-based search.

• Short Training Videos  
  Learn travel tips and safety guidelines through short videos.

• Community Section  
  Ask questions, share experiences, and interact with other travelers.

• Blog Articles  
  Stay informed through travel-related blogs and guides.

• Searchable Travel Advisory  
  Search any city in Pakistan for weather updates and advisory details.

• Training  
  Access helpful training content for travelers.

• Travel Advisory  
  Explore cities and get updated information instantly.

• About Pakistan  
  Learn about all provinces with historical and cultural insights.

• FAQ  
  A complete FAQ section to guide users about the app services.

TourGuide helps travelers plan, book, explore, and connect — making every trip memorable through smart features and local insights.
`,
    },
  ];
  return (
    <section
      ref={myProjectsRef}
      class="latest-portfolio-area custom-column-grid tmp-section-gap"
      id="portfolio"
    >
      <div class="container">
        <div class="section-head mb--60">
          <div class="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1    ">
            <span class="subtitle theme-gradient">Latest Projects</span>
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
                {/* <div class="col-lg-6 col-md-6 paralax-image">
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
                </div> */}
                {projectsData.map((project) => (
                  <div class="col-lg-6 col-md-6 paralax-image">
                    <div class="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2    ">
                      <div class="portfoli-card-img">
                        <div
                          style={{
                            backgroundColor: "#f5f5f5",
                          }}
                          class="img-box v2"
                        >
                          <a
                            class="tmp-scroll-trigger tmp-zoom-in animation-order-1    "
                            href=""
                          >
                            <img
                              class="w-100"
                              src={project?.image}
                              alt="Thumbnail"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="portfolio-card-content-wrap">
                        <div class="content-left">
                          <h3 class="portfolio-card-title">
                            <a href="">{project?.title}</a>
                          </h3>
                          <div class="tag-items">
                            <ul>
                              {project?.tags.map((tag, index) => (
                                <li key={index}>
                                  <a class="tag-item">{tag}</a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="store-buttons">
                          {project?.playStoreLink && (
                            <a
                              onClick={() => window.open(project.playStoreLink)}
                              class="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div class="icon-reverse-wrapper">
                                <span class="btn-text">Google Play</span>
                                <div class="btn-hack"></div>
                                <img src={Btg} alt="" class="btn-bg" />
                                <img src={Btg2} alt="" class="btn-bg-hover" />
                                <span class="btn-icon">
                                  <i class="fa-brands fa-google-play"></i>
                                </span>
                                <span class="btn-icon">
                                  <i class="fa-brands fa-google-play"></i>
                                </span>
                              </div>
                            </a>
                          )}

                          {project?.AppStoreLink && (
                            <a
                              onClick={() => window.open(project.AppStoreLink)}
                              class="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md"
                            >
                              <div class="icon-reverse-wrapper">
                                <span class="btn-text">App Store</span>
                                <div class="btn-hack"></div>
                                <img src={Btg} alt="" class="btn-bg" />
                                <img src={Btg2} alt="" class="btn-bg-hover" />
                                <span class="btn-icon">
                                  <i class="fa-brands fa-apple"></i>
                                </span>
                                <span class="btn-icon">
                                  <i class="fa-brands fa-apple"></i>
                                </span>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                      <div class="tmp-light light-center"></div>
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
