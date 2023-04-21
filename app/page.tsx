"use client";

import dynamic from 'next/dynamic'
import './MoviePopup';
import { useState, useEffect, useRef } from 'react';
// import MoviePopup from './MoviePopup';

interface MovieData {
    id: number;
    poster_path: string;
}

const getMovies = async (api: string) => {
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

async function HomePage() {
    const [title, setTitle] = useState<string>('');
    const [popupVisible, setPopupVisible] = useState<boolean>(false);
    const popupRef = useRef(null);

    const movies = await getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=93e71c3dd35ee752b4b43a6ffb32080f&language=en-US&page=1');

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(e.target.value);
    }

    const showPopup = (id: number):void => {
        // setPopupVisible(id);
        console.log('kliknąłem ', id);
        // console.log(popupVisible);
    }

    // type popupProps = {
    //     passedId: number
    // }

    return (
        <>
            <section className='input-container'>
                <input className='movie-input' type="text" value={title} 
                placeholder="Find movie" onChange={changeTitle} />
            </section>
            <section className="movies-container">
                {movies.results?.map((movie: MovieData) => {
                    const { id, poster_path} = movie;
                    return (
                        <>
                            <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" onClick={() => showPopup(id)} ref={popupRef} />
                        </>
                    )
                })}
            </section>
        </>
    )
}

// export default HomePage;

export default dynamic(() => Promise.resolve(HomePage), {
    ssr: false
  })