import DecayCard from './DecayCard';
import AboutExperience from './AboutExperience';
import AboutSkills from './AboutSkills';

export default function AboutSection() {
  return (
    <section id="about">
      <p className="section-label" data-aos="fade-up" data-aos-duration="600">
        About
      </p>
      <div className="about-grid">
        <div className="about-main">
          <div data-aos="fade-up" data-aos-duration="800">
            <p className="about-edu-label">Education</p>
            <ul className="edu-list">
              <li className="edu-item">
                <div className="edu-head">
                  <p className="edu-school">New York University</p>
                  <p className="edu-loc">New York, United States</p>
                </div>
                <p className="edu-degree">
                  Master of Science in Integrated Design and Media · 2025 – 2027 (Expected)
                </p>
              </li>
              <li className="edu-item">
                <div className="edu-head">
                  <p className="edu-school">Coventry University</p>
                  <p className="edu-loc">Coventry, United Kingdom</p>
                </div>
                <div className="edu-degree-row">
                  <p className="edu-degree">
                    Bachelor of Arts in Fashion and Accessories Design (Joint Program) · 2021 – 2025
                  </p>
                  <p className="edu-honour">First-Class Honours</p>
                </div>
              </li>
              <li className="edu-item">
                <div className="edu-head">
                  <p className="edu-school">Communication University of Zhejiang</p>
                  <p className="edu-loc">Hangzhou, China</p>
                </div>
                <p className="edu-degree">
                  Bachelor of Arts in Fashion and Accessories Design (Joint Program) · 2021 – 2025
                </p>
                <p className="edu-detail">
                  Outstanding Graduate · Zhejiang Provincial Government Scholarship
                </p>
              </li>
            </ul>

            <div className="about-exp-block" data-aos="fade-up" data-aos-duration="800" data-aos-delay="120">
              <AboutExperience />
            </div>
          </div>
        </div>

        <aside className="about-aside">
          <div
            className="about-photo-wrap"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="80"
          >
            <DecayCard
              className="about-photo-decay"
              image="/assets/Photo.jpg"
              alt="Yue Qin"
              edgeOnly
              maxDisplacement={280}
              movementBound={28}
              edgeInset={0.028}
              edgeFeather={12}
            />
          </div>
          <div className="about-aside-meta" data-aos="fade-up" data-aos-duration="800" data-aos-delay="120">
            <h2 className="about-name">Yue Qin</h2>
            <p className="about-title">Fashion &amp; Accessories Designer · Creative Coder</p>
          </div>
          <div className="about-aside-skills" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
            <AboutSkills />
          </div>
        </aside>
      </div>
    </section>
  );
}
