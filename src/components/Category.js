import "./Category.css";
import { useState } from "react";
import CardGrid from "./Card";

const Category = () => {
  const [selectedOptions, setSelectedOptions] = useState(["Cars"]);

  const handleOptionSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <>
      <div className="hero--container">
        <div className="category--container">
          <div className="category--header">CATEGORY</div>
          <div className="category--selectors">
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("Bicycles")}
              checked={selectedOptions.includes("Bicycles")}
            />
            <label>Bicycles</label>
            <br />
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("Cars")}
              checked={selectedOptions.includes("Cars")}
            />
            <label>Cars</label>
            <br />
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("Vans")}
              checked={selectedOptions.includes("Vans")}
            />
            <label>Vans</label>
            <br />
          </div>

          <div className="category--header">DURATION</div>
          <div className="category--selectors">
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("1 day")}
              checked={selectedOptions.includes("1 day")}
            />
            <label>1 day</label>
            <br />
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("2 days")}
              checked={selectedOptions.includes("2 days")}
            />
            <label>2 days</label>
            <br />
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("> 2 days")}
              checked={selectedOptions.includes("> 2 days")}
            />
            <label> &gt; 2 days</label>
            <br />
          </div>

          <div className="category--header">DRIVER</div>
          <div className="category--selectors">
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("Self drive")}
              checked={selectedOptions.includes("Self drive")}
            />
            <label>Self drive</label>
            <br />
            <input
              type="checkbox"
              onChange={() => handleOptionSelect("With driver")}
              checked={selectedOptions.includes("With driver")}
            />
            <label>With driver</label>
            <br />
          </div>
        </div>

        <div className="hero--image">
          <img src="./images/hero.png" alt="hero"></img>
        </div>
      </div>
      <CardGrid selectedOptions={selectedOptions} />
    </>
  );
};

export default Category;
