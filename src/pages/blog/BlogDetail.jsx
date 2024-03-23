import {useContext} from "react";
import {PostsContext} from "../../context/Posts/PostsContext";
import {useParams} from "react-router-dom";

const BlogDetail = () => {
    const {posts} = useContext(PostsContext);
    const {id} = useParams();
    const post = posts.find(post => post.id === parseInt(id));
    return (
        <>
            <section>
                <div className="container">
                    {post.title}
                </div>
            </section>
        </>
    )
}

export default BlogDetail;