import { useEffect, useState } from 'react';
import { fetchImages } from './api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal'; 
import { Toaster } from 'react-hot-toast'; 

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");
  const [endOfCollection, setEndOfCollection] = useState(false);

  
  function loadMore() {
    setPage(page + 1);
  }

  useEffect(() => {
  const fetchData = async () => {
    setError(false);

    if (query === "") {
      return;
    }

    try {
      setIsLoading(true);
      const data = await fetchImages(query, page);

      if (data.total === 0) {
        setError(true);
        return;
      }

      const totalResults = data.total;
      const lastPage = Math.ceil(totalResults / 10); 

      if (page >= lastPage) {
        setEndOfCollection(true);
      }

      setImages((prevImages) => [...prevImages, ...data.results]);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData();
}, [page, query]);


  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
    setEndOfCollection(false); 
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />

      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && !endOfCollection && (
        <LoadMoreBtn loadMore={loadMore} />
      )}

      {error && (
        <ErrorMessage message={"Some problems. Please try again later."} />
      )}

      <ImageModal
        isOpen={modalIsOpen}
        imageUrl={modalImageUrl}
        onRequestClose={closeModal}
      />

      {endOfCollection && <p>No more images available.</p>}

      <Toaster position="top-right" />
    </>
  );
}
