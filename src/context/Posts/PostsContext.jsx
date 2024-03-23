import {useState, createContext, useEffect} from "react";

export const PostsContext = createContext();

const PostsProvider = ({children}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts))
            .catch(err => console.log(err));
    }, [])

    return (
        <PostsContext.Provider value={{posts}}>
            {children}
        </PostsContext.Provider>
    )

}

export default PostsProvider;