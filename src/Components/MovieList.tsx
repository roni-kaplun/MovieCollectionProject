function MovieList({movies}: {movies: {
    title: string;
    coverUrl: string;
}[]}) {
    return (
        <section className="movie-list">
            {movies.map(movie => <figure>
                <img src={movie.coverUrl}></img> 
                <figcaption>{movie.title}</figcaption> 
            </figure>)}
        </section>
    );
};

export default MovieList;
