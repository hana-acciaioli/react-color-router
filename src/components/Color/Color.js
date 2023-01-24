import React from 'react';
import { useParams } from 'react-router-dom';

export default function Color() {
  const { redValue, greenValue, blueValue } = useParams();
  return (
    <div
      style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}
      className="container"
    >
      <h1>
        rgb({redValue}, {greenValue}, {blueValue})
      </h1>
    </div>
  );
}
