import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStarHalfStroke, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';


interface MoviePopupInterface {
    movieId: number,
    title: string;
    poster_path: string;
    setIsActive: (isOpen: boolean) => void;
    overview: string;
    
}
const isOpen: boolean = false;

const MoviePopup: React.FC<MoviePopupInterface> = ({movieId, title, poster_path, setIsActive, overview}) => {
    const [isFav, setIsFav] = useState<boolean>(false);
    const [isRateOpen, setIsRateOpen] = useState<boolean>(false);
    const [ rating, setRating ] = useState<number>(0);
    
    const router = useRouter();
    
    const toggleFav = (): void => {
        setIsFav(prev => !prev);
    }

    const toggleRate = (): void => {
        setIsRateOpen(prev => !prev);
    }

    const addToFav = async () => {
        toggleFav();
        
        await fetch('http://127.0.0.1:8090/api/collections/fav_movies/records', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                movieId,
                title,
                poster_path,
                overview,
                isFav,
                rating
            }),
        });

        router.refresh();
    }

    return (
        <section className="movie-popup-container">
            <div className="movie-popup">
                <img className="movie-poster-popup" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie poster popup" />
                <div className="movie-popup-buttons">
                    <FontAwesomeIcon className="popup-icon add-fav-icon" icon={faHeart} style={ isFav ? {color: 'red'} : {color: 'white'}} onClick={addToFav} size='2x' />
                    <FontAwesomeIcon className="popup-icon rate-icon" icon={faStarHalfStroke} style={{color: 'white'}} onClick={toggleRate} size='2x' />
                    <div className={`rate-numbers ${ isRateOpen ? 'open' : null}`}>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>0</p>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>1</p>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>2</p>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>3</p>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>4</p>
                        <p className={`rate-number ${ isRateOpen ? 'visible' : null}`}>5</p>
                    </div>
                    <div className="overview-container">
                        <h3 className="movie-title">{title}</h3>
                        <p className="overview">{overview}</p>
                    </div>
                    <FontAwesomeIcon className='close-icon' icon={faXmark} onClick={() => setIsActive(isOpen)} style={{color: 'white'}} size='2x' />
                </div>
            </div>
        </section>
    )
}

export default MoviePopup;