import { Dispatch, JSX } from "react";

export interface MainContextInterface {
    posts: PostInterface[];
    maxUserNumbers: number;
    // properly typizated setter
    setPosts: Dispatch<PostInterface[]>;
    setMaxUserNumbers: Dispatch<number>;
    renderPosts: () => JSX.Element;
}

export interface PostInterface {
    body: string;
    id: number;
    title: string;
    userId: number;
} 