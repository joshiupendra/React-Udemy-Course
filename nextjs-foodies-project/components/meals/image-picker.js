"use client";
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickImage, setPickImage] = useState();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return <div className={classes.picker}>
    <label htmlFor={name}>{label}</label>
    <div className={classes.controls}>
      <div className={classes.preview}>
        {!pickImage && <p>No image picked yet.</p>}
        {pickImage && <Image src={pickImage} alt="The image selected by the user." fill />}
      </div>
      <input ref={imageInput} className={classes.input} type="file" id={name} accept="image/png, image/jpeg" name={name} onChange={handleImageChange} required />
      <button className={classes.button} type="button" onClick={handlePickClick}>Pick an Image</button>
    </div>
  </div>;
}