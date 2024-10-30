import { Image } from "../../types";
import css from "../ImageCard/ImageCard.module.css"

interface ImageCardView {
  openModal: (imageUrl: string) => void;
  image: Image;
}

const ImageCard: React.FC<ImageCardView> = ({ image, openModal }) => {
  const onSubmit = (): void => {
    openModal(image.urls.regular);
  };

  return (
    <li>
      {
        <img
          className={css.img}
          src={image.urls.small}
          alt={image.alt_description}
          width={"300px"}
          onClick={onSubmit}
        />
      }
    </li>
  );
}
export default ImageCard;