import "./sidebar.css";
import EcoOutlinedIcon from "@material-ui/icons/EcoOutlined";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import ViewCarouselOutlinedIcon from "@material-ui/icons/ViewCarouselOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import InsertChartOutlinedIcon from "@material-ui/icons/InsertChartOutlined";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
        
          <h3>Webapps</h3>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon />
              Email
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutlineIcon />
              Chat
            </li>
            <li className="sidebarListItem">
              <CalendarTodayIcon />
              Calendar
            </li>
          </ul>
          <h3>Components</h3>

          <ul className="sidebarList">
            <li className="sidebarListItem">
              <EcoOutlinedIcon />
              UI kit
            </li>
            <li className="sidebarListItem">
              <ViewCarouselOutlinedIcon />
              Advanced UI
            </li>
            <li className="sidebarListItem">
              <DescriptionOutlinedIcon />
              Forms
            </li>
            <li className="sidebarListItem">
              <InsertChartOutlinedIcon />
              Charts & graphs
            </li>
            <li className="sidebarListItem">
              <TableChartOutlinedIcon />
              Tables
            </li>
            <li className="sidebarListItem">
              <SentimentSatisfiedOutlinedIcon />
              Icons
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;