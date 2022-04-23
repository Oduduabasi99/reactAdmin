import "./sidebar.css"
import {LineStyle, Timeline, BusinessCenter, AccountBalanceOutlined, TrendingUp, FeedbackOutlined, EmailOutlined, Person, Message, WorkOutlineOutlined, Report} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
      <div className="sidebar">
          <div className="sidebarWrapper">
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Dashboard</h3>
                  <ul className="sidebarList">
                      <Link to="/" className="link">
                      <li className="sidebarListItem active">
                          <LineStyle className="sidebarIcon" />
                          Home
                          </li>
                        </Link>
                      <li className="sidebarListItem">
                          <Timeline className="sidebarIcon" />
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <TrendingUp className="sidebarIcon" />
                          Sales
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Quick Menu</h3>
                  <ul className="sidebarList">
                      <Link to="/users" className="link">
                      <li className="sidebarListItem">
                          <Person className="sidebarIcon" />
                          Users
                          </li>
                      </Link>
                      <Link to="/products" className="link">
                      <li className="sidebarListItem">
                          <BusinessCenter className="sidebarIcon" />
                          Products
                          </li>
                        </Link>
                      <li className="sidebarListItem">
                          <AccountBalanceOutlined className="sidebarIcon" />
                          Transactions
                      </li>
                      <li className="sidebarListItem">
                          <Report className="sidebarIcon" />
                          Reports
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Notifications</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <EmailOutlined className="sidebarIcon" />
                          Mail
                      </li>
                      <li className="sidebarListItem">
                          <FeedbackOutlined className="sidebarIcon" />
                          Feedback
                      </li>
                      <li className="sidebarListItem">
                          <Message className="sidebarIcon" />
                          Messages
                      </li>
                  </ul>
              </div>
              <div className="sidebarMenu">
                  <h3 className="sidebarTitle">Staffs</h3>
                  <ul className="sidebarList">
                      <li className="sidebarListItem">
                          <WorkOutlineOutlined className="sidebarIcon" />
                          Manage
                      </li>
                      <li className="sidebarListItem">
                          <Timeline className="sidebarIcon" />
                          Analytics
                      </li>
                      <li className="sidebarListItem">
                          <Report className="sidebarIcon" />
                          Reports
                      </li>
                  </ul>
              </div>
          </div>
    </div>
  )
}
