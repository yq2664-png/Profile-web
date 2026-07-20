import {
  ProjectImage,
  ProjectReferences,
  ProjectSection,
  ProjectTags,
} from '../ProjectWriting';
import '../uos-sections.css';
import '../../../styles/project-wearable.css';

const TAGS = [
  'Wearable Computing',
  'Embodied Interaction',
  'Affective Haptics',
];

const REFERENCES = [
  <>Dourish, P. (2001). Where the action is: The foundations of embodied interaction. MIT Press.</>,
  <>
    Field, T. (2010). Touch for socioemotional and physical well-being: A review.{' '}
    <em>Developmental Review, 30</em>(4), 367–383.{' '}
    <a href="https://doi.org/10.1016/j.dr.2011.01.001" target="_blank" rel="noopener">
      https://doi.org/10.1016/j.dr.2011.01.001
    </a>
  </>,
  <>Höök, K. (2018). Designing with the body: Somaesthetic interaction design. MIT Press.</>,
  <>
    McGlone, F., Wessberg, J., &amp; Olausson, H. (2014). Discriminative and affective touch: Sensing
    and feeling. <em>Neuron, 82</em>(4), 737–755.{' '}
    <a href="https://doi.org/10.1016/j.neuron.2014.05.001" target="_blank" rel="noopener">
      https://doi.org/10.1016/j.neuron.2014.05.001
    </a>
  </>,
  <>
    Morrison, I. (2016). Keep calm and cuddle on: Social touch as a stress buffer.{' '}
    <em>Adaptive Human Behavior and Physiology, 2</em>(4), 344–362.{' '}
    <a href="https://doi.org/10.1007/s40750-016-0052-x" target="_blank" rel="noopener">
      https://doi.org/10.1007/s40750-016-0052-x
    </a>
  </>,
  <>
    World Health Organization. (2023). Mental disorders.{' '}
    <a
      href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders"
      target="_blank"
      rel="noopener"
    >
      https://www.who.int/news-room/fact-sheets/detail/mental-disorders
    </a>
  </>,
];

