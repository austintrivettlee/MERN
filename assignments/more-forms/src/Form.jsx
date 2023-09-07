import React, { useState } from  'react';
import styles from './Form.module.css'
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
        
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
        setConfPassword("");
        setHasBeenSubmitted(true)
    };

    const handleFirstNameValidation = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1){
            setFirstNameError("First Name must be entered!")
        } else if(e.target.value.length < 3){
            setFirstNameError("First Name must be 2 or more characters!")
        } else {
            setFirstNameError("")
        }
    }
    const handleLastNameValidation = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1){
            setLastNameError("Last Name must be entered!")
        } else if(e.target.value.length < 3){
            setLastNameError("Last Name must be 2 or more characters!")
        } else {
            setLastNameError("")
        }
    }
    const handleEmailValidation = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email must be entered!")
        } else if(e.target.value.length < 5){
            setEmailError("Email must be 5 or more characters!")
        } else {
            setEmailError("")
        }
    }
    const handlePasswordValidation = (e) => {
        
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password must be entered!")
        } else if(e.target.value.length < 8){
            setPasswordError("Password must be 8 or more characters!")
        } else {
            setPasswordError("")
        }
    }
    const handleConfPasswordValidation = (e) => {
        setConfPassword(e.target.value);
        if (e.target.value != password) {
            setPasswordError("Passwords must match!")
        } else {
            setPasswordError("")
        }
    }
    
    return(
        <>
        <form onSubmit={ (e) => e.preventDefault() } className={styles.form}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome please submit the form!</h3>
            } 

            <div className={styles.div}>
                <label>First Name: </label> 
                <input className={styles.input} type="text" value={firstName} onChange={handleFirstNameValidation} />
            </div>
            <div className={styles.div}>
                <label>Last Name: </label> 
                <input className={styles.input} type="text" value={lastName} onChange={handleLastNameValidation} />
            </div>
            <div className={styles.div}>
                <label>Email Address: </label> 
                <input className={styles.input} type="text" value={email} onChange={handleEmailValidation} />
            </div>
            <div className={styles.div}>
                <label>Password: </label>
                <input className={styles.input} type="password" value={password} onChange={handlePasswordValidation} />
            </div>
            <div className={styles.div}>
                <label>Confirm Password: </label>
                <input className={styles.input} type="Password" value={confPassword} onChange={handleConfPasswordValidation}/>
            </div>
            <input className={styles.button} type="submit" value="Create User" />
            {
                firstNameError ? 
                <p>{firstNameError}</p> :
                ""
            }
            {
                lastNameError ? 
                <p>{lastNameError}</p> :
                ""
            }
            {
                emailError ? 
                <p>{emailError}</p> :
                ""
            }
            {
                passwordError ? 
                <p>{passwordError}</p> :
                ""
            }
        </form>


        <table className={styles.table}>
            <tr>
                <td className={styles.tableHeader}>First Name</td>
                <td className={styles.tableHeader}>Last Name</td>
                <td className={styles.tableHeader}>Email</td>
                <td className={styles.tableHeader}>Password</td>
                <td className={styles.tableHeader}>Confirm Password</td>
            </tr>
            <tr>
                <td className={styles.tableData}>{firstName}</td>
                <td className={styles.tableData}>{lastName}</td>
                <td className={styles.tableData}>{email}</td>
                <td className={styles.tableData}>{password}</td>
                <td className={styles.tableData}>{confPassword}</td>
            </tr>
        </table>
        </>
        
    );
};
    
export default UserForm;
