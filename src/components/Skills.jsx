const Skkills = ({ mySkillRef }) => {
  const skillsData = [
    {
      icon: "fa-mobile-screen-button",
      title: "Mobile Development",
      description:
        "Flutter, Dart, Java, Kotlin, XML, and Jetpack Compose for building fast and scalable mobile applications.",
    },
    {
      icon: "fa-sitemap",
      title: "App Release & Distribution",
      description:
        "Skilled in deploying, updating, and maintaining Android and iOS applications across official app distribution platforms.",
    },
    {
      icon: "fa-tools",
      title: "Tools & Platforms",
      description:
        "Expertise in OOP, Data Structures, Databases, and Operating Systems, capable of working efficiently across all major platforms including Windows, macOS, and Linux.",
    },
    {
      icon: "fa-lightbulb",
      title: "Soft Skills",
      description:
        "Excellent communication, teamwork, and problem-solving abilities for delivering quality and collaboration.",
    },
  ];

  return (
    <section
      ref={mySkillRef}
      className="my-skill-area-style-two plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10"
      id="resume"
    >
      <div className="tpm-custom-box-bg position-relative overflow-hidden border--radious-20 custom-margin-lg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-area-left-content-wrap">
                <div className="section-head text-align-left">
                  <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1 ">
                    <span className="subtitle theme-gradient">Skill Set</span>
                  </div>
                  <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ">
                    Technical Skills & Expertise
                  </h2>
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3 ">
                    Specialized in mobile application development with strong
                    expertise in Flutter, Android, and cross-platform
                    technologies. My skill set includes modern programming
                    languages, UI development, backend integration, and
                    essential tools that help me deliver reliable, scalable, and
                    high-quality mobile solutions.
                  </p>
                  <br />
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Passionate about adopting emerging technologies and best
                    practices to optimize performance and enhance user
                    experiences. With strong problem-solving abilities and
                    effective collaboration skills, I create innovative
                    solutions that consistently meet project goals and client
                    expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-card-style-two row">
                {skillsData.map((skill, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-12 paralax-image"
                    key={index}
                  >
                    <div
                      className={`my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="card-icon">
                        {typeof skill.icon === "string" ? (
                          <i className={`fa-solid ${skill.icon}`}></i>
                        ) : (
                          <img src={skill.icon} alt={skill.title} />
                        )}
                      </div>
                      <h3 className="card-title">{skill.title}</h3>
                      <p className="card-para">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="tmp-light light-top-left active"></div>
      </div>
    </section>
  );
};
export default Skkills;
