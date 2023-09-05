import React, { useState } from  'react';
import styles from './Form.module.css'
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confPassword, setConfPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName, lastName, email, password, confPassword };
        console.log("Welcome", newUser);
    	setFirstName("");
    	setLastName("");
    	setEmail("");
    	setPassword("");
        setConfPassword("");
    };
    
    return(
        <>
        <form onSubmit={ createUser } className={styles.form}>
            <div className={styles.div}>
                <label>First Name: </label> 
                <input className={styles.input} type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div className={styles.div}>
                <label>Last Name: </label> 
                <input className={styles.input} type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div className={styles.div}>
                <label>Email Address: </label> 
                <input className={styles.input} type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className={styles.div}>
                <label>Password: </label>
                <input className={styles.input} type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className={styles.div}>
                <label>Confirm Password: </label>
                <input className={styles.input} type="Password" value={confPassword} onChange={ (e) => setConfPassword(e.target.value) }/>
            </div>
            <input className={styles.button} type="submit" value="Create User" />
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
