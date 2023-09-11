import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import styles from './BoxCreator.module.css'

const BoxCreator = () => {
  const [boxes, setBoxes] = useState([]);
  const [color, setColor] = useState("");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (color.trim() === "") {
      return;
    }

    const newBox = {
      color,
    };

    setBoxes([...boxes, newBox]);
    setColor("");
  };

  return (
    <div>
      <h2>Create a Box</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="colorInput" className="form-label">Color:</label>
          <input
            type="text"
            id="colorInput"
            className="form-control"
            value={color}
            onChange={handleColorChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Create Box</button>
      </form>
      <div className={styles.boxcontainer}>
        {boxes.map((box, index) => (
          <div
            className={styles.box}
            key={index}
            style={{
              backgroundColor: box.color,
              width: "100px", // Set a fixed width
              height: "100px", // Set a fixed height
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxCreator;
