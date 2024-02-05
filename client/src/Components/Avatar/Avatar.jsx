import React from "react";

export default function Avatar({ src }) {
  console.log(src);

  return (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={src} alt="Avatar 2" />
      </div>
    </div>
  );
}
