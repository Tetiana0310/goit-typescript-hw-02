import ImageCard from "../ImageCard/ImageCard.js"
 import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          src={image.urls.small}
          alt={image.alt_description}
          openModal={openModal}
          image={image}
        />
      ))}
    </ul>
  );
}