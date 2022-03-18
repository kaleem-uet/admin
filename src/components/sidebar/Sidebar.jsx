import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle ">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Link to="/" className="Link">
              <Timeline className="sidebarIcon activButton" />

                 Analytics
              </Link>
            </li>
              
          
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Link to="/users" className="Link">
                <PermIdentity className="sidebarIcon activButton" />
               Student
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to="/touter" className="Link">
                <Storefront className="sidebarIcon activButton" />
                Touters
              </Link>
            </li>

            
            
            
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <li className="sidebarListItem">
              <Link to="/products" className="Link">
              <MailOutline className="sidebarIcon activButton" />
                 Mail
              </Link>
            </li>
            <li className="sidebarListItem">
              <Link to='/feedback' className="Link">
              <DynamicFeed className="sidebarIcon activButton" />
              Feedback
              </Link>
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon activButton" />
              Messages
            </li>
          </ul>
        </div>
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon activButton" />
              Manage
            </li>
          
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
