
const getMovieInfo = async (id: string) => {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/fav_movies/records/${id}`,
    {
        next: {revalidate: 10},
    }
    );
    const data = res.json();
    return data;
}

const MoviePage = async ({ params }: any) => {
    const movieInfo = await getMovieInfo(params.id);
    const poster_path = movieInfo.poster_path;

    return (
        <section className="single-movie-container">
            <div className="single-movie">
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="movie-page-image" className="single-movie-poster single-movie-info" />
                <div className="single-movie-text">
                    <h1 className="single-movie-info single-movie-title">{movieInfo.title}</h1>
                    <h3 className="single-movie-info single-movie-overview">{movieInfo.overview}</h3>
                </div>
            </div>
        </section>
    )
}

export default MoviePage;