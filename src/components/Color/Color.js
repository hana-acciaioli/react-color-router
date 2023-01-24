import React from 'react';
import { useParams } from 'react-router-dom';
import './Color.css';

export default function Color() {
  const { redValue, greenValue, blueValue } = useParams();
  return (
    <div
      className="container"
      style={{ backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})` }}
    >
      <h1>
        rgb({redValue}, {greenValue}, {blueValue})
      </h1>
    </div>
  );
}
