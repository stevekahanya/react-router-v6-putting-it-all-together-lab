import { useParams, useOutletContext, Link, Outlet } from "react-router-dom"; // Add these imports

function DirectorCard() {
    const { id } = useParams(); // Get ID from URL
    const { directors, setDirectors } = useOutletContext();

    // Find the director matching the ID
    const director = directors.find(d => d.id === id);

    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        {/* Link to the movie detail page */}
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`movies/new`}>Add New Movie</Link>
            <hr />
            {/* Render MovieForm or MovieCard here */}
            <Outlet context={{ director, setDirectors }} />
        </div>
    )
}

export default DirectorCard;