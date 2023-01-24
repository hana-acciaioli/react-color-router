import React from 'react';
// import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Color from '../Color/Color';

export default function Main() {
  // const id = useParams();
  return (
    <div>
      <Nav />
      <Color className="color-display" />
    </div>
  );
}
