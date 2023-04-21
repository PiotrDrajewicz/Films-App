interface MoviePopupInterface {
    title: string;
}

const MoviePopup: React.FC<MoviePopupInterface> = ({title}) => {

    return (
        <div className="movie-popup">
            <h3>{title} popup</h3>
        </div>
    )
}

export default MoviePopup;