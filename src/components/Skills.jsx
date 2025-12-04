import SkillIcon1 from "../assets/icon-01.png";
import SkillIcon2 from "../assets/icon-02.png";
import SkillIcon3 from "../assets/icon-03.png";
import SkillIcon4 from "../assets/icon-04.png";
const Skkills = ({ mySkillRef }) => {
  const skillsData = [
    {
      id: 1,
      icon: SkillIcon1, // replace with your icon
      title: "Mobile Development",
      description:
        "Flutter, Dart, Java, Kotlin, XML, and Jetpack Compose for building fast and scalable mobile applications.",
    },
    {
      id: 2,
      icon: SkillIcon2,
      title: "Programming Skills",
      description:
        "Strong foundation in C++, PHP, SQL, HTML, and CSS with hands-on experience in backend and frontend development.",
    },
    {
      id: 3,
      icon: SkillIcon3,
      title: "Tools & Platforms",
      description:
        "Experienced with Firebase, REST APIs, MS Office, version control, and development tools for smooth workflows.",
    },
    {
      id: 4,
      icon: SkillIcon4,
      title: "Soft Skills",
      description:
        "Excellent communication, teamwork, and problem-solving abilities for delivering quality and collaboration.",
    },
  ];

  return (
    <section
      ref={mySkillRef}
      class="my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10"
      id="resume"
    >
      <div class="tpm-custom-box-bg position-relative overflow-hidden border--radious-20 custom-margin-lg">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-lg-12 col-md-12">
              <div class="my-skill-area-left-content-wrap">
                <div class="section-head text-align-left">
                  <div class="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1 ">
                    <span class="subtitle theme-gradient">My Skill</span>
                  </div>
                  <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ">
                    Technical Skills & Expertise
                  </h2>
                  <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3 ">
                    I specialize in mobile application development with strong
                    expertise in Flutter, Android, and cross-platform
                    technologies. My skill set includes modern programming
                    languages, UI development, backend integration, and
                    essential tools that help me deliver reliable, scalable, and
                    high-quality mobile solutions.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xxl-6 col-lg-12 col-md-12">
              <div className="my-skill-card-style-two row">
                {skillsData.map((skill, index) => (
                  <div
                    className="col-lg-6 col-md-6 col-12 paralax-image"
                    key={skill.id}
                  >
                    <div
                      className={`my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="card-icon">
                        <img src={skill.icon} alt={skill.title} />
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
        <div class="tmp-light light-top-left active"></div>
      </div>
    </section>
  );
};
export default Skkills;
