import { useState } from "react";
import "./Previewer.css";
import ThankYouCard from "./ThankYouCard";

const Previewer = ({ selectedCard, handleClose }) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    //handleClose();
    setDisplay(true);
  };

  return (
    <>
      <div className="preview-container">
        <div className="previewer-col">
          <div className="previewer-image">
            <img src={selectedCard.url} alt={selectedCard.name}></img>
          </div>
          <div className="previewer-description">
            <p>{selectedCard.name}</p>
            <p id="previewer-drive">{selectedCard.drive} Drive</p>
          </div>
        </div>

        <div className="previewer-col">
          <div className="priviwer-title">GENERAL SPECIFICATION</div>
          <div className="previwer-details">
            <p>Passengers: {selectedCard.passengers}</p>
            <p>Seats: {selectedCard.seats}</p>
            <p>Air bags: {selectedCard.airbags}</p>
            <p>Transmission: {selectedCard.transmission}</p>
            <p>Doors: {selectedCard.doors}</p>
            <p>Air conditioning: {selectedCard.ac}</p>
            <p id="previewer-deposite">Deposite: Rs {selectedCard.deposite}</p>
            <p id="previewer-price">Price: Rs {selectedCard.price} </p>
          </div>
          <div className="previewer-buttons">
            <button onClick={handleClick}>BOOK NOW</button>
          </div>
          <button id="previewer-close" onClick={handleClose}>
            close
          </button>
        </div>
        {display && (
          <ThankYouCard handleClose={handleClose} selectedItem={selectedCard} />
        )}
      </div>
    </>
  );
};

export default Previewer;
