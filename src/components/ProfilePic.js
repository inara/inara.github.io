import React from "react";
import inara from "../inara.png";

function ProfilePic() {
    return (
        <img src={inara} alt={"Inara Ramji"} width={150} style={{borderRadius: '50%'}}/>
    )
}

export default ProfilePic;