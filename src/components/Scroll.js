import React, { useState, useEffect } from "react";
import { Photo } from "./Photo";

export const Scroll = () => {
  const [photos, setPhotos] = useState([]);

  const apiKey = "DEMO_KEY"

  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=10`;

  async function getPhotos() {
    console.log('in getPhotos')
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotos([...photos, ...data]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log('in useEffect getPhotos')
    getPhotos();
  }, []);

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
