import PropTypes from "prop-types";
import "./Home.css";

function Home({isLoggedIn, userName= "Guest"}) {
  const welcome = <h2 className="welcome">
                    Welcome, {userName}
                  </h2>
  const login = <h2 className="login">
                  Please login to enjoy the website
                </h2>

  if(isLoggedIn) {
    return (welcome);
  }
  else {
    return (login);
  }
}

Home.propTypes = {
  isLoggedIn : PropTypes.bool,
  userName : PropTypes.string,
}

export default Home;