import MovieProfileItem from "./MovieProfileItem";

const ProfilePage: React.FC = () => {
    return (
        <>
            <section className="fav-movies-section">
                <h1>Favourite movies</h1>
                <div className="fav-movies-container">
                    <MovieProfileItem />
                </div>
            </section>
            <section className="rated-movies-section">

            </section>
        </>
    )
}

export default ProfilePage;