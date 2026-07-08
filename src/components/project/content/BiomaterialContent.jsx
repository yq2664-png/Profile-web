import { useEffect } from 'react';
import '../../../styles/project-biomaterial.css';

function BioImageRow({ images }) {
  useEffect(() => {
    const rowImages = document.querySelectorAll('.bio-img-row img');
    const setFlex = (img) => {
      img.style.flexGrow = img.naturalWidth / img.naturalHeight || 1;
    };

    rowImages.forEach((img) => {
      if (img.complete && img.naturalWidth) setFlex(img);
      else img.addEventListener('load', () => setFlex(img));
    });
  }, []);

  return (
    <div className="bio-img-row">
      {images.map((img) => (
        <img key={img.src} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
}

export default function BiomaterialContent() {
  return (
    <>
      <div className="content" data-aos="fade-up" data-aos-duration="800">
        <p className="section-heading">Overview</p>
        <p className="prose">
          Exploring biodegradable and bio-based materials as alternatives in fashion — experimenting
          with natural composites that grow, decompose, and return. Each sample tests a different
          formulation of organic binders, pigments, and fibrous substrates.
        </p>
      </div>

      <div className="bio-gallery" data-aos="fade-up" data-aos-duration="800">
        <img
          className="bio-img-full"
          src="/assets/BIo material/IMG_5974.jpg"
          alt="Bio Material — overview"
        />
        <img
          className="bio-img-full"
          src="/assets/BIo material/1.0 材料.jpg"
          alt="Bio Material — material sheet"
        />
        <BioImageRow
          images={[
            { src: '/assets/BIo material/DSC02540.JPG', alt: 'Bio Material — sample detail' },
            { src: '/assets/BIo material/DSC02557.JPG', alt: 'Bio Material — sample detail' },
          ]}
        />
        <img className="bio-img-full" src="/assets/BIo material/1.jpg" alt="Bio Material — sample" />
        <BioImageRow
          images={[
            { src: '/assets/BIo material/DSC02677.JPG', alt: 'Bio Material — texture detail' },
            { src: '/assets/BIo material/DSC02632.JPG', alt: 'Bio Material — texture detail' },
          ]}
        />
      </div>
    </>
  );
}
