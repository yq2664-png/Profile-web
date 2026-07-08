import '../../../styles/project-synthetic.css';

export default function SyntheticContent() {
  return (
    <>
      <div className="td-video-wrap" data-aos="fade-up" data-aos-duration="800">
        <video controls autoPlay muted loop playsInline>
          <source src="/assets/TD/td-final.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="content" data-aos="fade-up" data-aos-duration="800">
        <p className="section-heading">Overview</p>
        <p className="prose">
          Synthetic Ocean explores a speculative future in which the ocean is no longer a purely
          natural environment, but a hybrid ecosystem formed by plastic waste, artificial
          materials, machine intelligence, and human intervention. Through generative visuals in
          TouchDesigner, the project imagines marine life evolving into metallic, synthetic
          organisms, questioning where the boundary between nature and artificiality truly lies.
        </p>
      </div>

      <div className="ref-list" data-aos="fade-up" data-aos-duration="800">
        <p className="section-heading">Reference</p>
        <ul>
          <li>
            <a href="https://youtu.be/oha5NDWbBCY" target="_blank" rel="noopener noreferrer">
              https://youtu.be/oha5NDWbBCY
            </a>
          </li>
          <li>
            <a href="https://youtu.be/KtplxTpYcHQ" target="_blank" rel="noopener noreferrer">
              https://youtu.be/KtplxTpYcHQ
            </a>
          </li>
          <li>
            <a href="https://youtu.be/aiWGenwJe4M" target="_blank" rel="noopener noreferrer">
              https://youtu.be/aiWGenwJe4M
            </a>
          </li>
          <li>
            <a href="https://youtu.be/kcZH2zcHANc" target="_blank" rel="noopener noreferrer">
              https://youtu.be/kcZH2zcHANc
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
