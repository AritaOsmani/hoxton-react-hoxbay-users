import { useNavigate } from 'react-router'
import './LogIn.css'
function LogIn(props) {
    const navigate = useNavigate();
    function sigIn(email, password) {
        fetch(`http://localhost:3000/users/${email}`).then(res => res.json())
            .then(userFromServer => {
                if (userFromServer.password === password) {
                    props.setUser(userFromServer)
                    props.setBasket(userFromServer.basket)
                }
            })
    }
    return <main className='login-main'>
        <div
            className="form-container">
            <h1>Log in</h1>
            <form onSubmit={event => {
                event.preventDefault();
                const email = event.target.userEmail.value;
                const password = event.target.userPassword.value;
                sigIn(email, password)
                event.target.reset();
                navigate('/basket');
            }} action="">
                <input required type="email" placeholder="Email" name='userEmail' />
                <input required type="password" placeholder="Password" name='userPassword' />
                <button className="log-btn">Log in</button>
            </form>
        </div>
    </main>
}
export default LogIn