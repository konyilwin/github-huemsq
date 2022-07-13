import React from 'react';
import { useParams } from 'react-router';
import { getImageById } from './images';

export default function ImageView() {
  let { id } = useParams<'id'>();
  let image = getImageById(Number(id));

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <img width={400} height={400} src={image.src} alt="" />
    </div>
  );
}
