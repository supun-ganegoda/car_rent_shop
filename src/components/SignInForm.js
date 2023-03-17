import React, { useState, useEffect } from "react";
import "./SignInForm.css";

const SignInForm = ({ isVisible2, onClose2, setUser, setButtonName }) => {
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [registrations, setRegistrations] = useState([]);

  const handleCheck = () => {
    const match = registrations.find(
      (element) => element.nic === nic && element.email === email
    );
    if (match) {
      alert("User Found !");
      setUser(match.firstName);
      setButtonName("SIGN OUT");
      onClose2();
    } else {
      alert("No Users Found !");
      setUser("");
    }
    setNic("");
    setEmail("");
  };

  useEffect(() => {
    fetch("api/Registrations")
      .then((response) => response.json())
      .then((data) => setRegistrations(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(registrations);

  return (
    <>
      <div className={`popup ${isVisible2 ? "visible" : ""}`}>
        <div className="signin-container">
          <h2>Sign in</h2>

          <div className="signin-content">
            <div className="signin-holder">
              <label>NIC</label>
              <input
                type="text"
                id="nic"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                required
              />
            </div>
            <div className="signin-holder">
              <label>Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-button">
              <button type="submit" onClick={handleCheck}>
                Sign in
              </button>
            </div>
          </div>

          <div className="form-close">
            <button onClick={onClose2}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInForm;
