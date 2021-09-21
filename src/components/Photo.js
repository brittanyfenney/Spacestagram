import React, { useState } from "react";

export const Photo = (props) => {
  const photo = props.photo;

  return (
    <div className="image" key={photo.url}>
      <img src={photo.url} alt={photo.explanation} />
      <div className="photo-info">
        <h2>
        <a href={photo.url}>{photo.title}</a> ({photo.date})
        </h2>
        <button id={photo.url}>
          Like
        </button>
      </div>
    </div>
  );
};
