export default function SensoryContent() {
  return (
    <div className="content" data-aos="fade-up" data-aos-duration="800">
      <p className="section-heading">Overview</p>
      <p className="prose">
        <strong>What happens when our inner weather becomes a dataset?</strong> Inner Weather is an
        interactive installation that asks whether technology can listen to our emotional presence
        — not just record it. The system reads three simultaneous inputs: ambient sound captured by
        microphone, real-time weather API data (temperature, humidity, wind), and live camera
        input. These are synthesized into a personalized visual portrait, then delivered to the
        viewer by email.
      </p>

      <div className="callout">
        <p>
          &quot;When voice, movement, and climate data are combined, can a system &apos;listen&apos;
          to our presence with empathy — or does it merely record and translate us into
          numbers?&quot;
        </p>
      </div>

      <h2 className="block-heading">Motivation</h2>
      <p className="prose">
        Inspired by conversations in the UK, where shorter daylight hours in winter visibly affected
        friends&apos; moods, this project began as a question about the relationship between
        environment and inner state. Several studies show that factors like temperature, sunlight,
        and humidity influence mood and cognitive function — but this influence is largely
        invisible and uncommunicated.
      </p>
      <p className="prose">
        The question became: what if environmental-emotional data could be translated into aesthetic
        expression? Not as visualization of metrics, but as something that feels lived — where the
        weather finds a form that matches how it actually makes you feel.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/sensory/sensory_p1.jpg"
        alt="Motivation and concept — inner weather as dataset"
      />

      <h2 className="block-heading">System Design</h2>
      <p className="prose">
        The installation uses three input channels processed simultaneously. Each channel modulates a
        different dimension of the visual output — building a layered, multi-sensory portrait that
        changes with the environment in real time.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/sensory/sensory_p2.jpg"
        alt="System sketch — weather API, GPT API, email delivery flow"
      />
      <p className="img-caption">
        System architecture: the weather API and GPT API combine to generate natural language
        descriptions of the moment; a custom p5.js sketch translates these into visual form. The
        email delivery function lets users take the portrait with them.
      </p>

      <h2 className="block-heading">Camera · Sound · Weather</h2>
      <p className="prose">
        The <strong>camera</strong> captures brightness, pixel size, and directional distortion —
        high brightness renders crisper, more detailed silhouettes; low light produces softer, more
        atmospheric forms. The <strong>microphone</strong> samples flow, density, and distortion of
        the dot pattern — voice becomes a texture. <strong>Weather data</strong> modulates
        temperature-based warmth and humidity-based detail level, making the local atmosphere
        physically present in the image.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/sensory/sensory_p3.jpg"
        alt="Camera capture system, sound visualization, and weather modulation logic"
      />
      <p className="img-caption">
        Each modality maps to a specific visual quality: camera → silhouette clarity, sound →
        texture density, weather → warmth and atmospheric depth.
      </p>

      <h2 className="block-heading">From Midterm to Final</h2>
      <p className="prose">
        The midterm version focused on a single modality — sound — and used TouchDesigner to
        visualize audio as rhythm and energy. The final project expanded this into a fully
        interactive, multi-modal system built in p5.js and JavaScript, with three real-time data
        streams, a custom visualization engine, and automatic email delivery via API.
      </p>
      <p className="prose">
        The shift from passive recording to active interaction was the conceptual leap: the final work
        isn&apos;t just a recording of a moment — <strong>it becomes an experience</strong>,
        personalized, then sent home.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/sensory/sensory_p4.jpg"
        alt="Key differences between midterm and final — from single modality to full interactive system"
      />
      <p className="img-caption">
        Four key transformations: single → multi-modality; passive → interactive; technical exercise
        → conceptual installation; recording → personalized emotional record.
      </p>

      <h2 className="block-heading">Final Concept</h2>
      <p className="prose">
        Inner Weather explores the poetic relationship between inner weather (voice, presence, body)
        and outer weather (temperature, humidity, light). The installation turns real-time sensory
        and environmental data into a personalized emotional record — offering not data
        visualization, but a felt encounter with one&apos;s own presence in the world.
      </p>

      <img
        className="img-full"
        data-aos="fade-up"
        data-aos-duration="800"
        src="/assets/sensory/sensory_p5.jpg"
        alt="Final installation output — generated portraits under different temperature and humidity conditions"
      />
      <p className="img-caption">
        Sample outputs: the same face under different weather conditions produces visibly different
        portraits — colder days render sharper, denser forms; humid days blur and soften them.
      </p>

      <div className="tag-row">
        <span className="tag">Creative Coding</span>
        <span className="tag">Interactive Installation</span>
        <span className="tag">P5.js</span>
        <span className="tag">GPT API</span>
        <span className="tag">Weather API</span>
        <span className="tag">TouchDesigner</span>
        <span className="tag">Sensory Design</span>
        <span className="tag">Environmental Data</span>
      </div>
    </div>
  );
}
