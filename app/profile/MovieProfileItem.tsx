'use client'

import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

interface MovieProfileItem {
    id: string;
    movieId: number;
    title: string;
    poster_path: string;
    overview: string;
    collectionName: string;
}

const MovieProfileItem: React.FC<MovieProfileItem> = ({id, movieId, title, poster_path, overview, collectionName}) => {

    const router = useRouter();

    const deleteFav = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/fav_movies/records/${id}`, {
            method: 'DELETE',
        });

        router.refresh();
    }

    return (
        <div className="movie-profile-container">
            <article className="movie-arr-item">
                <Link href={`/profile/${id}`} className="movie-profile-link" onClick={() => console.log('list item')}>
                    <div className="link-container">
                        <img src={`https://image.tmdb.org/t/p/original${poster_path}`} className='profile-poster movie-info-item' alt="movie image in profile" />
                        <h3 className="movie-info-item profile-movie-title">{title}</h3>
                    </div>
                </Link>
                    <FontAwesomeIcon className="delete-fav-icon movie-info-item" icon={faHeartCircleXmark} size='2x' onClick={deleteFav} />
            </article>
        </div>
    )
}

export default MovieProfileItem;