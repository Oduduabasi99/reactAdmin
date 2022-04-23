import "./widgetSmall.css"
import Avatar from '../../images/avater.jpg';
import {Visibility} from '@material-ui/icons';

export default function WidgetSmall() {
  return (
      <div className="widgetSmall">
          <span className="widgetSmallTitle">New Join Members</span>
          <ul className="widgetSmallList">
              <li className="widgetSmallListItem">
                  <img src={Avatar} alt="" className="widgetSmallImg" />
                  <div className="widgetSmallUser">
                      <span className="widgetSmallUsername">John Doe</span>
                      <span className="widgetSmallUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmallButton">
                      <Visibility className="widgetSmallIcon" />
                      Display
                  </button>
              </li>
              <li className="widgetSmallListItem">
                  <img src={Avatar} alt="" className="widgetSmallImg" />
                  <div className="widgetSmallUser">
                      <span className="widgetSmallUsername">John Doe</span>
                      <span className="widgetSmallUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmallButton">
                      <Visibility className="widgetSmallIcon" />
                      Display
                  </button>
              </li>
              <li className="widgetSmallListItem">
                  <img src={Avatar} alt="" className="widgetSmallImg" />
                  <div className="widgetSmallUser">
                      <span className="widgetSmallUsername">John Doe</span>
                      <span className="widgetSmallUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmallButton">
                      <Visibility className="widgetSmallIcon" />
                      Display
                  </button>
              </li>
              <li className="widgetSmallListItem">
                  <img src={Avatar} alt="" className="widgetSmallImg" />
                  <div className="widgetSmallUser">
                      <span className="widgetSmallUsername">John Doe</span>
                      <span className="widgetSmallUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmallButton">
                      <Visibility className="widgetSmallIcon" />
                      Display
                  </button>
              </li>
              <li className="widgetSmallListItem">
                  <img src={Avatar} alt="" className="widgetSmallImg" />
                  <div className="widgetSmallUser">
                      <span className="widgetSmallUsername">John Doe</span>
                      <span className="widgetSmallUserTitle">Software Engineer</span>
                  </div>
                  <button className="widgetSmallButton">
                      <Visibility className="widgetSmallIcon" />
                      Display
                  </button>
              </li>
          </ul>
    </div>
  )
}
