import { useState } from "react";

const TwoWayBinding = () => {
    const [text, setText] = useState('');
    const handleInputChange = (newValue) => {
        setText(newValue)
    }
    return (
        <div>
            <p>{text}</p>
            <ChildComponent onData={handleInputChange} />
        </div>
    );
};

const ChildComponent = ({ onData }) => {
    const handleChange = (e) => {
        onData(e.target.value)
    }
    return (
      <div>
        <input
          className="border border-gray-400"
          type="text"
          onChange={handleChange}
        />
        
      </div>
    );
}

export default TwoWayBinding;