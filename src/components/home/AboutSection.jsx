import DecayCard from './DecayCard';

export default function AboutSection() {
  return (
    <section id="about">
      <p className="section-label" data-aos="fade-up" data-aos-duration="600">
        About
      </p>
      <div className="about-grid">
        <div className="about-main">
          <div data-aos="fade-up" data-aos-duration="800">
            <ul className="edu-list">
              <li className="edu-item">
                <div className="edu-head">
                  <p className="edu-school">New York University</p>
                  <p className="edu-loc">New York, United States</p>
                </div>
                <p className="edu-degree">
                  Master of Science in Integrated Design and Media · 2025 – 2027 (Expected)
                </p>
                <p className="edu-modules">
                  Ideation &amp; Prototyping · Sensory Ecology · Creative Coding · Histories,
                  Theories and Practices of Haptics · Wearable Technology · Interactive New Media
                  with TouchDesigner
                </p>
              </li>
              <li className="edu-item">
                <div className="edu-head">
                  <p className="edu-school">Coventry University</p>
                  <p className="edu-loc">Coventry, United Kingdom</p>
                </div>
                <p className="edu-degree">
                  Bachelor of Arts in Fashion and Accessories Design (Joint Program) · 2021 – 2025
                </p>
                <p className="edu-modules">
                  First-Class Honours｜Fashion Design · Integrated Design · Visual Communications ·
                  Introduction to Advertising
                </p>
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
                <p className="edu-modules">
                  Techniques of Fashion Illustration · Apparel Technology · Multimedia Technology and
                  Application · Fashion Photography · Display Design
                </p>
              </li>
            </ul>
          </div>
          <div className="skills-grid" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
            <div className="skill-group">
              <h4>Research</h4>
              <p>User Interviews · Contextual Inquiry · Journey Mapping · Usability Testing</p>
            </div>
            <div className="skill-group">
              <h4>Code</h4>
              <p>P5.js · JavaScript · Arduino · TouchDesigner</p>
            </div>
            <div className="skill-group">
              <h4>Fabrication</h4>
              <p>Apparel Technology · 3D Printing · Laser Cutting · Soldering · Knitting</p>
            </div>
            <div className="skill-group">
              <h4>Design Tools</h4>
              <p>Figma · Adobe Suite · Blender · Arduino IDE</p>
            </div>
          </div>
        </div>

        <aside className="about-aside">
          <div
            className="about-photo-wrap"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="120"
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
          <div className="about-aside-meta" data-aos="fade-up" data-aos-duration="800" data-aos-delay="160">
            <h2 className="about-name">Yue Qin</h2>
            <p className="about-title">Fashion &amp; Accessories Designer · Creative Coder</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
