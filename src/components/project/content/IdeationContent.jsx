export default function IdeationContent() {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800">
      <p className="section-heading">Overview</p>
      <p className="prose">
        This project unfolds in two acts. The first is a research investigation into why fast
        fashion&apos;s environmental damage stays hidden — not by accident, but by design. The
        second is a product response: a fashion transparency app that translates complex
        supply-chain data into something a real person can understand, trust, and act on.
      </p>

      <div className="callout">
        <p>
          &quot;The fashion industry hides its true impact behind supply-chain opacity and
          greenwashing, leaving consumers with only a shallow and misleading understanding of
          sustainability.&quot;
        </p>
      </div>

      <h2 className="block-heading">Part 1 — The Hidden System</h2>
      <p className="prose">
        Fast fashion operates through a long, fragmented global supply chain that most consumers
        never see. A single garment might be designed in one country, cut in another, assembled in
        a third, and shipped via a fourth — with environmental and labor costs distributed across
        all of them. <strong>This invisibility is structural, not incidental.</strong>
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p1.jpg"
        alt="Fast Fashion vs Slow Fashion — intro spread"
      />

      <p className="prose">
        The research identified three core problems driving this opacity:{' '}
        <strong>systemic opacity</strong> in the supply chain itself,{' '}
        <strong>misleading narratives</strong> that repackage pollution as &quot;eco-friendly&quot;
        aesthetics, and a fundamental <strong>lack of verifiable information</strong> that
        prevents consumers from making informed choices — even when they want to.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p2.jpg"
        alt="Core Problems — systemic opacity, misleading narratives, lack of verifiability"
      />

      <p className="prose">
        The environmental toll is measurable and severe. The fashion industry consumes 79 trillion
        liters of water per year. Synthetic garments release 500,000 metric tons of microplastics
        into the ocean annually. 69% of global textile fibers are synthetic petroleum-based
        polymers. And the industry&apos;s &quot;Fast Fashion Logic&quot; — ultra-short shelf
        cycles, low margins, high volume — structurally incentivizes disposability over durability.
      </p>

      <div className="img-grid cols-2">
        <div>
          <img
            src="/assets/ideation/ideation_p3.jpg"
            alt="Fast Fashion's Hidden Cost — Shein, Zara production model analysis"
          />
        </div>
        <div>
          <img
            src="/assets/ideation/ideation_p4.jpg"
            alt="Environmental Impact — water use, chemical pollution, microplastics, synthetic fibers"
          />
        </div>
      </div>
      <p className="img-caption">
        Left: Fast fashion&apos;s business logic — ultra-short cycles, low margin, high return
        rates. Right: Environmental cost breakdown across water, chemicals, microplastics, and
        synthetic fibers.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p5.jpg"
        alt="Transparency and Supply Chain Structure — data gaps at every stage"
      />
      <p className="img-caption">
        Transparency mapping: data gaps exist at all stages of the supply chain. Consumers rely on
        surface-level claims.
      </p>

      <h2 className="block-heading">Part 2 — Designing for Transparency</h2>
      <p className="prose">
        Knowing the problem isn&apos;t enough. Part 2 asks: what would it look like if this
        information were actually designed for people? The research moved from desk research into
        field work — interviews, card sorting, and competitive analysis of existing sustainable
        brands — to understand what transparency actually means to users.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p8.jpg"
        alt="Primary research — synthetic factory visit, card sorting, research summary"
      />
      <p className="img-caption">
        Primary research included a visit to a synthetic fashion factory, card sorting sessions (13
        participants, 25 cards) to surface what transparency features users value most, and
        semi-structured interviews.
      </p>

      <p className="prose">
        The card sorting study revealed that users consistently ranked{' '}
        <strong>real-time production tracking</strong> and{' '}
        <strong>material origin with environmental impact data</strong> as the most important
        transparency features — far above brand certifications or sustainability scores. The
        insight: consumers don&apos;t lack interest in transparency, they lack access to it in
        plain language.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p12.jpg"
        alt="Secondary research — brand analysis: VEJA, Patagonia, Goldfriend Collection"
      />
      <p className="img-caption">
        Competitive analysis of VEJA, Patagonia, Goldfriend Collection, and People Tree — mapping
        how existing brands communicate (or obscure) their sustainability claims.
      </p>

      <h2 className="block-heading">Problem → Solution Mapping</h2>
      <p className="prose">
        Each identified problem was mapped directly to a product feature, ensuring the design
        didn&apos;t add complexity — it removed it.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p16.jpg"
        alt="Problem to Solution mapping + app workflow diagram"
      />
      <p className="img-caption">
        Every module in the UI addresses a specific barrier users face — transforming transparency
        from confusing information into clear, verifiable, and actionable guidance.
      </p>

      <h2 className="block-heading">From Wireframe to High Fidelity</h2>
      <p className="prose">
        The design system moved from lo-fi wireframes through mid-fidelity testing to a fully
        resolved high-fidelity prototype. The workflow includes five core modules: a Transparency
        Overview with supply chain map, a Unified Transparency Layer, Digital Product Passport with
        artisan matching, 3D Preview &amp; Customization, and Circular Tracking (resell, rental,
        end-of-life).
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p17.jpg"
        alt="Wireframe to high-fidelity transition — full app user flow mapped"
      />

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p19.jpg"
        alt="High-fidelity screens: Landing, Navigation, Customization, Artisan Matching, Order Tracking, Supply Chain Detail"
      />
      <p className="img-caption">
        Final high-fidelity screens. The interface uses plain language, visual explanation, and
        structured data — making supply chain information legible to anyone, not just experts.
      </p>

      <h2 className="block-heading">Reflection</h2>
      <p className="prose">
        This project began as research and became a design argument: that transparency is not a
        marketing feature but an infrastructural one. The app doesn&apos;t ask users to trust brand
        claims — it replaces claims with data. The final screen set validates that even highly
        complex information (production provenance, material chemistry, carbon footprint) can be
        made understandable when the design prioritizes comprehension over compliance.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/ideation/ideation_p20.jpg"
        alt="Speculative Future — clothing as a dynamic interface connecting bodies, environments, and hidden systems"
      />
      <p className="img-caption">
        Speculative coda: through both projects, clothing began to feel less like a consumer product
        and more like a dynamic interface. What might textiles become when they are no longer
        designed only for humans?
      </p>

      <div className="tag-row">
        <span className="tag">UX Research</span>
        <span className="tag">Systems Thinking</span>
        <span className="tag">Card Sorting</span>
        <span className="tag">User Interviews</span>
        <span className="tag">Wireframing</span>
        <span className="tag">Figma</span>
        <span className="tag">Fashion Systems</span>
        <span className="tag">Sustainability</span>
      </div>
    </div>
  );
}
