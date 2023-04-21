import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

interface MoviePopupInterface {
    title: string;
    poster_path: string;
}

const MoviePopup: React.FC<MoviePopupInterface> = ({title, poster_path}) => {

    return (
        <section className="movie-popup-container">
            <div className="movie-popup">
                <img className="movie-poster-popup" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster popup" />
                <div className="movie-popup-buttons">
                    <FontAwesomeIcon className="popup-icon add-fav-icon" icon={faHeart} style={{color: 'white'}} size='2x' />
                    <FontAwesomeIcon className="popup-icon rate-icon" icon={faStarHalfStroke} style={{color: 'white'}} size='2x' />
                </div>
            </div>
        </section>
    )
}

export default MoviePopup;