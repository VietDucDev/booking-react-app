import React, { memo } from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface Props {
  imgList: string[];
  showThumbnails: boolean;
}

const Carousel_RoomPage_Img: React.FC<Props> = ({
  imgList,
  showThumbnails,
}) => {
  const images: ReactImageGalleryItem[] = imgList.map((img) => ({
    original: img,
    thumbnail: img,
  }));

  const renderCustomNextButton = (
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    return (
      <button
        type="button"
        className="image-gallery-icon image-gallery-right-nav"
        aria-label="Previous Slide"
        onClick={onClick}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    );
  };

  const renderCustomReviousButton = (
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
  ) => {
    return (
      <button
        type="button"
        className="image-gallery-icon image-gallery-left-nav"
        aria-label="Previous Slide"
        onClick={onClick}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
    );
  };

  // console.log("component re-render");

  return (
    <div className="custom-gallery-container mx-auto">
      <ImageGallery
        items={images}
        infinite={true}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={false}
        slideInterval={0}
        slideDuration={450}
        showThumbnails={showThumbnails}
        showBullets={true}
        thumbnailPosition="bottom"
        renderLeftNav={renderCustomReviousButton}
        renderRightNav={renderCustomNextButton}
      />
    </div>
  );
};

export default memo(Carousel_RoomPage_Img);
