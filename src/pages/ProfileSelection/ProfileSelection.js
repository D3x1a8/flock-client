import React from "react";
import './profileselection.css';
import FlockLogo from '../../assets/images/FlockOtt_logo.png';
import ProfliePic from '../../assets/images/profilePic.png';

const ProfileSelection = () => {
    return (
        <div className="profile__container">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={FlockLogo}
                        alt=""
                    />
                </div>
            </div>
            <div className="bottom">
                <div className="profile__label">
                    <p>Who's Watching?</p>
                </div>
                <div className="profiles">
                    <div className="profile__select">
                        <img src={ProfliePic} />
                        <label>Profile 1</label>
                    </div>
                    <div className="profile__select">
                        <img src={ProfliePic} />
                        <label>Profile 2</label>
                    </div>
                    <div className="profile__select">
                        <img src={ProfliePic} />
                        <label>Profile 3</label>
                    </div>
                    <div className="profile__select">
                        <img src={ProfliePic} />
                        <label>Profile 4</label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileSelection;