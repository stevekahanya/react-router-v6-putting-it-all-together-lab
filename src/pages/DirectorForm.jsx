import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

function DirectorForm() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  
  // Hooks for navigation and shared state
  const navigate = useNavigate();
  const { setDirectors } = useOutletContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDirector = { name, bio, movies: [] };

    fetch("http://localhost:4000/directors", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDirector)
    })
    .then(r => {
        if (!r.ok) { throw new Error("failed to add director"); }
        return r.json();
    })
    .then(data => {
        // 1. Update the state in DirectorContainer so the new director appears in the list
        setDirectors(prevDirectors => [...prevDirectors, data]);
        
        // 2. Programmatically navigate to the newly created director's page
        navigate(`/directors/${data.id}`);
    })
    .catch(err => console.error("Error:", err));
  }

  return (
    <div className="form-container">
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  );
}

export default DirectorForm;