import { faMessage, faUserCircle, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Callheader.scss';
const Callheader = () => {
    return(
        <div className="frame-header">
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon-block" icon={faUserFriends} />
            </div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon-block" icon={faMessage} />
                <span className="alert-circle-icon"></span>
            </div>
            <div className="header-items date-block">3:00 PM</div>
            <div className="header-items icon-block">
                <FontAwesomeIcon className="icon-profile" icon={faUserCircle} />
            </div>

        </div>
    )
}
export default Callheader;
