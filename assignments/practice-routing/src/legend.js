import logo from './logo.svg';
import './App.css';
import { 
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useParams } from 'react-router';
import Survey from './survey.jsx'

const Home = (props) => {
  return (
    <>
    <h1 style={{color: "red"}}>Home Component</h1>
    <Link to={"/about"}>Go to about</Link>
    </>
  )
}



function App() {
  return (
    <div>
      <p>
        <Link to="/location/seattle">Seattle</Link>
        ||
        <Link to="/location/chicago">Chicago</Link>
        ||
        <Link to="/location/burbank">Burbank</Link>
      </p>
      <Survey></Survey>
      <Routes>
        <Route path="/location/:city" element={<Location/>} />
      </Routes>
    </div>
  );
}

export default App;
