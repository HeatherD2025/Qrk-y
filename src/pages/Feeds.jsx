import NewsFeed from "../components/NewsFeed/NewsFeed.jsx";
// import APOD from '../components/APOD.jsx';
import APODCarouselContainer from "../components/NewsFeed/APODCarouselContainer.jsx";
import "../styles/feeds.css";

const Feeds = () => {
  return (
    <>
      <div className="mainNewsImagesContainer">
        <div className="col-6 col-lg-8 apod-container">
          <APODCarouselContainer />
        </div>

        <div className="col-6 col-lg-4">

          <NewsFeed />
        </div>
      </div>

      <footer>
        <p className="footer">© {new Date().getFullYear()} Heather DeLiso</p>
      </footer>
    </>
  );
};

export default Feeds;
