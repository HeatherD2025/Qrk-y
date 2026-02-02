import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "../../styles/feeds.css";

//
const APODCarouselView = ({
  images,
  activeIndex,
  onSelect,
  onFullscreen,
  isFullscreen = false,
}) => {
  return (
    <div style={{ position: "relative" }}>
      <Carousel
        activeIndex={activeIndex}
        onSelect={onSelect}
        interval={null}
        indicators={false}
        controls={false}
      >
        {images.map((image) => {
          return (
            <Carousel.Item key={image.date}>
              <Image
                className={isFullscreen ? "apod-image-fullscreen" : "apod-image-normal"}
                src={image.url}
                alt={image.title}
              />

              <Carousel.Caption>
                <p>{image.title}</p>

                {!isFullscreen && (
                  <button
                    className="btn btn-sm btn-bd-custom"
                    onClick={onFullscreen}
                  >
                    View Fullscreen
                  </button>
                )}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

{isFullscreen && (
    <>
      <button
        style={{
          position: "absolute",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: "2rem",
          background: "rgba(0,0,0,0.5)" ,
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() =>
          onSelect((activeIndex - 1 + images.length) % images.length)
        }
      >
        ‹
      </button>

      <button
        style={{
          position: "absolute",
          top: "50%",
          right:  "50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          fontSize: "2rem",
          background: "rgba(0,0,0,0.5)",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => onSelect((activeIndex + 1) % images.length)}
      >
        ›
      </button>
      </>
      )}
    </div>
  );
};
export default APODCarouselView;
