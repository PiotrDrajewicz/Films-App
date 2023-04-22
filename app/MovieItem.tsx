'use client';

import MoviePopup from './MoviePopup';
import { useState } from "react";

interface MovieItemInterface {
    id: number;
    title: string;
    poster_path: string;
    isOpen: boolean;
}

const MovieItem: React.FC<MovieItemInterface> = ({id, title, poster_path, isOpen}) => {
    const [isActive, setIsActive] = useState<boolean>(isOpen);

    const showPopup = (id: number):void => {
        setIsActive(prev => !prev);
    }

    return (
        <>
            <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" onClick={() => showPopup(id)} />
            { isActive ? <MoviePopup title={title} poster_path={poster_path} setIsActive={setIsActive} /> : null }
        </>
    )
}

export default MovieItem;