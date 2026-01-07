import React, { useState } from "react";

const FindAndReplace = () => {
    const [text, setText] = useState('This is a sample text. Text is editable.');
    const [findText, setFindText] = useState("");
    const [replaceText, setReplaceText] = useState("");

    const handleClickReplace = () => {
        if (!findText) return;

        const regex = new RegExp(findText, 'gi');
        setText((prevText) => prevText.replace(regex, replaceText));
    }
    return (
        <>
          <h2>Find and Repalce Text</h2>
          <textarea value={text} />
          <input type="text" placeholder="Find" onChange={(e) => setFindText(e.target.value)}/>
          <input type="text" placeholder="Replace" onChange={(e) => setReplaceText(e.target.value)}/>
          <button onClick={handleClickReplace}>Replace</button>
        </>
    )
}

export default FindAndReplace;