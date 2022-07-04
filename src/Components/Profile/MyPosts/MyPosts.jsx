import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message = 'Hey, why nobody love me?' likes = '23'/>
        <Post message = "It's my first post" likes = '3'/>
        <Post message = 'Are you think my nose is so big?' likes = '16'/>
      </div>
    </div>
  );
};

export default MyPosts;
