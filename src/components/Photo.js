import React, { useState } from "react";

export const Photo = (props) => {
  const photo = props.photo;

  return (
    <div className="image" key={photo.url}>
      <img src={photo.url} alt={photo.explanation} />
    </div>
  );
};
