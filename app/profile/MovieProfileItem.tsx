import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons';

interface MovieProfileItem {
    id: string;
    movieId: number;
    title: string;
    poster_path: string;
    overview: string;
    collectionName: string;
}

const MovieProfileItem: React.FC<MovieProfileItem> = ({id, movieId, title, poster_path, overview, collectionName}) => {

    return (
        <div className="movie-profile-container">
            <Link href={`/profile/${id}`} className="movie-profile-link">
                <article className="movie-arr-item">
                    <img src={`https://image.tmdb.org/t/p/original${poster_path}`} className='profile-poster movie-info-item' alt="movie image in profile" />
                    <h3 className="movie-info-item profile-movie-title">{title}</h3>
                    <FontAwesomeIcon className="delete-fav-icon movie-info-item" icon={faHeartCircleXmark} size='2x' />
                </article>
            </Link>
        </div>
    )
}

export default MovieProfileItem;