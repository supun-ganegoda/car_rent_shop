import "./ThankYouCard.css";

const ThankYouCard = ({ handleClose, selectedItem }) => {
  return (
    <>
      <div className="thankYou-background">
        <div className="thankYou-container">
          <div className="thankYou-image">
            <img src="../images/thankYou.png" alt="success" />
          </div>
          <div className="thankYou-header">
            <h3>SUCCESS</h3>
            <p>THANK YOU</p>
          </div>
          <div className="thankYou-orderDetails">
            <h4>ORDER DETAILS</h4>
            <p>
              {selectedItem.name} - {selectedItem.plateNo}
            </p>
            <p>{selectedItem.drive}</p>
          </div>
          <div className="thankYou-logo">
            <img src="../images/logo.png" alt="logo" />
          </div>
          <div className="thankYou-close">
            <button onClick={handleClose}>X</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYouCard;
