"use client";

import { useState, useEffect } from 'react';

const getMovies = async (api: string) => {
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

async function HomePage() {
    const [title, setTitle] = useState<string>('');

    const movies = await getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=93e71c3dd35ee752b4b43a6ffb32080f&language=en-US&page=1');

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(e.target.value);
    }

    // console.log(movies.results);

    return (
        <>
            <section className='input-container'>
                <input className='movie-input' type="text" value={title} 
                placeholder="Find movie" onChange={changeTitle} />
            </section>
            <section className="movies-container">
                {movies.results?.map((movie: { id: number, poster_path: string}) => {
                    const { id, poster_path} = movie;
                    return (
                        <>
                            <h3>movie {id}</h3>
                            <img className='movie-poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster" />
                        </>
                    )
                })}
            </section>
        </>
    )
}

export default HomePage;