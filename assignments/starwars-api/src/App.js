import "./App.css";
import { 
    Router
  , Routes
  , Route
  , Link} from "react-router-dom";
import { useState } from "react";
import Planets from './Planets';
import People from './People';

function App() {
  const [selection, setSelection] = useState("people");
  const [id, setId] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
      <div>
        <select onChange={(e) => setSelection(e.target.value)}>
          <option value="planets">Planets</option>
          <option value="people">People</option>
        </select>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <Link to={`/${selection}/${id}`}>
          <button>Search</button>
        </Link>
        {hasError ? (
        <div>
          <img src="./obi.jpg" alt="Obi-Wan Kenobi" />
          <p>These aren't the droids you're looking for.</p>
        </div>
      ) : (
        <Routes>
          <Route path="/people/:id" element={<People onError={handleError} />} />
          <Route path="/planets/:id" element={<Planets onError={handleError} />} />
          <Route path="/" element={<h1>Welcome to Austin's Star wars Api Site</h1>} />
        </Routes>
      )}
      </div>
  );
}

export default App;
