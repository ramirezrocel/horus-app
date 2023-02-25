import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import AddPost from "../../components/share/AddPost";
import Share from "../../components/share/Share";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      {/* this is home */}
      <Stories />
      {/* <AddPost /> */}
      <Share></Share>
      <Posts />
    </div>
  );
};

export default Home;
