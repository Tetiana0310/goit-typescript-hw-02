import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, imageUrl, onRequestClose }) {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)", 
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none", 
      borderRadius: "10px", 
      maxWidth: "90%", 
      maxHeight: "90%", 
      overflow: "hidden", 
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
    },
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Image Modal"
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        style={customStyles}
      >
        <img src={imageUrl} alt="Large Image" />
        <button
          type="button"
          className={css.close}
          onClick={() => onRequestClose(false)}
        >
          <AiOutlineCloseCircle />
        </button>
      </Modal>
    </>
  );
}