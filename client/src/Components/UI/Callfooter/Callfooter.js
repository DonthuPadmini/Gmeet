import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMicrophone,
  faPhone,
  faAngleUp,
  faClosedCaptioning,
  faDesktop,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import "./Callfooter.scss";

const Callfooter = ({
  isPresenting,
  stopScreenShare,
  screenShare,
  isAudio,
  toggleAudio,
  disconnectCall,
}) => {
  return (
    <div className="footer-items">
      <div className="left">
        <div className="icon-block">
          Meeting details
          <FontAwesomeIcon className="icons" icon={faAngleUp} />
        </div>
      </div>
      <div className="center-items">
        <div
          className={`icon-item ${!isAudio ? "red-bg" : null}`}
          onClick={() => toggleAudio(!isAudio)}
        >
          <FontAwesomeIcon
            className="icon-blo"
            icon={isAudio ? faMicrophone : faMicrophoneSlash}
          />
        </div>
        <div className="icon-item" onClick={disconnectCall}>
          <FontAwesomeIcon className="icon-blo red" icon={faPhone} />
        </div>
        <div className="icon-item">
          <FontAwesomeIcon className="icon-blo" icon={faVideo} />
        </div>
      </div>
      <div className="right-item">
        <div className="icon-block">
          <FontAwesomeIcon className="iconss red" icon={faClosedCaptioning} />
          <p className="title">Turn on captions</p>
        </div>

        {isPresenting ? (
          <div className="icon-block" onClick={stopScreenShare}>
            <FontAwesomeIcon className="iconss red" icon={faDesktop} />
            <p className="title">Stop presenting</p>
          </div>
        ) : (
          <div className="icon-block" onClick={screenShare}>
            <FontAwesomeIcon className="iconss red" icon={faDesktop} />
            <p className="title">Present now</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Callfooter;
