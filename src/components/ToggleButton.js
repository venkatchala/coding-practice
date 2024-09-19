import { useState } from "react";

const ToggleButton = () => {
    const [isToggle, setIsToggle] = useState(false);

    return (
        <div>
            <p>{isToggle? "ON": "OFF"}</p>
            <button onClick={() => setIsToggle(!isToggle)}>{isToggle? "Turn OFF": "Turn ON"}</button>
        </div>
    );
};

export default ToggleButton;