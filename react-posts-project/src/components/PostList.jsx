import { useEffect, useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from './PostList.module.css';

export default function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(postData)
    })
    setPosts((prevState) => [postData, ...prevState]);
  }

  return (
    <>
      {isPosting && <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
      </Modal>}
      {posts.length > 0 && (<ul className={classes.posts}>
        {posts.map(post => <Post key={post.author} author={post.author} body={post.body} />)}
      </ul>)}
      {posts.length === 0 && (<div style={{ textAlign: "center", color: "white" }}>
        <h2>There are no Posts yet.</h2>
        <p>Start Adding Somes!</p>
      </div>)}
    </>
  );
}