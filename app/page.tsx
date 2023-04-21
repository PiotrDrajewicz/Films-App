"use client";

import MovieItem from './MovieItem';
import { useState, useEffect, useRef } from 'react';

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
}

const getMovies = async (api: string) => {
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

const HomePage = async (): Promise<any> => {
    const [title, setTitle] = useState<string>('');

    const movies = await getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=93e71c3dd35ee752b4b43a6ffb32080f&language=en-US&page=1');

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(e.target.value);
    }

    return (
        <>
            <section className='input-container'>
                <input className='movie-input' type="text" value={title} 
                placeholder="Find movie" onChange={changeTitle} />
            </section>
            <section className="movies-container">
                {movies.results?.map((movie: MovieData) => {
                    const { id, title, poster_path} = movie;
                    const isOpen = false;
                    return (
                        <>
                            <MovieItem key={id} id={id} title={title} poster_path={poster_path} isOpen={isOpen} />
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default HomePage;