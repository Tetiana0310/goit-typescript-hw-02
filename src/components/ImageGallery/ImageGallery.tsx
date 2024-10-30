import { Image } from "../../types.js";
import ImageCard from "../ImageCard/ImageCard.js"
import css from "../ImageGallery/ImageGallery.module.css"
 

interface ImageGalleryView {
  images: Image[];
  openModal: (imageUrl: string) => void;
}

const ImageGallery: React.FC<ImageGalleryView> = ({ images, openModal }) => {
  return (
    <ul className={css.list}>
      {images.map((image) => (
        <ImageCard
          key={image.id}
          openModal={openModal}
          image={image}
        />
      ))}
    </ul>
  );
}
export default ImageGallery;