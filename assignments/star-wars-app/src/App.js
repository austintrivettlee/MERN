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
  const [selection, setSelection] = useState("");
  const [id, setId] = useState("");

  return (
    <Router>
      <div>
        <select onChange={(e) => setSelection(e.target.value)}>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></input>
        <Link to={`/${selection}/${id}`}>
          <button>Search</button>
        </Link>
        <Routes>
          <Route path="/people/:id" element={<People/>} />
          <Route path="/planets/:id" element={<Planets/>} />
          <Route path="/" element={<h1>Welcome to Austin's Star wars Api Site</h1>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
