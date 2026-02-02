import React, { useState } from "react";
import { useGetSpaceImagesByDatesQuery } from "../../features/feeds/apodApi";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../../styles/index.css";
import "../../styles/feeds.css";
import ReactModal from "react-modal";
import APODCarouselView from "./APODCarouselView";

ReactModal.setAppElement("#root");

const APODCarousel = () => {
  const [isFullscreen, setisFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // fix later with useMemo()
  const today = new Date();
  const end_date = today.toISOString().slice(0, 10);

  const start = new Date();
  start.setDate(today.getDate() - 14);
  const start_date = start.toISOString().slice(0, 10);

  const {
    data,
    isLoading,
    error,
  } = useGetSpaceImagesByDatesQuery({ start_date, end_date });

  if (isLoading) return <p>Loading images...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  const images = Array.isArray(data)
    ? data
    : [];

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <APODCarouselView
        id="fullscreenCarousel"
        images={images}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        onFullscreen={() => setisFullscreen(true)}
      />

      <ReactModal
        isOpen={isFullscreen}
        onRequestClose={() => setisFullscreen(false)}
        style={{
          overlay: { backgroundColor: "black" },
          content: { maxWidth: "90%", margin: "auto" }
        }}
      >
        <ReactModal.Body>
          <APODCarouselView
            id="fullscreenCarousel"
            images={images}
            activeIndex={activeIndex}
            onSelect={handleSelect}
            isFullscreen
          />
        </ReactModal.Body>
      </ReactModal>
    </>
  );
};

export default APODCarousel;
