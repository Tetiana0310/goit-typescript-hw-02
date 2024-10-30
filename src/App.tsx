import { useEffect, useState } from 'react';
import { fetchImages } from './api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal'; 
import { Toaster } from 'react-hot-toast'; 
import { FetchImagesResponse } from './types';

export default function App() {
  const [images, setImages] = useState <FetchImagesResponse["results"]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");
  const [endOfCollection, setEndOfCollection] = useState<boolean>(false);

  
  function loadMore() : void {
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


  const openModal = (imageUrl: string): void => {
    setModalImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const onSubmit = (searchQuery:string) => {
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
