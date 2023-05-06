'use client';

import MovieRatedItem from "./MovieRatedItem";
import { useState, useRef } from "react";

const getMovies = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/rated_movies/records?page=1&perPage=30', 
    {cache: 'no-store'}
    );
    const data = await res.json();
    return data.items as any[];
}

const RatedPage = async () => {
    // const [isFavOpen, setIsFavOpen] = useState<boolean>(true);
    const titleRef = useRef(null);
    
    const ratedMovies = await getMovies();
    console.log('re-render');
    
    const toggleFav = () => {
        // setIsFavOpen(prev => !prev);
        // console.log('triggered');
        console.log(titleRef.current);
    }

    return (
        <>
            <div className="profile-flex-container">
                <div className="all-movies-container">
                    <section className="fav-movies-section">
                        <div className="profile-title-container">
                            <h1 className={`profile-title`} >Rated movies</h1>
                        </div>
                        <div className="fav-movies-container">
                            {ratedMovies?.map((movie) => {
                                return <MovieRatedItem key={movie.id} {...movie} />
                            })}
                        </div>
                    </section>
                    {/* <section className="rated-movies-section">
                        <h1 className="profile-title">Rated movies</h1>
                        <div className="fav-movies-container">
                            {favMovies?.map((movie) => {
                                return <MovieProfileItem key={movie.id} {...movie} />
                            })}
                        </div>
                    </section> */}
                </div>
            </div>    
        </>
    )
}

export default RatedPage;