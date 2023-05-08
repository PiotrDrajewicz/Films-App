'use client'

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import RateNumber from "../RateNumber";
import NumberComp from "./NumberComp";

interface MovieProfileItem {
    id: string;
    movieId: number;
    title: string;
    poster_path: string;
    overview: string;
    collectionName: string;
    rating: number;
}

const rates:number[] = [0, 1, 2, 3, 4, 5];

const MovieRatedItem: React.FC<MovieProfileItem> = ({id, movieId, title, poster_path, overview, collectionName, rating}) => {
    const [isRateOpen, setIsRateOpen] = useState<boolean>(false);
    const [newRating, setNewRating] = useState<number>(0);

    return (
        <div className="movie-profile-container movie-rated-container">
            <article className="movie-arr-item">
                <Link href={`/rated/${id}`} className="movie-profile-link" onClick={() => console.log('list item')}>
                    <div className="link-container">
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} className='profile-poster movie-info-item' alt="movie image in profile" />
                        <h3 className="movie-info-item profile-movie-title">{title}</h3>
                    </div>
                </Link>
                <div className={`profile-rated-numbers ${ isRateOpen ? 'open' : null}`}>
                    {rates.map(rate => {
                        return <RateNumber key={rate} isRateOpen={isRateOpen} rating={rate} pocketBaseId={id} movieId={movieId} title={title} poster_path={poster_path} overview={overview} setIsRateOpen={setIsRateOpen} setRating={setNewRating} />
                    })}
                </div>
                <div className="star-profile-container">
                    <FontAwesomeIcon className="delete-fav-icon movie-info-item star-profile" icon={faStar} style={{color: 'gold'}} size='2x' onClick={() => setIsRateOpen(prev => !prev)} />
                    <p className="profile-rating">{rating}</p>
                </div>
            </article>
        </div>
    )
}

export default MovieRatedItem;