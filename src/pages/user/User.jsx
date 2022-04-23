import "./user.css"
import Avatar from "../../images/avater.jpg"
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function User() {
  return (
      <div className="user">
          <div className="userTitleContainer">
              <h1 className="userTitle">Edit User</h1>
              <Link to="/newUser">
              <button className="userAddBtn">Create</button>
              </Link>
          </div>
          <div className="userContainer">
              <div className="userDisplay">
                  <div className="userDisplayTop">
                      <img src={Avatar} alt="" className="userDisplayImg" />
                      <div className="userDisplayTopTitle">
                          <span className="userShowUsername">John Doe</span>
                          <span className="userShowUserTitle">Software Engineer</span>
                      </div>
                  </div>
                  <div className="userDisplayBottom">
                      <span className="userShowTitle">Account Details</span>
                      <div className="userShowInfo">
                      <PermIdentity className="userShowIcon" />
                      <span className="userShowInfoTitle">johndoe001</span>
                      </div>
                      <div className="userShowInfo">
                      <CalendarToday className="userShowIcon" />
                      <span className="userShowInfoTitle">10/08/1999</span>
                      </div>
                      <span className="userShowTitle">Contact Details</span>
                      <div className="userShowInfo">
                      <PhoneAndroid className="userShowIcon" />
                      <span className="userShowInfoTitle">+1 123 456 7890</span>
                      </div>
                      <div className="userShowInfo">
                      <MailOutline className="userShowIcon" />
                      <span className="userShowInfoTitle">johndoe001@gmail.com</span>
                      </div>
                      <div className="userShowInfo">
                      <LocationSearching className="userShowIcon" />
                      <span className="userShowInfoTitle">New York | USA</span>
                      </div>
                  </div>
              </div>
              <div className="userUpdate">
                  <span className="userUpdateTitle">Edit</span>
                  <form className="userUpdateForm">
                      <div className="userUpdateLeft">
                          <div className="userUpdateItem">
                              <label>Username</label>
                              <input type="text" placeholder="johndoe001" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Full Name</label>
                              <input type="text" placeholder="John Doe" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Email</label>
                              <input type="text" placeholder="johndoe001@gmail.com" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Phone</label>
                              <input type="text" placeholder="+1 123 456 7890" className="userUpdateInput" />
                          </div>
                          <div className="userUpdateItem">
                              <label>Address</label>
                              <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                          </div>
                      </div>
                      <div className="userUpdateRight">
                          <div className="userUpdateUpload">
                              <img src={Avatar} alt="" className="userUpdateImg" />
                              <label htmlFor="file"><Publish className="userUpdateIcon" /></label>
                              <input type="file" id="file" style={{display: "none"}} />
                          </div>
                          <button className="userUpdateBtn">Update</button>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  )
}
