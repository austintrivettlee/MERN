// const App = () => <h1>Our First React Page has rendered</h1>;

// ReactDom.render(<App/>, document.getElementById("root"));


// <script type="text/babel">
//     ReactDOM.render(<App />, document.getElementById('root'));
// </script>

const [text, setText] = useState("");
setText("state state I am setting state!!!");
console.log(text);

import React from 'react';
 
    
const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return ( 
        <ul>
            { groceryList.map( (item, i) => 
                <li key={ i }>{ item }</li> ) }
        </ul>
    ); 
}
    
export default Groceries;

