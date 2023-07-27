import React, {useContext, useEffect} from 'react'
import { MainContext } from '../contexts/MainContext';

export const Posts = () => {
    const {posts, setPosts, renderPosts} = useContext(MainContext)!;
    console.log(posts, "POSTS");

    // first render
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setPosts(json);
        });
    }, []);

  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",verticalAlign:"middle"}}>
        <h1 style={{margin:"10px"}}>Posts</h1>
        <h2 style={{margin:"10px"}}>Top 10 posts</h2>
      </div>
      {renderPosts()}
    </div>
  )
}
