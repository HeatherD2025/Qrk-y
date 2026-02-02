import React, { useState } from "react";
import { useGetSpaceImagesByDatesQuery } from "../../features/feeds/apodApi";
import ReactModal from "react-modal";
import APODCarouselView from "./APODCarouselView";
import "../../styles/index.css";
import "../../styles/feeds.css";

ReactModal.setAppElement("#root");

export default function APODCarouselContainer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);

  // calculate the last 14 days date range
  const today = new Date();
  const end_date = today.toISOString().slice(0, 10);

  const start = new Date();
  start.setDate(today.getDate() - 14);
  const start_date = start.toISOString().slice(0, 10);

  // fetch images with hook
  const { data, isLoading, error } = useGetSpaceImagesByDatesQuery({
    start_date,
    end_date,
  });

  if (isLoading) return <p>Loading images...</p>;
  if (error) return <p>Error loading images: {error.message}</p>;

  const images = Array.isArray(data) ? data : [];

  const handleSelect = (selectedIndex) => setActiveIndex(selectedIndex);
  const openFullscreen = () => setFullscreen(true);
  const closeFullscreen = () => setFullscreen(false);

//   const CarouselView = ({ fullscreenMode = false }) => (
//     <Carousel
//       activeIndex={activeIndex}
//       onSelect={handleSelect}
//       interval={null}
//       indicators={false}
//       controls={false}
//     >
//       {images.map((image) => (
//         <Carousel.Item key={image.date}>
//           <Image
//             className={fullscreenMode ? "d-block w-100" : "d-block w-75"}
//             src={image.url}
//             alt={image.title}
//           />
//           <Carousel.Caption>
//             <p>{image.title}</p>
//             {!fullscreenMode && (
//               <button
//                 className="btn btn-sm btn-light mt-2"
//                 onClick={openFullscreen}
//               >
//                 View Fullscreen
//               </button>
//             )}
//           </Carousel.Caption>
//         </Carousel.Item>
//       ))}
//     </Carousel>
//   );

  return (
    <>
      {/* normal carousel */}
      <APODCarouselView 
        images={images}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        onFullscreen={openFullscreen}
        isFullscreen={false}
      />

      {/* fullscreen modal carousel */}
      <ReactModal
        isOpen={fullscreen}
        onRequestClose={closeFullscreen}
        style={{
          overlay: { backgroundColor: "black", width: "100%" },
          content: {
            inset: "5%",
            padding: 20,
            background: "black",
            border: "none",
          },
        }}
      >
        <APODCarouselView 
          images={images}
          activeIndex={activeIndex}
          onSelect={handleSelect}
          isFullscreen={true}
        />
      </ReactModal>
    </>
  );
}
