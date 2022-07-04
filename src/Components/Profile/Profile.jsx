import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://www.prior.com/wp-content/uploads/2021/03/QG_brochure_blog_-875x350.jpg"
          alt="bg"
        />
      </div>
      <div> ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
