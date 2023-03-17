import { Link } from "react-router-dom";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import "./NavigationBar.css";
import SignInForm from "./SignInForm";

const NavigationBar = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [buttonName, setButtonName] = useState("SIGN IN");

  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleOpenSignIn = () => {
    setSignInOpen(true);
  };

  const changeButtonName = () => {
    setButtonName("SIGN IN");
    setUser(null);
  };

  const handleCloseSignIn = () => {
    setSignInOpen(false);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            <img src="images/logo.png" alt="car-rent-shop-logo"></img>
            Car Rent Shop
          </Link>
        </div>

        <div className="nav-menu">
          <div className="nav-item">
            <button onClick={handleOpenSignUp} className="nav-links">
              SIGN UP
            </button>
            <SignUpForm
              isVisible={isSignUpOpen}
              onClose={handleCloseSignUp}
              setUser={setUser}
              setButtonName={setButtonName}
            />
          </div>

          <div className="nav-item">
            <button
              onClick={
                buttonName === "SIGN OUT" ? changeButtonName : handleOpenSignIn
              }
              className="nav-links"
            >
              {buttonName}
            </button>
            <SignInForm
              isVisible2={isSignInOpen}
              onClose2={handleCloseSignIn}
              setUser={setUser}
              setButtonName={setButtonName}
            />
          </div>

          <div className="nav-avatar">
            <img src="./images/avatar.png" alt="user avatar"></img>
            {user ? (
              <p>
                {" "}
                <b> {user}</b>
              </p>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default NavigationBar;
