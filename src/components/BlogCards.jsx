import {useContext} from "react";
import {Link} from "react-router-dom";
import {UsersContext} from "context/Users/UsersContext";

export const BlogListCard = ({post}) => {
    return (
        <>

        </>
    )
}

export const BlogGridCard = ({post}) => {
    const {users} = useContext(UsersContext);
    const authUser = users.find(user => user.id === post.userId);
    console.log(authUser)
    return (
        authUser &&
        <>
            <div className="blog-grid-item">
                <div className="blog-img">
                    <img src={"./assets/images/blog/blog-img.png"} alt=""/>
                </div>
                <h3 className="blog-title">
                    {post.title}
                </h3>
                <div className="post-auth">
                    <div className="auth-img">
                        <img src={authUser.image} alt={authUser.name}/>
                    </div>
                    <div className="post-info">
                        <h5 className="auth-name">
                            {authUser.firstName} {authUser.lastName}
                        </h5>
                        <div className="post-date">
                            Mar 25, 2022
                        </div>
                    </div>
                </div>
                <div className="post-body">
                    <p>
                        {post.body}
                    </p>
                </div>
                <Link to={post.id.toString()} className="btn btn-blue">Read more</Link>
            </div>
        </>
    )
}