import { useState } from "react";

const DragAndDrop = () => {
    const [items, setItems] = useState([1,2,3,4,5]);

    const handleleDragStart = (e, index) => {
        e.dataTransfer.setData('dragIndex', index);
    };

    const handleDrop = (e, dropIndex) => {
        const dragIndex = e.dataTransfer.getData('dragIndex');
        const updatedItems = [...items];
        const draggedItems = updatedItems.splice(dragIndex, 1);
        updatedItems.splice(dropIndex, 0 , draggedItems);
        setItems(updatedItems);

    }

    const handleDragOver = (e) => e.preventDefault();
    return (
      <div className="text-center">
        <ul>
          {items.map((item, index) => (
            <li
              key={index}
              draggable
              onDragStart={(e) => handleleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={handleDragOver}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default DragAndDrop;