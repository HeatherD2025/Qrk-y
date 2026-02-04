import React from "react";
import { Carousel, Image } from "react-bootstrap";
import "../../styles/feeds.css";


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
        controls={true}
      >
        {images.map((image) => {
          return (
            <Carousel.Item key={image.date}>
                <div className="apod-slide">
                    <Image
                        className={`apod-image ${isFullscreen ? "apod-image--fullscreen" : "apod-image--normal"}`}
                        src={image.url}
                        alt={image.title}
                    />
                </div>

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
    </div>
  );
};
export default APODCarouselView;
