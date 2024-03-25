import {useContext} from "react";
import {PostsContext} from "context/Posts/PostsContext";
import {useParams} from "react-router-dom";

const BlogDetail = () => {
    const {posts} = useContext(PostsContext);
    const {id} = useParams();
    const post = posts.find(post => post.id === parseInt(id));
    return (
        post &&
        <>
            <section id="blog-detail " className='blog-detail-container'>
                <div className="container">
                    <div className="post-img">
                        <img src={'../assets/images/blog/blog-single.jpg'} alt=""/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetail;