import React, { useEffect, useState } from "react";
import Previewer from "./Previewer";
import "./Card.css";

const Card = ({ url, price, name }) => {
  return (
    <div className="card">
      <img src={url} alt={name} />
      <div className="card-title">{name}</div>
      <div className="card-price">Rs.{price}/=</div>
    </div>
  );
};

const CardGrid = ({ selectedOptions }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(selectedOptions);

  const handleClick = (card) => {
    setSelectedCard(card);
    console.log(selectedCard);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    // Fetch cards data from API and update state
    const fetchData = async () => {
      const fetchedData = [];
      for (let index = 0; index < selectedOptions.length; index++) {
        const response = await fetch("api/" + selectedOptions[index]);
        const data = await response.json();
        fetchedData.push(...data);
      }
      setCards(fetchedData);
    };

    fetchData();
  }, [selectedOptions]);

  return (
    <>
      <hr />
      <div className="card-result">
        <p>{cards.length} results found</p>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.plateNo} onClick={() => handleClick(card)}>
            <Card url={card.url} name={card.name} price={card.price} />
          </div>
        ))}
      </div>
      {selectedCard && (
        <Previewer selectedCard={selectedCard} handleClose={handleClose} />
      )}
    </>
  );
};
export default CardGrid;
