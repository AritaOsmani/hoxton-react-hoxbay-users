import { useParams } from "react-router"
import { Link } from "react-router-dom";

function Welcome() {
    const params = useParams();
    return <div>
        <h1>Welcome to Hoxbay, {params.name}</h1>
        <h3>Try out your account by clicking here: <Link to='/login'>Log in</Link> </h3>

    </div>
}
export default Welcome