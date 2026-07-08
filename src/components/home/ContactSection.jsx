export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-wrap">
        <h2 className="contact-heading" data-aos="fade-up" data-aos-duration="1000">
          Let&apos;s work together
        </h2>
        <p className="contact-sub" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          I&apos;m open to internships, collaborations, and research opportunities in interaction
          design, wearable technology, and speculative fashion. Based in New York.
        </p>
        <div className="contact-links" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
          <a href="mailto:yq2664@nyu.edu" className="contact-link primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm2-.5L8 8.5l5-5.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 4.5l7 4.5 7-4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            yq2664@nyu.edu
          </a>
          <a href="tel:+13473974146" className="contact-link">
            +1 347 397 4146
          </a>
        </div>
      </div>
    </section>
  );
}
