import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    
    faExclamationCircle,
    faQuestionCircle,
    faCog,
  } from "@fortawesome/free-solid-svg-icons";


  import './Header.scss';


const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src=" https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_meet_2017-2020.logo.png" />
            </div>
            <div className="action-btn">
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
                <FontAwesomeIcon className="icon-block" icon={faCog} />

            </div>

        </div>
        
    )
}

export default Header;
