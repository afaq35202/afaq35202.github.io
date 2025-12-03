import SkillIcon1 from "../assets/icon-01.png";
import SkillIcon2 from "../assets/icon-02.png";
import SkillIcon3 from "../assets/icon-03.png";
import SkillIcon4 from "../assets/icon-04.png";
const Skkills = ({ mySkillRef }) => {
  return (
    <section
      ref={mySkillRef}
      class="my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--10"
      id="resume"
    >
      <div
        style={{
          margin: "0 130px",
        }}
        class=" tpm-custom-box-bg position-relative overflow-hidden border--radious-20"
      >
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-lg-12 col-md-12">
              <div class="my-skill-area-left-content-wrap">
                <div class="section-head text-align-left">
                  <div class="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1 ">
                    <span class="subtitle theme-gradient">My Skill</span>
                  </div>
                  <h2 class="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2 ">
                    My Experts Areas Where I <br />
                    Gained Skill
                  </h2>
                  <p class="description tmp-scroll-trigger tmp-fade-in animation-order-3 ">
                    Business consulting consultants provide expert advice and
                    guida busi nesses to help them improve their performance,
                    efficiency, and organ izational Business consulting
                    consultants provide
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xxl-6 col-lg-12 col-md-12">
              <div class="my-skill-card-style-two row">
                <div class="col-lg-6 col-md-6 col-12 paralax-image">
                  <div class="my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1   ">
                    <div class="card-icon">
                      <img src={SkillIcon1} alt="my-skill-icon" />
                    </div>
                    <h3 class="card-title">Framer</h3>
                    <p class="card-para">
                      The personal portfol category includes websites or physic
                      Your Journey Your Story
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12 paralax-image">
                  <div class="my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2   ">
                    <div class="card-icon">
                      <img src={SkillIcon2} alt="my-skill-icon" />
                    </div>
                    <h3 class="card-title">Webflow</h3>
                    <p class="card-para">
                      Webflow is a powerful web design and development platform
                      that allows.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12 paralax-image">
                  <div class="my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3   ">
                    <div class="card-icon">
                      <img src={SkillIcon3} alt="my-skill-icon" />
                    </div>
                    <h3 class="card-title">Figma</h3>
                    <p class="card-para">
                      Figma’s standout feature is its ability to enable multiple
                      users to work.
                    </p>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12 paralax-image">
                  <div class="my-skill-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4   ">
                    <div class="card-icon">
                      <img src={SkillIcon4} alt="my-skill-icon" />
                    </div>
                    <h3 class="card-title">Wordpress</h3>
                    <p class="card-para">
                      A WordPress website is a website built using WordPress
                      content management system
                    </p>
                  </div>
                </div>
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
