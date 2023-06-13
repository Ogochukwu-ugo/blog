import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="not">
            <h2>Sorry</h2>
            <p>Page not found</p>
            <Link to="/">Go Back Home...</Link>
        </div>
    );
}
 
export default NotFound;