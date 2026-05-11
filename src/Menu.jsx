import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Menu(){
    const {currentUser, setCurrentUser} = useContext(UserContext);

    if(currentUser){
        return (
            <div className="menu">
                <md-filled-button type="button" onClick={e => {setCurrentUser(null);}}>Logout {currentUser.name}</md-filled-button>
            </div>
        )
    }
}

