import '../../../styles/project-wearable.css';

export default function WearableContent() {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800">

      <p className="section-heading">Research-Informed Design</p>
      <h2 className="block-heading" style={{ marginTop: 0 }}>Beyond Tracking: Designing Wearables for Emotional Wellbeing</h2>
      <p className="prose">
        Most wearable technologies today are designed to monitor the body. They continuously collect physiological signals such as heart rate, sleep quality, and activity levels, helping users understand their physical state. While these systems have become increasingly accurate, they primarily focus on measurement, notification, and performance optimisation, with comparatively little attention given to how wearable technologies might actively support everyday emotional regulation.
      </p>
      <p className="prose">
        Soothe Sleeve began with a different observation. During moments of stress, uncertainty, or cognitive overload, many people instinctively rub their sleeves, squeeze fabric, or hold onto soft objects. Rather than treating these behaviours as unconscious habits, this project explores whether wearable technology can quietly support these existing self-soothing behaviours instead of introducing entirely new interactions.
      </p>

      <h2 className="block-heading">Observation &amp; Insight</h2>
      <p className="prose">
        The project began with a personal observation: people, including myself, unconsciously rely on small tactile habits — like touching sleeves or soft fabrics — to cope with stress and anxiety. These repetitive touch behaviors function as a form of <strong>embodied emotional regulation</strong>, even without conscious awareness.
      </p>
      <p className="prose">
        The design question followed directly: <strong>How can wearable technology support self-soothing through touch, rather than interrupting it with notifications?</strong> The answer: build a garment that responds when you touch it — turning a habitual gesture into a designed system of care.
      </p>

      <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/wearable/wearable_p2.jpg" alt="Observation, insight, and design opportunity — Touch as Emotional Interface" />
      <p className="img-caption">Design opportunity mapping: the intersection of &quot;What if touch could respond back?&quot; and &quot;What if touch could become a meaningful interface?&quot; — Touch as Emotional Interface.</p>

      <h2 className="block-heading">Research Foundation</h2>

      {/* 01 */}
      <div className="research-item">
        <h3 className="research-num"><span className="rnum">01</span> Self-touch is a natural form of emotional regulation</h3>
        <p className="prose">
          Psychological research suggests that spontaneous self-touch is an important strategy for regulating emotions. Rather than being meaningless repetitive behaviour, self-touch has been associated with reduced physiological stress, increased feelings of safety, and restoration of emotional balance after stressful experiences.
        </p>
        <p className="rlabel">Research Findings</p>
        <ul className="rlist">
          <li>Self-touch reduces physiological stress responses.</li>
          <li>Repetitive tactile behaviours naturally support emotional regulation.</li>
          <li>Touch increases perceived comfort and emotional security.</li>
        </ul>
        <p className="rlabel">Design Decision</p>
        <p className="rdecision">Rather than replacing self-soothing behaviours with new interactions, Soothe Sleeve builds upon tactile habits users already perform unconsciously.</p>
        <p className="rlabel">Supporting Literature</p>
        <div className="rlit">
          <p className="rlit-item"><span className="rlit-author">Field, T. (2010).</span> <span className="rlit-title">Touch for Socioemotional and Physical Well-being: A Review.</span> <a href="https://doi.org/10.1016/j.dr.2011.01.001" target="_blank" rel="noopener">https://doi.org/10.1016/j.dr.2011.01.001</a></p>
          <p className="rlit-item"><span className="rlit-author">Morrison, I. (2016).</span> <span className="rlit-title">Keep Calm and Cuddle On: Social Touch as a Stress Buffer.</span> <a href="https://doi.org/10.1007/s40750-016-0052-x" target="_blank" rel="noopener">https://doi.org/10.1007/s40750-016-0052-x</a></p>
        </div>
      </div>

      {/* 02 */}
      <div className="research-item">
        <h3 className="research-num"><span className="rnum">02</span> Pleasant touch is processed differently by the human body</h3>
        <p className="prose">
          Research in affective neuroscience has identified specialised C-tactile afferents, nerve fibres that respond specifically to slow, gentle touch. Activation of these pathways is associated with comfort, social bonding, parasympathetic regulation, and emotional wellbeing. Unlike visual or auditory feedback, touch directly shapes how emotions are experienced.
        </p>
        <p className="rlabel">Research Findings</p>
        <ul className="rlist">
          <li>Pleasant touch activates dedicated affective sensory pathways.</li>
          <li>Gentle tactile stimulation promotes emotional wellbeing.</li>
          <li>Touch contributes to parasympathetic regulation and stress recovery.</li>
        </ul>
        <p className="rlabel">Design Decision</p>
        <p className="rdecision">Instead of relying on screens or visual notifications, Soothe Sleeve communicates through soft textile materials and subtle haptic feedback.</p>
        <p className="rlabel">Supporting Literature</p>
        <div className="rlit">
          <p className="rlit-item"><span className="rlit-author">McGlone, F., Wessberg, J., &amp; Olausson, H. (2014).</span> <span className="rlit-title">Discriminative and Affective Touch: Sensing and Feeling.</span><br />
            <a href="https://doi.org/10.1016/j.neuron.2014.05.001" target="_blank" rel="noopener">DOI</a> ·
            <a href="https://pubmed.ncbi.nlm.nih.gov/24853935/" target="_blank" rel="noopener">PubMed</a> ·
            <a href="https://www.sciencedirect.com/science/article/pii/S0896627314003870" target="_blank" rel="noopener">ScienceDirect</a></p>
        </div>
      </div>

      {/* 03 */}
      <div className="research-item">
        <h3 className="research-num"><span className="rnum">03</span> Interaction emerges through the body</h3>
        <p className="prose">
          Research in Embodied Interaction argues that interaction is fundamentally shaped by bodily movement and physical engagement rather than screen-based interfaces alone. Similarly, Soma Design proposes that technology should deepen bodily awareness instead of competing for users&apos; attention. These perspectives suggest that meaningful interaction can emerge from existing bodily habits rather than newly learned gestures.
        </p>
        <p className="rlabel">Research Findings</p>
        <ul className="rlist">
          <li>Interaction is grounded in bodily experience.</li>
          <li>Everyday bodily habits provide meaningful interaction opportunities.</li>
          <li>Technology can enhance body awareness rather than distract from it.</li>
        </ul>
        <p className="rlabel">Design Decision</p>
        <p className="rdecision">Instead of asking users to learn new gestures, Soothe Sleeve integrates with familiar tactile behaviours that already occur naturally in everyday life.</p>
        <p className="rlabel">Supporting Literature</p>
        <div className="rlit">
          <p className="rlit-item"><span className="rlit-author">Dourish, P. (2001).</span> <span className="rlit-title">Where the Action Is: The Foundations of Embodied Interaction.</span> MIT Press.<br />
            <a href="https://mitpress.mit.edu/9780262541787/where-the-action-is/" target="_blank" rel="noopener">MIT Press</a> ·
            <a href="https://direct.mit.edu/books/monograph/3875/Where-the-Action-IsThe-Foundations-of-Embodied" target="_blank" rel="noopener">Alternative</a></p>
          <p className="rlit-item"><span className="rlit-author">Höök, K. (2018).</span> <span className="rlit-title">Designing with the Body: Somaesthetic Interaction Design.</span> MIT Press.<br />
            <a href="https://mitpress.mit.edu/9780262038560/designing-with-the-body/" target="_blank" rel="noopener">MIT Press</a> ·
            <a href="https://direct.mit.edu/books/monograph/4131/Designing-with-the-BodySomaesthetic-Interaction" target="_blank" rel="noopener">Alternative</a></p>
        </div>
      </div>

      {/* 04 */}
      <div className="research-item">
        <h3 className="research-num"><span className="rnum">04</span> Emotional wellbeing is becoming a global design challenge</h3>
        <p className="prose">
          According to the World Health Organization, approximately 301 million people worldwide live with anxiety disorders, making anxiety one of the most prevalent mental health conditions globally. Beyond clinical diagnoses, everyday stress affects a much broader population, highlighting the need for technologies that support emotional wellbeing in daily life.
        </p>
        <p className="rlabel">Research Findings</p>
        <ul className="rlist">
          <li>301 million people worldwide live with anxiety disorders.</li>
          <li>Anxiety disorders are among the most prevalent mental health conditions globally.</li>
          <li>Emotional wellbeing requires preventive as well as clinical support.</li>
        </ul>
        <p className="rlabel">Design Decision</p>
        <p className="rdecision">Rather than positioning Soothe Sleeve as a medical device, the project focuses on supporting everyday emotional wellbeing through subtle and non-disruptive interaction.</p>
        <p className="rlabel">Supporting Literature</p>
        <div className="rlit">
          <p className="rlit-item"><span className="rlit-author">World Health Organization (2023).</span> <span className="rlit-title">Mental Disorders.</span> <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener">https://www.who.int/news-room/fact-sheets/detail/mental-disorders</a></p>
        </div>
      </div>

      <h2 className="block-heading">Market Landscape</h2>
      <p className="prose">
        Positioning Soothe Sleeve against existing wearables clarifies the gap it addresses: most products optimise for tracking and performance, leaving emotional, touch-based wellbeing largely unaddressed.
      </p>
      <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/wearable/Market Landscape.png" alt="Market landscape — mapping wearables by tracking vs. emotional support" loading="lazy" />
      <p className="img-caption">Market landscape: mapping existing wearables across tracking-oriented and emotion-oriented design — Soothe Sleeve occupies the underserved space of touch-based emotional wellbeing.</p>

      <h2 className="block-heading">The Device</h2>
      <p className="prose">
        The sleeve is designed to be worn on the inner forearm — the area richest in C-tactile afferents, with strong connections to the insular cortex, making it ideal for affective touch and emotional resonance. The primary placement is intentional: this is where the body is most attuned to gentle, meaningful contact.
      </p>

      <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/wearable/wearable_p3.jpg" alt="System diagram: wearing area, interaction flow (Press → Detect → Process → Haptic Output), front view, prototype sketch" />
      <p className="img-caption">System flow: user interaction → pressure sensor captures → system interprets → haptic output via textile feedback. The inner forearm placement is chosen for its density of C-tactile afferents — nerve fibers specialized for gentle, affective touch.</p>

      <h2 className="block-heading">Why Vibration</h2>
      <p className="prose">
        Texture creates passive comfort; vibration adds active response. Familiar fabrics — knitted weaves, blankets, soft clothing — create emotional grounding through recognition. The sleeve combines both: <strong>interchangeable textile patches</strong> (chosen by the user for personal comfort) with <strong>responsive vibration</strong> (triggered by detected touch pressure).
      </p>
      <p className="prose">
        Vibration adds rhythm, response, and reassurance. A slow pulse can feel like gentle comfort, while repeated patterns can interrupt anxious thought loops and support self-soothing. <strong>Instead of replacing the textile, technology extends it.</strong>
      </p>

      <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/wearable/wearable_p4.jpg" alt="Device detail — textile patches, vibration motor, Arduino Nano 33 IoT, pressure sensor layout, circuit diagram, Arduino coding" />
      <p className="img-caption">Hardware: vibration motor (haptic feedback, different rhythms and intensities), Arduino Nano 33 IoT (input/output processing, lightweight for all-day wear), rechargeable battery. Four modular textile patches: Calm (slow pulse), Ground (heartbeat), Ritual (steady rhythm), Root (strong pulse).</p>

      <h2 className="block-heading">Prototype</h2>
      <p className="prose">
        The physical prototype combines fabric pattern cutting, soldered sensor arrays, and custom Arduino code into a wearable that responds in real time to touch pressure. The modular textile patch system allows users to swap textures — each triggering a different vibration profile. Multiple prototype iterations refined both the ergonomic fit and the vibration timing curves.
      </p>

      <img className="img-full" data-aos="fade-up" data-aos-duration="800" src="/assets/wearable/wearable_p5.png" alt="Physical prototype photographs — electronics, assembled sleeve front, worn on wrist, hand interaction" />
      <p className="img-caption">Final prototype: the sleeve on the inner forearm, showing the modular patch placement and the pressure-sensing gesture interaction. Touch becomes both input and experience.</p>

      <h2 className="block-heading">Reflection</h2>
      <p className="prose">
        Soothe Sleeve was not only a wearable prototype, but also the starting point of my research interest in embodied AI interaction. It raised questions that extend beyond this project: how technology can become emotionally supportive through touch, how bodily signals can be translated into adaptive multisensory feedback, and how wearable systems can cultivate long-term relationships with users rather than momentary interactions. These questions continue to guide my current research direction.
      </p>

      <div className="references-block">
        <p className="section-heading">References</p>
        <ul className="references-list">
          <li>Dourish, P. (2001). Where the action is: The foundations of embodied interaction. MIT Press.</li>
          <li>Field, T. (2010). Touch for socioemotional and physical well-being: A review. <em>Developmental Review, 30</em>(4), 367–383. <a href="https://doi.org/10.1016/j.dr.2011.01.001" target="_blank" rel="noopener">https://doi.org/10.1016/j.dr.2011.01.001</a></li>
          <li>Höök, K. (2018). Designing with the body: Somaesthetic interaction design. MIT Press.</li>
          <li>McGlone, F., Wessberg, J., &amp; Olausson, H. (2014). Discriminative and affective touch: Sensing and feeling. <em>Neuron, 82</em>(4), 737–755. <a href="https://doi.org/10.1016/j.neuron.2014.05.001" target="_blank" rel="noopener">https://doi.org/10.1016/j.neuron.2014.05.001</a></li>
          <li>Morrison, I. (2016). Keep calm and cuddle on: Social touch as a stress buffer. <em>Adaptive Human Behavior and Physiology, 2</em>(4), 344–362. <a href="https://doi.org/10.1007/s40750-016-0052-x" target="_blank" rel="noopener">https://doi.org/10.1007/s40750-016-0052-x</a></li>
          <li>World Health Organization. (2023). Mental disorders. <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" target="_blank" rel="noopener">https://www.who.int/news-room/fact-sheets/detail/mental-disorders</a></li>
        </ul>
      </div>

      <div className="tag-row">
        <span className="tag">Wearable Design</span>
        <span className="tag">Physical Computing</span>
        <span className="tag">Arduino</span>
        <span className="tag">Haptic Feedback</span>
        <span className="tag">Pressure Sensors</span>
        <span className="tag">Pattern Cutting</span>
        <span className="tag">Anxiety Design</span>
        <span className="tag">Embodied Interaction</span>
      </div>

    </div>
  );
}
