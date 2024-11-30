import YouTube from 'react-youtube';

const Videos = () => {
  return (
    <div id="videos">
      <div className="vidoes-container">
        <div className="videos-card">
          <YouTube videoId="WEwuQ-IIZF4"/>
        </div>
        <div className="videos-card">
          <YouTube videoId="FllHhHZ2-gk"/>
        </div>
        <div className="videos-card">
          <YouTube videoId="XbX_rexTv2c"/>
        </div>
      </div>
    </div>
  );
};

export default Videos;
