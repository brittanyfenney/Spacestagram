import React, { useState, useEffect } from "react";
import { Photo } from "./Photo";

export const Scroll = () => {
  const [photos, setPhotos] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`;

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isFetching) {
      getPhotos()
      setIsFetching(false)
    }
  }, [isFetching])

  async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotos([...photos, ...data]);
    } catch (error) {
      console.log(error);
    }
  }

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setIsFetching(true);
    }
  }

  return (
    <div className="image-container">
        {photos && photos.length
          ? photos.map((photo) => {
              return (
                <Photo photo={photo} key={photo.url}/>
              );
            })
          : "Looking for photos"}
      </div>
);
};
