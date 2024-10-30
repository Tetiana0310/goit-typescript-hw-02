import css from "../ImageCard/ImageCard.module.css"

export default function ImageCard({ image, openModal }) {
  const onSubmit = () => {
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