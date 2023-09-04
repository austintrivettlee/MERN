import { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, hairColor, age} = props;

    const [state, setState] = useState({age: age});
    
    const handleClick = () => {
        setState({
            age: state.age + 1
        });
    }

    return (
        <div>
            <h1>
                {lastName}, {firstName}
            </h1>
            <p>
                Age: {state.age}
            </p>
            <p>
                Hair Color: {hairColor}
            </p>
            <button onClick={ handleClick }>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}
export default PersonCard;