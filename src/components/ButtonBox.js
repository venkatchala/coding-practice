import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const ButtonBox = () => {
    const [text, setText] = useState("");
    const [enable] = useState(false);
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
            <p>{text}</p>
            <input type="text" className="p-2 m-2 border bg-gray-100" onChange={handleChange}/>
            <button className={isDisabled? "p-2 m-2 bg-gray-200" : "p-2 m-2 bg-gray-600"} disabled={text.length > 3 ? enable : !enable}>Save</button>
        </div>
    )
}

export default ButtonBox;