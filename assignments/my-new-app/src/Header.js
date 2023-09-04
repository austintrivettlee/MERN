const Header = (props) => {
    const { firstName, lastName, age, hairColor} = props;
    return (
        <div>
            <h1>
                My name is {firstName} {lastName}
            </h1>
            <p>Age {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}
export default Header;