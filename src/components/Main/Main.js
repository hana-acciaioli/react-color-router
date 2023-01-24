import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';

export default function Color() {
  const id = useParams();
  const { color, loading, error } = id;
  console.log({ id }), id;
  if (error)
    return (
      <>
        <h1>Something went wrong :(</h1> <h2>{error}</h2>
      </>
    );
  if (loading) return <h3> Loading color...</h3>;
  return (
    <div>
      <Nav />
      <Color className="color-display" style={{ backgroundColor: id }} />
      <h1>Color</h1>
    </div>
  );
}
