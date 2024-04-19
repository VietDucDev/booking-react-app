import React from "react";
import ImageGallery from "react-image-gallery";
import "../../style/sass/Gallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Carousel_RoomPage_Img = () => {
  return (
    <div className="custom-gallery-container mx-auto">
      <ImageGallery
        items={images}
        infinite={true}
        showFullscreenButton={false}
        showPlayButton={false}
        autoPlay={true}
        slideInterval={10000}
        slideDuration={450}
        thumbnailPosition="bottom"
      />
    </div>
  );
};

export default Carousel_RoomPage_Img;
