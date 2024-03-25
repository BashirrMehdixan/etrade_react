import {useContext} from "react";
import {PostsContext} from "context/Posts/PostsContext";
import {BlogGridCard, LatestBlogCard} from "components/BlogCards";
import Breadcrumb from "layouts/Breadcrumb";

const Blog = () => {
    const {posts} = useContext(PostsContext);
    return (
        <>
            <section>
                <Breadcrumb/>
                <div className="container">
                    <div className="blog-box">
                        <div className="left-side">
                            {posts.length && posts.map((post, index) => <BlogGridCard key={index} post={post}/>)}
                        </div>
                        <div className="right-side">
                            {posts.map((post, index) => post.id < 4 && <LatestBlogCard key={index} post={post}/>)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog;