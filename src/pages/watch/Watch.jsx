import { ArrowBackOutlined } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
// import ReactHlsPlayer from 'react-hls-player';
import "./watch.scss";
import VideoComponent from '../../components/videoPlayer/VideoComponent';


export default function Watch() {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className="watch">
      {console.log(movie)}
      <Link to="/">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <VideoComponent encryptedUrl={movie.trailer} />
    </div>
  );
}
