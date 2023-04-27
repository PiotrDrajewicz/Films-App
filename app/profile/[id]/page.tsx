
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

    return (
        <div>
            <h1>{movieInfo.title}</h1>
            <h3>{movieInfo.movieId}</h3>
        </div>
    )
}

export default MoviePage;