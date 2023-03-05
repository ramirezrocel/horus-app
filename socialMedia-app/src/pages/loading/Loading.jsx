import "../../components/post/Post";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { width } from "@mui/system";

const Loading = () => {
  return (
    <div className="post">
      <div className="container">
        <div className="content">
          <div style={{ width: 100 + "px", marginLeft: 40 + "%" }}>
            <img
              // height={100 + "px"}
              // width={100 + "px"}
              src="https://th.bing.com/th/id/R.aaaf80ba7a992e06d59f870aa2de1cbf?rik=ZYvIMRWjScKF%2bg&riu=http%3a%2f%2fsuperstorefinder.net%2fsupport%2fwp-content%2fuploads%2f2018%2f01%2forange_circles.gif&ehk=wsHkMwf5dSuXU4HR0uomu6D%2bx27nkEa2ane36StHuw8%3d&risl=&pid=ImgRaw&r=0"
              // src="https://th.bing.com/th/id/R.ae45d25b37adcebc457fd6798a2c2521?rik=%2f67sswj9i3bfeg&riu=http%3a%2f%2fwww.jsartgallery.in%2fimg%2floading-gallery.gif&ehk=atTDpw9U8yqobkGrB4niA6JYovtFIVPfwbNk7Pdz0xQ%3d&risl=&pid=ImgRaw&r=0"
              // src="https://orig00.deviantart.net/fab3/f/2014/230/0/7/bouncing_fireball__animated__by_goombablood-d7vqu7w.png"
              alt=""
            />
          </div>
        </div>
        <div className="info">
          <div className="item"></div>
        </div>
        {/* COmment Start */}
      </div>
    </div>
  );
};

export default Loading;
