import React, { useState } from 'react'
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function FirebaseAuth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginAttempt = () => {
        // console.log(password);
        // alert(email ," ", password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log("user: ", user);
                setIsLoggedIn(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <>
            {/* <h2>FirebaseAuth</h2> */}
            <h3>Login Form</h3>
            {isLoggedIn ? <h3>Logged In</h3> :
                <>
                    <input type="text" placeholder='email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                    <input type="password"
                        placeholder='password'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                    <br></br>
                    <button
                        onClick={loginAttempt}
                    > login</button>
                </>
            }


        </>
    )
}

export default FirebaseAuth