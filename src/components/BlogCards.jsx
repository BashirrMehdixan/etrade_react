import {useContext} from "react";
import {Link} from "react-router-dom";
import {UsersContext} from "context/Users/UsersContext";

export const BlogGridCard = ({post}) => {
    const {users} = useContext(UsersContext);
    const authUser = users.find(user => user.id === post.userId);
    return (
        authUser &&
        <>
            <div className="blog-list-item">
                <h3 className="blog-title">
                    <Link to={post.id.toString()}>
                        “An oral history of the AIM away message (by the people who were there)”
                    </Link>
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
            </div>
            <div className="blog-grid-item">
                <div className="blog-img">
                    <Link to={post.id.toString()}>
                        <img src={"./assets/images/blog/blog-img.png"} alt=""/>
                    </Link>
                </div>
                <h3 className="blog-title">
                    <Link to={post.id.toString()}>
                        {post.title}
                    </Link>
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