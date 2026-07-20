import { Link } from 'react-router-dom';
import AutoplayVideo from '../media/AutoplayVideo';
import { biomaterialMarqueeImages } from '../../data/biomaterialImages';
import { getProjectPath } from '../../data/projects';

const paintingMarqueeImages = [
  '/assets/Creative/3b4006cb6772089cda3809320e0274c6.JPG',
  '/assets/Creative/6b2eea77b30863907d95d3e15f3c7a74.jpg',
  '/assets/Creative/2bf01ce235d0b9194d9bb78ea3eb439f.jpg',
];

export default function ExplorationSection() {
  return (
    <section id="exploration">
      <p className="section-label" data-aos="fade-up" data-aos-duration="600">
        Exploration
      </p>

      <div className="exploration-list">
        <div className="exploration-item" data-aos="fade-up" data-aos-duration="800">
          <div className="exploration-item-header">
            <h3 className="work-row-title">Synthetic Ocean School</h3>
            <Link to={getProjectPath('synthetic')} className="bio-block-view">
              View <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Link to={getProjectPath('synthetic')} className="exploration-video-link" aria-label="Synthetic Ocean School">
            <div className="work-video-full">
              <AutoplayVideo src="/assets/TD/td-final.mp4" />
            </div>
          </Link>
        </div>

        <div className="bio-block" data-aos="fade-up" data-aos-duration="800">
          <div className="bio-block-header">
            <h3 className="bio-block-title">Bio Material</h3>
            <Link to={getProjectPath('biomaterial')} className="bio-block-view">
              View <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Link
            to={getProjectPath('biomaterial')}
            className="bio-marquee"
            aria-label="Bio Material gallery"
          >
            <div className="bio-marquee-track">
              {[...biomaterialMarqueeImages, ...biomaterialMarqueeImages].map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt={index < biomaterialMarqueeImages.length ? 'Bio Material sample' : ''}
                  aria-hidden={index >= biomaterialMarqueeImages.length ? true : undefined}
                  loading="lazy"
                />
              ))}
            </div>
          </Link>
        </div>

        <div className="bio-block" id="painting" data-aos="fade-up" data-aos-duration="800">
          <div className="bio-block-header">
            <h3 className="bio-block-title">Painting</h3>
          </div>
          <div className="bio-marquee" aria-label="Painting gallery">
            <div className="bio-marquee-track bio-marquee-track--reverse">
              {[...paintingMarqueeImages, ...paintingMarqueeImages].map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt={index < paintingMarqueeImages.length ? 'Painting' : ''}
                  aria-hidden={index >= paintingMarqueeImages.length ? true : undefined}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
