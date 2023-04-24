"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import MovieItem from './MovieItem';
import { useState, useEffect, useCallback } from 'react';

interface MovieData {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
}

const getMovies = async (api: string) => {
    const res = await fetch(api);
    const data = await res.json();
    return data;
}

const HomePage = async (): Promise<any> => {
    const [title, setTitle] = useState<string>('');
    const [pageSelectNum, setPageSelectNum] = useState<number>(1);
    
    const movies = await getMovies('https://api.themoviedb.org/3/movie/top_rated?api_key=93e71c3dd35ee752b4b43a6ffb32080f&language=en-US&page=1');

    const changeTitle = (e: React.ChangeEvent<HTMLInputElement>):void => {
        setTitle(e.target.value);
    }

    const incrementPage = ():void => {
        setPageSelectNum(prev => prev + 1);
    }

    return (
        <>
            <div className="home-page-container">
                <section className='input-container'>
                    <input className='movie-input' type="text" value={title} 
                    placeholder="Find movie" onChange={changeTitle} />
                </section>
                <section className="movies-container">
                    {movies.results?.map((movie: MovieData) => {
                        const { id, title, poster_path, overview} = movie;
                        const isOpen = false;
                        return (
                            <>
                                <MovieItem key={id} id={id} title={title} poster_path={poster_path} isOpen={isOpen} overview={overview} />
                            </>
                        )
                    })}
                </section>
                <section className="page-select-container">
                    <FontAwesomeIcon className="arrow-icon" icon={faAngleLeft} style={{color: 'white'}} size='2x' />
                    <p className="page-select-num">{pageSelectNum}</p>
                    <FontAwesomeIcon className="arrow-icon" icon={faAngleRight} style={{color: 'white'}} size='2x'  onClick={incrementPage}/>
                </section>
            </div>
        </>
    )
}

export default HomePage;