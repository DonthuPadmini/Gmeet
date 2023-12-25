import { faCopy, faCross, faShieldAlt, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Meeting.scss';

const Meeting = ({ setMeetInfoPopup,url }) => {
    return (
        <div className="meeting-info">
            <div className="meetings">
                <h3>Your meeting's ready</h3>
                <FontAwesomeIcon className="icon-block" icon={faTimes}
                onClick={() => {
                    setMeetInfoPopup(false);
                }} />
            </div>

            <button className="others">
                <FontAwesomeIcon className="icons" icon={faUser} />
                Add Others

            </button>

            <div className="link">
                <p className="links">
                    Or share this meeting link with others you want in the meeting
                </p>
                <span className="url">
                    {url}
                    
                    <FontAwesomeIcon className="icon-blocks" icon={faCopy}  onClick={() => navigator.clipboard.writeText(url)}/>
                </span>

            </div>
            <div className="join">
                <FontAwesomeIcon className="icon" icon={faShieldAlt} />
                <p>
                    People who use this meeting link must get your permission brfore they can join
                </p>


            </div>
            <div className="text">
                Joined as akshaya@gmail.com
            </div>

        </div>
    )
}
export default Meeting;
