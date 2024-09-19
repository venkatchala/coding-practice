import React, { useState } from "react";

const ArrayMover = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const moveUp = (index) => {
    if (index === 0) return;
    const newArray = [...array];
    [newArray[index], newArray[index - 1]] = [
      newArray[index - 1],
      newArray[index],
    ];
    setArray(newArray);
  };

  const moveDown = (index) => {
    if (index === array.length - 1) return;
    const newArray = [...array];
    [newArray[index], newArray[index + 1]] = [
      newArray[index + 1],
      newArray[index],
    ];
    setArray(newArray);
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => moveUp(index)}>Up</button>
            <button onClick={() => moveDown(index)}>Down</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArrayMover;
