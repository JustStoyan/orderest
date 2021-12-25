import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="nav main-top-nav">
            <Link to='/'>Home</Link>
            <Link to='/food-list'>Menu</Link>
            <Link to='/users/login'>Login</Link>
            <Link to='/users/register'>Register</Link>
        </div>

    )
}


export default Navigation;