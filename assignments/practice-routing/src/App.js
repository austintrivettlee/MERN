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
      <h1>Welcome</h1>
    </>
  )
}

const Word = (props) => {
  const {input} = useParams("")
  const {txtColor} = useParams("")
  const {bgColor} = useParams("")
  if (isNaN(input)) {
    if(txtColor == undefined) {
      return (<h1>The word is {input}</h1>)
    } else if ( bgColor == undefined) {
      return(<h1 style={{color: txtColor}}>The word is {input}</h1>)
    } else {
      return(<h1 style={{color: txtColor, background: bgColor, align: "center"}}>The word is {input}</h1>)
    }
  } else {
    if(txtColor == undefined) {
      return (<h1>The number is {input}</h1>)
    } else if ( bgColor == undefined) {
      return(<h1 style={{color: txtColor}}>The number is {input}</h1>)
    } else {
      return(<h1 style={{color: txtColor, background: bgColor, align: "center"}}>The number is {input}</h1>)
    }
  }
}



function App() {
  return (
    <div>    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:input" element={<Word/>}></Route>
      <Route path="/:input/:txtColor" element={<Word/>}></Route>
      <Route path="/:input/:txtColor/:bgColor" element={<Word/>}></Route>
      <Route></Route>
    </Routes>
    </div>
  );
}

export default App;
