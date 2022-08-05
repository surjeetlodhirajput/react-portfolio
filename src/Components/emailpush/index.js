import { memo } from 'react';
import './index.css';
import {faBell} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function EmailPush({obj,setEmailState}){
    function handleCross(e){
        setEmailState({...obj,state:false});
    }
return (
    <div className={"email-push "+obj.type}>
        <FontAwesomeIcon icon={faBell} />
        <span className="email-cross" onClick={handleCross}>X</span>
    <span className=''>{obj.message}</span>
    </div>
)
}

export default memo(EmailPush);