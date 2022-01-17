import { Link, useNavigate } from "react-router-dom";
import AccountInfo from "./AccountInfo";

const randColour = () =>
  ["green", "red", "blue", "yellow"][Math.floor(Math.random() * 4)];

function Header(props) {
  const navigate = useNavigate();

  return (
    <header
      className="header"
      // @ts-ignore
      style={{ ["--border-colour"]: `var(--${randColour()})` }}
    >
      <div className="header__logo" style={{ color: `var(--${randColour()})` }}>
        Hoxbay
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            {/* Create here a link to this page */}
            <Link to='/products'>Home</Link>

          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to='/categories'>Categories</Link>

          </li>
          <li>
            {/* Create here a link to this page */}
            <Link to='/basket'>Basket</Link>
          </li>
          <li className='search-element'>
            <form action="" onSubmit={event => {
              event.preventDefault();
              const title = event.target.search.value;
              navigate(`/products/product/${title}`)
              event.target.reset();

            }}>
              <input type="text" placeholder="Search for a product" name='search' />
            </form>
          </li>
          {props.user !== '' && <AccountInfo user={props.user} /> || <div>
            <li>
              <Link to='/login'><button className="logIn-btn">Log In</button></Link>
            </li>
            <li>
              <Link to='/register'><button className="register-btn">Register</button></Link>
            </li>
          </div>}



        </ul>
      </nav>
    </header>
  );
}
export default Header;
