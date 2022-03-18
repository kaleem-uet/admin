import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings,SettingsPowerOutlined } from "@material-ui/icons";
function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">HTC Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsPowerOutlined/>
          </div>
          <img
            className="topAvatar"
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
