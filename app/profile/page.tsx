import MovieProfileItem from "./MovieProfileItem";

const getMovies = async () => {
    const res = await fetch('http://127.0.0.1:8090/api/collections/fav_movies/records?page=1&perPage=30', 
    {cache: 'no-store'}
    );
    const data = await res.json();
    console.log(data);
    return data.items as any[];
}

const ProfilePage = async () => {
    const favMovies = await getMovies();
    
    return (
        <>
            <section className="fav-movies-section">
                <h1>Favourite movies</h1>
                <div className="fav-movies-container">
                    {favMovies?.map((movie) => {
                        return <MovieProfileItem key={movie.id} {...movie} />
                    })}
                </div>
            </section>
            <section className="rated-movies-section">

            </section>
        </>
    )
}

export default ProfilePage;