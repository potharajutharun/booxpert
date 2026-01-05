"use client";

export default function ImageUpload({ image, onChange }) {
  return (
    <>
      <input
        type="file"
        className="form-control"
        accept="image/*"
        onChange={onChange}
      />

      {image && (
        <img
          src={image}
          alt="preview"
          width="60"
          height="60"
          className="rounded-circle mt-2"
        />
      )}
    </>
  );
}
