import React, { useRef, useEffect } from "react";
import "../../styles/image-item.css";
import { useState } from "react";

const ImageItem = ({ url, id }) => {
  const imgRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (imgRef.current) {
      const imgDomEl = imgRef.current;
      imgDomEl.onload = function () {
        setIsLoading(false);
      };
    }
  }, [imgRef, setIsLoading, id]);

  const className = isLoading ? "image-item image-item-loading" : "image-item";

  return <img className={className} src={url} ref={imgRef} />;
};

export default ImageItem;
