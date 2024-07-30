import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import classes from './PostList.module.css';

export default function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (<ul className={classes.posts}>
        {posts.map(post => <Post key={post.body} id={post.id} author={post.author} body={post.body} />)}
      </ul>)}
      {posts.length === 0 && (<div style={{ textAlign: "center", color: "white" }}>
        <h2>There are no Posts yet.</h2>
        <p>Start Adding Somes!</p>
      </div>)}
    </>
  );
}