function ResearchBlock({ num, title, prose, findings }) {
  return (
    <div className="proj-research-block">
      <h3 className="proj-research-title">
        <span className="proj-research-num">{num}</span>
        {title}
      </h3>
      <p className="uos-sec-prose">{prose}</p>
      <p className="proj-label">Research Findings</p>
      <div className="uos-sec-callout wearable-findings">
        {findings.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default function WearableContent() {
  return (
    <>
      <ProjectSection
        title="Beyond Tracking: Designing Wearables for Emotional Wellbeing"
        titleId="wearable-overview"
        first
      >
        <p className="uos-sec-prose">
          Most wearable technologies today are designed to monitor the body. They continuously collect
          physiological signals such as heart rate, sleep quality, and activity levels, helping users
          understand their physical state. While these systems have become increasingly accurate, they
          primarily focus on measurement, notification, and performance optimisation, with comparatively
          little attention given to how wearable technologies might actively support everyday emotional
          regulation.
        </p>
        <p className="uos-sec-prose">
          Soothe Sleeve began with a different observation. During moments of stress, uncertainty, or
          cognitive overload, many people instinctively rub their sleeves, squeeze fabric, or hold onto
          soft objects. Rather than treating these behaviours as unconscious habits, this project
          explores whether wearable technology can quietly support these existing self-soothing behaviours
          instead of introducing entirely new interactions.
        </p>
      </ProjectSection>

      <ProjectSection
        num="1"
        title="Observation & Insight"
        titleId="wearable-observation"
      >
        <p className="uos-sec-prose">
          The project began with a personal observation: people, including myself, unconsciously rely on
          small tactile habits — like touching sleeves or soft fabrics — to cope with stress and anxiety.
          These repetitive touch behaviors function as a form of{' '}
          <strong>embodied emotional regulation</strong>, even without conscious awareness.
        </p>
        <p className="uos-sec-prose">
          The design question followed directly:{' '}
          <strong>
            How can wearable technology support self-soothing through touch, rather than interrupting it
            with notifications?
          </strong>{' '}
          The answer: build a garment that responds when you touch it — turning a habitual gesture into a
          designed system of care.
        </p>
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/wearable_p2.jpg"
        alt="Observation, insight, and design opportunity — Touch as Emotional Interface"
        caption='Design opportunity mapping: the intersection of "What if touch could respond back?" and "What if touch could become a meaningful interface?" — Touch as Emotional Interface.'
      />

      <ProjectSection
        num="2"
        title="Research Foundation"
        titleId="wearable-research"
      >
        <ResearchBlock
          num="01"
          title="Self-touch is a natural form of emotional regulation"
          prose="Psychological research suggests that spontaneous self-touch is an important strategy for regulating emotions. Rather than being meaningless repetitive behaviour, self-touch has been associated with reduced physiological stress, increased feelings of safety, and restoration of emotional balance after stressful experiences (Field, 2010; Morrison, 2016)."
          findings={[
            'Self-touch reduces physiological stress responses.',
            'Repetitive tactile behaviours naturally support emotional regulation.',
            'Touch increases perceived comfort and emotional security.',
          ]}
        />
        <ResearchBlock
          num="02"
          title="Pleasant touch is processed differently by the human body"
          prose="Research in affective neuroscience has identified specialised C-tactile afferents, nerve fibres that respond specifically to slow, gentle touch. Activation of these pathways is associated with comfort, social bonding, parasympathetic regulation, and emotional wellbeing. Unlike visual or auditory feedback, touch directly shapes how emotions are experienced (McGlone et al., 2014)."
          findings={[
            'Pleasant touch activates dedicated affective sensory pathways.',
            'Gentle tactile stimulation promotes emotional wellbeing.',
            'Touch contributes to parasympathetic regulation and stress recovery.',
          ]}
        />
        <ResearchBlock
          num="03"
          title="Interaction emerges through the body"
          prose="Research in Embodied Interaction argues that interaction is fundamentally shaped by bodily movement and physical engagement rather than screen-based interfaces alone (Dourish, 2001). Similarly, Soma Design proposes that technology should deepen bodily awareness instead of competing for users' attention (Höök, 2018). These perspectives suggest that meaningful interaction can emerge from existing bodily habits rather than newly learned gestures."
          findings={[
            'Interaction is grounded in bodily experience.',
            'Everyday bodily habits provide meaningful interaction opportunities.',
            'Technology can enhance body awareness rather than distract from it.',
          ]}
        />
        <ResearchBlock
          num="04"
          title="Emotional wellbeing is becoming a global design challenge"
          prose="According to the World Health Organization, approximately 301 million people worldwide live with anxiety disorders, making anxiety one of the most prevalent mental health conditions globally. Beyond clinical diagnoses, everyday stress affects a much broader population, highlighting the need for technologies that support emotional wellbeing in daily life (World Health Organization [WHO], 2023)."
          findings={[
            '301 million people worldwide live with anxiety disorders.',
            'Anxiety disorders are among the most prevalent mental health conditions globally.',
            'Emotional wellbeing requires preventive as well as clinical support.',
          ]}
        />
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/Research → Design.png"
        alt="Research → Design — from scientific insights to an embodied solution"
        caption="Research → Design: four research insights mapped to design decisions — self-touch regulation, pleasant touch pathways, embodied interaction, and global emotional wellbeing."
      />

      <ProjectSection
        num="3"
        title="Market Landscape"
        titleId="wearable-market"
      >
        <p className="uos-sec-prose">
          Positioning Soothe Sleeve against existing wearables clarifies the gap it addresses: most
          products optimise for tracking and performance, leaving emotional, touch-based wellbeing
          largely unaddressed.
        </p>
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/Market Landscape.png"
        alt="Market landscape — mapping wearables by tracking vs. emotional support"
        caption="Market landscape: mapping existing wearables across tracking-oriented and emotion-oriented design — Soothe Sleeve occupies the underserved space of touch-based emotional wellbeing."
      />

      <ProjectSection num="4" title="The Device" titleId="wearable-device">
        <p className="uos-sec-prose">
          The sleeve is designed to be worn on the inner forearm — the area richest in C-tactile
          afferents, with strong connections to the insular cortex, making it ideal for affective touch
          and emotional resonance. The primary placement is intentional: this is where the body is most
          attuned to gentle, meaningful contact.
        </p>
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/wearable_p3.jpg"
        alt="System diagram: wearing area, interaction flow, front view, prototype sketch"
        caption="System flow: user interaction → pressure sensor captures → system interprets → haptic output via textile feedback. The inner forearm placement is chosen for its density of C-tactile afferents — nerve fibers specialized for gentle, affective touch."
      />

      <ProjectSection num="5" title="Concept & Why Vibration" titleId="wearable-vibration">
        <p className="uos-sec-prose">
          Texture creates passive comfort; vibration adds active response. Familiar fabrics — knitted
          weaves, blankets, soft clothing — create emotional grounding through recognition. The sleeve
          combines both: <strong>interchangeable textile patches</strong> (chosen by the user for
          personal comfort) with <strong>responsive vibration</strong> (triggered by detected touch
          pressure).
        </p>
        <p className="uos-sec-prose">
          Vibration adds rhythm, response, and reassurance. A slow pulse can feel like gentle comfort,
          while repeated patterns can interrupt anxious thought loops and support self-soothing.{' '}
          <strong>Instead of replacing the textile, technology extends it.</strong>
        </p>
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/wearable_p4.jpg"
        alt="Device detail — textile patches, vibration motor, Arduino, pressure sensor"
        caption="Hardware: vibration motor, Arduino Nano 33 IoT, rechargeable battery. Four modular textile patches: Calm, Ground, Ritual, Root."
      />

      <ProjectSection num="6" title="Prototype" titleId="wearable-prototype">
        <p className="uos-sec-prose">
          The physical prototype combines fabric pattern cutting, soldered sensor arrays, and custom
          Arduino code into a wearable that responds in real time to touch pressure. The modular textile
          patch system allows users to swap textures — each triggering a different vibration profile.
          Multiple prototype iterations refined both the ergonomic fit and the vibration timing curves.
        </p>
      </ProjectSection>

      <ProjectImage
        src="/assets/wearable/wearable_p5.png"
        alt="Physical prototype photographs"
        caption="Final prototype: the sleeve on the inner forearm, showing the modular patch placement and the pressure-sensing gesture interaction. Touch becomes both input and experience."
      />

      <ProjectSection num="7" title="Reflection" titleId="wearable-reflection">
        <p className="uos-sec-prose">
          Soothe Sleeve was not only a wearable prototype, but also the starting point of my research
          interest in embodied AI interaction. It raised questions that extend beyond this project: how
          technology can become emotionally supportive through touch, how bodily signals can be translated
          into adaptive multisensory feedback, and how wearable systems can cultivate long-term
          relationships with users rather than momentary interactions. These questions continue to guide
          my current research direction.
        </p>
      </ProjectSection>

      <ProjectReferences items={REFERENCES} />
      <ProjectTags tags={TAGS} />
    </>
  );
}
