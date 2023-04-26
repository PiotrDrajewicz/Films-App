
interface MovieProfileItem {
    movieId: number;
    title: string;
    poster_path: string;
    overview: string;
    collectionName: string;
}

const MovieProfileItem: React.FC<MovieProfileItem> = ({movieId, title, poster_path, overview, collectionName}) => {

    return (
        <article className="movie-arr-item">
            <h3>title: {title}</h3>
            <h4>movie ID: {movieId}</h4>
            <h4>{collectionName}</h4>
        </article>
    )
}

export default MovieProfileItem;