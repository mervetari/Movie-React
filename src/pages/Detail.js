import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import { MovieContext } from '../context/MovieContext';

import noImage from '../utils/no-image-available.png';
import '../styles/Detail.css';

const Detail = (imdbID) => {

  const { showDetail, selectedMovie } = useContext(MovieContext);
  useEffect(() => {
    showDetail('tt1201607'); 
  }, []);

  return (
    <div className='detail-container'>
      <div className='poster'>
        {selectedMovie.Poster === 'N/A' ? (
          <img src={noImage} alt={selectedMovie.Title} />
        ) : (
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
        )}
      </div>
      <div className='info'>
        <div className='field'>
          <div className='label'>Title</div>
          <div>{selectedMovie.Title}</div>
        </div>
        <div className='field'>
          <div className='label'>Released</div>
          <div>{selectedMovie.Released}</div>
        </div>
        <div className='field'>
          <div className='label'>Runtime</div>
          <div>{selectedMovie.Runtime}</div>
        </div>
        <div className='field'>
          <div className='label'>IMDB Rating</div>
          <div>{selectedMovie.imdbRating}</div>
        </div>
        
      </div>
    </div>
  );
};

export default Detail;
