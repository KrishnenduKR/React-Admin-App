import "./Navbar.scss"

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt=""/>
        <span>Admin App</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="" className="icon"/>
        <img src="app.svg" alt="" className="icon"/>
        <img src="expand.svg" alt="" className="icon"/>
        <div className="notification">
          <img src="notifications.svg" alt=""/>
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://spng.pngfind.com/pngs/s/16-168087_wikipedia-user-icon-bynightsight-user-image-icon-png.png" alt=""></img>
          <span>Krish</span>
        </div>
        <img src="settings.svg" alt="" className="icon"/>
      </div>
    </div>
  )
}

export default Navbar