import { useNavigate } from 'react-router';
import { useState } from 'react/cjs/react.development';
import './Register.css'



function Register() {
    const navigate = useNavigate();
    const [alreadyExists, setAlreadyExists] = useState(false)

    // function checkIfAlreadyExists(email) {
    //     return fetch(`http://localhost:3000/users/${email}`).then(res => res.json())
    //         .then(res => {
    //             if (res.id === email) {
    //                 setAlreadyExists(true)
    //             }
    //         })
    // }
    function register(email, username, password) {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: email, username: username, password: password, basket: [] })
        }).then(res => res.json())
    }

    function doPasswordsMatch(pass1, pass2) {
        if (pass1 === pass2) {
            return true
        } else {
            return false;
        }
    }

    return <main className="register-main">
        <div className="form-container">
            <h1>Register</h1>
            <form action="" onSubmit={event => {
                event.preventDefault();
                const name = event.target.username.value;
                const email = event.target.email.value;
                const password = event.target.password.value;
                const confirmPass = event.target.confirm.value;

                // checkIfAlreadyExists(email).then(res => {
                //     console.log('Already exists:', alreadyExists)
                //     if (alreadyExists) {
                //         alert('User already exists')
                //     }
                // }
                // )


                if (doPasswordsMatch(password, confirmPass)) {
                    register(email, name, password)
                    navigate(`/welcome/${name}`)
                } else {
                    alert("Passwords don't match. Please try again.")
                }
                event.target.reset();

            }}>
                <input type="text" name='username' placeholder="Name" required />
                <input type="email" name='email' placeholder="Email" required />
                <input type="password" name='password' placeholder="Password" required />
                <input type="password" name='confirm' placeholder="Confirm Password" required />
                <button type='submit' className="register-button">Register</button>
            </form>
        </div>
    </main>
}
export default Register