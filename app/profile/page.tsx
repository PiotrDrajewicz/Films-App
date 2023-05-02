'use client'

import MovieProfileItem from "./MovieProfileItem";
import { useState } from "react";

const getMovies = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/fav_movies/records?page=1&perPage=30', 
    {cache: 'no-store'}
    );
    const data = await res.json();
    return data.items as any[];
}

const ProfilePage = async () => {
    const [isFavOpen, setIsFavOpen] = useState<boolean>(true);
    const favMovies = await getMovies();
    
    return (
        <>
            <div className="profile-flex-container">
                <div className="all-movies-container">
                    <section className="fav-movies-section">
                        <div className="profile-title-container">
                            <h1 className={`profile-title`} >Favourite movies</h1>
                            <h1 className={`profile-title`} >Rated movies</h1>
                        </div>
                        <div className="fav-movies-container">
                            {favMovies?.map((movie) => {
                                return <MovieProfileItem key={movie.id} {...movie} />
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

export default ProfilePage;