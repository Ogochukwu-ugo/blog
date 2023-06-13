import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blogs.id, {
            method: 'DELETE'
        }).then(()=> {
            navigate('/');
        })
    }

    return ( 
        <div className="details">
            {isLoading && <div>{ isLoading }</div>}
            {error && <div>{ error }</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>Written by { blogs.author }</p>
                    <div>{ blogs.body }</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;