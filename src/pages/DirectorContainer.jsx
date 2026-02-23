import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const DirectorContainer = () => {
    const [directors, setDirectors] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/directors")
        .then(r => {
            if (!r.ok) { throw new Error("failed to fetch directors") }
            return r.json()
        })
        .then(setDirectors)
        .catch(console.log)
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                {<Outlet context={{ directors, setDirectors }} />/* all director components should render here depending on route */}
            </main>
        </>
    );
}

export default DirectorContainer;
