import React, { useState, useCallback, useEffect } from "react";
import ImageItem from "../ImageItem/ImageItem";
import { getNewImageData } from "../../services/images";
import "../../styles/home.css";

const Home = () => {
  const [images, setImages] = useState([]);

  const addBatch = useCallback(() => {
    var batchSize = 9;
    const newBatch = [];
    while (batchSize > 0) {
      newBatch.push({ ...getNewImageData() });
      batchSize--;
    }

    setImages((prevImages) => [...prevImages, ...newBatch]);
  }, [setImages]);

  const addScrollListener = useCallback(() => {
    window.addEventListener("scroll", function () {
      var documentHeight = document.body.scrollHeight;

      if (window.pageYOffset + window.innerHeight >= documentHeight) {
        addBatch();
        return;
      }
    });
  }, [addBatch]);

  useEffect(() => {
    addBatch();
  }, [addBatch]);

  useEffect(() => {
    addScrollListener();
  }, [addScrollListener]);

  return (
    <div className="container">
      <h1>Infinite scroll.</h1>
      <div id="images-list" className="images-container"></div>
      {images.map((image) => (
        <ImageItem url={image.url} id={image.id} key={image.id} />
      ))}
    </div>
  );
};

export default Home;
