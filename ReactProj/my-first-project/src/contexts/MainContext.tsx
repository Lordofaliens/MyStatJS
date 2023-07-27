import React, { createContext, useState, PropsWithChildren } from "react";
import { MainContextInterface, PostInterface } from "../types";

export const MainContext = createContext<MainContextInterface | null>(null);

interface PropsInterface extends PropsWithChildren {
   a?: number
}

export const MainContextProvider = ({a, children}: PropsInterface) => {
  console.log(children, a, "!!!");
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [maxUserNumbers , setMaxUserNumbers] = useState<number>(5);

  const renderPosts = () => {
    return (
      <div className="posts">
        {posts.slice(0,10).map((post) => (
          <div key={post.title}>
            <p style={{textAlign:"center"}}>{post.title}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <MainContext.Provider
      value={{
        posts: posts,
        maxUserNumbers: maxUserNumbers,
        setPosts: setPosts,

        // value passed to Users.tsx
        setMaxUserNumbers: setMaxUserNumbers,
        renderPosts: renderPosts
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
