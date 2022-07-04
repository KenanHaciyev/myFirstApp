import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://vjoy.cc/wp-content/uploads/2020/11/1572690290_4.jpg"
        alt="gangCat"
      />
      {props.message}
      <div>
        <span>likes {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
